import React from 'react';
import { SlideData } from '../types';
import { Search, UserCheck, ShieldCheck, PieChart, Sparkles, CheckCircle2 } from 'lucide-react';

export const ValueSlide: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const pillars = [
    {
      role: "数据需求方",
      keyword: "更易找",
      icon: Search,
      badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
      points: [
        "找数更快：自然语言对话式检索，告别多层级复杂目录迷宫",
        "理解更容易：智能问数与数据解读，降低业务端专业理解门槛",
        "获取更便捷：数据篮一键直达与场景化打包申请，缩短取数周期"
      ]
    },
    {
      role: "数据提供方",
      keyword: "更高效",
      icon: UserCheck,
      badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      points: [
        "编目更高效：两步式智能填充与辅助生成，大幅减少重复录入",
        "交付更规范：标准化参数配置与连通性自动化测试，提升服务质量",
        "需求响应更及时：内置智能预审，加速业务研判与流转响应"
      ]
    },
    {
      role: "数据管理方",
      keyword: "更规范",
      icon: ShieldCheck,
      badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
      points: [
        "审核更高效：AI质检预审自动筛查常见问题，审核质效成倍跃升",
        "质检更标准：固化六项规范检查，消除人工经验主观性偏差",
        "风险发现更及时：敏感隐私与结构异常智能预警，守牢合规底线"
      ]
    },
    {
      role: "平台运营方",
      keyword: "更智能",
      icon: PieChart,
      badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
      points: [
        "分析更便捷：多维图表联动与口径无缝切换，无需手工统计拉表",
        "运营更透明：覆盖目录、服务、申请、异议全局指标大盘",
        "决策更智能：智能助手主动归因趋势波动，自动输出决策报告"
      ]
    }
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 md:p-8 bg-slate-900 text-white overflow-hidden">
      <div>
        <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold tracking-wider uppercase mb-1">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>12 / 平台价值总结</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          {slide.title}
        </h2>
        <p className="text-xs md:text-sm text-blue-200/80 mt-0.5">
          核心观点：{slide.coreView}
        </p>
      </div>

      {/* 4 Pillars Value Matrix */}
      <div className="my-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 max-w-6xl mx-auto w-full">
        {pillars.map((p, idx) => (
          <div
            key={idx}
            className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 hover:border-cyan-500/40 transition-all flex flex-col justify-between shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                  <p.icon className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{p.role}</span>
                </span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${p.badgeColor}`}>
                  {p.keyword}
                </span>
              </div>

              <div className="space-y-2 mt-3">
                {p.points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-1.5 text-xs text-slate-300 leading-snug">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3 pt-2 border-t border-slate-700/60 text-[10px] text-slate-400">
              赋能成效：打破协同壁垒，赋能日常业务
            </div>
          </div>
        ))}
      </div>

      {/* Final Closing Statement Banner */}
      <div className="p-3.5 rounded-xl bg-gradient-to-r from-blue-950 via-slate-800 to-blue-950 border border-cyan-500/40 shadow-xl text-center space-y-1">
        <div className="text-xs md:text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-200 tracking-wide">
          “让数据服务从流程驱动走向智能驱动，让数据价值更快、更安全、更高效地释放。”
        </div>
        <div className="text-[11px] text-slate-400">
          一体化服务平台智能化升级 ｜ 构筑政务与公共数据要素可信流通现代化基座
        </div>
      </div>
    </div>
  );
};
