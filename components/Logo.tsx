import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="logoGradient" x1="0" y1="100" x2="100" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0891b2" />
          <stop offset="100%" stopColor="#9333ea" />
        </linearGradient>
      </defs>
      {/* Bag Handle */}
      <path 
        d="M30 35 V25 A20 20 0 0 1 70 25 V35" 
        stroke="url(#logoGradient)" 
        strokeWidth="8" 
        strokeLinecap="round" 
      />
      {/* Bag Body / Chip Shape */}
      <path 
        d="M20 35 H80 L90 85 H10 L20 35 Z" 
        stroke="url(#logoGradient)" 
        strokeWidth="6" 
        strokeLinejoin="round"
      />
      {/* Circuit Nodes (The Brain/Smart Aspect) */}
      <circle cx="50" cy="60" r="8" fill="url(#logoGradient)" />
      <path d="M50 60 L35 48" stroke="url(#logoGradient)" strokeWidth="4" strokeLinecap="round" />
      <path d="M50 60 L65 48" stroke="url(#logoGradient)" strokeWidth="4" strokeLinecap="round" />
      <path d="M50 60 L50 75" stroke="url(#logoGradient)" strokeWidth="4" strokeLinecap="round" />
      <circle cx="35" cy="48" r="4" fill="#06b6d4" />
      <circle cx="65" cy="48" r="4" fill="#9333ea" />
      <circle cx="50" cy="75" r="4" fill="#0891b2" />
    </svg>
  );
};