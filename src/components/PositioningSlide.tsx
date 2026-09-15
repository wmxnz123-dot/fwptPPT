import React from 'react';
import { SlideData } from '../types';
import { Sparkles, Network, Compass, ShieldCheck, Zap } from 'lucide-react';

export const PositioningSlide: React.FC<{ slide: SlideData }> = ({ slide }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-8 md:p-10 bg-slate-900 text-white overflow-hidden">
      {/* Background Accent Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-6 right-8 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Slide Header */}
      <div className="shrink-0 relative z-10">
        <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold tracking-wider uppercase mb-1">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>02 / 平台总体定位</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          平台定位：新一代智能化公共数据运营与服务中枢
        </h2>
        <p className="text-xs sm:text-sm text-blue-200/80 mt-1">
          以数据要素为资产基座，以AI大模型为创新引擎，实现“汇、编、审、用、管”全链智能化人机协同
        </p>
      </div>

      {/* Core Positioning Narrative Card - Wider width and more compact height */}
      <div className="relative z-10 max-w-6xl mx-auto my-auto w-full py-0.5">
        <div className="relative px-6 py-4 sm:px-8 sm:py-5 md:px-9 md:py-5 rounded-xl bg-gradient-to-br from-slate-800/95 via-blue-950/70 to-slate-900/95 border border-blue-500/30 shadow-xl backdrop-blur-md">
          {/* Top Bar: Badge & Key Note */}
          <div className="flex items-center justify-between mb-2.5">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-[11px] font-semibold">
              <Sparkles className="w-3 h-3 text-cyan-300" />
              <span>核心定位诠释</span>
            </div>
            <span className="text-[11px] text-slate-400 hidden sm:inline-block">
              国家数据基础设施理念 · 业务制度与认知智能融合
            </span>
          </div>

          {/* Clean, authoritative single-paragraph definition with refined typography */}
          <p className="text-sm sm:text-base md:text-[16px] text-slate-100 font-normal leading-relaxed md:leading-[1.6] tracking-normal text-justify">
            本平台定位为<span className="text-cyan-300 font-medium px-0.5">全域公共数据要素集约汇聚、规范加工、敏捷供给与智能运营的关键枢纽</span>。
            平台以三定职责与业务系统为权威底座，深度融入大模型原生认知智能，贯通
            <span className="text-blue-300 font-medium px-0.5">“资产普查 ➔ 智能编目 ➔ 质量机审 ➔ 敏捷交付 ➔ 运营问数”</span>
            全生命周期，推动公共数据服务从传统的“纯人工、单向流转、流程驱动”全面跃升为
            <span className="text-cyan-300 font-medium px-0.5">“数据要素高效流通、全流程人机协同”</span>
            的新一代数智运营中枢。
          </p>

          {/* Three Key Architectural Anchors */}
          <div className="mt-3.5 pt-3 border-t border-slate-700/60 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
            <div className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-900/70 border border-slate-700/60 hover:border-blue-500/40 transition-colors">
              <div className="w-7 h-7 rounded-md bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-cyan-300 shrink-0">
                <Network className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-white truncate">统一要素流通枢纽</div>
                <div className="text-[10px] text-slate-400 truncate">打破部门壁垒 · 畅通供需大动脉</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-900/70 border border-slate-700/60 hover:border-cyan-500/40 transition-colors">
              <div className="w-7 h-7 rounded-md bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 shrink-0">
                <Zap className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-white truncate">AI大模型原生使能</div>
                <div className="text-[10px] text-slate-400 truncate">全链路人机协同 · 认知级减负提质</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-900/70 border border-slate-700/60 hover:border-indigo-500/40 transition-colors">
              <div className="w-7 h-7 rounded-md bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300 shrink-0">
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-white truncate">制度与安全双闭环</div>
                <div className="text-[10px] text-slate-400 truncate">三定权威绑定 · 机器初审与人工终审</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Anchoring Bar */}
      <div className="shrink-0 relative z-10 p-2.5 sm:p-3 rounded-xl bg-slate-800/60 border border-slate-700/70 flex items-center justify-between text-xs text-slate-300">
        <div className="flex items-center gap-2">
          <Compass className="w-4 h-4 text-cyan-400 shrink-0" />
          <span className="text-slate-300 text-[11px] sm:text-xs">
            从“建系统、搭流程”走向“营数据、促流通”，打造公共数据资源体系与新质生产力融合发展的标杆工程。
          </span>
        </div>
        <span className="hidden sm:inline-block px-2.5 py-1 rounded bg-blue-600/30 border border-blue-400/30 text-cyan-300 font-semibold text-xs whitespace-nowrap ml-4">
          智能驱动 · 全域协同
        </span>
      </div>
    </div>
  );
};
