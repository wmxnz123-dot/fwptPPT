import React, { useState } from 'react';
import { SlideData } from '../types';
import { Sparkles, ShoppingBag, MessageSquare, ArrowRight, CheckCircle2, CornerDownLeft, Search } from 'lucide-react';

export const SmartSearchSlide: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [inCart, setInCart] = useState(false);

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 md:p-8 bg-slate-900 text-white overflow-hidden">
      <div>
        <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold tracking-wider uppercase mb-1">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>06 / 智能找数升级</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          {slide.title}
        </h2>
        <p className="text-xs md:text-sm text-blue-200/80 mt-0.5">
          核心观点：{slide.coreView}
        </p>
      </div>

      {/* Comparison and Interactive Search Demo */}
      <div className="my-auto grid grid-cols-1 md:grid-cols-12 gap-4 max-w-6xl mx-auto w-full items-stretch">
        {/* Left: Traditional Search Process */}
        <div className="md:col-span-5 p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3 border-b border-slate-700 pb-2">
              <span className="text-xs font-bold text-slate-300">传统目录检索模式</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-slate-700 text-slate-400">繁琐 · 易漏查</span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded bg-slate-900/60 border border-slate-700/60 flex items-center gap-2 text-slate-300">
                <span className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center font-bold text-[10px] text-slate-400">1</span>
                <span>手工输入精确专业关键词（极易因同义词漏查）</span>
              </div>
              <div className="p-2.5 rounded bg-slate-900/60 border border-slate-700/60 flex items-center gap-2 text-slate-300">
                <span className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center font-bold text-[10px] text-slate-400">2</span>
                <span>逐层展开政务部门目录树（需掌握组织架构）</span>
              </div>
              <div className="p-2.5 rounded bg-slate-900/60 border border-slate-700/60 flex items-center gap-2 text-slate-300">
                <span className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center font-bold text-[10px] text-slate-400">3</span>
                <span>多维度勾选筛选条件、逐页翻找核验表头</span>
              </div>
              <div className="p-2.5 rounded bg-slate-900/60 border border-slate-700/60 flex items-center gap-2 text-slate-300">
                <span className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center font-bold text-[10px] text-slate-400">4</span>
                <span>多页面往返切换并逐个发起冗长申请流程</span>
              </div>
            </div>
          </div>

          <div className="mt-3 p-2 rounded bg-red-950/20 border border-red-900/30 text-[11px] text-red-300">
            模式痛点：用户需主动“迁就”专业目录分类，跨部门找数成本极高。
          </div>
        </div>

        {/* Right: Intelligent Assistant Interaction Demo */}
        <div className="md:col-span-7 p-4 rounded-xl bg-gradient-to-br from-blue-950/70 to-slate-900 border border-cyan-500/40 shadow-xl flex flex-col justify-between">
          <div>
            {/* Assistant Header */}
            <div className="flex items-center justify-between mb-3 border-b border-blue-800/60 pb-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span>全站悬浮智能问答助手</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300">全站就绪</span>
                  </div>
                </div>
              </div>
              <span className="text-[10px] text-cyan-300 font-mono">以对话找数 · 直达业务</span>
            </div>

            {/* Chat Simulation Box */}
            <div className="space-y-2.5 text-xs">
              {/* User Bubble */}
              <div className="flex items-start justify-end gap-2">
                <div className="p-2.5 rounded-lg bg-blue-600 text-white max-w-sm shadow">
                  我想查找近三年全市【小微企业纳税评级】与【社保缴纳连续性】相关的核验数据，做信贷辅助审批。
                </div>
                <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                  用户
                </div>
              </div>

              {/* AI Assistant Bubble */}
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-cyan-600 text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                  AI
                </div>
                <div className="p-3 rounded-lg bg-slate-800/90 border border-cyan-500/30 text-slate-200 max-w-md space-y-2 shadow-lg">
                  <div className="text-[11px] text-cyan-300 font-medium flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>已理解您的业务场景：精准匹配到 2 项高关联权威数据资源</span>
                  </div>

                  {/* Recommended Resource Card */}
                  <div className="p-2 rounded bg-slate-900/80 border border-slate-700/80 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white text-xs">市税务局_企业A/B级纳税信用评价历史明细库</span>
                      <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-1.5 py-0.2 rounded">匹配度 98%</span>
                    </div>
                    <div className="text-[10px] text-slate-400">
                      提供部门：市税务局 ｜ 服务类型：API接口 ｜ 更新周期：按月
                    </div>
                  </div>

                  {/* Actions in Chat */}
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[10px] text-slate-400">支持直接发起多源组合申请</span>
                    <button
                      onClick={() => setInCart(!inCart)}
                      className={`px-3 py-1 rounded text-xs font-semibold flex items-center gap-1.5 transition-all ${
                        inCart
                          ? 'bg-emerald-600 text-white'
                          : 'bg-cyan-500 hover:bg-cyan-400 text-slate-900'
                      }`}
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>{inCart ? '已加入数据篮 (1)' : '一键加入数据篮'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3 p-2 rounded bg-blue-950/60 border border-blue-800/40 text-[11px] text-blue-200 flex items-center justify-between">
            <span>核心价值：从“用户适应目录结构”彻底升级为“平台主动理解用户需求”。</span>
            <span className="text-cyan-400 font-medium">降低找数成本 80%+</span>
          </div>
        </div>
      </div>

      {/* Summary Footer */}
      <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700 text-xs text-slate-300 flex items-center justify-between">
        <span className="text-blue-300 font-medium">智能找数三要素：</span>
        <span className="text-slate-300">① 全站悬浮对话入口随时呼出 ｜ ② 自然语言语义问数精准关联 ｜ ③ 数据篮直达无缝衔接申请闭环</span>
        <span className="text-cyan-400 text-xs font-semibold">直达需求 · 智能推荐</span>
      </div>
    </div>
  );
};
