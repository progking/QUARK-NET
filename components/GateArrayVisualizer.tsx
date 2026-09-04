'use client';

import React, { useState, useEffect, useMemo } from 'react';

// Workload specification representing real-world Quark Net workloads
interface WorkloadJob {
  jobId: string;
  type: string;
  task: string;
  tflops: number;
  providerGpu: string;
  providerNodeId: number;
  region: string;
  latency: string;
  providerFee: string;
  burnFee: string;
  totalQuark: string;
  usdEquivalent: string;
  statusBits: number[];
  activeClusterIds: number[];
  proofHash: string;
}

const WORKLOAD_SCENARIOS: WorkloadJob[] = [
  {
    jobId: 'QN-9482',
    type: 'AI INFERENCE',
    task: 'DeepSeek-V3 671B MoE (48 tok/s batch)',
    tflops: 284.5,
    providerGpu: '4x NVIDIA RTX 4090 (96GB VRAM)',
    providerNodeId: 418,
    region: 'EU-CENTRAL (Frankfurt)',
    latency: '12ms',
    providerFee: '10.54 $QUARK',
    burnFee: '1.86 $QUARK',
    totalQuark: '12.40 $QUARK',
    usdEquivalent: '$0.62',
    statusBits: [1, 1, 0, 1, 0, 1, 1, 0],
    activeClusterIds: [2, 4, 7, 8, 12, 14, 18, 22],
    proofHash: '0x8f2a...c419',
  },
  {
    jobId: 'QN-9483',
    type: 'VIDEO & DIFFUSION',
    task: 'Diffusion Video 4K (Frame 360/900)',
    tflops: 412.0,
    providerGpu: '8x NVIDIA A100 80GB SXM',
    providerNodeId: 104,
    region: 'NA-EAST (Virginia)',
    latency: '8ms',
    providerFee: '32.47 $QUARK',
    burnFee: '5.73 $QUARK',
    totalQuark: '38.20 $QUARK',
    usdEquivalent: '$1.91',
    statusBits: [1, 0, 1, 1, 1, 0, 1, 1],
    activeClusterIds: [0, 3, 5, 8, 9, 11, 15, 19, 21],
    proofHash: '0x3b11...99e4',
  },
  {
    jobId: 'QN-9484',
    type: '3D RENDERING',
    task: 'Blender Cycles 8K Photoreal Render Pass',
    tflops: 165.8,
    providerGpu: '2x AMD Instinct MI300X 192GB',
    providerNodeId: 882,
    region: 'AP-SOUTH (Singapore)',
    latency: '19ms',
    providerFee: '7.22 $QUARK',
    burnFee: '1.28 $QUARK',
    totalQuark: '8.50 $QUARK',
    usdEquivalent: '$0.42',
    statusBits: [0, 1, 1, 0, 1, 1, 0, 1],
    activeClusterIds: [1, 4, 6, 7, 10, 13, 16, 20],
    proofHash: '0x7e02...5b31',
  },
  {
    jobId: 'QN-9485',
    type: 'SCIENTIFIC COMPUTE',
    task: 'AlphaFold Protein Folding & Molecular Dynamics',
    tflops: 520.4,
    providerGpu: '8x NVIDIA H100 80GB SXM5',
    providerNodeId: 62,
    region: 'US-WEST (Oregon)',
    latency: '11ms',
    providerFee: '38.25 $QUARK',
    burnFee: '6.75 $QUARK',
    totalQuark: '45.00 $QUARK',
    usdEquivalent: '$2.25',
    statusBits: [1, 1, 1, 0, 0, 1, 1, 0],
    activeClusterIds: [1, 3, 5, 9, 12, 14, 17, 21, 24],
    proofHash: '0x99ad...22f8',
  },
  {
    jobId: 'QN-9486',
    type: 'DATA PROCESSING',
    task: 'Apache Spark Vector Clustering (10M embeddings)',
    tflops: 98.2,
    providerGpu: 'Dual AMD EPYC 9654 (192 Cores) + 512GB',
    providerNodeId: 1120,
    region: 'EU-WEST (London)',
    latency: '14ms',
    providerFee: '4.42 $QUARK',
    burnFee: '0.78 $QUARK',
    totalQuark: '5.20 $QUARK',
    usdEquivalent: '$0.26',
    statusBits: [0, 0, 1, 1, 0, 1, 0, 1],
    activeClusterIds: [0, 2, 4, 8, 11, 13, 18, 22],
    proofHash: '0x14bc...aa71',
  },
];

const ROWS = 16;
const COLS = 36;

export default function GateArrayVisualizer() {
  const [activeTab, setActiveTab] = useState<'flow' | 'matrix' | 'tokenomics'>('flow');
  const [epochCount, setEpochCount] = useState(14820);
  const [jobIndex, setJobIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState('00:00:00');
  const [stepStage, setStepStage] = useState<number>(1); // 0: INCOMING, 1: SCHEDULING, 2: COMPUTE, 3: SETTLED
  const [totalBurnedQuark, setTotalBurnedQuark] = useState(842910.4);
  const [selectedNodeInfo, setSelectedNodeInfo] = useState<{ id: number; gpu: string; region: string; bond: string; tflops: number; temp: string; util: number } | null>(null);

  // Live timestamp
  useEffect(() => {
    const updateTime = () => {
      const d = new Date();
      const pad = (n: number) => n.toString().padStart(2, '0');
      setCurrentTime(`${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Step pipeline cycle
  useEffect(() => {
    if (!isPlaying) return;

    const stepInterval = setInterval(() => {
      setStepStage((prev) => {
        if (prev >= 3) {
          // Move to next workload scenario
          setJobIndex((idx) => (idx + 1) % WORKLOAD_SCENARIOS.length);
          setEpochCount((c) => c + 1);
          setTotalBurnedQuark((b) => +(b + 1.86).toFixed(2));
          return 0;
        }
        return prev + 1;
      });
    }, 1100);

    return () => clearInterval(stepInterval);
  }, [isPlaying]);

  const currentJob = WORKLOAD_SCENARIOS[jobIndex];

  // Node generator for matrix
  const matrixData = useMemo(() => {
    const gpus = [
      'NVIDIA H100 80GB SXM5',
      'NVIDIA A100 80GB PCIe',
      'NVIDIA RTX 4090 24GB',
      'AMD Instinct MI300X 192GB',
      'Apple Silicon M3 Max 128GB',
      'Dual AMD EPYC 9654 (192 Cores)',
    ];
    const regions = ['NA-EAST', 'EU-CENTRAL', 'AP-SOUTH', 'US-WEST', 'EU-WEST', 'AP-NORTHEAST'];

    const nodes = [];
    for (let r = 0; r < ROWS; r++) {
      const row = [];
      for (let c = 0; c < COLS; c++) {
        const id = r * COLS + c + 1;
        const isAssigned = currentJob.providerNodeId === id;
        const isClusterActive = currentJob.activeClusterIds.includes((c + r * 2) % 25);
        const isActive = isAssigned || (isClusterActive && (r + c) % 3 === 0);
        
        row.push({
          id,
          isActive,
          isAssigned,
          gpu: gpus[id % gpus.length],
          region: regions[id % regions.length],
          bond: `${(2500 + (id * 31) % 15000).toLocaleString()} $QUARK`,
          tflops: Math.round(45 + (id * 7) % 350),
          temp: `${48 + (id % 24)}°C`,
          util: isActive ? 85 + (id % 15) : 8 + (id % 12),
        });
      }
      nodes.push(row);
    }
    return nodes;
  }, [currentJob]);

  return (
    <div className="w-full bg-[#0b0e12] border border-[#202934] text-[#f3f4f6] font-mono shadow-[0_20px_50px_rgba(0,0,0,0.85)] overflow-hidden select-none">
      
      {/* --- Top Control / Status Bar --- */}
      <div className="p-4 sm:p-5 border-b border-[#1c242f] bg-[#0e1319]">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs tracking-wider text-neutral-400">
          <div className="flex items-center gap-2.5">
            <span className="inline-block w-2.5 h-2.5 bg-[#4ade80] shadow-[0_0_8px_#4ade80] animate-pulse"></span>
            <span className="font-bold text-[#f3f4f6] tracking-[0.16em] text-[13px]">
              QUARK-NET / SUPERCOMPUTER SCHEDULER
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px] text-neutral-400">
            <span className="text-[#4ade80] font-bold">14,820 NODES</span>
            <span>·</span>
            <span>842.6 PF CAPACITY</span>
            <span>·</span>
            <span className="tabular-nums text-neutral-300">{currentTime}</span>
          </div>
        </div>

        {/* View Mode Switcher Tabs */}
        <div className="flex items-center gap-1.5 mt-3 pt-3 border-t border-[#18202a] text-xs">
          <button
            onClick={() => setActiveTab('flow')}
            className={`px-3 py-1.5 transition-all text-xs font-bold cursor-pointer border ${
              activeTab === 'flow'
                ? 'bg-[#4ade80] text-[#05180f] border-[#4ade80] shadow-[0_0_10px_rgba(74,222,128,0.3)]'
                : 'bg-[#121820] text-neutral-400 border-[#232f3d] hover:text-[#f3f4f6] hover:bg-[#18212c]'
            }`}
          >
            1. LIVE SCHEDULER FLOW
          </button>
          <button
            onClick={() => setActiveTab('matrix')}
            className={`px-3 py-1.5 transition-all text-xs font-bold cursor-pointer border ${
              activeTab === 'matrix'
                ? 'bg-[#4ade80] text-[#05180f] border-[#4ade80] shadow-[0_0_10px_rgba(74,222,128,0.3)]'
                : 'bg-[#121820] text-neutral-400 border-[#232f3d] hover:text-[#f3f4f6] hover:bg-[#18212c]'
            }`}
          >
            2. SCATTERED SILICON MATRIX
          </button>
          <button
            onClick={() => setActiveTab('tokenomics')}
            className={`px-3 py-1.5 transition-all text-xs font-bold cursor-pointer border ${
              activeTab === 'tokenomics'
                ? 'bg-[#4ade80] text-[#05180f] border-[#4ade80] shadow-[0_0_10px_rgba(74,222,128,0.3)]'
                : 'bg-[#121820] text-neutral-400 border-[#232f3d] hover:text-[#f3f4f6] hover:bg-[#18212c]'
            }`}
          >
            3. $QUARK ECONOMIC LOOP
          </button>
        </div>

        {/* 4 Live Telemetry Metrics */}
        <div className="grid grid-cols-4 gap-2 sm:gap-3 mt-3 pt-3 border-t border-[#18202a]">
          <div>
            <div className="text-[10px] text-neutral-400 uppercase tracking-widest">CURRENT JOB</div>
            <div className="text-base sm:text-lg font-bold text-[#4ade80] truncate mt-0.5">
              {currentJob.jobId}
            </div>
          </div>
          <div>
            <div className="text-[10px] text-neutral-400 uppercase tracking-widest">WORKLOAD</div>
            <div className="text-base sm:text-lg font-bold text-[#4ade80] truncate mt-0.5">
              {currentJob.type.split(' ')[0]}
            </div>
          </div>
          <div>
            <div className="text-[10px] text-neutral-400 uppercase tracking-widest">ROUTED NODE</div>
            <div className="text-base sm:text-lg font-bold text-[#38bdf8] truncate mt-0.5">
              NODE #{currentJob.providerNodeId}
            </div>
          </div>
          <div>
            <div className="text-[10px] text-neutral-400 uppercase tracking-widest">SETTLED ($QUARK)</div>
            <div className="text-base sm:text-lg font-bold text-[#4ade80] truncate mt-0.5">
              {currentJob.totalQuark}
            </div>
          </div>
        </div>
      </div>

      {/* --- TAB 1: LIVE SCHEDULER & DEMAND-TO-SETTLEMENT FLOW --- */}
      {activeTab === 'flow' && (
        <div className="p-4 sm:p-5 space-y-4 bg-[#090c0f]">
          {/* Visual 4-Step Pipeline */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs">
            {/* Step 1: Demand */}
            <div
              className={`p-3 border transition-all duration-300 ${
                stepStage >= 0
                  ? 'border-[#4ade80] bg-[#111921] shadow-[0_0_12px_rgba(74,222,128,0.15)]'
                  : 'border-[#1e2733] bg-[#0c1015] opacity-60'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] text-neutral-400">
                <span>01. DEMAND</span>
                <span className={stepStage === 0 ? 'text-[#4ade80] animate-pulse font-bold' : 'text-neutral-500'}>
                  {stepStage === 0 ? '● INGESTING' : '✓ READY'}
                </span>
              </div>
              <div className="font-bold text-[#f3f4f6] mt-1 truncate">{currentJob.type}</div>
              <div className="text-[11px] text-neutral-400 truncate mt-0.5">{currentJob.task}</div>
            </div>

            {/* Step 2: Intelligent Scheduler */}
            <div
              className={`p-3 border transition-all duration-300 ${
                stepStage >= 1
                  ? 'border-[#4ade80] bg-[#111921] shadow-[0_0_12px_rgba(74,222,128,0.15)]'
                  : 'border-[#1e2733] bg-[#0c1015] opacity-60'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] text-neutral-400">
                <span>02. SCHEDULER</span>
                <span className={stepStage === 1 ? 'text-[#38bdf8] animate-pulse font-bold' : stepStage > 1 ? 'text-[#4ade80]' : 'text-neutral-500'}>
                  {stepStage === 1 ? '● ROUTING' : stepStage > 1 ? '✓ MATCHED' : 'WAITING'}
                </span>
              </div>
              <div className="font-bold text-[#38bdf8] mt-1">{currentJob.region}</div>
              <div className="text-[11px] text-neutral-400">Latency: {currentJob.latency} · Sub-25ms</div>
            </div>

            {/* Step 3: Provider Execution */}
            <div
              className={`p-3 border transition-all duration-300 ${
                stepStage >= 2
                  ? 'border-[#4ade80] bg-[#111921] shadow-[0_0_12px_rgba(74,222,128,0.15)]'
                  : 'border-[#1e2733] bg-[#0c1015] opacity-60'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] text-neutral-400">
                <span>03. EXECUTION</span>
                <span className={stepStage === 2 ? 'text-amber-400 animate-pulse font-bold' : stepStage > 2 ? 'text-[#4ade80]' : 'text-neutral-500'}>
                  {stepStage === 2 ? '● COMPUTING' : stepStage > 2 ? '✓ EXECUTED' : 'WAITING'}
                </span>
              </div>
              <div className="font-bold text-amber-300 mt-1 truncate">Node #{currentJob.providerNodeId}</div>
              <div className="text-[11px] text-neutral-400 truncate">{currentJob.providerGpu}</div>
            </div>

            {/* Step 4: On-Chain Settlement */}
            <div
              className={`p-3 border transition-all duration-300 ${
                stepStage >= 3
                  ? 'border-[#4ade80] bg-[#111921] shadow-[0_0_12px_rgba(74,222,128,0.25)]'
                  : 'border-[#1e2733] bg-[#0c1015] opacity-60'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] text-neutral-400">
                <span>04. SETTLEMENT</span>
                <span className={stepStage === 3 ? 'text-[#4ade80] animate-pulse font-bold' : 'text-neutral-500'}>
                  {stepStage === 3 ? '● ON-CHAIN' : 'PENDING'}
                </span>
              </div>
              <div className="font-bold text-[#4ade80] mt-1">{currentJob.totalQuark}</div>
              <div className="text-[11px] text-neutral-400 truncate">Proof: {currentJob.proofHash}</div>
            </div>
          </div>

          {/* Interactive Topology Diagram (Canvas-like SVG representation) */}
          <div className="p-4 border border-[#1f2833] bg-[#0e1318] relative rounded-xs overflow-hidden">
            <div className="text-[10px] uppercase text-neutral-400 tracking-widest flex items-center justify-between mb-2">
              <span>DYNAMIC NETWORK TOPOLOGY · REAL-TIME PACKET ROUTING</span>
              <span className="text-[#4ade80] font-bold">100% DECENTRALIZED</span>
            </div>

            <div className="relative h-44 w-full flex items-center justify-between px-2 sm:px-6">
              {/* Client Box */}
              <div className="flex flex-col items-center z-10">
                <div className="w-14 h-14 border border-[#2e3d4e] bg-[#141b24] flex flex-col items-center justify-center shadow-lg">
                  <span className="text-[10px] text-neutral-400 font-bold">CLIENT</span>
                  <span className="text-xs text-[#4ade80] font-bold">APP / DEV</span>
                </div>
                <span className="text-[9px] text-neutral-400 mt-1.5">Workload In</span>
              </div>

              {/* Animated Beams Left */}
              <div className="flex-1 h-[2px] bg-[#1c2633] relative mx-3 overflow-hidden">
                <div
                  className={`absolute top-0 bottom-0 bg-gradient-to-r from-transparent via-[#4ade80] to-transparent w-20 transition-all duration-700 ${
                    stepStage >= 1 ? 'left-full translate-x-0' : 'left-0 -translate-x-full'
                  }`}
                />
              </div>

              {/* Central Scheduler Hub */}
              <div className="flex flex-col items-center z-10">
                <div className="w-20 h-20 border-2 border-[#4ade80] bg-[#101822] flex flex-col items-center justify-center shadow-[0_0_20px_rgba(74,222,128,0.3)] relative">
                  <span className="text-[10px] text-[#4ade80] font-bold text-center">QUARK NET</span>
                  <span className="text-[9px] text-neutral-300 font-bold">SCHEDULER</span>
                  <span className="text-[8px] text-neutral-400 mt-0.5">Sub-25ms</span>
                  <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#4ade80] rounded-full animate-ping"></div>
                </div>
                <span className="text-[9px] text-[#4ade80] mt-1.5 font-bold">Auto-Benchmark</span>
              </div>

              {/* Animated Beams Right */}
              <div className="flex-1 h-[2px] bg-[#1c2633] relative mx-3 overflow-hidden">
                <div
                  className={`absolute top-0 bottom-0 bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent w-20 transition-all duration-700 ${
                    stepStage >= 2 ? 'left-full translate-x-0' : 'left-0 -translate-x-full'
                  }`}
                />
              </div>

              {/* Target Provider Cluster */}
              <div className="flex flex-col items-center z-10">
                <div className="w-16 h-16 border border-[#38bdf8] bg-[#111a24] flex flex-col items-center justify-center shadow-[0_0_15px_rgba(56,189,248,0.25)]">
                  <span className="text-[9px] text-[#38bdf8] font-bold">NODE #{currentJob.providerNodeId}</span>
                  <span className="text-[9px] text-neutral-200 font-bold">GPU / CPU</span>
                  <span className="text-[8px] text-[#4ade80]">Bonded</span>
                </div>
                <span className="text-[9px] text-neutral-400 mt-1.5">Executing Work</span>
              </div>
            </div>

            {/* Live Terminal Log Line */}
            <div className="mt-2 pt-2 border-t border-[#1c2530] text-[11px] font-mono flex items-center justify-between text-neutral-300">
              <div className="flex items-center gap-2 truncate">
                <span className="text-[#4ade80] font-bold">[TX-LOG]</span>
                <span className="text-neutral-400">Job {currentJob.jobId}:</span>
                <span className="text-[#f3f4f6] truncate">{currentJob.task}</span>
              </div>
              <div className="text-neutral-400 text-[10px] hidden sm:block whitespace-nowrap">
                {currentJob.providerFee} to Node · {currentJob.burnFee} Burned
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- TAB 2: SCATTERED IDLE SILICON MATRIX --- */}
      {activeTab === 'matrix' && (
        <div className="p-4 sm:p-5 bg-[#090c0f] relative overflow-x-auto">
          <div className="flex items-center justify-between text-[11px] text-neutral-400 uppercase tracking-widest mb-3">
            <span>576 DECENTRALIZED COMPUTE CORES (14,820 GLOBAL EXTENSION)</span>
            <span className="text-[#4ade80]">CLICK ANY NODE FOR TELEMETRY</span>
          </div>

          <div className="min-w-[480px] flex flex-col gap-[3px]">
            {matrixData.map((row, rIdx) => (
              <div key={`row-${rIdx}`} className="flex gap-[3px] justify-between">
                {row.map((node) => (
                  <div
                    key={`node-${node.id}`}
                    onClick={() => setSelectedNodeInfo(node)}
                    className={`w-[9px] h-[9px] sm:w-[10.5px] sm:h-[10.5px] transition-all duration-150 cursor-pointer rounded-[1px] ${
                      node.isAssigned
                        ? 'bg-[#38bdf8] shadow-[0_0_8px_#38bdf8] scale-[1.3] ring-1 ring-white'
                        : node.isActive
                        ? 'bg-[#4ade80] shadow-[0_0_5px_rgba(74,222,128,0.7)] hover:scale-125'
                        : 'bg-[#141b22] hover:bg-[#202b38]'
                    }`}
                    title={`Node #${node.id} - ${node.gpu} (${node.region})`}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* Node Inspector Drawer */}
          <div className="mt-4 p-3.5 border border-[#202a35] bg-[#111720] text-xs space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#1c242f] pb-2">
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#4ade80]">
                  INSPECTED NODE: #{selectedNodeInfo ? selectedNodeInfo.id : currentJob.providerNodeId}
                </span>
                <span className="text-neutral-500">|</span>
                <span className="text-neutral-300">
                  {selectedNodeInfo ? selectedNodeInfo.gpu : currentJob.providerGpu}
                </span>
              </div>
              <div className="text-[#38bdf8] font-bold">
                {selectedNodeInfo ? selectedNodeInfo.region : currentJob.region}
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-[11px]">
              <div>
                <span className="text-neutral-400 block">STAKE BOND:</span>
                <span className="font-bold text-[#4ade80]">
                  {selectedNodeInfo ? selectedNodeInfo.bond : '7,500 $QUARK'}
                </span>
              </div>
              <div>
                <span className="text-neutral-400 block">COMPUTE CAPACITY:</span>
                <span className="font-bold text-neutral-200">
                  {selectedNodeInfo ? `${selectedNodeInfo.tflops} TFLOPS` : `${currentJob.tflops} TFLOPS`}
                </span>
              </div>
              <div>
                <span className="text-neutral-400 block">TEMPERATURE:</span>
                <span className="font-bold text-amber-300">
                  {selectedNodeInfo ? selectedNodeInfo.temp : '54°C'}
                </span>
              </div>
              <div>
                <span className="text-neutral-400 block">CORE UTILIZATION:</span>
                <span className="font-bold text-[#4ade80]">
                  {selectedNodeInfo ? `${selectedNodeInfo.util}%` : '92%'}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- TAB 3: $QUARK TOKENOMICS & ECONOMIC ENGINE --- */}
      {activeTab === 'tokenomics' && (
        <div className="p-4 sm:p-5 bg-[#090c0f] space-y-4">
          <div className="text-[11px] text-neutral-400 uppercase tracking-widest flex justify-between">
            <span>$QUARK TOKEN ECONOMIC ENGINE & SETTLEMENT LOOP</span>
            <span className="text-[#4ade80] font-bold">REAL WORKLOAD FEES</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 border border-[#202a35] bg-[#111720]">
              <div className="text-[10px] text-neutral-400 uppercase tracking-widest">PROVIDER REWARDS (85%)</div>
              <div className="text-xl font-bold text-[#4ade80] mt-1">
                {currentJob.providerFee}
              </div>
              <div className="text-[10px] text-neutral-400 mt-1">
                Direct payout to Node #{currentJob.providerNodeId} upon on-chain proof.
              </div>
            </div>

            <div className="p-3.5 border border-[#202a35] bg-[#111720]">
              <div className="text-[10px] text-neutral-400 uppercase tracking-widest">BUYBACK & BURN (15%)</div>
              <div className="text-xl font-bold text-amber-400 mt-1">
                {currentJob.burnFee}
              </div>
              <div className="text-[10px] text-neutral-400 mt-1">
                Permanently removed from circulating supply per job.
              </div>
            </div>

            <div className="p-3.5 border border-[#202a35] bg-[#111720]">
              <div className="text-[10px] text-neutral-400 uppercase tracking-widest">CUMULATIVE BURNED</div>
              <div className="text-xl font-bold text-[#38bdf8] tabular-nums mt-1">
                {totalBurnedQuark.toLocaleString()} $QUARK
              </div>
              <div className="text-[10px] text-neutral-400 mt-1">
                Direct economic alignment with real compute volume.
              </div>
            </div>
          </div>

          {/* Flywheel Breakdown */}
          <div className="p-3.5 border border-[#202a35] bg-[#0e1319] text-xs font-serif text-[#cbd5e1] leading-relaxed space-y-2">
            <p>
              <strong>1. Collateral Staking:</strong> Hardware providers stake $QUARK bonds before accepting workloads. Drop rates and invalid proofs result in automatic slashing.
            </p>
            <p>
              <strong>2. Demand Settlement:</strong> Developers rent compute at discounted rates using $QUARK, bypassing centralized cloud markups.
            </p>
            <p>
              <strong>3. Deflationary Engine:</strong> Every workload burns 15% of the protocol fee, shrinking the token supply proportionally to supercomputer utilization.
            </p>
          </div>
        </div>
      )}

      {/* --- Interactive Workload Switcher & Bottom Controls --- */}
      <div className="p-3 sm:p-4 border-t border-[#1c242f] bg-[#0e1319] flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[10px] text-neutral-400 uppercase font-bold tracking-wider">
            SWITCH WORKLOAD:
          </span>
          {WORKLOAD_SCENARIOS.map((scenario, idx) => (
            <button
              key={scenario.jobId}
              onClick={() => {
                setJobIndex(idx);
                setStepStage(0);
              }}
              className={`px-2.5 py-1 text-[11px] border transition-all cursor-pointer ${
                jobIndex === idx
                  ? 'bg-[#1d2734] text-[#4ade80] border-[#4ade80] font-bold'
                  : 'bg-[#11161d] text-neutral-400 border-[#232f3d] hover:text-[#f3f4f6]'
              }`}
            >
              {scenario.type.split(' ')[0]}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="px-3 py-1 bg-[#151c24] border border-[#283545] hover:bg-[#1e2733] text-neutral-300 text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <span className={`w-1.5 h-1.5 rounded-full ${isPlaying ? 'bg-[#4ade80]' : 'bg-amber-400'}`}></span>
            {isPlaying ? 'PAUSE' : 'RESUME'}
          </button>
          
          <button
            onClick={() => {
              setJobIndex((idx) => (idx + 1) % WORKLOAD_SCENARIOS.length);
              setStepStage(0);
              setEpochCount((c) => c + 1);
            }}
            className="px-3 py-1 bg-[#4ade80] text-[#05180f] font-bold text-xs hover:bg-[#22c55e] transition-colors cursor-pointer shadow-[0_0_10px_rgba(74,222,128,0.25)]"
          >
            NEXT WORKLOAD →
          </button>
        </div>
      </div>

    </div>
  );
}
