import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#ff5c35',
          borderRadius: 40,
        }}
      >
        {/* Up-arrow chevron */}
        <svg
          width="100"
          height="100"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M9 14V4M4 9l5-5 5 5"
            stroke="white"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    ),
    { ...size }
  )
}
