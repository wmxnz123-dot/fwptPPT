import React from 'react';
import { SlideData } from '../types';
import { Sparkles, ShieldCheck, Database, Layers, ArrowRight, CheckCircle2 } from 'lucide-react';

export const CoverSlide: React.FC<{ slide: SlideData }> = ({ slide }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 md:p-14 overflow-hidden bg-gradient-to-br from-[#061229] via-[#0b1e42] to-[#082859] text-white">
      {/* Background Subtle Tech Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(31,111,255,0.18),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_75%,rgba(0,180,255,0.12),transparent_45%)] pointer-events-none" />
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Top Bar Header Badge */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs md:text-sm font-medium tracking-wide text-blue-200">政务与公共数据要素运营核心方案</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-blue-300/70 border border-blue-400/20 px-3 py-1 rounded-md bg-blue-900/30">
          <ShieldCheck className="w-4 h-4 text-cyan-400" />
          <span>权威 · 安全 · 可信 · 规范</span>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl my-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-600/30 border border-blue-400/40 text-blue-300 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Product Upgrade Strategy Deck</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
          数据服务平台 <br />
          <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-sky-200 bg-clip-text text-transparent">
            智能化升级方案
          </span>
        </h1>

        <p className="text-base sm:text-xl md:text-2xl text-blue-100/90 font-medium leading-relaxed max-w-3xl">
          AI赋能数据服务全流程：让数据
          <span className="text-cyan-300 font-bold mx-1">更易找</span>、
          <span className="text-cyan-300 font-bold mx-1">更易编</span>、
          <span className="text-cyan-300 font-bold mx-1">更易审</span>、
          <span className="text-cyan-300 font-bold mx-1">更易用</span>、
          <span className="text-cyan-300 font-bold mx-1">更易管</span>
        </p>

        <div className="h-0.5 w-32 bg-gradient-to-r from-cyan-400 to-transparent my-4" />

        <div className="text-xs sm:text-sm text-blue-200/75 flex items-center gap-3">
          <span>核心导向：推动数据服务从传统流程驱动向智能辅助、智能审核、智能分析、智能决策演进</span>
        </div>
      </div>

      {/* Bottom Capabilities Cards Strip */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 pt-4 border-t border-blue-500/20">
        {[
          { label: "更易找", desc: "智能问答助手 / 对话直达", icon: Sparkles },
          { label: "更易编", desc: "两步编制 / 字段智能填充", icon: Database },
          { label: "更易审", desc: "6大指标质检 / 人机协同", icon: ShieldCheck },
          { label: "更易用", desc: "参数智能填充 / 连通测试", icon: Layers },
          { label: "更易管", desc: "多维下钻 / 智能解读分析", icon: CheckCircle2 }
        ].map((item, idx) => (
          <div key={idx} className="p-3 rounded-lg bg-blue-900/40 border border-blue-400/20 backdrop-blur-sm hover:border-blue-400/40 transition-colors">
            <div className="flex items-center gap-2 text-cyan-300 font-semibold text-sm mb-1">
              <item.icon className="w-3.5 h-3.5" />
              <span>{item.label}</span>
            </div>
            <div className="text-xs text-blue-200/70 truncate">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
