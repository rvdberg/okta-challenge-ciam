import * as jose from 'jose'

const authIssuer = process.env.API_ISSUER;
const apiAudience = process.env.API_AUDIENCE;

export const authzVerify = async (headers: Headers, expectedScopes?: string[]) => {
  let token = headers.get('authorization')?.replace('Bearer ', '');
  if (!token) {
    return null;
  }

  const JWKS = jose.createRemoteJWKSet(new URL(`${authIssuer}.well-known/jwks.json`));
  let { payload } = await jose.jwtVerify(token, JWKS, {
    algorithms: ['RS256'],
    issuer: authIssuer,
    audience: apiAudience,
    requiredClaims: !!expectedScopes ? ['scope'] : []
  });

  if (!payload) {
    return null;
  }

  if (!!expectedScopes) {
    let userScopes = (payload.scope as string).split(' ');
    let allowed = expectedScopes.some(scope => userScopes.includes(scope));
    if (!allowed) {
      return null;
    }
  }

  return payload;
}
