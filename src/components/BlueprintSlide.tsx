import React from 'react';
import { SlideData } from '../types';
import { Sparkles, ArrowRight, Search, FileEdit, ShieldCheck, Cpu, LineChart, PieChart } from 'lucide-react';

export const BlueprintSlide: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const steps = [
    {
      num: "01",
      phase: "用户找数",
      icon: Search,
      tag: "更易找",
      features: ["智能问答助手", "智能搜索增强", "数据资源推荐", "数据篮一键直达"],
      effect: "对话找数，告别层级盲找"
    },
    {
      num: "02",
      phase: "数据编目",
      icon: FileEdit,
      tag: "更易编",
      features: ["两步式编制向导", "目录基本信息生成", "信息项智能填充", "分步录入与送审"],
      effect: "降低录入成本与出错率"
    },
    {
      num: "03",
      phase: "数据审核",
      icon: ShieldCheck,
      tag: "更易审",
      features: ["目录审核六项质检", "数据更新审核", "服务上线审核", "需求审核闭环"],
      effect: "机器预审+人工复核"
    },
    {
      num: "04",
      phase: "数据服务",
      icon: Cpu,
      tag: "更易用",
      features: ["服务参数智能填充", "接口连通性自动化测试", "手动/API多模交付", "标准化测试流程"],
      effect: "确保服务高可用上线"
    },
    {
      num: "05",
      phase: "数据分析",
      icon: LineChart,
      tag: "更易管",
      features: ["监控看板运行总览", "调用趋势/告警Top5", "智能问数分析", "服务异常快速定位"],
      effect: "运行态势全局掌握"
    },
    {
      num: "06",
      phase: "运营决策",
      icon: PieChart,
      tag: "更智能",
      features: ["四大运营板块统计", "部门/区划双口径", "图表联动深度下钻", "智能解读报告生成"],
      effect: "数智化支撑宏观决策"
    }
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 md:p-8 bg-slate-900 text-white overflow-hidden">
      <div>
        <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold tracking-wider uppercase mb-1">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>05 / 智能化升级蓝图</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          {slide.title}
        </h2>
        <p className="text-xs md:text-sm text-blue-200/80 mt-0.5">
          核心观点：{slide.coreView}
        </p>
      </div>

      {/* Blueprint Process Flow */}
      <div className="my-auto w-full max-w-6xl mx-auto">
        {/* Banner Headline */}
        <div className="mb-4 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600/30 via-cyan-500/20 to-blue-600/30 border border-cyan-500/40 text-xs md:text-sm font-semibold text-cyan-200">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>AI不再是独立功能，而是贯穿数据服务全流程的智能能力</span>
          </span>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-2.5">
          {steps.map((st, idx) => (
            <div
              key={idx}
              className="relative p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 hover:border-cyan-500/50 transition-all flex flex-col justify-between group shadow-md"
            >
              {/* Connector Arrow (Desktop) */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 z-20 text-cyan-400/70">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono font-bold text-slate-400 bg-slate-700/50 px-1.5 py-0.5 rounded">
                    {st.num}
                  </span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-500/20 text-cyan-300">
                    {st.tag}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 mb-2.5">
                  <div className="w-6 h-6 rounded bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                    <st.icon className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="text-xs md:text-sm font-bold text-white">
                    {st.phase}
                  </h3>
                </div>

                <div className="space-y-1 mb-3">
                  {st.features.map((f, i) => (
                    <div
                      key={i}
                      className="text-[11px] text-slate-300 bg-slate-900/60 px-2 py-1 rounded border border-slate-700/60 leading-tight"
                    >
                      {f}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-slate-700/60 text-[10px] text-cyan-200/90 font-medium">
                {st.effect}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Blueprint Takeaway */}
      <div className="p-3 rounded-lg bg-blue-950/40 border border-blue-600/30 text-xs md:text-sm text-blue-200 flex items-center justify-between">
        <span className="font-semibold text-cyan-300">蓝图成效：</span>
        <span className="text-slate-200">
          全业务链路深度串联，打通“找数易、编目准、把关严、交付稳、研判清”的数智一体化运行新模式。
        </span>
        <span className="text-cyan-400 text-xs font-semibold">全链赋能 · 业务闭环</span>
      </div>
    </div>
  );
};
