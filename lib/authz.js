import * as jose from 'jose'

const authIssuer = process.env.API_ISSUER;
const apiAudience = process.env.API_AUDIENCE;

export const authzVerify = async (headers, expectedScopes) => {
  let result = {
    error: '',
    isAuthorized: false,
    payload: null
  }

  let token = headers.get('authorization')?.replace('Bearer ', '');
  if (!token) {
    result.error = 'No valid token found'
    return result;
  }

  try {
    const JWKS = jose.createRemoteJWKSet(new URL(`${authIssuer}.well-known/jwks.json`));
    let { payload } = await jose.jwtVerify(token, JWKS, {
      algorithms: ['RS256'],
      issuer: authIssuer,
      audience: apiAudience,
      requiredClaims: !!expectedScopes ? ['scope'] : []
    });

    result.payload = payload;
  } catch (err) {
    result.error = err.code;
    return result;
  }

  if (!!expectedScopes) {
    let userScopes = (result.payload.scope).split(' ');
    let isScopeIncluded = expectedScopes.some(scope => userScopes.includes(scope));
    if (!isScopeIncluded) {
      result.error = `Expected scope(s) ${expectedScopes} not found in token`;
    } else {
      result.isAuthorized = true;
    }
  } else {
    result.isAuthorized = true
  }

  return result;
}
