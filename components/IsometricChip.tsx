'use client';

import React from 'react';

interface IsometricChipProps {
  size?: number;
  className?: string;
}

export default function IsometricChip({ size = 110, className = '' }: IsometricChipProps) {
  return (
    <div className={`relative inline-block select-none ${className}`} style={{ width: size, height: size * 1.05 }}>
      <svg
        viewBox="0 0 200 210"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
      >
        <defs>
          <linearGradient id="top-die-grad" x1="24" y1="60" x2="176" y2="148" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1e2833" />
            <stop offset="50%" stopColor="#151d26" />
            <stop offset="100%" stopColor="#0f151c" />
          </linearGradient>
          <linearGradient id="q-glow-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="100%" stopColor="#22c55e" />
          </linearGradient>
        </defs>

        {/* --- LAYER 1 (Bottom Base Layer) --- */}
        <g id="layer-bottom" transform="translate(0, 56)">
          {/* Left Face */}
          <polygon
            points="24,104 100,148 100,162 24,118"
            fill="#121820"
            stroke="#263442"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          {/* Left Face Hatching lines */}
          <line x1="38" y1="112" x2="38" y2="126" stroke="#22c55e" strokeOpacity="0.4" strokeWidth="1.2" />
          <line x1="54" y1="121" x2="54" y2="135" stroke="#22c55e" strokeOpacity="0.4" strokeWidth="1.2" />
          <line x1="70" y1="130" x2="70" y2="144" stroke="#22c55e" strokeOpacity="0.4" strokeWidth="1.2" />
          <line x1="86" y1="140" x2="86" y2="154" stroke="#22c55e" strokeOpacity="0.4" strokeWidth="1.2" />

          {/* Right Face */}
          <polygon
            points="100,148 176,104 176,118 100,162"
            fill="#0b1015"
            stroke="#263442"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          {/* Right Face Hatching lines */}
          <line x1="114" y1="154" x2="114" y2="140" stroke="#22c55e" strokeOpacity="0.4" strokeWidth="1.2" />
          <line x1="130" y1="145" x2="130" y2="131" stroke="#22c55e" strokeOpacity="0.4" strokeWidth="1.2" />
          <line x1="146" y1="136" x2="146" y2="122" stroke="#22c55e" strokeOpacity="0.4" strokeWidth="1.2" />
          <line x1="162" y1="127" x2="162" y2="113" stroke="#22c55e" strokeOpacity="0.4" strokeWidth="1.2" />

          {/* Top Face */}
          <polygon
            points="100,60 176,104 100,148 24,104"
            fill="#161f29"
            stroke="#263442"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
        </g>

        {/* --- LAYER 2 (Lower-Middle Layer) --- */}
        <g id="layer-mid-1" transform="translate(0, 36)">
          {/* Left Face */}
          <polygon
            points="24,104 100,148 100,160 24,116"
            fill="#151e27"
            stroke="#2d3c4c"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <line x1="38" y1="112" x2="38" y2="124" stroke="#374759" strokeWidth="1.2" />
          <line x1="54" y1="121" x2="54" y2="133" stroke="#374759" strokeWidth="1.2" />
          <line x1="70" y1="130" x2="70" y2="142" stroke="#374759" strokeWidth="1.2" />
          <line x1="86" y1="140" x2="86" y2="152" stroke="#374759" strokeWidth="1.2" />

          {/* Right Face */}
          <polygon
            points="100,148 176,104 176,116 100,160"
            fill="#0e141a"
            stroke="#2d3c4c"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <line x1="114" y1="152" x2="114" y2="140" stroke="#374759" strokeWidth="1.2" />
          <line x1="130" y1="143" x2="130" y2="131" stroke="#374759" strokeWidth="1.2" />
          <line x1="146" y1="134" x2="146" y2="122" stroke="#374759" strokeWidth="1.2" />
          <line x1="162" y1="125" x2="162" y2="113" stroke="#374759" strokeWidth="1.2" />

          {/* Top Face */}
          <polygon
            points="100,60 176,104 100,148 24,104"
            fill="#192531"
            stroke="#2d3c4c"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
        </g>

        {/* --- LAYER 3 (Upper-Middle Layer) --- */}
        <g id="layer-mid-2" transform="translate(0, 18)">
          {/* Left Face */}
          <polygon
            points="24,104 100,148 100,158 24,114"
            fill="#18232e"
            stroke="#344658"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <line x1="38" y1="112" x2="38" y2="122" stroke="#41566c" strokeWidth="1.2" />
          <line x1="54" y1="121" x2="54" y2="131" stroke="#41566c" strokeWidth="1.2" />
          <line x1="70" y1="130" x2="70" y2="140" stroke="#41566c" strokeWidth="1.2" />
          <line x1="86" y1="140" x2="86" y2="150" stroke="#41566c" strokeWidth="1.2" />

          {/* Right Face */}
          <polygon
            points="100,148 176,104 176,114 100,158"
            fill="#10171f"
            stroke="#344658"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <line x1="114" y1="150" x2="114" y2="140" stroke="#41566c" strokeWidth="1.2" />
          <line x1="130" y1="141" x2="130" y2="131" stroke="#41566c" strokeWidth="1.2" />
          <line x1="146" y1="132" x2="146" y2="122" stroke="#41566c" strokeWidth="1.2" />
          <line x1="162" y1="123" x2="162" y2="113" stroke="#41566c" strokeWidth="1.2" />

          {/* Top Face */}
          <polygon
            points="100,60 176,104 100,148 24,104"
            fill="#1d2b38"
            stroke="#344658"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
        </g>

        {/* --- LAYER 4 (Top Die Layer with 'Q' and Neon Green Pin) --- */}
        <g id="layer-top">
          {/* Left Face */}
          <polygon
            points="24,104 100,148 100,160 24,116"
            fill="#1c2834"
            stroke="#41576e"
            strokeWidth="2.4"
            strokeLinejoin="round"
          />
          <line x1="38" y1="112" x2="38" y2="124" stroke="#4ade80" strokeOpacity="0.6" strokeWidth="1.2" />
          <line x1="54" y1="121" x2="54" y2="133" stroke="#4ade80" strokeOpacity="0.6" strokeWidth="1.2" />
          <line x1="70" y1="130" x2="70" y2="142" stroke="#4ade80" strokeOpacity="0.6" strokeWidth="1.2" />
          <line x1="86" y1="140" x2="86" y2="152" stroke="#4ade80" strokeOpacity="0.6" strokeWidth="1.2" />

          {/* Right Face */}
          <polygon
            points="100,148 176,104 176,116 100,160"
            fill="#121a22"
            stroke="#41576e"
            strokeWidth="2.4"
            strokeLinejoin="round"
          />
          <line x1="114" y1="152" x2="114" y2="140" stroke="#4ade80" strokeOpacity="0.6" strokeWidth="1.2" />
          <line x1="130" y1="143" x2="130" y2="131" stroke="#4ade80" strokeOpacity="0.6" strokeWidth="1.2" />
          <line x1="146" y1="134" x2="146" y2="122" stroke="#4ade80" strokeOpacity="0.6" strokeWidth="1.2" />
          <line x1="162" y1="125" x2="162" y2="113" stroke="#4ade80" strokeOpacity="0.6" strokeWidth="1.2" />

          {/* Top Surface */}
          <polygon
            points="100,60 176,104 100,148 24,104"
            fill="url(#top-die-grad)"
            stroke="#41576e"
            strokeWidth="2.4"
            strokeLinejoin="round"
          />

          {/* Inner inset border on top surface */}
          <polygon
            points="100,68 166,106 100,142 34,104"
            fill="none"
            stroke="#4ade80"
            strokeOpacity="0.4"
            strokeWidth="1.2"
            strokeDasharray="2,2"
          />

          {/* Green Pin Marker / Orientation Dot */}
          <polygon
            points="145,95 156,101 149,105 138,99"
            fill="#4ade80"
            stroke="#22c55e"
            strokeWidth="1.2"
          />

          {/* Isometric Embossed 'Q' */}
          <g transform="translate(100, 104) scale(1, 0.58) rotate(-45)">
            <text
              x="0"
              y="12"
              textAnchor="middle"
              dominantBaseline="middle"
              fontFamily="var(--font-mono), monospace"
              fontWeight="900"
              fontSize="48"
              fill="url(#q-glow-grad)"
              letterSpacing="-2"
              filter="drop-shadow(0 0 6px rgba(74,222,128,0.5))"
            >
              Q
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
}
