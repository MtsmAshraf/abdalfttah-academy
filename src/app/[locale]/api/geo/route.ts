import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function GET(request: NextRequest) {
  const country = request.headers.get('x-vercel-ip-country') || 'Unknown';

  return NextResponse.json({ country });
}
