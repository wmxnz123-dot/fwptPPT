import React, { useState } from 'react';
import { SlideData } from '../types';
import { Cpu, CheckCircle2, ArrowRight, Play, Settings2, ShieldCheck, RefreshCw } from 'lucide-react';

export const SmartDeliverySlide: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [testRunning, setTestRunning] = useState(false);
  const [testResult, setTestResult] = useState<null | { ok: boolean; latency: number; msg: string }>({
    ok: true,
    latency: 84,
    msg: "连通性测试通过（HTTP 200 OK，参数鉴权通过，响应结构匹配）"
  });

  const handleTest = () => {
    setTestRunning(true);
    setTimeout(() => {
      setTestRunning(false);
      setTestResult({
        ok: true,
        latency: Math.floor(Math.random() * 40) + 60,
        msg: "连通性测试通过（HTTP 200 OK，参数鉴权通过，响应结构匹配）"
      });
    }, 600);
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 md:p-8 bg-slate-900 text-white overflow-hidden">
      <div>
        <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold tracking-wider uppercase mb-1">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>09 / 智能服务交付</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          {slide.title}
        </h2>
        <p className="text-xs md:text-sm text-blue-200/80 mt-0.5">
          核心观点：{slide.coreView}
        </p>
      </div>

      {/* Delivery Pipeline Diagram & Simulation */}
      <div className="my-auto w-full max-w-5xl mx-auto space-y-4">
        {/* Pipeline 4 Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {[
            {
              step: "01",
              name: "服务参数配置",
              desc: "定义请求/响应参数、鉴权方式及调用频控规则",
              tag: "智能新增/填充"
            },
            {
              step: "02",
              name: "连通性自动化测试",
              desc: "在线探测接口网络通断与鉴权握手，验证报文结构",
              tag: "可用性验证"
            },
            {
              step: "03",
              name: "多元交付模式匹配",
              desc: "根据业务场景灵活选择手动录入交付或API实时交付",
              tag: "双模交付支撑"
            },
            {
              step: "04",
              name: "提交交付与上线",
              desc: "通过严苛测试后流转上架，归入服务目录进行调用监控",
              tag: "规范流程闭环"
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-slate-400 bg-slate-700/50 px-2 py-0.5 rounded">
                    阶段 {item.step}
                  </span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/20 text-cyan-300 font-semibold">
                    {item.tag}
                  </span>
                </div>
                <div className="text-xs md:text-sm font-bold text-white mb-1">
                  {item.name}
                </div>
                <div className="text-[11px] text-slate-400 leading-snug">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Delivery Bench Preview */}
        <div className="p-4 rounded-xl bg-slate-800/90 border border-blue-500/30 space-y-3 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-700 pb-2 text-xs">
            <div className="flex items-center gap-2 text-cyan-300 font-bold">
              <Settings2 className="w-4 h-4" />
              <span>服务测试交付工作台模拟（API模式 / 手动录入模式）</span>
            </div>
            <span className="text-slate-400 text-[11px]">
              交付标准：未通过连通性测试服务严禁上线交付
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 text-xs">
            {/* Parameters Preview */}
            <div className="md:col-span-6 p-3 rounded-lg bg-slate-900/80 border border-slate-700/60 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-300">入参配置与智能填充</span>
                <span className="text-[10px] text-cyan-300 bg-cyan-950/60 px-1.5 py-0.2 rounded border border-cyan-800/40">
                  AI已填充默认模版
                </span>
              </div>
              <div className="p-2 rounded bg-slate-800/80 font-mono text-[11px] text-blue-200">
                POST /api/v1/enterprise/credit-eval <br />
                Header: Authorization: Bearer &lt;Token&gt; <br />
                Params: {"{ \"uscc\": \"91370000XXXX\", \"year\": 2024 }"}
              </div>
              <div className="text-[10px] text-slate-400">
                支持手动录入与系统API直通交付，满足不同部门多业务场景需求。
              </div>
            </div>

            {/* Connectivity Test Bench */}
            <div className="md:col-span-6 p-3 rounded-lg bg-slate-900/80 border border-slate-700/60 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-slate-300">接口连通性自动化测试</span>
                  <button
                    onClick={handleTest}
                    disabled={testRunning}
                    className="px-2.5 py-1 rounded bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold text-xs flex items-center gap-1 transition-all disabled:opacity-50"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>{testRunning ? '测试中...' : '重新连通性测试'}</span>
                  </button>
                </div>

                {testResult && (
                  <div className="p-2.5 rounded bg-emerald-950/40 border border-emerald-800/50 text-emerald-200 text-xs space-y-1">
                    <div className="flex items-center justify-between font-bold">
                      <span className="flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>测试状态：通过</span>
                      </span>
                      <span className="font-mono text-emerald-300 text-[11px]">{testResult.latency} ms</span>
                    </div>
                    <div className="text-[10px] text-emerald-300/80">
                      {testResult.msg}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-2 flex items-center justify-between pt-2 border-t border-slate-800 text-[11px]">
                <span className="text-slate-400">交付审核就绪</span>
                <span className="px-3 py-1 rounded bg-blue-600 text-white font-medium">提交上线交付</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Footer */}
      <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700 text-xs text-slate-300 flex items-center justify-between">
        <span className="text-blue-300 font-medium">交付价值保障：</span>
        <span className="text-slate-300">
          以标准化测试流程代替人工联调推测，杜绝“上线即报错”，全面夯实数据服务可用性。
        </span>
        <span className="text-cyan-400 text-xs font-semibold">标准化流程 · 确保可用</span>
      </div>
    </div>
  );
};
