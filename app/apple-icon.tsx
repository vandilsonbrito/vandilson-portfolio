import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', background: '#0b0d10' }}>
        <svg width="180" height="180" viewBox="0 0 64 64">
          <path
            d="M10 36c3.5-7 8-7 12-3s8.5 4 12-3"
            fill="none"
            stroke="#08bfa9"
            strokeWidth="5.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M52 13 41 51" fill="none" stroke="#08bfa9" strokeWidth="5.5" strokeLinecap="round" />
        </svg>
      </div>
    ),
    size,
  );
}
