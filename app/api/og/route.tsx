import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  const interSemiBold = fetch(
    new URL('../../fonts/Inter-SemiBold.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #282c34 0%, #1c1e24 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Inter',
        }}
      >
        {/* Main title with braces */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
          }}
        >
          <span style={{ fontSize: '120px', color: '#61dafb', marginRight: '20px' }}>{'{'}</span>
          <span style={{ fontSize: '80px', color: 'white', fontWeight: 'bold' }}>Confetti Coder</span>
          <span style={{ fontSize: '120px', color: '#61dafb', marginLeft: '20px' }}>{'}'}</span>
        </div>
        
        {/* Subtext */}
        <div
          style={{
            fontSize: '32px',
            color: '#f9ca24',
            textAlign: 'center',
            maxWidth: '80%',
          }}
        >
          Add a Sprinkle of Joy to your Coding
        </div>

        {/* Confetti */}
        <div style={{ position: 'absolute', top: '20px', left: '20px', width: '40px', height: '40px', background: '#ff6b6b', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', top: '50px', right: '40px', width: '30px', height: '30px', background: '#4ecdc4', transform: 'rotate(45deg)' }} />
        <div style={{ position: 'absolute', bottom: '30px', left: '50px', width: '0', height: '0', borderLeft: '20px solid transparent', borderRight: '20px solid transparent', borderBottom: '40px solid #feca57' }} />
        <div style={{ position: 'absolute', bottom: '40px', right: '60px', width: '35px', height: '35px', background: '#ff9ff3', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', top: '100px', left: '180px', width: '25px', height: '25px', background: '#f9ca24', transform: 'rotate(30deg)' }} />
        <div style={{ position: 'absolute', top: '200px', right: '120px', width: '0', height: '0', borderLeft: '15px solid transparent', borderRight: '15px solid transparent', borderBottom: '30px solid #6ab04c' }} />
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: await interSemiBold,
          style: 'normal',
          weight: 600,
        },
      ],
    }
  )
}