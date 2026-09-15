import React from 'react';
import { SlideData } from '../types';
import { AlertTriangle, ArrowRight, Sparkles, Search, FileEdit, ShieldAlert, Cpu, LineChart } from 'lucide-react';

export const PainPointsSlide: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const painPoints = [
    {
      num: "01",
      name: "找数难",
      icon: Search,
      painDesc: "目录结构多层深奥，非专业用户检索成本极高，机械分词易‘查无此数’",
      opportunity: "全站悬浮智能问答，自然语言直接理解业务提问，智能推荐并一键直达数据篮"
    },
    {
      num: "02",
      name: "编目效率低",
      icon: FileEdit,
      painDesc: "目录及信息项字段繁多，重复填报多，纯人工录入耗时长、负担重且极易出现录入错漏",
      opportunity: "两步式目录编制页（基本信息+信息项），内置智能辅助生成与字段自动填充能力"
    },
    {
      num: "03",
      name: "审核依赖人工",
      icon: ShieldAlert,
      painDesc: "发布/变更/服务/需求审核量巨大，纯人工肉眼难查出‘低容量、高空缺、隐私泄露’隐患",
      opportunity: "构建‘AI智能预审+人工复核’双层机制，内置六大质检规则自动输出审核结论"
    },
    {
      num: "04",
      name: "服务交付周期长",
      icon: Cpu,
      painDesc: "接口参数配置繁复、联调与连通性测试缺乏标准化工具支撑，导致交付周期被拉长",
      opportunity: "智能新增/填充配置参数，内置一键连通性自动化测试，严格把控服务可用性"
    },
    {
      num: "05",
      name: "数据分析门槛高",
      icon: LineChart,
      painDesc: "平台沉淀海量运营数据，但普通用户及管理人员依赖人工拉表统计，缺乏深度洞察",
      opportunity: "监控大屏与运营看板多维联动下钻，智能助手即时提供自然语言问数与解读报告"
    }
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 md:p-10 bg-slate-900 text-white overflow-hidden">
      <div>
        <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold tracking-wider uppercase mb-1">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>03 / 业务痛点分析</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          {slide.title}
        </h2>
        <p className="text-sm md:text-base text-blue-200/80 mt-1">
          核心观点：{slide.coreView}
        </p>
      </div>

      {/* Pain-to-Opportunity Cards */}
      <div className="my-auto grid grid-cols-1 md:grid-cols-5 gap-3 max-w-6xl mx-auto w-full">
        {painPoints.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 hover:border-blue-500/50 transition-all shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold text-slate-400 bg-slate-700/50 px-2 py-0.5 rounded">
                  {item.num}
                </span>
                <div className="w-7 h-7 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <item.icon className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-sm md:text-base font-bold text-white mb-2">
                {item.name}
              </h3>

              <div className="p-2.5 rounded-lg bg-red-950/30 border border-red-900/40 mb-3 text-xs text-red-200/80 leading-relaxed">
                <div className="flex items-center gap-1 text-red-400 font-semibold mb-1 text-[11px]">
                  <AlertTriangle className="w-3 h-3" />
                  <span>业务痛点</span>
                </div>
                {item.painDesc}
              </div>
            </div>

            <div className="p-2.5 rounded-lg bg-cyan-950/40 border border-cyan-700/40 text-xs text-cyan-100/90 leading-relaxed">
              <div className="flex items-center gap-1 text-cyan-400 font-semibold mb-1 text-[11px]">
                <Sparkles className="w-3 h-3" />
                <span>AI 介入机会</span>
              </div>
              {item.opportunity}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Takeaway */}
      <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/60 text-xs md:text-sm text-slate-300 flex items-center justify-between">
        <span className="text-blue-300 font-medium">破局关键：</span>
        <span className="text-slate-300">
          痛点源于“人工负担过重”与“标准难以固化”，AI的本质是成为高保真的业务辅助与质量把关器。
        </span>
        <span className="text-cyan-400 text-xs font-semibold">精准切入 · 解决堵点</span>
      </div>
    </div>
  );
};
