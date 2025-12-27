'use client';
import React from 'react';
export default function BlackBasicGrid() {
  return (
    <div
      className="absolute inset-0 z-0"
      style={{
        background: '#020617',
        backgroundImage: `
        linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px),
        radial-gradient(circle at 50% 60%, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)
      `,
        backgroundSize: '40px 40px, 40px 40px, 100% 100%',
      }}
    />
  );
}

export function DarkNoisedColor() {
  return (
    <div
      className="absolute inset-0 z-0"
      style={{
        background: '#0f172a',
        backgroundImage: `
        linear-gradient(to right, rgba(148,163,184,0.2) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(148,163,184,0.2) 1px, transparent 1px)
      `,
        backgroundSize: '40px 40px',
      }}
    />
  );
}
