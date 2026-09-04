'use client';

import React from 'react';

interface DatasheetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DatasheetModal({ isOpen, onClose }: DatasheetModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
      <div className="w-full max-w-4xl max-h-[90vh] bg-[#0e1217] border border-[#283544] shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-y-auto flex flex-col font-mono text-[#f3f4f6]">
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-[#202a35] flex items-center justify-between bg-[#131921] sticky top-0 z-10">
          <div>
            <div className="text-xs text-neutral-400 uppercase tracking-widest">TECHNICAL SPECIFICATION DS-QN-REV1.2</div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif italic text-[#f3f4f6] mt-0.5">
              Quark Net Protocol & Compute Datasheet
            </h2>
          </div>
          <button
            onClick={onClose}
            className="px-3 py-1.5 border border-[#283544] bg-[#161d26] text-[#cbd5e1] hover:bg-[#202a36] hover:text-[#4ade80] transition-colors text-xs font-bold cursor-pointer"
          >
            [CLOSE ✕]
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8 text-sm">
          {/* Executive Overview */}
          <section className="space-y-3">
            <div className="text-xs text-neutral-400 uppercase tracking-widest font-bold">1.0 PROTOCOL OVERVIEW</div>
            <p className="font-serif text-base leading-relaxed text-[#cbd5e1]">
              Quark Net is a decentralized compute network that transforms idle GPU, CPU, and server capacity from independent providers into a unified, on-demand supercomputer. Instead of purchasing expensive hardware that sits unused most of the time, users simply rent the exact compute power they need — whether for AI inference, image and video generation, 3D rendering, data processing, or scientific workloads.
            </p>
          </section>

          {/* Network Metrics & Engine */}
          <section className="space-y-3">
            <div className="text-xs text-neutral-400 uppercase tracking-widest font-bold">2.0 CORE NETWORK ARCHITECTURE</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 border border-[#202a35] bg-[#131820]">
                <div className="text-xs text-neutral-400">SCHEDULER ENGINE</div>
                <div className="text-xl font-bold text-[#4ade80] mt-1">Intelligent Router</div>
                <div className="text-xs text-neutral-400 mt-1">Multi-variable latency, region, & cost optimization</div>
              </div>
              <div className="p-4 border border-[#202a35] bg-[#131820]">
                <div className="text-xs text-neutral-400">PROVIDER BONDING</div>
                <div className="text-xl font-bold text-[#4ade80] mt-1">Automated Benchmark</div>
                <div className="text-xs text-neutral-400 mt-1">Sybil resistance & hardware capability verification</div>
              </div>
              <div className="p-4 border border-[#202a35] bg-[#131820]">
                <div className="text-xs text-neutral-400">SETTLEMENT LAYER</div>
                <div className="text-xl font-bold text-[#4ade80] mt-1">On-Chain $QUARK</div>
                <div className="text-xs text-neutral-400 mt-1">Deterministic, verifiable cryptographic escrow</div>
              </div>
            </div>
          </section>

          {/* Workload Execution Matrix */}
          <section className="space-y-3">
            <div className="text-xs text-neutral-400 uppercase tracking-widest font-bold">3.0 SUPPORTED WORKLOAD SUITES</div>
            <div className="border border-[#202a35] overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-[#161d26] border-b border-[#202a35] text-[#f3f4f6]">
                  <tr>
                    <th className="p-2.5 border-r border-[#202a35]">CATEGORY</th>
                    <th className="p-2.5 border-r border-[#202a35]">TARGET HARDWARE</th>
                    <th className="p-2.5 border-r border-[#202a35]">VERIFICATION</th>
                    <th className="p-2.5 border-r border-[#202a35]">SETTLEMENT</th>
                    <th className="p-2.5">USE CASES</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#202a35]">
                  <tr className="hover:bg-[#151c24]">
                    <td className="p-2 font-mono text-[#4ade80] font-bold border-r border-[#202a35]">AI INFERENCE</td>
                    <td className="p-2 border-r border-[#202a35] text-[#cbd5e1]">H100 / A100 / RTX 4090</td>
                    <td className="p-2 border-r border-[#202a35] text-neutral-400">Output Hash Sampling</td>
                    <td className="p-2 border-r border-[#202a35] text-neutral-300">Per 1K Tokens</td>
                    <td className="p-2 text-neutral-400">DeepSeek, Llama-3, Mistral, Whisper</td>
                  </tr>
                  <tr className="hover:bg-[#151c24]">
                    <td className="p-2 font-mono text-[#4ade80] font-bold border-r border-[#202a35]">VIDEO & IMAGE</td>
                    <td className="p-2 border-r border-[#202a35] text-[#cbd5e1]">High-VRAM GPU Clusters</td>
                    <td className="p-2 border-r border-[#202a35] text-neutral-400">Perceptual Hash Match</td>
                    <td className="p-2 border-r border-[#202a35] text-neutral-300">Per Frame / Second</td>
                    <td className="p-2 text-neutral-400">Diffusion Models, Video synthesis, Upscaling</td>
                  </tr>
                  <tr className="hover:bg-[#151c24]">
                    <td className="p-2 font-mono text-[#4ade80] font-bold border-r border-[#202a35]">3D RENDERING</td>
                    <td className="p-2 border-r border-[#202a35] text-[#cbd5e1]">GPU/CPU Farm Mix</td>
                    <td className="p-2 border-r border-[#202a35] text-neutral-400">Tile Checksum</td>
                    <td className="p-2 border-r border-[#202a35] text-neutral-300">Per Render Minute</td>
                    <td className="p-2 text-neutral-400">Blender Cycles, Unreal Engine, Octane</td>
                  </tr>
                  <tr className="hover:bg-[#151c24]">
                    <td className="p-2 font-mono text-[#4ade80] font-bold border-r border-[#202a35]">SCIENTIFIC COMPUTE</td>
                    <td className="p-2 border-r border-[#202a35] text-[#cbd5e1]">High-Core CPU / Clusters</td>
                    <td className="p-2 border-r border-[#202a35] text-neutral-400">ZK State Transition</td>
                    <td className="p-2 border-r border-[#202a35] text-neutral-300">Per GigaFLOPS-hour</td>
                    <td className="p-2 text-neutral-400">Molecular Dynamics, Genomics, Fluid Sim</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Economic Loop & Token */}
          <section className="space-y-3">
            <div className="text-xs text-neutral-400 uppercase tracking-widest font-bold">4.0 $QUARK TOKENOMICS & INCENTIVES</div>
            <p className="font-serif text-base text-[#cbd5e1] leading-relaxed">
              At the center of the system is the $QUARK token. Every job running on the network generates real fees, creating a direct economic loop between those who supply capacity and those who consume it.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 border border-[#202a35] bg-[#131820]">
                <div className="font-bold text-[#4ade80]">PROVIDER REWARDS</div>
                <div className="text-neutral-400 mt-1">Providers earn continuous $QUARK yields based on verified uptime, benchmark compliance, and completed workloads.</div>
              </div>
              <div className="p-3 border border-[#202a35] bg-[#131820]">
                <div className="font-bold text-[#4ade80]">SLASHING & QUALITY ASSURANCE</div>
                <div className="text-neutral-400 mt-1">Providers stake a $QUARK bond. Submitting invalid computation or dropping jobs triggers automatic on-chain slashing.</div>
              </div>
            </div>
          </section>

          {/* Scheduler Verification Logic */}
          <section className="space-y-3">
            <div className="text-xs text-neutral-400 uppercase tracking-widest font-bold">5.0 PROTOCOL ROUTING INTERFACE (SAMPLE SPEC)</div>
            <pre className="p-4 bg-[#080c0f] text-[#4ade80] text-xs font-mono overflow-x-auto border border-[#202a35]">
{`interface IQuarkScheduler {
    struct WorkloadRequest {
        bytes32 jobId;
        uint8   workloadType;      // 0x01: AI_INF, 0x02: VIDEO, 0x03: 3D, 0x04: SCI
        uint32  requiredTFLOPS;
        uint32  maxLatencyMs;
        bytes32 targetRegion;
        uint256 maxQuarkEscrow;
    }

    function dispatchWorkload(WorkloadRequest calldata req) external returns (address assignedNode);
    function verifyProofAndSettle(bytes32 jobId, bytes calldata proof) external;
}`}
            </pre>
          </section>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#202a35] bg-[#131921] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#4ade80] text-[#05180f] font-mono text-xs font-bold hover:bg-[#22c55e] transition-colors shadow-[0_0_12px_rgba(74,222,128,0.25)] cursor-pointer"
          >
            DISMISS
          </button>
        </div>
      </div>
    </div>
  );
}
