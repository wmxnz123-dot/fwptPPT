import React from 'react';
import { SlideData } from '../types';
import { RefreshCw, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export const ClosedLoopSlide: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const loopNodes = [
    { name: "1. 智能找数", role: "智能问答助手 / 资源推荐", tag: "需求发现" },
    { name: "2. 场景申请", role: "一场景一申请 / 数据篮直达", tag: "合规发起" },
    { name: "3. 规范编目", role: "两步式编制 / 字段智能填充", tag: "源头治理" },
    { name: "4. 智能审核", role: "6项质检预审 / 人机协同审核", tag: "严格把关" },
    { name: "5. 标准交付", role: "参数配置 / 连通性自动化测试", tag: "高可用性" },
    { name: "6. 安全使用", role: "Token授权管理 / 审计留痕", tag: "受控流通" },
    { name: "7. 运行监控", role: "监控看板 / 告警Top5精准定位", tag: "韧性保障" },
    { name: "8. 分析反哺", role: "统计看板 / 智能数据解读报告", tag: "以需促治" }
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 md:p-8 bg-slate-900 text-white overflow-hidden">
      <div>
        <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold tracking-wider uppercase mb-1">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>11 / 智能化数据服务闭环</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          {slide.title}
        </h2>
        <p className="text-xs md:text-sm text-blue-200/80 mt-0.5">
          核心观点：{slide.coreView}
        </p>
      </div>

      {/* Closed Loop Visual Graph */}
      <div className="my-auto w-full max-w-5xl mx-auto space-y-4">
        {/* Central Banner */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/40 border border-cyan-500/40 text-xs md:text-sm font-semibold text-cyan-300">
            <RefreshCw className="w-3.5 h-3.5 animate-spin text-cyan-400" style={{ animationDuration: '8s' }} />
            <span>数据发现 — 数据治理 — 数据服务 — 数据使用 — 数据运营 全链路智能化自循环</span>
          </div>
        </div>

        {/* 8 Nodes Grid in Loop Topology */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {loopNodes.map((node, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 hover:border-cyan-500/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-900 text-slate-400">
                    Node {idx + 1}
                  </span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-blue-500/20 text-cyan-300 font-medium">
                    {node.tag}
                  </span>
                </div>
                <div className="text-xs md:text-sm font-bold text-white mb-1">
                  {node.name}
                </div>
                <div className="text-[11px] text-slate-400 leading-snug">
                  {node.role}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closed-loop Core Dynamics Card */}
        <div className="p-3.5 rounded-xl bg-gradient-to-r from-blue-950/60 via-slate-800/80 to-blue-950/60 border border-blue-500/40 text-xs space-y-1.5">
          <div className="font-bold text-cyan-300 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>双向反哺与持续进化机制：</span>
          </div>
          <div className="text-slate-300 leading-relaxed text-[11px] grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <strong className="text-white">正向赋能：</strong> 找数与申请驱动数据编目与服务上线，AI审核与自动化连通测试严守入库门槛，保障下游安全可靠调用。
            </div>
            <div>
              <strong className="text-white">逆向反哺：</strong> 运营看板与监控告警所沉淀的使用数据及异议反馈，自动反哺指导目录质量整改与高频服务扩容优化。
            </div>
          </div>
        </div>
      </div>

      {/* Summary Footer */}
      <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700 text-xs text-slate-300 flex items-center justify-between">
        <span className="text-blue-300 font-medium">闭环最终形态：</span>
        <span className="text-slate-300">
          “需求驱动供给、供给支撑应用、运营反哺治理” —— 数据服务平台从单向孤立运转迈入智能化自驱生态。
        </span>
        <span className="text-cyan-400 text-xs font-semibold">全链闭环 · 自我演进</span>
      </div>
    </div>
  );
};
