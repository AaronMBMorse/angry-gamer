import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Angry Gamer - Destroyable Gaming Gear'
export const size = {
  width: 1200,
  height: 600,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1a1a1a 0%, #2d1b69 50%, #ff0000 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Gaming Grid Background */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
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
            padding: '60px',
          }}
        >
          {/* Title */}
          <div
            style={{
              fontSize: 100,
              fontWeight: 900,
              color: 'white',
              textShadow: '3px 3px 0px #ff0000, 6px 6px 0px #000000',
              marginBottom: '30px',
              fontFamily: 'monospace',
              letterSpacing: '4px',
            }}
          >
            ANGRY GAMER
          </div>
          
          {/* Subtitle */}
          <div
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: '#ffff00',
              textShadow: '2px 2px 0px #000000',
              marginBottom: '50px',
              fontFamily: 'monospace',
            }}
          >
            DESTROYABLE GAMING GEAR
          </div>
          
          {/* Product Icons Row */}
          <div
            style={{
              display: 'flex',
              gap: '60px',
              marginBottom: '50px',
            }}
          >
            <div style={{ fontSize: 100, filter: 'drop-shadow(0 0 10px #ff0000)' }}>⌨️</div>
            <div style={{ fontSize: 100, filter: 'drop-shadow(0 0 10px #00ff00)' }}>🎮</div>
            <div style={{ fontSize: 100, filter: 'drop-shadow(0 0 10px #0066ff)' }}>🖱️</div>
          </div>
          
          {/* Call to Action */}
          <div
            style={{
              fontSize: 28,
              fontWeight: 600,
              color: 'white',
              textShadow: '2px 2px 0px #000000',
              backgroundColor: 'rgba(255, 0, 0, 0.9)',
              padding: '25px 50px',
              borderRadius: '15px',
              border: '3px solid #ffff00',
              boxShadow: '0 0 20px rgba(255, 0, 0, 0.5)',
            }}
          >
            RAGE-PROOF GEAR FOR ANGRY GAMERS
          </div>
        </div>
        
        {/* Animated Elements */}
        <div
          style={{
            position: 'absolute',
            top: '30px',
            right: '30px',
            fontSize: 80,
            color: '#ff0000',
            textShadow: '0 0 20px #ff0000',
          }}
        >
          💥
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '30px',
            left: '30px',
            fontSize: 80,
            color: '#ffff00',
            textShadow: '0 0 20px #ffff00',
          }}
        >
          🔥
        </div>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '30px',
            fontSize: 80,
            color: '#00ff00',
            textShadow: '0 0 20px #00ff00',
          }}
        >
          ⚡
        </div>
        <div
          style={{
            position: 'absolute',
            top: '30px',
            left: '30px',
            fontSize: 80,
            color: '#0066ff',
            textShadow: '0 0 20px #0066ff',
          }}
        >
          🎯
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
