import { NextResponse } from 'next/server'
import { buildWhiteLabelSettings } from '@/config/white-label'

export async function GET() {
  return NextResponse.json(buildWhiteLabelSettings(), {
    headers: {
      'Cache-Control': 'public, max-age=300, s-maxage=300',
    },
  })
}
