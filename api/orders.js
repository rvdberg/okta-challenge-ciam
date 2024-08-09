import { authzVerify } from '../lib/authz.js'

export async function GET(request) {
  const requiredScopes = ['read:orders'];
  let authResult = await authzVerify(request.headers, requiredScopes);
  if (!authResult.isAuthorized) {
    console.log(JSON.stringify(authResult));
    return Response.json(authResult, {status: 401});
  }

  let orders = {
    orders: [
      {
        name: 'Life',
        amount: 1
      },
      {
        name: 'Universe',
        amount: 2
      },
      {
        name: 'Everything',
        amount: 3
      }
    ]
  }

  return Response.json(orders);

}