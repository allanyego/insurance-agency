import React from 'react'

export default function Fallback() {
  return (
    <div className="FallbackContainer"
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <div>
        <img src="/orient-insurance/orient-logo.png" alt="Company logo"
          style={{
            margin: '0 auto',
            display: 'block',
            borderRadius: '10%',
            width: '85px',
          }} />
      </div>
    </div>
  );
}
