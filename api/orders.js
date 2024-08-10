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
        name: 'Life Pizza',
        amount: 1,
        orderDate: 1723239331086
      },
      {
        name: 'Universe Pizza',
        amount: 2,
        orderDate: 1723239331086
      },
      {
        name: 'Everything Pizza',
        amount: 3,
        orderDate: 1723239331086
      }
    ]
  }

  return Response.json(orders);

}

export async function POST(request) {
  const requiredScopes = ['create:orders'];
  let authResult = await authzVerify(request.headers, requiredScopes);
  if (!authResult.isAuthorized) {
    console.log(JSON.stringify(authResult));
    return Response.json(authResult, { status: 401 });
  }

  let body = await request.json();
  console.log(body);

  return new Response('');

}