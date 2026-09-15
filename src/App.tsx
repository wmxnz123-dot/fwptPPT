import React, { useState, useEffect, useCallback } from 'react';
import { slidesData, pptOverview } from './data/slidesData';
import { SlideRenderer } from './components/SlideRenderer';
import { DocPlanView } from './components/DocPlanView';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  FileText,
  MonitorPlay,
  Grid,
  Info,
  Shield,
  Layers,
  Sparkles
} from 'lucide-react';

export default function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'presentation' | 'doc' | 'grid'>('presentation');
  const [showNotes, setShowNotes] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const currentSlide = slidesData[currentSlideIndex];

  // Navigation handlers
  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev < slidesData.length - 1 ? prev + 1 : prev));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode !== 'presentation') return;
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, viewMode]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Top Application Navbar */}
      <header className="h-14 border-b border-slate-800 bg-slate-900/90 backdrop-blur-md px-4 flex items-center justify-between z-30 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center font-bold text-white shadow-md">
            数
          </div>
          <div>
            <div className="text-xs md:text-sm font-bold text-white tracking-tight flex items-center gap-2">
              <span>数据服务平台智能化升级</span>
              <span className="hidden sm:inline-block text-[10px] px-1.5 py-0.2 rounded bg-blue-500/20 text-cyan-300 border border-blue-500/30">
                产品介绍演示方案
              </span>
            </div>
            <div className="text-[10px] text-slate-400 hidden md:block">
              AI赋能数据服务全流程：让数据更易找、更易编、更易审、更易用、更易管
            </div>
          </div>
        </div>

        {/* Center View Mode Switcher */}
        <div className="flex items-center gap-1 p-1 rounded-lg bg-slate-800/90 border border-slate-700/80 text-xs font-medium">
          <button
            onClick={() => setViewMode('presentation')}
            className={`px-3 py-1 rounded-md flex items-center gap-1.5 transition-all ${
              viewMode === 'presentation'
                ? 'bg-blue-600 text-white font-bold shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <MonitorPlay className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">幻灯演示</span>
          </button>
          <button
            onClick={() => setViewMode('grid')}
            className={`px-3 py-1 rounded-md flex items-center gap-1.5 transition-all ${
              viewMode === 'grid'
                ? 'bg-blue-600 text-white font-bold shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Grid className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{slidesData.length}页全览</span>
          </button>
          <button
            onClick={() => setViewMode('doc')}
            className={`px-3 py-1 rounded-md flex items-center gap-1.5 transition-all ${
              viewMode === 'doc'
                ? 'bg-blue-600 text-white font-bold shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>策划案与文案</span>
          </button>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-2">
          {viewMode === 'presentation' && (
            <button
              onClick={() => setShowNotes(!showNotes)}
              className={`p-2 rounded-lg border text-xs flex items-center gap-1 transition-all ${
                showNotes
                  ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                  : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
              }`}
              title="查看讲者讲稿与文案明细"
            >
              <Info className="w-4 h-4" />
              <span className="hidden lg:inline text-xs">{showNotes ? '收起讲稿' : '讲解讲稿'}</span>
            </button>
          )}

          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-700 transition-colors"
            title="全屏演示"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        {viewMode === 'presentation' && (
          <div className="flex-1 flex flex-col lg:flex-row h-full overflow-hidden">
            {/* Slide Stage Container */}
            <div className="flex-1 flex flex-col items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden">
              {/* 16:9 Slide Canvas Frame */}
              <div className="w-full max-w-6xl aspect-[16/9.6] sm:aspect-[16/9] max-h-[82vh] rounded-2xl overflow-hidden shadow-2xl border border-slate-700/80 bg-slate-900 relative flex flex-col">
                <SlideRenderer slide={currentSlide} />
              </div>

              {/* Bottom Presentation Controls Bar */}
              <div className="w-full max-w-6xl mt-3 flex items-center justify-between px-2 text-xs text-slate-400 shrink-0">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-cyan-400 font-bold text-sm">
                    {String(currentSlide.id).padStart(2, '0')}
                  </span>
                  <span>/</span>
                  <span className="font-mono">{slidesData.length}</span>
                  <span className="text-slate-500">|</span>
                  <span className="text-slate-300 font-medium truncate max-w-[200px] sm:max-w-xs">
                    {currentSlide.title}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={prevSlide}
                    disabled={currentSlideIndex === 0}
                    className="p-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700 disabled:opacity-30 disabled:hover:bg-slate-800 transition-colors flex items-center gap-1"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span className="hidden sm:inline text-xs">上一页</span>
                  </button>

                  {/* Thumbnail Quick Picker */}
                  <div className="hidden md:flex items-center gap-1 mx-2">
                    {slidesData.map((s, idx) => (
                      <button
                        key={s.id}
                        onClick={() => setCurrentSlideIndex(idx)}
                        className={`w-5 h-5 rounded text-[11px] font-mono transition-all ${
                          idx === currentSlideIndex
                            ? 'bg-cyan-500 text-slate-950 font-bold shadow'
                            : 'bg-slate-800 text-slate-400 hover:text-white'
                        }`}
                        title={`${s.id}. ${s.title}`}
                      >
                        {s.id}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={nextSlide}
                    disabled={currentSlideIndex === slidesData.length - 1}
                    className="p-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white disabled:opacity-30 disabled:hover:bg-blue-600 transition-colors flex items-center gap-1 shadow"
                  >
                    <span className="hidden sm:inline text-xs">下一页</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Optional Slide Presenter Notes Drawer */}
            {showNotes && (
              <aside className="w-full lg:w-96 border-t lg:border-t-0 lg:border-l border-slate-800 bg-slate-900/95 p-4 overflow-y-auto space-y-4 shrink-0 text-xs">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <div className="font-bold text-cyan-300 flex items-center gap-1.5">
                    <Info className="w-4 h-4" />
                    <span>【第{currentSlide.id}页】讲者汇报讲稿</span>
                  </div>
                  <span className="text-[10px] text-slate-400">{currentSlide.category}</span>
                </div>

                <div className="space-y-1">
                  <div className="font-semibold text-slate-200">核心观点</div>
                  <p className="text-slate-300 bg-slate-800/80 p-2 rounded border border-slate-700">
                    {currentSlide.coreView}
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="font-semibold text-slate-200">引申讲解</div>
                  <p className="text-blue-200/90 leading-relaxed bg-blue-950/40 p-2 rounded border border-blue-900/40">
                    {currentSlide.fullCopywriting.heroQuote}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="font-semibold text-slate-200">逐点展开说明</div>
                  {currentSlide.fullCopywriting.sections.map((sec, i) => (
                    <div key={i} className="p-2 rounded bg-slate-800/50 border border-slate-700/60 space-y-1">
                      <div className="font-bold text-white text-[11px]">{sec.title}</div>
                      <ul className="list-disc list-inside text-slate-300 space-y-0.5 text-[11px]">
                        {sec.items?.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="p-2 rounded bg-emerald-950/40 border border-emerald-800/40 text-emerald-200">
                  <div className="font-bold mb-0.5">汇报结论</div>
                  <div>{currentSlide.fullCopywriting.conclusion}</div>
                </div>

                <div className="text-slate-400 text-[10px] space-y-1 pt-2 border-t border-slate-800">
                  <div><strong>视觉设计：</strong>{currentSlide.visualConcept}</div>
                  <div><strong>页面布局：</strong>{currentSlide.layoutDescription}</div>
                </div>
              </aside>
            )}
          </div>
        )}

        {/* Grid Overview Mode (All Slides) */}
        {viewMode === 'grid' && (
          <div className="flex-1 overflow-y-auto p-4 md:p-8 max-w-7xl mx-auto w-full space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <h2 className="text-lg font-bold text-white">{slidesData.length}页产品介绍PPT缩略总览（含结束页）</h2>
                <p className="text-xs text-slate-400">点击任意页面进入幻灯全屏演示</p>
              </div>
              <div className="text-xs text-cyan-300 font-mono">Total: {slidesData.length} Slides</div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {slidesData.map((s, idx) => (
                <div
                  key={s.id}
                  onClick={() => {
                    setCurrentSlideIndex(idx);
                    setViewMode('presentation');
                  }}
                  className="group cursor-pointer rounded-xl bg-slate-800/80 border border-slate-700 hover:border-cyan-400 transition-all p-3 flex flex-col justify-between shadow-lg hover:shadow-cyan-500/10"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/50">
                        第 {s.id} 页
                      </span>
                      <span className="text-[10px] text-slate-400 px-1.5 py-0.5 rounded bg-slate-700/60">
                        {s.category}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                      {s.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2 mb-2">
                      {s.subtitle}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-700/60 text-[11px] text-slate-300">
                    <strong className="text-cyan-300">核心观点：</strong>
                    <span className="line-clamp-2">{s.coreView}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Complete Strategy Document & Script Plan Mode */}
        {viewMode === 'doc' && (
          <div className="flex-1 overflow-y-auto">
            <DocPlanView />
          </div>
        )}
      </main>
    </div>
  );
}
