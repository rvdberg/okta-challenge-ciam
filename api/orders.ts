import { authzVerify } from '../lib/authz.js'

export async function GET(request: Request) {

  let payload = await authzVerify(request.headers, ['read:orders']);
  console.log(payload);

  return new Response(JSON.stringify(payload), {status: 200});

}