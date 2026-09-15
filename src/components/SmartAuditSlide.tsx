import React, { useState } from 'react';
import { SlideData } from '../types';
import { ShieldCheck, AlertCircle, CheckCircle, XCircle, ArrowRight, FileCheck, Layers, Bot, UserCheck } from 'lucide-react';

export const SmartAuditSlide: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [selectedAuditTab, setSelectedAuditTab] = useState<'catalog' | 'update' | 'service' | 'demand'>('catalog');

  const auditModules = [
    { key: 'catalog', name: '目录审核', desc: '规范发布、变更和下线操作，内置6项智能质量检查' },
    { key: 'update', name: '数据更新审核', desc: '监控数据源更新详情，防止随意更新导致下游不一致' },
    { key: 'service', name: '服务审核', desc: '审核服务上线质量与协议规范，杜绝不合格服务上线' },
    { key: 'demand', name: '需求审核', desc: '提供方对需求方申请智能预审与闭环响应，解决无人跟进' }
  ];

  const catalogCheckItems = [
    { name: "低容量数据", desc: "检测记录数极低或虚挂的空表，防止无效资产占用空间", status: "通过", color: "text-emerald-400" },
    { name: "高空缺数据", desc: "智能计算各字段缺失率，严防关键信息空值超标", status: "预警", color: "text-amber-400", alert: "字段 [ent_phone] 空值率 42%" },
    { name: "重复数据", desc: "多源排重比对，发现已有同名或结构重叠数据集", status: "通过", color: "text-emerald-400" },
    { name: "碎片化数据", desc: "排查过度细分、关联价值薄弱的孤岛零散表", status: "通过", color: "text-emerald-400" },
    { name: "个人隐私保护", desc: "深度扫描身份证号、手机号、家庭住址等敏感信息项", status: "合规", color: "text-emerald-400" },
    { name: "数据摘要丰富度", desc: "评估业务释义、使用场景说明完整性，防敷衍提交", status: "优良", color: "text-emerald-400" }
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 md:p-8 bg-slate-900 text-white overflow-hidden">
      <div>
        <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold tracking-wider uppercase mb-1">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>08 / 智能审核升级</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          {slide.title}
        </h2>
        <p className="text-xs md:text-sm text-blue-200/80 mt-0.5">
          核心观点：{slide.coreView}
        </p>
      </div>

      {/* Main Audit Framework Grid */}
      <div className="my-auto grid grid-cols-1 md:grid-cols-12 gap-3.5 max-w-6xl mx-auto w-full items-stretch">
        {/* Left Column: 4 Audit Scenarios */}
        <div className="md:col-span-4 flex flex-col justify-between p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80">
          <div>
            <div className="flex items-center justify-between border-b border-slate-700 pb-2 mb-2.5">
              <span className="text-xs font-bold text-slate-300">四大智能审核工作台</span>
              <span className="text-[10px] text-cyan-400 font-mono">全流程把关</span>
            </div>

            <div className="space-y-2">
              {auditModules.map((m) => (
                <button
                  key={m.key}
                  onClick={() => setSelectedAuditTab(m.key as any)}
                  className={`w-full p-2.5 rounded-lg border text-left transition-all ${
                    selectedAuditTab === m.key
                      ? 'bg-blue-600/30 border-cyan-400 text-white shadow-md'
                      : 'bg-slate-900/50 border-slate-700/60 text-slate-300 hover:border-slate-600'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold">{m.name}</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-blue-500/20 text-cyan-300">
                      内置智能审核
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400 leading-snug">
                    {m.desc}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-3 p-2 rounded bg-blue-950/40 border border-blue-800/40 text-[11px] text-blue-200">
            <strong>协同机制：</strong> 待审核/已审核统一归集，一键通过或驳回并可退回附具修改意见。
          </div>
        </div>

        {/* Right Column: AI Pre-audit + Human Verification Mechanism */}
        <div className="md:col-span-8 p-3.5 rounded-xl bg-gradient-to-br from-slate-900 via-blue-950/40 to-slate-900 border border-blue-500/40 shadow-xl flex flex-col justify-between">
          <div>
            {/* Model Title */}
            <div className="flex items-center justify-between border-b border-slate-700/80 pb-2 mb-3">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold text-xs">
                  人机协同双层模型
                </span>
                <span className="text-xs text-slate-300 font-semibold">
                  {selectedAuditTab === 'catalog' ? '目录智能审核工作台（6项质检标尺）' : `${auditModules.find(m => m.key === selectedAuditTab)?.name}详情`}
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <span className="flex items-center gap-1 text-cyan-300 font-medium">
                  <Bot className="w-3.5 h-3.5" /> 机器预审出结论
                </span>
                <span>→</span>
                <span className="flex items-center gap-1 text-blue-200 font-medium">
                  <UserCheck className="w-3.5 h-3.5" /> 人工复核终审
                </span>
              </div>
            </div>

            {/* 6 Inspection Items in Catalog Audit */}
            {selectedAuditTab === 'catalog' ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {catalogCheckItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/80 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-xs text-white">{item.name}</span>
                        <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded bg-slate-900 ${item.color}`}>
                          {item.status}
                        </span>
                      </div>
                      <div className="text-[10px] text-slate-400 leading-snug">
                        {item.desc}
                      </div>
                    </div>
                    {item.alert && (
                      <div className="mt-2 text-[9px] text-amber-300 bg-amber-950/40 p-1 rounded border border-amber-800/40">
                        {item.alert}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-4 rounded-lg bg-slate-800/60 border border-slate-700 text-xs space-y-2.5 text-slate-300">
                <div className="font-semibold text-cyan-300">
                  {auditModules.find(m => m.key === selectedAuditTab)?.name} - 智能质检流程：
                </div>
                <div className="space-y-1 text-slate-400">
                  <div>1. 待审申请入池：系统自动抽取更新明细/服务协议/需求场景背景；</div>
                  <div>2. AI智能比对：对版本差异、字段类型、参数可用性进行机审比对；</div>
                  <div>3. 智能结论输出：自动标注潜在冲突项与下游影响分析；</div>
                  <div>4. 人工决断：管理人员根据机审结论进行人工复核，支持通过或驳回并留痕。</div>
                </div>
              </div>
            )}

            {/* Simulated Action Bar */}
            <div className="mt-3 p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between">
              <div className="text-xs text-slate-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>智能结论：存在1项高空缺预警，无隐私违规，建议复核后处置。</span>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1 rounded bg-red-900/40 border border-red-700/60 text-red-300 hover:bg-red-900/70 text-xs font-semibold">
                  驳回修改
                </button>
                <button className="px-3 py-1 rounded bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold">
                  通过上架
                </button>
              </div>
            </div>
          </div>

          <div className="mt-2 text-[11px] text-slate-400 text-right">
            实现发布、变更、下线合规可控，彻底改变传统肉眼审核标准不一与效率低下的瓶颈。
          </div>
        </div>
      </div>

      {/* Summary Footer */}
      <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700 text-xs text-slate-300 flex items-center justify-between">
        <span className="text-blue-300 font-medium">核心把关理念：</span>
        <span className="text-slate-300">“机器负责全面发现问题，人负责业务最终判断” —— 质检标准化、审核无死角。</span>
        <span className="text-cyan-400 text-xs font-semibold">6项质检 · 人机协同</span>
      </div>
    </div>
  );
};
