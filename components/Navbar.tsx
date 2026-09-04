'use client';

import React, { useState } from 'react';

interface NavbarProps {
  onOpenSection?: (section: string) => void;
}

export default function Navbar({ onOpenSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'NETWORK', id: 'network' },
    { label: 'PROVIDERS', id: 'providers' },
    { label: 'SCHEDULER', id: 'scheduler' },
    { label: 'WORKLOADS', id: 'workloads' },
    { label: '$QUARK', id: 'quark-token' },
    { label: 'THE POINT', id: 'the-point' },
    { label: 'ROADMAP', id: 'roadmap' },
  ];

  return (
    <header className="w-full border-b border-[#1f2730] bg-[#0a0c0e]/90 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-[1580px] mx-auto flex items-stretch justify-between h-14 sm:h-16">
        {/* Left Brand Area */}
        <div className="flex items-center border-r border-[#1f2730] px-4 sm:px-6 gap-3 sm:gap-4 bg-[#0a0c0e]">
          {/* Logo icon box */}
          <div className="w-8 h-8 sm:w-9 sm:h-9 border border-[#26313d] flex items-center justify-center bg-[#131920] shadow-[0_0_10px_rgba(0,0,0,0.5)]">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#e5e7eb" strokeWidth="1.8">
              <polygon points="12,2 22,7 12,12 2,7" fill="#1c252f" stroke="#374453" />
              <polygon points="2,7 12,12 12,17 2,12" fill="#151d26" stroke="#374453" />
              <polygon points="22,7 12,12 12,17 22,12" fill="#0f151c" stroke="#374453" />
              <circle cx="12" cy="12" r="2.5" fill="#4ade80" stroke="#22c55e" strokeWidth="1" className="animate-pulse" />
              <line x1="6" y1="9" x2="18" y2="15" stroke="#4ade80" strokeWidth="1" strokeDasharray="1,1" />
            </svg>
          </div>

          {/* Logo Text */}
          <a href="#" className="font-mono text-sm sm:text-base font-bold tracking-[0.18em] text-[#f3f4f6] hover:text-[#4ade80] transition-colors">
            QUARK NET
          </a>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden xl:flex items-stretch divide-x divide-[#1f2730] text-[12px] font-mono tracking-widest text-[#d1d5db]">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onOpenSection && onOpenSection(item.id)}
              className="px-4 2xl:px-5 flex items-center hover:bg-[#151c24] hover:text-[#4ade80] transition-colors cursor-pointer text-[#cbd5e1]"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-3 px-4 sm:px-6 border-l border-[#1f2730]">
          {/* X ↗ Button */}
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs font-semibold px-3.5 py-1.5 sm:px-4 sm:py-2 border border-[#26313d] bg-[#11161d] hover:bg-[#1a222c] hover:border-[#384656] text-[#e5e7eb] transition-all cursor-pointer flex items-center gap-1.5 shadow-[1px_1px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px]"
          >
            <span>X</span>
            <span className="text-[10px] text-neutral-400">↗</span>
          </a>

          {/* PROTOCOL ↗ Button */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs font-semibold px-4 py-1.5 sm:px-5 sm:py-2 bg-[#4ade80] hover:bg-[#22c55e] text-[#061e13] transition-all cursor-pointer flex items-center gap-1.5 shadow-[0_0_12px_rgba(74,222,128,0.25)] font-bold active:translate-x-[1px] active:translate-y-[1px]"
          >
            <span>PROTOCOL</span>
            <span className="text-[10px]">↗</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="xl:hidden flex items-center px-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 border border-[#26313d] bg-[#11161d] font-mono text-xs text-[#f3f4f6]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? 'CLOSE ✕' : 'MENU ☰'}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-[#1f2730] bg-[#0d1014] divide-y divide-[#1f2730] font-mono text-xs text-[#e5e7eb]">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                if (onOpenSection) onOpenSection(item.id);
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-6 py-3 hover:bg-[#151c24] hover:text-[#4ade80] flex items-center justify-between text-[#d1d5db]"
            >
              <span>{item.label}</span>
              <span className="text-[#4ade80]">→</span>
            </button>
          ))}
          <div className="p-4 flex gap-3">
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center font-mono text-xs py-2 border border-[#26313d] bg-[#11161d] text-[#e5e7eb]"
            >
              X ↗
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center font-mono text-xs py-2 bg-[#4ade80] text-[#061e13] font-bold"
            >
              PROTOCOL ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
