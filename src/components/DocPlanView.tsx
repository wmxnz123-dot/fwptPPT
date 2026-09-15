import React, { useState } from 'react';
import { pptOverview, slidesData } from '../data/slidesData';
import { Copy, Check, FileText, ChevronDown, ChevronRight, Layers, Sparkles } from 'lucide-react';

export const DocPlanView: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [expandedSlide, setExpandedSlide] = useState<number | null>(null);

  const getFullMarkdownText = () => {
    let text = `# 《数据服务平台智能化升级》产品介绍PPT策划案与逐页文案全集\n\n`;
    text += `## 一、整套PPT主题定位\n${pptOverview.theme}\n\n**定位阐述：** ${pptOverview.positioning}\n\n`;
    text += `## 二、PPT总页数\n总计：${pptOverview.totalPages} 页\n\n`;
    text += `## 三、整体叙事逻辑与页面流转关系\n`;
    pptOverview.narrativeLogic.forEach(nl => {
      text += `- **${nl.phase}** (${nl.slides})：${nl.desc}\n`;
    });
    text += `\n## 四、每页标题、核心观点、主要内容与视觉表现概览\n\n`;
    slidesData.forEach(s => {
      text += `### 第${s.id}页：${s.title}\n`;
      text += `- **副标题**：${s.subtitle}\n`;
      text += `- **核心观点**：${s.coreView}\n`;
      text += `- **主要内容**：${s.summaryBullets.join('；')}\n`;
      text += `- **推荐视觉表现**：${s.visualConcept}\n\n`;
    });
    text += `\n## 五、逐页完整PPT汇报文案与设计规划\n\n`;

    slidesData.forEach(s => {
      text += `--------------------------------------------------\n`;
      text += `【第${s.id}页】\n`;
      text += `标题：${s.title}\n`;
      text += `副标题：${s.subtitle}\n`;
      text += `核心观点：${s.coreView}\n\n`;
      text += `正文：\n`;
      text += `【核心导言】\n${s.fullCopywriting.heroQuote}\n\n`;
      s.fullCopywriting.sections.forEach(sec => {
        text += `【${sec.title}】\n`;
        if (sec.description) text += `${sec.description}\n`;
        sec.items?.forEach(item => {
          text += `• ${item}\n`;
        });
        text += `\n`;
      });
      text += `【本页结论】\n${s.fullCopywriting.conclusion}\n\n`;
      text += `视觉设计：${s.visualConcept}\n`;
      text += `页面布局：${s.layoutDescription}\n\n`;
    });

    return text;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getFullMarkdownText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4 md:p-8 text-slate-200 space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl bg-slate-800/90 border border-slate-700 shadow-md">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-400" />
            <span>PPT策划案与逐页文案全景文档</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            包含整套策划定位、{pptOverview.totalPages}页逻辑关系、视觉表现及标准【第X页】全套汇报文案
          </p>
        </div>

        <button
          onClick={handleCopy}
          className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs flex items-center gap-2 transition-all shadow"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
          <span>{copied ? '已复制全套方案到剪贴板' : '一键复制全案文案 (Markdown)'}</span>
        </button>
      </div>

      {/* Part 1: Strategy Overview Card */}
      <div className="p-5 rounded-xl bg-slate-800/60 border border-slate-700/80 space-y-4">
        <div className="flex items-center gap-2 text-cyan-300 font-bold text-sm border-b border-slate-700 pb-2">
          <Sparkles className="w-4 h-4" />
          <span>一、整套PPT主题定位与总览（共 {pptOverview.totalPages} 页）</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-700/60 space-y-2">
            <div className="font-semibold text-slate-300">正式宣传口号与主题定位</div>
            <p className="text-cyan-200 font-medium leading-relaxed">
              {pptOverview.theme}
            </p>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              {pptOverview.positioning}
            </p>
          </div>

          <div className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-700/60 space-y-2">
            <div className="font-semibold text-slate-300">{pptOverview.narrativeLogic.length}阶段叙事逻辑链路</div>
            <div className="space-y-1 text-slate-300 text-[11px]">
              {pptOverview.narrativeLogic.map((nl, idx) => (
                <div key={idx} className="flex items-start gap-1.5">
                  <span className="text-cyan-400 font-bold">▪</span>
                  <span><strong>{nl.phase}</strong> ({nl.slides})：{nl.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Part 2: Slide by Slide Table Overview */}
      <div className="p-5 rounded-xl bg-slate-800/60 border border-slate-700/80 space-y-3">
        <div className="text-cyan-300 font-bold text-sm border-b border-slate-700 pb-2">
          二、{pptOverview.totalPages}页PPT结构、核心观点与视觉形式快速对照表
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-slate-900/80 text-slate-400 uppercase text-[11px]">
              <tr>
                <th className="p-2.5">页码</th>
                <th className="p-2.5">页面标题</th>
                <th className="p-2.5">核心观点</th>
                <th className="p-2.5">推荐视觉形式</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300 text-[11px]">
              {slidesData.map((s) => (
                <tr key={s.id} className="hover:bg-slate-800/40">
                  <td className="p-2.5 font-mono text-cyan-400 font-bold">第{s.id}页</td>
                  <td className="p-2.5 font-medium text-white">{s.title}</td>
                  <td className="p-2.5 text-slate-300">{s.coreView}</td>
                  <td className="p-2.5 text-slate-400">{s.visualConcept}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Part 3: Detailed Page-by-Page Full Copywriting */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-cyan-300 font-bold text-sm px-1">
          <span>三、逐页完整PPT文案详情（点击卡片展开/收起）</span>
          <span className="text-xs text-slate-400">符合汇报文案标准规范</span>
        </div>

        <div className="space-y-3">
          {slidesData.map((slide) => {
            const isExpanded = expandedSlide === slide.id;
            return (
              <div
                key={slide.id}
                className="rounded-xl bg-slate-800/70 border border-slate-700/80 overflow-hidden shadow"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setExpandedSlide(isExpanded ? null : slide.id)}
                  className="w-full p-3.5 flex items-center justify-between text-left hover:bg-slate-800 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-blue-600/30 border border-cyan-500/40 flex items-center justify-center font-mono font-bold text-xs text-cyan-300">
                      {slide.id}
                    </span>
                    <div>
                      <div className="text-xs md:text-sm font-bold text-white flex items-center gap-2">
                        <span>【第{slide.id}页】{slide.title}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-slate-700 text-slate-300 font-normal">
                          {slide.category}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{slide.subtitle}</div>
                    </div>
                  </div>
                  {isExpanded ? <ChevronDown className="w-4 h-4 text-cyan-400" /> : <ChevronRight className="w-4 h-4 text-slate-400" />}
                </button>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="p-4 bg-slate-900/90 border-t border-slate-800 text-xs space-y-3">
                    <div>
                      <strong className="text-cyan-300">核心观点：</strong>
                      <span className="text-slate-200 ml-1">{slide.coreView}</span>
                    </div>

                    <div className="p-2.5 rounded bg-blue-950/40 border border-blue-800/40 text-blue-200 leading-relaxed">
                      <strong>【核心引言】</strong> {slide.fullCopywriting.heroQuote}
                    </div>

                    <div className="space-y-2">
                      <div className="font-semibold text-slate-300">【详细文案内容】</div>
                      {slide.fullCopywriting.sections.map((sec, i) => (
                        <div key={i} className="p-2.5 rounded bg-slate-800/70 border border-slate-700/60 space-y-1">
                          <div className="font-bold text-white">{sec.title}</div>
                          {sec.description && <div className="text-[11px] text-slate-400">{sec.description}</div>}
                          <ul className="list-disc list-inside space-y-0.5 text-slate-300 text-[11px]">
                            {sec.items?.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className="p-2 rounded bg-slate-800/50 border border-slate-700 text-[11px] text-emerald-300">
                      <strong>【本页结论】</strong> {slide.fullCopywriting.conclusion}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px] text-slate-400 pt-1 border-t border-slate-800">
                      <div>
                        <strong className="text-slate-300">视觉设计：</strong>
                        <span>{slide.visualConcept}</span>
                      </div>
                      <div>
                        <strong className="text-slate-300">页面布局：</strong>
                        <span>{slide.layoutDescription}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
