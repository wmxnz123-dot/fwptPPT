import React, { useState } from 'react';
import { SlideData } from '../types';
import { Sparkles, Check, ArrowRight, FileText, ListOrdered, CheckCircle2 } from 'lucide-react';

export const SmartCatalogSlide: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [activeStep, setActiveStep] = useState<1 | 2>(1);

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 md:p-8 bg-slate-900 text-white overflow-hidden">
      <div>
        <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold tracking-wider uppercase mb-1">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>07 / 智能编目升级</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          {slide.title}
        </h2>
        <p className="text-xs md:text-sm text-blue-200/80 mt-0.5">
          核心观点：{slide.coreView}
        </p>
      </div>

      {/* Two-step Cataloging Workspace Simulation */}
      <div className="my-auto w-full max-w-5xl mx-auto bg-slate-800/90 rounded-xl border border-slate-700/80 p-4 shadow-xl">
        {/* Step Indicator Tabs */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <button
            onClick={() => setActiveStep(1)}
            className={`p-2.5 rounded-lg border text-left flex items-center justify-between transition-all ${
              activeStep === 1
                ? 'bg-blue-600/30 border-cyan-400 text-white shadow-md'
                : 'bg-slate-900/60 border-slate-700 text-slate-400 hover:text-slate-200'
            }`}
          >
            <div className="flex items-center gap-2">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                activeStep === 1 ? 'bg-cyan-500 text-slate-900' : 'bg-slate-700 text-slate-300'
              }`}>
                1
              </span>
              <div>
                <div className="text-xs font-bold">第一步：数据资源目录维护</div>
                <div className="text-[10px] text-slate-400">目录基本信息、所属主题、共享属性与数据摘要填报</div>
              </div>
            </div>
            <span className="text-[10px] text-cyan-400 font-mono">智能辅助生成摘要</span>
          </button>

          <button
            onClick={() => setActiveStep(2)}
            className={`p-2.5 rounded-lg border text-left flex items-center justify-between transition-all ${
              activeStep === 2
                ? 'bg-blue-600/30 border-cyan-400 text-white shadow-md'
                : 'bg-slate-900/60 border-slate-700 text-slate-400 hover:text-slate-200'
            }`}
          >
            <div className="flex items-center gap-2">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                activeStep === 2 ? 'bg-cyan-500 text-slate-900' : 'bg-slate-700 text-slate-300'
              }`}>
                2
              </span>
              <div>
                <div className="text-xs font-bold">第二步：信息项维护</div>
                <div className="text-[10px] text-slate-400">物理字段映射、字段中文名、技术类型及脱敏建议</div>
              </div>
            </div>
            <span className="text-[10px] text-cyan-400 font-mono">字段智能预测填充</span>
          </button>
        </div>

        {/* Step Content Preview */}
        {activeStep === 1 ? (
          <div className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-700/80 space-y-3">
            <div className="flex items-center justify-between text-xs font-semibold text-blue-300 border-b border-slate-800 pb-2">
              <span>【步骤 1】数据资源目录基本信息填报与智能生成</span>
              <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                <span>AI智能辅助已就绪</span>
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="space-y-1">
                <label className="text-slate-400 text-[11px]">数据资源目录名称 *</label>
                <div className="p-2 rounded bg-slate-800 border border-slate-700 text-white font-medium">
                  市级科技型中小企业创新扶持项目资助清单
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-slate-400 text-[11px]">所属领域与数据分类 *</label>
                <div className="p-2 rounded bg-slate-800 border border-slate-700 text-slate-300">
                  科技创新 / 财政补贴 / 有条件无偿共享
                </div>
              </div>

              <div className="col-span-2 space-y-1">
                <div className="flex items-center justify-between">
                  <label className="text-slate-400 text-[11px]">数据摘要与使用说明 *</label>
                  <span className="text-[10px] text-cyan-300 flex items-center gap-1 font-semibold">
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                    <span>AI辅助生成建议已采纳（丰富度95分）</span>
                  </span>
                </div>
                <div className="p-2.5 rounded bg-blue-950/40 border border-cyan-500/30 text-cyan-100 text-xs leading-relaxed">
                  本数据资源归集了全市近三年来获得市级科技创新券及重大科技成果转化资金资助的企业名单、项目编号、立项年度、资助金额及企业信用代码，主要用于跨部门协同审核与企业政策兑现核验。
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-700/80 space-y-2.5">
            <div className="flex items-center justify-between text-xs font-semibold text-blue-300 border-b border-slate-800 pb-2">
              <span>【步骤 2】信息项字段维护（智能自动填充与语义映射）</span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded flex items-center gap-1">
                <Check className="w-3 h-3" />
                <span>已智能补全 6/6 个技术属性</span>
              </span>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="text-[11px] text-slate-400 bg-slate-800/80 uppercase">
                  <tr>
                    <th className="p-2">物理字段名</th>
                    <th className="p-2">信息项中文名 (AI预测)</th>
                    <th className="p-2">数据类型</th>
                    <th className="p-2">是否主键</th>
                    <th className="p-2">安全脱敏建议</th>
                    <th className="p-2">智能填充状态</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-200">
                  {[
                    { field: 'ent_uscc', name: '统一社会信用代码', type: 'VARCHAR(18)', pk: '是', mask: '不可脱敏(主键)', status: '已填充' },
                    { field: 'ent_name', name: '企业法定注册名称', type: 'VARCHAR(100)', pk: '否', mask: '公开明文', status: '已填充' },
                    { field: 'grant_amount', name: '资助扶持金额(万元)', type: 'DECIMAL(12,2)', pk: '否', mask: '数值格式校验', status: '已填充' },
                    { field: 'legal_phone', name: '企业联系人手机号', type: 'VARCHAR(11)', pk: '否', mask: '前3后4脱敏建议', status: '已填充' }
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/40">
                      <td className="p-2 font-mono text-slate-400">{row.field}</td>
                      <td className="p-2 font-medium text-white flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-cyan-400" />
                        <span>{row.name}</span>
                      </td>
                      <td className="p-2 text-slate-300">{row.type}</td>
                      <td className="p-2">{row.pk === '是' ? <span className="text-cyan-400 font-bold">PK</span> : '-'}</td>
                      <td className="p-2 text-amber-300/90">{row.mask}</td>
                      <td className="p-2 text-emerald-400 font-semibold">{row.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="flex items-center justify-between mt-3 pt-2 border-t border-slate-700/60 text-xs">
          <div className="text-slate-400">
            支持分步录入随时暂存，通过智能质检后一键提交送审。
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded bg-slate-700 text-slate-300 text-[11px]">暂存草稿</span>
            <span className="px-3 py-1 rounded bg-blue-600 text-white font-medium text-[11px] flex items-center gap-1">
              <span>提交送审</span>
              <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </div>

      {/* Summary Footer */}
      <div className="p-2.5 rounded-lg bg-blue-950/40 border border-blue-600/30 text-xs text-blue-200 flex items-center justify-between">
        <span className="font-semibold text-cyan-300">智能编目原则：</span>
        <span className="text-slate-300">
          “AI辅助人完成编目，而不是替代业务人员最终确认” —— 告别漏填误填，填报提速大幅缩减。
        </span>
        <span className="text-cyan-400 text-xs font-semibold">两步编制 · 智能填充</span>
      </div>
    </div>
  );
};
