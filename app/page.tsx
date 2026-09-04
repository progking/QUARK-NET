'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import IsometricChip from '@/components/IsometricChip';
import GateArrayVisualizer from '@/components/GateArrayVisualizer';
import DatasheetModal from '@/components/DatasheetModal';
import SectionModal from '@/components/SectionModals';

export default function HomePage() {
  const [datasheetOpen, setDatasheetOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [rentModalOpen, setRentModalOpen] = useState(false);
  const [providerModalOpen, setProviderModalOpen] = useState(false);
  
  // Rent compute form state
  const [workloadType, setWorkloadType] = useState('AI Inference (DeepSeek / Llama-3)');
  const [targetRegion, setTargetRegion] = useState('AUTO (Lowest Latency)');
  const [dispatchedJobTx, setDispatchedJobTx] = useState<string | null>(null);

  // Provider registration state
  const [hardwareType, setHardwareType] = useState('NVIDIA RTX 4090 (24GB VRAM)');
  const [providerBond, setProviderBond] = useState('2,500');
  const [providerRegisteredTx, setProviderRegisteredTx] = useState<string | null>(null);

  const handleDispatchJob = (e: React.FormEvent) => {
    e.preventDefault();
    const mockHash = '0x' + Array.from({ length: 12 }, () => Math.floor(Math.random() * 16).toString(16)).join('') + '...89f2';
    setDispatchedJobTx(mockHash);
  };

  const handleRegisterProvider = (e: React.FormEvent) => {
    e.preventDefault();
    const mockHash = '0x' + Array.from({ length: 12 }, () => Math.floor(Math.random() * 16).toString(16)).join('') + '...3a17';
    setProviderRegisteredTx(mockHash);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0c0e] text-[#f3f4f6] relative selection:bg-[#22c55e] selection:text-[#0a0c0e]">
      {/* Engineering Background Grid - Dark Theme */}
      <div className="fixed inset-0 bg-tech-grid pointer-events-none z-0 opacity-100" />

      {/* Top Navigation */}
      <Navbar onOpenSection={(section) => setActiveSection(section)} />

      {/* Main Hero Container */}
      <main className="relative z-10 flex-1 flex flex-col justify-between max-w-[1580px] w-full mx-auto px-4 sm:px-8 lg:px-12 py-8 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
          
          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-start space-y-7 lg:space-y-8 pt-2">
            
            {/* Headline + Isometric Chip Row */}
            <div className="flex items-center justify-between gap-4">
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[74px] xl:text-[82px] leading-[1.03] tracking-[-0.02em] text-[#f3f4f6]">
                A unified supercomputer,
                <br />
                <span className="italic text-[#4ade80] font-normal drop-shadow-[0_0_15px_rgba(74,222,128,0.35)]">on demand.</span>
              </h1>

              {/* 3D Isometric Compute Cluster Die Graphic */}
              <div className="hidden sm:block shrink-0 pl-2">
                <IsometricChip size={135} className="hover:scale-105 transition-transform duration-300 cursor-pointer" />
              </div>
            </div>

            {/* Mobile chip display if screen is narrow */}
            <div className="sm:hidden flex justify-center py-2">
              <IsometricChip size={110} />
            </div>

            {/* Sub-tag */}
            <div className="flex items-center gap-2.5 font-mono text-[11px] sm:text-xs tracking-[0.22em] text-[#9ca3af] uppercase font-semibold">
              <span className="inline-block w-2.5 h-2.5 bg-[#4ade80] shadow-[0_0_6px_#4ade80]"></span>
              <span>NO CENTRAL LOCK-IN · IDLE TO SUPERCOMPUTER</span>
            </div>

            {/* Body Description */}
            <div className="font-serif text-base sm:text-[18px] lg:text-[18.5px] leading-[1.65] text-[#cbd5e1] max-w-[560px]">
              <p>
                Quark Net is a decentralized compute network that transforms idle GPU, CPU, and server capacity from independent providers into a unified, on-demand supercomputer. Instead of purchasing expensive hardware that sits unused most of the time, users simply rent the exact compute power they need — whether for AI inference, image and video generation, 3D rendering, data processing, or scientific workloads.
              </p>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1 font-mono text-xs sm:text-[13px] font-semibold">
              {/* Primary Rent Compute Button */}
              <button
                id="btn-rent-compute"
                onClick={() => setRentModalOpen(true)}
                className="px-5 sm:px-7 py-3.5 bg-[#4ade80] hover:bg-[#22c55e] text-[#05180f] font-bold transition-all duration-150 cursor-pointer flex items-center gap-2 shadow-[0_0_18px_rgba(74,222,128,0.3)] active:translate-x-[1px] active:translate-y-[1px]"
              >
                <span>RENT COMPUTE</span>
                <span>→</span>
              </button>

              {/* Secondary Datasheet Button */}
              <button
                id="btn-read-datasheet"
                onClick={() => setDatasheetOpen(true)}
                className="px-5 sm:px-7 py-3.5 bg-[#12171e] border border-[#283544] text-[#f3f4f6] hover:bg-[#19222c] hover:border-[#3e5066] transition-all duration-150 cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.5)] active:translate-x-[1px] active:translate-y-[1px]"
              >
                READ DATASHEET
              </button>

              {/* Tertiary Join as Provider Button */}
              <button
                id="btn-join-provider"
                onClick={() => setProviderModalOpen(true)}
                className="px-4 py-3.5 border border-[#283544] bg-[#12171e] text-[#cbd5e1] hover:bg-[#19222c] hover:text-[#4ade80] transition-all duration-150 cursor-pointer text-xs"
              >
                + JOIN AS PROVIDER
              </button>
            </div>

            {/* 3 Metric Outline Boxes */}
            <div className="pt-2">
              <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-[540px]">
                {/* Active Nodes Box */}
                <div className="border border-[#1f2730] bg-[#0d1014]/90 p-3 sm:p-4 shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                  <div className="font-mono text-[10px] sm:text-[11px] text-neutral-400 uppercase tracking-widest">
                    ACTIVE NODES
                  </div>
                  <div className="font-mono text-xl sm:text-2xl font-bold text-[#4ade80] mt-1 tracking-tight drop-shadow-[0_0_8px_rgba(74,222,128,0.3)]">
                    14,820
                  </div>
                </div>

                {/* Capacity Box */}
                <div className="border border-[#1f2730] bg-[#0d1014]/90 p-3 sm:p-4 shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                  <div className="font-mono text-[10px] sm:text-[11px] text-neutral-400 uppercase tracking-widest">
                    CAPACITY
                  </div>
                  <div className="font-mono text-xl sm:text-2xl font-bold text-[#4ade80] mt-1 tracking-tight drop-shadow-[0_0_8px_rgba(74,222,128,0.3)]">
                    842.6 PF
                  </div>
                </div>

                {/* Settlement Box */}
                <div className="border border-[#1f2730] bg-[#0d1014]/90 p-3 sm:p-4 shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                  <div className="font-mono text-[10px] sm:text-[11px] text-neutral-400 uppercase tracking-widest">
                    SETTLEMENT
                  </div>
                  <div className="font-mono text-xl sm:text-2xl font-bold text-[#4ade80] mt-1 tracking-tight whitespace-nowrap drop-shadow-[0_0_8px_rgba(74,222,128,0.3)]">
                    $QUARK
                  </div>
                </div>
              </div>

              {/* Status footer line */}
              <div className="mt-4 font-mono text-xs tracking-wider text-[#94a3b8] flex items-center gap-2">
                <span className="text-[#4ade80] font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse"></span>
                  LIVE SCHEDULER
                </span>
                <span>·</span>
                <span>SUB-25MS ROUTING</span>
                <span>·</span>
                <span>ON-CHAIN VERIFIED</span>
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN (TERMINAL VISUALIZER) ================= */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
            <GateArrayVisualizer />
          </div>

        </div>

        {/* Bottom Technical Grid Divider Line */}
        <div className="mt-12 lg:mt-16 pt-4 border-t-2 border-[#1f2730] w-full flex items-center justify-between text-[11px] font-mono text-neutral-500">
          <div className="flex items-center gap-6">
            <span>QUARK-NET / DECENTRALIZED PROTOCOL</span>
            <span className="hidden sm:inline">SCHEDULER CONTRACT 0x9F4E...3B21</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#4ade80] font-semibold">100% ON-CHAIN VERIFIED SETTLEMENT</span>
          </div>
        </div>
      </main>

      {/* ================= MODALS & DRAWERS ================= */}
      
      {/* Datasheet Specification Modal */}
      <DatasheetModal
        isOpen={datasheetOpen}
        onClose={() => setDatasheetOpen(false)}
      />

      {/* Header Section Information Modal */}
      <SectionModal
        activeSection={activeSection}
        onClose={() => setActiveSection(null)}
      />

      {/* Rent Compute Interactive Panel */}
      {rentModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-lg bg-[#0e1217] border border-[#283544] shadow-[0_15px_40px_rgba(0,0,0,0.9)] font-mono text-[#f3f4f6] p-6">
            <div className="flex justify-between items-start border-b border-[#1f2730] pb-4 mb-4">
              <div>
                <div className="text-[10px] text-neutral-400 uppercase tracking-widest">ON-DEMAND COMPUTE SCHEDULER</div>
                <h3 className="font-serif italic font-bold text-2xl text-[#f3f4f6] mt-0.5">Rent Supercomputer Capacity</h3>
              </div>
              <button
                onClick={() => setRentModalOpen(false)}
                className="px-2.5 py-1 border border-[#283544] bg-[#161d26] text-xs font-bold hover:bg-[#202a36] text-[#cbd5e1] cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="font-serif text-sm text-[#cbd5e1] mb-4">
              Select your workload requirement. The Quark Net scheduler routes the task to the most cost-efficient verified node with on-chain settlement in $QUARK.
            </p>

            <form onSubmit={handleDispatchJob} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-neutral-300 mb-1">
                  WORKLOAD SUITE:
                </label>
                <select
                  value={workloadType}
                  onChange={(e) => setWorkloadType(e.target.value)}
                  className="w-full p-2.5 border border-[#283544] bg-[#151c24] text-[#f3f4f6] font-mono text-xs focus:outline-none focus:ring-2 focus:ring-[#4ade80]"
                >
                  <option value="AI Inference (DeepSeek / Llama-3)">AI Inference (DeepSeek / Llama-3)</option>
                  <option value="Image & Video Gen (Flux / Diffusion)">Image & Video Gen (Flux / Diffusion)</option>
                  <option value="3D Rendering (Blender / Unreal / Octane)">3D Rendering (Blender / Unreal / Octane)</option>
                  <option value="Scientific Compute & Data Processing">Scientific Compute & Data Processing</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-300 mb-1">
                  TARGET REGION / LATENCY PRIORITY:
                </label>
                <select
                  value={targetRegion}
                  onChange={(e) => setTargetRegion(e.target.value)}
                  className="w-full p-2.5 border border-[#283544] bg-[#151c24] text-[#f3f4f6] font-mono text-xs focus:outline-none focus:ring-2 focus:ring-[#4ade80]"
                >
                  <option value="AUTO (Lowest Latency)">AUTO (Lowest Latency & Cost)</option>
                  <option value="NA-EAST (Virginia / Ohio)">NA-EAST (Virginia / Ohio)</option>
                  <option value="EU-CENTRAL (Frankfurt / Dublin)">EU-CENTRAL (Frankfurt / Dublin)</option>
                  <option value="AP-SOUTH (Singapore / Tokyo)">AP-SOUTH (Singapore / Tokyo)</option>
                </select>
              </div>

              <div className="p-3 border border-[#222c38] bg-[#12171f] text-xs space-y-1">
                <div className="flex justify-between">
                  <span className="text-neutral-400">ESTIMATED FEE:</span>
                  <span className="font-bold text-[#4ade80]">14.5 $QUARK (~$0.72)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">BENCHMARKED NODES READY:</span>
                  <span className="text-neutral-200">14,820 Nodes Active</span>
                </div>
              </div>

              {dispatchedJobTx && (
                <div className="p-2.5 bg-emerald-950/70 border border-emerald-500 text-emerald-300 text-xs">
                  ✓ Workload routed to optimal node. Escrow settled: <span className="font-bold text-white">{dispatchedJobTx}</span>
                </div>
              )}

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setRentModalOpen(false)}
                  className="px-4 py-2 border border-[#283544] bg-[#161d26] text-xs font-bold text-neutral-300 hover:bg-[#202a36] cursor-pointer"
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#4ade80] text-[#05180f] text-xs font-bold hover:bg-[#22c55e] shadow-[0_0_12px_rgba(74,222,128,0.25)] cursor-pointer"
                >
                  DISPATCH WORKLOAD ⚡
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Provider Onboarding Modal */}
      {providerModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-lg bg-[#0e1217] border border-[#283544] shadow-[0_15px_40px_rgba(0,0,0,0.9)] font-mono text-[#f3f4f6] p-6">
            <div className="flex justify-between items-start border-b border-[#1f2730] pb-4 mb-4">
              <div>
                <div className="text-[10px] text-neutral-400 uppercase tracking-widest">HARDWARE PROVIDER NETWORK</div>
                <h3 className="font-serif italic font-bold text-2xl text-[#f3f4f6] mt-0.5">Connect Idle Hardware</h3>
              </div>
              <button
                onClick={() => setProviderModalOpen(false)}
                className="px-2.5 py-1 border border-[#283544] bg-[#161d26] text-xs font-bold hover:bg-[#202a36] text-[#cbd5e1] cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="font-serif text-sm text-[#cbd5e1] mb-4">
              Providers connect their existing hardware, pass automated benchmarks, and post a bond to join the network. Idle machines earn while developers get fast, cost-effective compute.
            </p>

            <form onSubmit={handleRegisterProvider} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-neutral-300 mb-1">
                  HARDWARE PROFILE:
                </label>
                <select
                  value={hardwareType}
                  onChange={(e) => setHardwareType(e.target.value)}
                  className="w-full p-2.5 border border-[#283544] bg-[#151c24] text-[#f3f4f6] font-mono text-xs focus:outline-none focus:ring-2 focus:ring-[#4ade80]"
                >
                  <option value="NVIDIA H100 80GB SXM5">NVIDIA H100 80GB SXM5</option>
                  <option value="NVIDIA A100 80GB PCIe">NVIDIA A100 80GB PCIe</option>
                  <option value="NVIDIA RTX 4090 (24GB VRAM)">NVIDIA RTX 4090 (24GB VRAM)</option>
                  <option value="Apple Silicon M3 Max / M4 Pro">Apple Silicon M3 Max / M4 Pro</option>
                  <option value="Multi-Core High Performance CPU Server">Multi-Core High Performance CPU Server</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-300 mb-1">
                  STAKE BOND AMOUNT ($QUARK):
                </label>
                <input
                  type="text"
                  value={providerBond}
                  onChange={(e) => setProviderBond(e.target.value)}
                  className="w-full p-2.5 border border-[#283544] bg-[#151c24] text-[#f3f4f6] font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[#4ade80]"
                  placeholder="2,500"
                />
              </div>

              <div className="p-3 border border-[#222c38] bg-[#12171f] text-xs space-y-1">
                <div className="flex justify-between">
                  <span className="text-neutral-400">ESTIMATED YIELD:</span>
                  <span className="font-bold text-[#4ade80]">~180 - 450 $QUARK / day</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">VERIFICATION STEP:</span>
                  <span className="text-neutral-200">Automated FLOPS Benchmark</span>
                </div>
              </div>

              {providerRegisteredTx && (
                <div className="p-2.5 bg-emerald-950/70 border border-emerald-500 text-emerald-300 text-xs">
                  ✓ Node benchmark passed. Bond bonded on-chain: <span className="font-bold text-white">{providerRegisteredTx}</span>
                </div>
              )}

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setProviderModalOpen(false)}
                  className="px-4 py-2 border border-[#283544] bg-[#161d26] text-xs font-bold text-neutral-300 hover:bg-[#202a36] cursor-pointer"
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#4ade80] text-[#05180f] text-xs font-bold hover:bg-[#22c55e] shadow-[0_0_12px_rgba(74,222,128,0.25)] cursor-pointer"
                >
                  POST BOND & JOIN ⚡
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
