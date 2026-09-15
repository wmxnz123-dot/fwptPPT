import React from 'react';
import { SlideData } from '../types';
import { ArrowRight, UserCheck, Bot, Check, Sparkles, RefreshCcw } from 'lucide-react';

export const PositioningSlide: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const comparisons = [
    {
      stage: "找数体验",
      traditional: "人工翻找层级目录、关键词机械匹配，易漏查且认知成本高",
      intelligent: "全站悬浮智能问答助手，自然语言问数，智能推荐与数据篮直达",
      tag: "更易找"
    },
    {
      stage: "目录编目",
      traditional: "多字段全人工肉眼逐项手工填报，重复率高、耗时长且易错",
      intelligent: "两步式标准目录编制，基本信息与信息项字段智能生成与自动填充",
      tag: "更易编"
    },
    {
      stage: "上架审核",
      traditional: "目录/更新/服务/需求依赖人工逐行审查，标准难统一、效率低",
      intelligent: "AI预审内置多项质检指标筛查问题，输出机审结论并由人工复核决断",
      tag: "更易审"
    },
    {
      stage: "服务交付",
      traditional: "服务配置参数手动联调，交付操作复杂效率低周期长。",
      intelligent: "智能新增/填充参数配置，规范化参数映射与校验，支持手动与API双模交付",
      tag: "更易用"
    },
    {
      stage: "运营分析",
      traditional: "运营数据散落孤立，业务人员需手工统计拉表，缺乏全局洞察",
      intelligent: "四大板块统计看板联动，内置智能助手提供数据智能统计问数与报告生成",
      tag: "更易管"
    }
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-5 md:p-8 bg-slate-900 text-white overflow-hidden">
      {/* Slide Header */}
      <div className="shrink-0">
        <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold tracking-wider uppercase mb-0.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>02 / 产品定位变革</span>
        </div>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight">
          {slide.title}
        </h2>
        <p className="text-xs md:text-sm text-blue-200/80 mt-0.5">
          核心观点：{slide.coreView}
        </p>
      </div>

      {/* Comparison Grid */}
      <div className="my-auto grid grid-cols-1 gap-1.5 md:gap-2 max-w-5xl mx-auto w-full py-1">
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-2 px-3 py-1.5 bg-blue-950/60 rounded-lg border border-blue-800/40 text-xs font-semibold text-blue-300">
          <div className="col-span-2">业务环节</div>
          <div className="col-span-5 flex items-center gap-1.5 text-slate-400">
            <UserCheck className="w-3.5 h-3.5" />
            <span>传统数据服务模式（流程驱动 / 纯人工主导）</span>
          </div>
          <div className="col-span-5 flex items-center gap-1.5 text-cyan-300">
            <Bot className="w-3.5 h-3.5" />
            <span>智能化数据服务升级（人机协同 / 智能驱动）</span>
          </div>
        </div>

        {/* Rows */}
        {comparisons.map((row, idx) => (
          <div
            key={idx}
            className="grid grid-cols-12 gap-2 px-3 py-2 bg-slate-800/60 rounded-lg border border-slate-700/50 hover:border-blue-500/40 transition-all items-center text-xs"
          >
            <div className="col-span-2 flex items-center gap-1.5">
              <span className="px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 font-medium text-[11px] whitespace-nowrap">
                {row.tag}
              </span>
              <span className="font-semibold text-slate-200 text-xs whitespace-nowrap">{row.stage}</span>
            </div>

            <div className="col-span-5 text-slate-400 leading-tight pr-2 border-r border-slate-700/50 flex items-start gap-1 text-[11px] md:text-xs">
              <span className="text-slate-500 shrink-0 mt-0.5">▪</span>
              <span>{row.traditional}</span>
            </div>

            <div className="col-span-5 text-cyan-100 font-medium leading-tight flex items-start gap-1.5 bg-blue-950/40 p-1.5 rounded border border-blue-700/30 text-[11px] md:text-xs">
              <Sparkles className="w-3 h-3 text-cyan-400 shrink-0 mt-0.5" />
              <span>{row.intelligent}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Footer */}
      <div className="shrink-0 p-2 md:p-2.5 rounded-lg bg-blue-950/40 border border-blue-500/30 flex items-center justify-between text-xs text-blue-200">
        <div className="flex items-center gap-2">
          <RefreshCcw className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span className="font-medium shrink-0">演进本质：</span>
          <span className="text-slate-300 text-[11px] md:text-xs">保留既有数据治理规则，将AI作为常态化智能生产力注入各环节，实现精准减负与质效双增。</span>
        </div>
        <span className="px-2 py-0.5 bg-cyan-500/20 text-cyan-300 rounded font-semibold text-[11px] whitespace-nowrap shrink-0">
          人机协同 · 智能把关
        </span>
      </div>
    </div>
  );
};
