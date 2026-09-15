import React from 'react';
import { SlideData } from '../types';
import { Sparkles, ShieldCheck, Compass, Rocket, RefreshCw } from 'lucide-react';

export const OutroSlide: React.FC<{ slide: SlideData }> = ({ slide }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 md:p-12 overflow-hidden bg-gradient-to-br from-[#061229] via-[#0b1e42] to-[#082859] text-white">
      {/* Background Tech Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(31,111,255,0.22),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(0,180,255,0.16),transparent_45%)] pointer-events-none" />
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Top Bar Navigation Info */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold tracking-wider uppercase">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>13 / 结束页 · 携手共进</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-blue-300/80 border border-blue-400/25 px-3 py-1 rounded-md bg-blue-900/30">
          <ShieldCheck className="w-4 h-4 text-cyan-400" />
          <span>政务与公共数据要素运营核心基座</span>
        </div>
      </div>

      {/* Central Thank-You Banner */}
      <div className="relative z-10 max-w-4xl mx-auto my-auto text-center space-y-5">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-600/30 border border-cyan-400/40 text-cyan-300 text-xs font-semibold tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
          <span>THANK YOU FOR LISTENING</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
          感谢聆听 · 携手共创数据新价值
        </h1>

        <div className="p-3.5 sm:p-4 rounded-xl bg-blue-950/60 border border-blue-400/30 max-w-3xl mx-auto backdrop-blur-md shadow-2xl">
          <p className="text-xs sm:text-sm md:text-base text-blue-100/90 font-medium leading-relaxed">
            “让数据服务从<span className="text-cyan-300 font-bold mx-1">流程驱动</span>走向<span className="text-cyan-300 font-bold mx-1">智能驱动</span>，让数据价值更快、更安全、更高效地释放。”
          </p>
        </div>

        {/* 3-Pillar Next Steps / Cooperation Outlook */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto text-left pt-2">
          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700/80 hover:border-cyan-500/40 transition-all">
            <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs mb-1">
              <Rocket className="w-4 h-4" />
              <span>1. 试点先行</span>
            </div>
            <p className="text-[11px] text-slate-300 leading-snug">
              聚焦跨部门高频审批与救助联审场景，率先验证对话找数与自动化连通交付成效。
            </p>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700/80 hover:border-cyan-500/40 transition-all">
            <div className="flex items-center gap-2 text-blue-400 font-bold text-xs mb-1">
              <Compass className="w-4 h-4" />
              <span>2. 全面推开</span>
            </div>
            <p className="text-[11px] text-slate-300 leading-snug">
              贯通各部门两步式智能编目与多项机审质检规则，建立规范化的人机协同常态机制。
            </p>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700/80 hover:border-cyan-500/40 transition-all">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs mb-1">
              <RefreshCw className="w-4 h-4" />
              <span>3. 持续反哺</span>
            </div>
            <p className="text-[11px] text-slate-300 leading-snug">
              依托运营监控看板与智能问数报告，沉淀数据服务知识库，驱动数据资产越用越丰富。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
