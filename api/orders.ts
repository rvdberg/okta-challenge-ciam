import jwt, { VerifyOptions } from "jsonwebtoken";
import JwksRsa from "jwks-rsa";


const verifyOptions: VerifyOptions = {
  algorithms: ["RS256"],
  audience: process.env.API_AUDIENCE
}

const jwksOptions: JwksRsa.Options = {
  jwksUri: `https://${process.env.API_AUTH_DOMAIN}/.well-known/jwks.json`
}


export async function GET(request: Request) {

  let token = request.headers.get('authorization')?.replace('Bearer ', '') || '';
  let decoded = jwt.decode(token, { complete: true});
  let pubSignKey = (await JwksRsa(jwksOptions).getSigningKey(decoded?.header.kid)).getPublicKey();
  let result = jwt.verify(token, pubSignKey, verifyOptions);

  return new Response(JSON.stringify(result));

}
