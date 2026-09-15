import React from 'react';
import { SlideData } from '../types';
import { 
  Database,
  GitBranch,
  Layers,
  SearchCheck,
  Bot,
  UserCheck,
  Clock,
  FileCheck2,
  Sparkles,
  Zap,
  CheckCircle2,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';

export const SmartAuditSlide: React.FC<{ slide: SlideData }> = ({ slide }) => {
  // 顶部四大审核类型
  const auditCategories = [
    {
      title: "数据目录审核",
      badge: "资产上架关",
      icon: Database,
      desc: "把控全域资产源头质量，机审低质、碎片化及高空缺表，筑牢目录可信底线。"
    },
    {
      title: "数据更新审核",
      badge: "源头变更关",
      icon: GitBranch,
      desc: "自动捕获数据结构与版本差异，智能评估变更影响，防范下游依赖业务断流。"
    },
    {
      title: "数据服务审核",
      badge: "接口交付关",
      icon: Layers,
      desc: "机审服务协议、请求返回参数及自动化连通测试，杜绝不合格服务上线流转。"
    },
    {
      title: "数据需求审核",
      badge: "供需流转关",
      icon: SearchCheck,
      desc: "智能预判用数意图与三定职责归属，协助提供方快速研判，加速跨部门响应。"
    }
  ];

  // 底部左侧：人机协同流程
  const workflowSteps = [
    {
      step: "01",
      title: "待审接入",
      role: "系统自动捕获",
      desc: "目录、服务或用数申请提交即触发流程，自动聚合元数据与业务上下文。",
      icon: Clock
    },
    {
      step: "02",
      title: "智能机审",
      role: "算法全面初查",
      desc: "大模型结合质量规范多维扫描，毫秒级排查缺陷项与合规漏洞。",
      icon: Bot
    },
    {
      step: "03",
      title: "输出结论",
      role: "结构化处置建议",
      desc: "清晰给出质量诊断、预警标记与修改建议，呈送建议通过或驳回意见。",
      icon: FileCheck2
    },
    {
      step: "04",
      title: "人工终审",
      role: "业务专家定夺",
      desc: "审核专员免去繁重查验，聚焦核心风险一键通过或退回报送整改意见。",
      icon: UserCheck
    }
  ];

  // 底部右侧：简单效益罗列（仅保留3项核心效益，无具体数字）
  const benefitsList = [
    {
      title: "审核更精准",
      desc: "机器统一执行刚性质检标准，避免因审核人不同导致的主观偏差与漏审误审。",
      tag: "标准统一"
    },
    {
      title: "效率大幅提升",
      desc: "机审报告即时就绪，常规合规业务秒级初验，全面压缩跨部门审批流转周期。",
      tag: "极速响应"
    },
    {
      title: "工作量显著减轻",
      desc: "告别大量人工肉眼翻查与指标核对琐事，业务专员专注核心权责研判与决策。",
      tag: "减负提质"
    }
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-5 sm:p-7 md:p-8 bg-slate-900 text-white overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="shrink-0 relative z-10">
        <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold tracking-wider uppercase mb-0.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>08 / 智能审核升级</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            智能审核：从“纯人工肉眼审核”跃升为“人机协同智能把关”
          </h2>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-cyan-300 text-xs font-medium shrink-0">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            机器全面初查 · 人工权威决断
          </span>
        </div>
        <p className="text-xs sm:text-[13px] text-blue-200/80 mt-0.5">
          围绕公共数据全生命周期，构建覆盖目录、更新、服务与需求的智能质检流水线，实现全链条合规可信。
        </p>
      </div>

      {/* Main Content: Max-w-6xl balanced layout */}
      <div className="relative z-10 my-auto w-full max-w-6xl mx-auto space-y-2.5 sm:space-y-3">
        {/* Top Section: 4 Audit Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
          {auditCategories.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-2.5 sm:p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 backdrop-blur-sm flex flex-col justify-between hover:border-cyan-400/50 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-blue-600/20 border border-blue-400/30 text-cyan-300 shrink-0">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-[13px] font-bold text-white">
                        {item.title}
                      </span>
                    </div>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-blue-900/60 border border-blue-700/50 text-cyan-300 shrink-0">
                      {item.badge}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-300 leading-snug">
                    {item.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Section: Left (Collaborative Workflow) + Right (Simplified Benefits) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2.5 sm:gap-3 items-stretch">
          
          {/* Bottom Left: Collaborative Process (7/12) */}
          <div className="lg:col-span-7 p-3 sm:p-3.5 rounded-xl bg-gradient-to-br from-slate-800/90 via-blue-950/40 to-slate-900/90 border border-blue-500/30 backdrop-blur-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-slate-700/80">
                <div className="flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-xs sm:text-sm font-bold text-white">人机协同流程</span>
                </div>
                <span className="text-[10px] sm:text-[11px] text-slate-400">闭环运转流水线</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {workflowSteps.map((step, idx) => {
                  return (
                    <div 
                      key={idx}
                      className="p-2 rounded-lg bg-slate-900/70 border border-slate-700/70 flex items-start gap-2"
                    >
                      <div className="w-5 h-5 rounded bg-blue-600/20 border border-blue-400/30 flex items-center justify-center text-cyan-300 font-mono text-[11px] font-bold shrink-0 mt-0.5">
                        {step.step}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-white">{step.title}</span>
                          <span className="text-[10px] text-blue-300">{step.role}</span>
                        </div>
                        <div className="text-[10.5px] text-slate-300 mt-0.5 leading-snug">
                          {step.desc}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-2 pt-1.5 border-t border-slate-800 flex items-center justify-between text-[10.5px] text-slate-400">
              <span>机器初筛全面排雷 ➔ 结构化结论建议 ➔ 业务专员终审决断</span>
              <span className="text-cyan-300 font-medium">留痕闭环</span>
            </div>
          </div>

          {/* Bottom Right: Simplified Benefits (5/12) */}
          <div className="lg:col-span-5 p-3 sm:p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 backdrop-blur-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-slate-700/80">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-xs sm:text-sm font-bold text-white">核心业务效益</span>
                </div>
                <span className="text-[10px] sm:text-[11px] text-emerald-400 font-medium">减负提质</span>
              </div>

              <div className="space-y-1.5">
                {benefitsList.map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-2 rounded-lg bg-slate-900/60 border border-slate-700/60 flex items-start gap-2"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold text-white">{item.title}</span>
                        <span className="text-[9px] px-1 py-0.2 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-800/40">
                          {item.tag}
                        </span>
                      </div>
                      <div className="text-[10.5px] text-slate-300 mt-0.5 leading-snug">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-2 text-[10.5px] text-emerald-300/90 text-right">
              杜绝机械式肉眼核对 · 提升审核质效与规范性
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Footer Note */}
      <div className="shrink-0 relative z-10 p-2 rounded-lg bg-slate-800/60 border border-slate-700/70 flex items-center justify-between text-xs text-slate-300 max-w-6xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span className="text-slate-300 text-[11px]">
            核心定位：通过算法建立全流程自动化质检与人机协同机制，让数据审核更精准、更高效、更省心。
          </span>
        </div>
        <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-blue-600/30 border border-blue-400/30 text-cyan-300 text-xs font-semibold whitespace-nowrap ml-4">
          智能机审 · 人机协同
        </span>
      </div>
    </div>
  );
};
