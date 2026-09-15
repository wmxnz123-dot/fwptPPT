import React, { useState } from 'react';
import { SlideData } from '../types';
import { Layers, Sparkles, Database, Globe, Cpu, CheckCircle2, Shield } from 'lucide-react';

export const ArchitectureSlide: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [highlightAi, setHighlightAi] = useState(true);

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-5 md:p-8 bg-slate-900 text-white overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold tracking-wider uppercase mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>04 / 平台总体架构</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            {slide.title}
          </h2>
          <p className="text-xs md:text-sm text-blue-200/80 mt-0.5">
            核心观点：{slide.coreView}
          </p>
        </div>

        {/* Toggle AI Layer */}
        <button
          onClick={() => setHighlightAi(!highlightAi)}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all ${
            highlightAi
              ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
              : 'bg-slate-800 border-slate-700 text-slate-400'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>{highlightAi ? '已高亮 AI 智能化嵌入能力' : '点击高亮 AI 嵌入能力'}</span>
        </button>
      </div>

      {/* Main Architecture Visual Container */}
      <div className="my-auto w-full max-w-5xl mx-auto flex flex-col gap-2.5">
        {/* Layer 1: 统一的数据门户 */}
        <div className="relative p-2.5 md:p-3 rounded-xl bg-blue-950/70 border border-blue-500/40 shadow-md">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2 text-blue-300 font-bold text-xs md:text-sm">
              <Globe className="w-4 h-4 text-cyan-400" />
              <span>统一的数据门户</span>
            </div>
            {highlightAi && (
              <span className="text-[11px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-medium border border-cyan-500/30 flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                <span>AI智能升级：智能问答助手 · 语义推荐 · 数据篮直达</span>
              </span>
            )}
          </div>
          <div className="grid grid-cols-5 gap-2 text-center text-xs">
            {['分类查询', '智能搜索', '资源申请', '需求定制', '数据篮'].map((item, idx) => (
              <div
                key={idx}
                className={`py-1.5 px-2 rounded-md font-medium border transition-colors ${
                  item === '智能搜索' || item === '数据篮'
                    ? 'bg-cyan-950/60 border-cyan-500/40 text-cyan-200'
                    : 'bg-slate-800/80 border-slate-700 text-slate-300'
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Layer 2: 数据服务平台 (Core) */}
        <div className="p-3 md:p-4 rounded-xl bg-slate-800/90 border border-blue-600/40 shadow-lg space-y-3">
          <div className="flex items-center justify-between border-b border-slate-700 pb-2">
            <div className="flex items-center gap-2 text-white font-bold text-sm md:text-base">
              <Layers className="w-4 h-4 text-blue-400" />
              <span>数据服务平台</span>
              <span className="text-xs text-blue-300/70 font-normal">（三大服务形态 + 四大基础业务能力）</span>
            </div>
            {highlightAi && (
              <span className="text-[11px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30 flex items-center gap-1">
                <Cpu className="w-3 h-3 text-cyan-400" />
                <span>嵌入式AI：智能编目 · 智能审核 · 智能交付 · 智能问数</span>
              </span>
            )}
          </div>

          {/* 3 Service Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
            {/* API服务 */}
            <div className="p-2.5 rounded-lg bg-blue-950/50 border border-blue-800/50">
              <div className="flex items-center justify-between text-xs font-bold text-blue-300 mb-1.5">
                <span>API服务</span>
                {highlightAi && <span className="text-[10px] text-cyan-300">AI审核/监控</span>}
              </div>
              <div className="grid grid-cols-2 gap-1.5 text-center text-xs">
                {['服务申请', '服务审核', '服务授权', '服务监控'].map((s, i) => (
                  <div
                    key={i}
                    className={`py-1 rounded border text-[11px] ${
                      highlightAi && (s === '服务审核' || s === '服务监控')
                        ? 'bg-cyan-900/40 border-cyan-500/40 text-cyan-200 font-semibold'
                        : 'bg-slate-800/60 border-slate-700 text-slate-300'
                    }`}
                  >
                    {s}
                  </div>
                ))}
              </div>
            </div>

            {/* 自助分析服务 */}
            <div className="p-2.5 rounded-lg bg-blue-950/50 border border-blue-800/50">
              <div className="text-xs font-bold text-blue-300 mb-1.5">自助分析服务</div>
              <div className="grid grid-cols-2 gap-1.5 text-center text-xs">
                {['租户申请', '数据集订阅', '资源申请', '模型发布'].map((s, i) => (
                  <div key={i} className="py-1 rounded bg-slate-800/60 border border-slate-700 text-slate-300 text-[11px]">
                    {s}
                  </div>
                ))}
              </div>
            </div>

            {/* 安全共享服务 */}
            <div className="p-2.5 rounded-lg bg-blue-950/50 border border-blue-800/50">
              <div className="text-xs font-bold text-blue-300 mb-1.5">安全共享服务</div>
              <div className="grid grid-cols-2 gap-1.5 text-center text-xs">
                {['环境申请', '模型开发', '数据申请', '结果获取'].map((s, i) => (
                  <div key={i} className="py-1 rounded bg-slate-800/60 border border-slate-700 text-slate-300 text-[11px]">
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 4 Core Business Pillars */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-1">
            {[
              {
                title: "资产普查",
                items: ['三定职责', '政务事项', '三清单', '政务系统'],
                aiTag: null
              },
              {
                title: "目录管理",
                items: ['目录编制', '目录审核', '目录变更', '目录发布'],
                aiTag: "AI两步编目/质检"
              },
              {
                title: "服务管理",
                items: ['服务开发', '服务审核', '服务配置', '服务测试'],
                aiTag: "AI服务审核/配置/测试"
              },
              {
                title: "供需对接",
                items: ['需求管理', '供给管理', '供需审核', '场景管理'],
                aiTag: "AI供需智能审核"
              }
            ].map((pillar, idx) => (
              <div key={idx} className="p-2 rounded-lg bg-slate-900/60 border border-slate-700">
                <div className="flex items-center justify-between text-xs font-bold text-slate-200 mb-1">
                  <span>{pillar.title}</span>
                  {highlightAi && pillar.aiTag && (
                    <span className="text-[10px] text-cyan-300 font-mono">
                      {pillar.aiTag}
                    </span>
                  )}
                </div>
                <div className={`grid ${pillar.items.length === 3 ? 'grid-cols-3' : 'grid-cols-2'} gap-1 text-[11px] text-center`}>
                  {pillar.items.map((item, i) => (
                    <div
                      key={i}
                      className={`py-0.5 rounded border ${
                        highlightAi && (item.includes('编制') || item.includes('审核') || item.includes('配置') || item.includes('测试'))
                          ? 'bg-blue-900/40 border-cyan-500/30 text-cyan-100 font-medium'
                          : 'bg-slate-800/40 border-slate-700/60 text-slate-400'
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Layer 3: 天枢数据治理平台 (Bottom Foundation) */}
        <div className="p-2.5 rounded-xl bg-blue-950/80 border border-blue-500/40 flex items-center justify-between text-xs md:text-sm">
          <div className="flex items-center gap-2 text-cyan-300 font-bold">
            <Database className="w-4 h-4 text-cyan-400" />
            <span>天枢数据治理平台</span>
            <span className="text-xs text-blue-200/70 font-normal">（元数据管理 · 物理数据源治理 · 规则底座）</span>
          </div>
          <div className="text-xs text-blue-300/80 flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-cyan-400" />
            <span>架构准则：不改底层治理、不立独立烟囱、业务系统无缝融合</span>
          </div>
        </div>
      </div>

      {/* Footer explanation */}
      <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700 text-xs text-slate-300 flex items-center justify-between">
        <span className="text-blue-300 font-medium">架构核心表达：</span>
        <span>AI不是另建一个独立的AI平台，而是作为即插即用的智能能力嵌入既有数据服务体系。</span>
        <span className="text-cyan-400 font-semibold">平滑升级 · 原生增强</span>
      </div>
    </div>
  );
};
