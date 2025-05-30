import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const imageUrl = searchParams.get('imageUrl');

  if (!imageUrl) {
    return new NextResponse('Missing imageUrl query parameter', { status: 400 });
  }

  try {
    const response = await fetch(imageUrl, {
      headers: {
        // Try to mimic a browser request to avoid some simple blocks
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });

    if (!response.ok) {
      return new NextResponse(`Failed to fetch image: ${response.status} ${response.statusText}`, { status: response.status });
    }

    const imageBlob = await response.blob();
    const contentType = response.headers.get('content-type') || 'image/jpeg'; // Default if not provided

    // Ensure client-side can access this via fetch
    const headers = new Headers();
    headers.set('Content-Type', contentType);
    headers.set('Access-Control-Allow-Origin', '*'); // Allow any origin for this proxy
    headers.set('Cache-Control', 'public, max-age=31536000, immutable'); // Cache aggressively

    return new NextResponse(imageBlob, { headers });

  } catch (error) {
    console.error('[IMAGE_PROXY_ERROR]', error);
    let errorMessage = 'Internal server error';
    if (error instanceof Error) {
        errorMessage = error.message;
    }
    return new NextResponse(`Error fetching image: ${errorMessage}`, { status: 500 });
  }
} 