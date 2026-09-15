import React, { useState } from 'react';
import { SlideData } from '../types';
import { BarChart3, LineChart, PieChart, Sparkles, Filter, AlertOctagon, TrendingUp, FileText } from 'lucide-react';

export const SmartAnalysisSlide: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [boardType, setBoardType] = useState<'ops' | 'monitor'>('ops');
  const [scope, setScope] = useState<'dept' | 'region'>('dept');

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 md:p-8 bg-slate-900 text-white overflow-hidden">
      <div>
        <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold tracking-wider uppercase mb-1">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>10 / 智能问数与报告分析</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          {slide.title}
        </h2>
        <p className="text-xs md:text-sm text-blue-200/80 mt-0.5">
          核心观点：{slide.coreView}
        </p>
      </div>

      {/* Main Board Visual */}
      <div className="my-auto w-full max-w-5xl mx-auto space-y-3">
        {/* Toggle Bar between Monitor & Operations Board */}
        <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/80">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setBoardType('ops')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                boardType === 'ops'
                  ? 'bg-blue-600 text-white shadow'
                  : 'bg-slate-900/60 text-slate-400 hover:text-slate-200'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>统计/运营看板（四大板块与指标体系）</span>
            </button>
            <button
              onClick={() => setBoardType('monitor')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                boardType === 'monitor'
                  ? 'bg-blue-600 text-white shadow'
                  : 'bg-slate-900/60 text-slate-400 hover:text-slate-200'
              }`}
            >
              <LineChart className="w-3.5 h-3.5" />
              <span>监控看板（运行监控总览与告警Top5）</span>
            </button>
          </div>

          {/* Scope Toggle */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-400">口径切换：</span>
            <div className="p-0.5 rounded-lg bg-slate-900 border border-slate-700 flex items-center">
              <button
                onClick={() => setScope('dept')}
                className={`px-2 py-0.5 rounded text-[11px] font-medium transition-all ${
                  scope === 'dept' ? 'bg-cyan-500 text-slate-900 font-bold' : 'text-slate-400'
                }`}
              >
                部门口径
              </button>
              <button
                onClick={() => setScope('region')}
                className={`px-2 py-0.5 rounded text-[11px] font-medium transition-all ${
                  scope === 'region' ? 'bg-cyan-500 text-slate-900 font-bold' : 'text-slate-400'
                }`}
              >
                区划口径
              </button>
            </div>
          </div>
        </div>

        {/* Board Content */}
        {boardType === 'ops' ? (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            {/* 4 Operations Sections */}
            <div className="md:col-span-7 grid grid-cols-2 gap-2 text-xs">
              {[
                { title: "数据目录统计", metric: "3,820 条", sub: "服务挂载率 87.5%", tag: "结构分析" },
                { title: "服务统计", metric: "1,240 个", sub: "正常运行率 99.8%", tag: "趋势分析" },
                { title: "申请使用统计", metric: "45,920 次", sub: "本月新增申请 612 件", tag: "部门下钻" },
                { title: "数据异议统计", metric: "18 件", sub: "闭环整改率 100%", tag: "反哺治理" }
              ].map((card, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/80">
                  <div className="flex items-center justify-between text-slate-400 mb-1">
                    <span className="text-[11px] font-semibold">{card.title}</span>
                    <span className="text-[10px] text-cyan-400 bg-cyan-950/60 px-1 py-0.2 rounded border border-cyan-800/40">
                      {card.tag}
                    </span>
                  </div>
                  <div className="text-lg font-bold text-white font-mono">{card.metric}</div>
                  <div className="text-[10px] text-slate-400 mt-1">{card.sub}</div>
                </div>
              ))}

              <div className="col-span-2 p-2 rounded bg-blue-950/40 border border-blue-800/40 text-[11px] text-blue-200 flex items-center justify-between">
                <span>维度支持：全局维度筛选 · 部门与区划口径切换 · 图表联动下钻</span>
                <span className="text-cyan-400 font-semibold">统一运营视图</span>
              </div>
            </div>

            {/* Smart Interpretation Assistant Box */}
            <div className="md:col-span-5 p-3 rounded-xl bg-slate-800/90 border border-cyan-500/40 flex flex-col justify-between text-xs space-y-2">
              <div className="flex items-center gap-2 text-cyan-300 font-bold border-b border-slate-700 pb-1.5">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>内置智能助手：数据解读与分析建议</span>
              </div>

              <div className="p-2.5 rounded bg-slate-900/90 border border-slate-700/80 text-slate-200 text-xs leading-relaxed space-y-1.5">
                <div className="text-[11px] text-cyan-300 font-semibold">
                  【智能月度运行洞察】：
                </div>
                <p className="text-[11px] text-slate-300">
                  本月跨部门调用量环比增长 23%，主要集中在人社局与民政局“综合救助资质联审”场景。目前仍有 3 个边缘目录挂载率偏低，建议督导加快服务上架。
                </p>
                <div className="p-1.5 rounded bg-blue-950/60 text-[10px] text-blue-200 border border-blue-800/40">
                  建议行动：发起第3季度目录专项挂载联调，优先保障高频审批场景。
                </div>
              </div>

              <button className="w-full py-1.5 rounded bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow">
                <FileText className="w-3.5 h-3.5" />
                <span>一键智能生成运营分析报告</span>
              </button>
            </div>
          </div>
        ) : (
          /* Monitor Board View */
          <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 space-y-3 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-700/60">
                <div className="text-slate-400 text-[11px]">调用量总趋势</div>
                <div className="text-lg font-bold text-cyan-300 font-mono mt-1">2,841,200 次</div>
                <div className="text-[10px] text-emerald-400 mt-0.5">平稳运行中 (峰值 480 QPS)</div>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-700/60">
                <div className="text-slate-400 text-[11px]">告警触发与响应</div>
                <div className="text-lg font-bold text-amber-300 font-mono mt-1">4 起告警</div>
                <div className="text-[10px] text-slate-400 mt-0.5">平均响应定位耗时 &lt; 2分钟</div>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-700/60">
                <div className="text-slate-400 text-[11px]">服务告警量 Top 5 快速定位</div>
                <div className="text-[11px] text-slate-300 mt-1 font-mono">
                  1. 医保明细接口 (超时预警) <br />
                  2. 交通违章查询接口 (频次波动)
                </div>
              </div>
            </div>
            <div className="p-2 rounded bg-blue-950/40 border border-blue-800/40 text-[11px] text-blue-200">
              解决服务运行状况缺乏全局视图、异常发现滞后问题，为数据服务稳定运行提供全面监控保障。
            </div>
          </div>
        )}
      </div>

      {/* Summary Footer */}
      <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700 text-xs text-slate-300 flex items-center justify-between">
        <span className="text-blue-300 font-medium">从看数据到理解数据：</span>
        <span className="text-slate-300">
          “问题驱动 → 智能解析 → 结论输出 → 报告生成” —— 让运营数据直接转化为领导决策依据。
        </span>
        <span className="text-cyan-400 text-xs font-semibold">智能解读 · 辅助决策</span>
      </div>
    </div>
  );
};
