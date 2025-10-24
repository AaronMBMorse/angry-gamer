import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Angry Gamer - Destroyable Gaming Gear for Rage Moments'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(45deg, #ff0000, #ff6600, #ffcc00, #00ff00, #0066ff, #6600ff)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 20% 80%, rgba(255, 0, 0, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(0, 255, 0, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(0, 0, 255, 0.3) 0%, transparent 50%)',
          }}
        />
        
        {/* Main Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
            textAlign: 'center',
            padding: '40px',
          }}
        >
          {/* Title */}
          <div
            style={{
              fontSize: 120,
              fontWeight: 900,
              color: 'white',
              textShadow: '4px 4px 0px #000000, 8px 8px 0px #ff0000',
              marginBottom: '20px',
              fontFamily: 'monospace',
            }}
          >
            ANGRY GAMER
          </div>
          
          {/* Subtitle */}
          <div
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: '#ffff00',
              textShadow: '2px 2px 0px #000000',
              marginBottom: '40px',
              fontFamily: 'monospace',
            }}
          >
            DESTROYABLE GAMING GEAR
          </div>
          
          {/* Gaming Icons */}
          <div
            style={{
              display: 'flex',
              gap: '40px',
              marginBottom: '40px',
            }}
          >
            <div style={{ fontSize: 80 }}>⌨️</div>
            <div style={{ fontSize: 80 }}>🎮</div>
            <div style={{ fontSize: 80 }}>🖱️</div>
          </div>
          
          {/* Tagline */}
          <div
            style={{
              fontSize: 32,
              fontWeight: 600,
              color: 'white',
              textShadow: '2px 2px 0px #000000',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              padding: '20px 40px',
              borderRadius: '20px',
              border: '4px solid #ff0000',
            }}
          >
            RAGE-PROOF GEAR FOR ANGRY GAMERS
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            fontSize: 60,
            animation: 'bounce 2s infinite',
          }}
        >
          💥
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            fontSize: 60,
            animation: 'bounce 2s infinite 1s',
          }}
        >
          🔥
        </div>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '20px',
            fontSize: 60,
            animation: 'bounce 2s infinite 0.5s',
          }}
        >
          ⚡
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
