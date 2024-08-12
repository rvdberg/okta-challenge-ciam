import { authzVerify } from '../lib/authz.js'
import { ManagementClient } from 'auth0';

const managementClient = new ManagementClient({
  domain: process.env.API_MANAGEMENT_DOMAIN,
  clientId: process.env.API_CLIENT_ID,
  clientSecret: process.env.API_CLIENT_SECRET,
});

export async function GET(request) {
  const requiredScopes = ['read:orders'];
  let authResult = await authzVerify(request.headers, requiredScopes);
  if (!authResult.isAuthorized) {
    return Response.json(authResult, {status: 401});
  }

  const userId = authResult.payload.sub;
  if (!userId || userId.includes('@clients')) {
    return new Response('No User found', {status: 418}); // Love this status!
  }

  const { data: { app_metadata: { pizza42_data = {}} = {} }} = await managementClient.users.get({ id: userId, fields: 'app_metadata' });

  const responseData = {
    orderHistory: pizza42_data.orderHistory || []
  }

  return Response.json(responseData);
}

export async function POST(request) {
  const requiredScopes = ['create:orders'];
  let authResult = await authzVerify(request.headers, requiredScopes);
  if (!authResult.isAuthorized) {
    console.log(JSON.stringify(authResult));
    return Response.json(authResult, { status: 401 });
  }

  if (!authResult.payload.email_verified) {
    return new Response('Emailaddress of user has not yet been verified', {status: 401});
  }

  const userId = authResult.payload.sub;
  if (!userId || userId.includes('@clients')) {
    return new Response('No User found', { status: 418 }); // Love this status!
  }

  const { id, name, price } = await request.json();
  if (!id || !name || !price) {
    return new Response('Incorrect body', {status: 400})
  }

  const currentOrder = {
    orderDate: Date.now(),
    id: id,
    name: name,
    price: price
  }

  const { data: { app_metadata: { pizza42_data = {} } = {} } } = await managementClient.users.get({ id: userId, fields: 'app_metadata' });
  
  const currentOrderHistory = pizza42_data.orderHistory?.slice(0,9) || [];
  const modifiedOrderHistory = [currentOrder, ...currentOrderHistory];

  pizza42_data.orderHistory = modifiedOrderHistory;

  const updateResponse = await managementClient.users.update({ id: userId }, { app_metadata: { pizza42_data }});

  const result = {
    orderHistory: updateResponse.data.app_metadata.pizza42_data.orderHistory || []
  }

  return Response.json(result);
}