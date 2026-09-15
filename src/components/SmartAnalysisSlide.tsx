import React from 'react';
import { SlideData } from '../types';
import {
  BarChart3,
  LineChart,
  Sparkles,
  Activity,
  AlertTriangle,
  FolderTree,
  Send,
  HelpCircle,
  TrendingUp,
  FileSpreadsheet,
  CheckCircle2
} from 'lucide-react';

export const SmartAnalysisSlide: React.FC<{ slide: SlideData }> = ({ slide }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-5 md:p-7 bg-slate-900 text-white overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="shrink-0 relative z-10">
        <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold tracking-wider uppercase mb-0.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>10 / 运营统计与运行监控</span>
        </div>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight">
          平台感知中枢：全域运营统计与实时运行监控
        </h2>
        <p className="text-xs md:text-sm text-blue-200/80 mt-0.5">
          核心定位：构筑平台“全局统计看板 + 全栈运行监控 + 智能问数报告”三位一体的数字化感知体系
        </p>
      </div>

      {/* Combined Unified Layout (No tabs, direct side-by-side co-existence) */}
      <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-3.5 max-w-6xl mx-auto w-full relative z-10 py-1">
        {/* Module A: 运营统计看板体系 (Left 6 cols) */}
        <div className="lg:col-span-6 flex flex-col justify-between p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 shadow-md">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-slate-700/70 mb-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-cyan-300">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white leading-tight">
                    全域运营统计看板体系
                  </h3>
                  <span className="text-[10px] text-slate-400">
                    资产·供给·使用·异议 四大板块指标联动
                  </span>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded bg-blue-900/50 border border-blue-500/40 text-cyan-300 text-[10px] font-semibold">
                管理运营视角
              </span>
            </div>

            {/* 4 Pillars Grid (Presenting platform capability, NOT fake statistics) */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-700/60 flex flex-col justify-between">
                <div className="flex items-center gap-1.5 text-blue-300 font-semibold mb-1">
                  <FolderTree className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="text-xs">数据目录统计模块</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-snug">
                  涵盖编目总量、各部门编目进度、目录服务挂载率及全域元数据结构分布。
                </p>
                <div className="mt-2 text-[10px] text-slate-400 border-t border-slate-800 pt-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                  <span>支撑编目归集考核</span>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-700/60 flex flex-col justify-between">
                <div className="flex items-center gap-1.5 text-blue-300 font-semibold mb-1">
                  <Send className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="text-xs">服务与供给统计模块</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-snug">
                  聚合API接口、自助分析集、安全共享库多源供给服务发布与上架运行态势。
                </p>
                <div className="mt-2 text-[10px] text-slate-400 border-t border-slate-800 pt-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                  <span>多模交付供给全景</span>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-700/60 flex flex-col justify-between">
                <div className="flex items-center gap-1.5 text-blue-300 font-semibold mb-1">
                  <TrendingUp className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="text-xs">申请使用统计模块</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-snug">
                  汇聚跨部门需求申请频次、场景审核流转周期、部门授权通过率与流通热度。
                </p>
                <div className="mt-2 text-[10px] text-slate-400 border-t border-slate-800 pt-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                  <span>要素流通流向追踪</span>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-700/60 flex flex-col justify-between">
                <div className="flex items-center gap-1.5 text-blue-300 font-semibold mb-1">
                  <HelpCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="text-xs">数据异议统计模块</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-snug">
                  记录各用数部门反馈的质量缺陷、纠错工单响应时效与整改闭环情况。
                </p>
                <div className="mt-2 text-[10px] text-slate-400 border-t border-slate-800 pt-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                  <span>数据质量闭环反哺</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3 p-2 rounded-lg bg-blue-950/40 border border-blue-800/40 flex items-center justify-between text-[11px] text-blue-200">
            <span>支持按“业务部门口径”与“行政区划口径”双重视角自由切换与多级图表穿透下钻</span>
            <span className="text-cyan-400 font-semibold shrink-0 ml-2">双口径下钻</span>
          </div>
        </div>

        {/* Module B: 实时运行监控看板体系 (Right 6 cols) */}
        <div className="lg:col-span-6 flex flex-col justify-between p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 shadow-md">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-slate-700/70 mb-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300">
                  <LineChart className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white leading-tight">
                    服务运行监控与韧性保障体系
                  </h3>
                  <span className="text-[10px] text-slate-400">
                    秒级监测·告警定位·安全流转审计
                  </span>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-[10px] font-semibold">
                技术运维视角
              </span>
            </div>

            {/* Monitoring Capability Blocks */}
            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-700/60 flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-md bg-blue-900/40 border border-blue-600/30 flex items-center justify-center text-cyan-300 shrink-0 mt-0.5">
                  <Activity className="w-3.5 h-3.5" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-white text-xs">全链路服务调用态势感知</div>
                  <div className="text-[11px] text-slate-300 leading-snug mt-0.5">
                    实时监测全域 API 服务并发量、QPS 吞吐峰值、响应时延分布与跨网络链路通畅度。
                  </div>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-700/60 flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-md bg-amber-900/40 border border-amber-600/30 flex items-center justify-center text-amber-300 shrink-0 mt-0.5">
                  <AlertTriangle className="w-3.5 h-3.5" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-white text-xs">服务异常预警与 Top 故障快速定位</div>
                  <div className="text-[11px] text-slate-300 leading-snug mt-0.5">
                    根据超时阈值、错误码激增等维度实施多级自动化告警，精准定位故障接口并自动派发运维工单。
                  </div>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-blue-950/40 border border-blue-700/40 flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-md bg-cyan-900/50 border border-cyan-500/40 flex items-center justify-center text-cyan-300 shrink-0 mt-0.5">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-cyan-300 text-xs">AI 智能问数与运行报告生成</div>
                  <div className="text-[11px] text-slate-200 leading-snug mt-0.5">
                    支持面向指标库与监控日志进行自然语言对话式探查，支持一键智能汇总并生成领导决策运营专报。
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3 p-2 rounded-lg bg-cyan-950/40 border border-cyan-800/40 flex items-center justify-between text-[11px] text-cyan-200">
            <span>解决运行状态不透明、故障排查滞后等传统难题，构筑高可用公共数据要素服务防线</span>
            <span className="text-cyan-400 font-semibold shrink-0 ml-2">主动韧性保障</span>
          </div>
        </div>
      </div>

      {/* Slide Footer */}
      <div className="shrink-0 relative z-10 p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/70 flex items-center justify-between text-xs text-slate-300">
        <div className="flex items-center gap-2">
          <FileSpreadsheet className="w-4 h-4 text-cyan-400 shrink-0" />
          <span className="text-slate-300">
            双轮驱动：以全景运营看板指导业务治理优化，以实时监控保障技术高可用，辅以 AI 智能问数实现数据资产洞察闭环。
          </span>
        </div>
        <span className="px-2.5 py-0.5 rounded bg-blue-600/30 border border-blue-400/30 text-cyan-300 font-semibold text-xs whitespace-nowrap ml-4">
          运营监控一体化
        </span>
      </div>
    </div>
  );
};
