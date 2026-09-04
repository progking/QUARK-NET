'use client';

import React from 'react';

interface SectionModalProps {
  activeSection: string | null;
  onClose: () => void;
}

export default function SectionModal({ activeSection, onClose }: SectionModalProps) {
  if (!activeSection) return null;

  const contentMap: Record<string, { title: string; subtitle: string; body: React.ReactNode }> = {
    network: {
      title: 'Quark Net Compute Network',
      subtitle: 'UNIFIED, ON-DEMAND SUPERCOMPUTER ARCHITECTURE',
      body: (
        <div className="space-y-4">
          <p className="font-serif text-base text-[#cbd5e1] leading-relaxed">
            Quark Net is a decentralized compute network that transforms idle GPU, CPU, and server capacity from independent providers into a unified, on-demand supercomputer. Instead of purchasing expensive hardware that sits unused most of the time, users simply rent the exact compute power they need.
          </p>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 border border-[#202a35] bg-[#131820]">
              <span className="text-neutral-400 font-bold block">GLOBAL FABRIC</span>
              <span className="text-neutral-300">14,820 verified nodes spanning 42 cloud & bare-metal regions</span>
            </div>
            <div className="p-3 border border-[#202a35] bg-[#131820]">
              <span className="text-neutral-400 font-bold block">EXECUTION</span>
              <span className="text-neutral-300">Sub-millisecond task routing with cryptographic proof verification</span>
            </div>
          </div>
        </div>
      ),
    },
    providers: {
      title: 'Independent Hardware Providers',
      subtitle: 'CONNECT HARDWARE · EARN $QUARK',
      body: (
        <div className="space-y-4">
          <p className="font-serif text-base text-[#cbd5e1] leading-relaxed">
            Providers connect their existing hardware, pass automated benchmarks, and post a bond to join the network. This creates a transparent, permissionless marketplace where idle machines earn while developers and creators get fast, cost-effective compute without centralized lock-in.
          </p>
          <div className="p-3 border border-[#202a35] bg-[#131820] text-xs space-y-1 text-neutral-300">
            <div className="font-bold text-[#4ade80]">PROVIDER ONBOARDING REQUIREMENTS</div>
            <div>1. Automated FLOPS & VRAM Memory Bandwidth Benchmark</div>
            <div>2. Network Latency & Port Reachability Matrix Validation</div>
            <div>3. Minimum Stake Bond Deposit in $QUARK</div>
          </div>
        </div>
      ),
    },
    scheduler: {
      title: 'Intelligent Workload Scheduler',
      subtitle: 'OPTIMAL COST, REGION, & LATENCY ROUTING',
      body: (
        <div className="space-y-4">
          <p className="font-serif text-base text-[#cbd5e1] leading-relaxed">
            The Quark Net scheduler intelligently routes each workload to the most suitable and cost-efficient node based on region, performance, and latency requirements. Once the work is completed and verified, payments are settled on-chain.
          </p>
          <div className="grid grid-cols-3 gap-2 text-xs text-center font-mono">
            <div className="p-2 border border-[#202a35] bg-[#131820]">
              <span className="text-[#4ade80] font-bold block">LATENCY</span>
              <span className="text-neutral-300">&lt; 25ms Global</span>
            </div>
            <div className="p-2 border border-[#202a35] bg-[#131820]">
              <span className="text-[#4ade80] font-bold block">SAVINGS</span>
              <span className="text-neutral-300">Up to 75% vs AWS</span>
            </div>
            <div className="p-2 border border-[#202a35] bg-[#131820]">
              <span className="text-[#4ade80] font-bold block">DISPATCH</span>
              <span className="text-neutral-300">Zero-Queue</span>
            </div>
          </div>
        </div>
      ),
    },
    workloads: {
      title: 'Supported Workload Ecosystem',
      subtitle: 'AI, 3D, VIDEO, RENDERING & SCIENTIFIC',
      body: (
        <div className="space-y-4 text-xs">
          <p className="font-serif text-base text-[#cbd5e1]">
            Rent exact compute power tailored to mission-critical distributed workloads:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono">
            <div className="p-2.5 border border-[#202a35] bg-[#131820]">
              <div className="font-bold text-[#4ade80]">AI & LLM INFERENCE</div>
              <div className="text-neutral-400">DeepSeek, Llama-3, Mistral, Whisper, vLLM</div>
            </div>
            <div className="p-2.5 border border-[#202a35] bg-[#131820]">
              <div className="font-bold text-[#4ade80]">IMAGE & VIDEO GENERATION</div>
              <div className="text-neutral-400">Stable Diffusion, Flux, Sora-compatible pipeline</div>
            </div>
            <div className="p-2.5 border border-[#202a35] bg-[#131820]">
              <div className="font-bold text-[#4ade80]">3D RENDERING & VFX</div>
              <div className="text-neutral-400">Blender Cycles, Unreal Engine, Octane clusters</div>
            </div>
            <div className="p-2.5 border border-[#202a35] bg-[#131820]">
              <div className="font-bold text-[#4ade80]">DATA & SCIENTIFIC WORKLOADS</div>
              <div className="text-neutral-400">Molecular folding, Ray/Spark data processing</div>
            </div>
          </div>
        </div>
      ),
    },
    'quark-token': {
      title: 'The $QUARK Token Economy',
      subtitle: 'ECONOMIC LOOP & SETTLEMENT CURRENCY',
      body: (
        <div className="space-y-4">
          <p className="font-serif text-base text-[#cbd5e1] leading-relaxed">
            At the center of the system is the $QUARK token. Every job that runs on the network generates real fees, creating a direct economic loop between those who supply capacity and those who consume it.
          </p>
          <div className="p-3 border border-[#202a35] bg-[#131820] text-xs font-mono space-y-2">
            <div className="flex justify-between">
              <span className="text-neutral-400">PAYMENT SETTLEMENT:</span>
              <span className="font-bold text-[#4ade80]">100% On-Chain via $QUARK</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-400">PROVIDER BOND:</span>
              <span className="font-bold text-neutral-200">Required to secure job dispatch</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-400">NETWORK FEE BURN:</span>
              <span className="font-bold text-neutral-200">15% of protocol fees burned permanently</span>
            </div>
          </div>
        </div>
      ),
    },
    'the-point': {
      title: 'The Point: Freedom from Centralized Lock-In',
      subtitle: 'WHY DECENTRALIZED COMPUTE WINS',
      body: (
        <div className="space-y-4 font-serif text-base text-[#cbd5e1] leading-relaxed">
          <p>
            Centralized cloud monopolies charge exorbitant markups for hardware reservations that sit idle during off-peak hours.
          </p>
          <p>
            Quark Net reclaims global idle silicon. By aligning direct incentives between hardware owners and compute consumers through verifiable on-chain settlement, compute becomes as elastic, fluid, and permissionless as electricity.
          </p>
        </div>
      ),
    },
    roadmap: {
      title: 'Quark Net Protocol Roadmap',
      subtitle: 'NETWORK SCALING & ENTERPRISE INTEGRATION',
      body: (
        <div className="space-y-3 text-xs font-mono">
          <div className="p-3 border border-[#202a35] bg-[#131820]">
            <div className="font-bold text-[#4ade80]">PHASE 1 (LIVE) · ON-DEMAND DISPATCH ENGINE</div>
            <div className="text-neutral-300">GPU/CPU benchmarking, $QUARK staking bond, AI inference & render scheduler.</div>
          </div>
          <div className="p-3 border border-[#202a35] bg-[#10141b]">
            <div className="font-bold text-neutral-300">PHASE 2 (Q3) · ZERO-KNOWLEDGE VERIFIED COMPUTE</div>
            <div className="text-neutral-400">zkSNARK state transition proofs for non-deterministic model training.</div>
          </div>
          <div className="p-3 border border-[#202a35] bg-[#10141b]">
            <div className="font-bold text-neutral-300">PHASE 3 (Q4) · DECENTRALIZED CLUSTER FEDERATION</div>
            <div className="text-neutral-400">Multi-node MPI interconnection for trillion-parameter foundation models.</div>
          </div>
        </div>
      ),
    },
  };

  const item = contentMap[activeSection] || {
    title: activeSection.toUpperCase(),
    subtitle: 'QUARK NET SPECIFICATION',
    body: <p className="text-neutral-300">Section information...</p>,
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="w-full max-w-2xl bg-[#0e1217] border border-[#283544] shadow-[0_20px_50px_rgba(0,0,0,0.9)] flex flex-col font-mono text-[#f3f4f6]">
        <div className="p-4 sm:p-5 border-b border-[#202a35] flex items-center justify-between bg-[#131921]">
          <div>
            <div className="text-[10px] text-neutral-400 uppercase tracking-widest">{item.subtitle}</div>
            <h3 className="text-xl font-bold font-serif italic text-[#f3f4f6] mt-0.5">{item.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="px-2.5 py-1 border border-[#283544] bg-[#161d26] text-[#cbd5e1] hover:bg-[#202a36] hover:text-[#4ade80] transition-colors text-xs font-bold cursor-pointer"
          >
            ✕
          </button>
        </div>
        <div className="p-6">{item.body}</div>
        <div className="p-4 border-t border-[#202a35] bg-[#131921] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#4ade80] text-[#05180f] text-xs font-bold hover:bg-[#22c55e] transition-colors shadow-[0_0_12px_rgba(74,222,128,0.25)] cursor-pointer"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
}
