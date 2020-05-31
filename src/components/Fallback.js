import React from 'react'
import Loader from './Loader';

export default function Fallback() {
  return (
    <div className="FallbackContainer"
      style={{
        height: '100vh',
        display: 'flex',
      }}>
      <Loader />
    </div>
  );
}
