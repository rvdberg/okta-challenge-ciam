import type { VercelRequest, VercelResponse } from '@vercel/node';

export function GET(request: VercelRequest) {
  return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}