import React from "react";
import { ArrowRight, ArrowUpRight, Check, Code2, Layers3, Zap } from "lucide-react";

const PortfolioPreviewLP = () => {
  return (
    <div className="relative mx-auto w-full max-w-162.5 lg:ml-auto">
      <div className="pointer-events-none absolute -right-12 -top-16 size-64 rounded-full bg-fuchsia-500/15 blur-[100px]" />
      <div className="relative rotate-1 rounded-[1.7rem] border border-white/10 bg-[#11111a] p-2.5 shadow-2xl shadow-black/50 sm:p-3">
        <div className="overflow-hidden rounded-[1.2rem] border border-white/[0.07] bg-[#0c0c13]">
          <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-3 sm:px-5">
            <div className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-[#ff6b68]" />
              <span className="size-2.5 rounded-full bg-[#ffd166]" />
              <span className="size-2.5 rounded-full bg-[#66d19e]" />
            </div>
            <span className="rounded-full border border-white/[0.07] px-3 py-1 text-[10px] text-slate-500 sm:text-xs">
              portlio.app / alex-morgan
            </span>
            <ArrowUpRight className="size-4 text-slate-500" />
          </div>
          {/* Portfolio Preview */}
          <div className="p-5 sm:p-8">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-400">
                PORTFOLIO PREVIEW
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300/15 bg-emerald-300/[0.07] px-2.5 py-1 text-[10px] text-emerald-300">
                <span className="size-1.5 rounded-full bg-emerald-400" /> LIVE
              </span>
            </div>
            <div className="mt-7 flex items-center gap-4 sm:mt-9">
              <div className="grid size-14 shrink-0 place-items-center rounded-2xl bg-linear-to-br from-violet-400 to-fuchsia-500 text-xl font-semibold text-white shadow-lg shadow-violet-950/40 sm:size-16 sm:text-2xl">
                AM
              </div>
              <div>
                <p className="text-xl font-semibold tracking-tight sm:text-2xl">
                  Alex Morgan
                </p>
                <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                  Product designer &amp; creative thinker
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-xs leading-6 text-slate-400 sm:text-sm sm:leading-7">
              I turn complex problems into thoughtful digital experiences.
              Here&apos;s a little of what I&apos;ve been working on.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4">
              <div className="group relative flex min-h-32 flex-col justify-between overflow-hidden rounded-xl border border-white/8 bg-linear-to-br from-[#25213c] to-[#171522] p-3 sm:min-h-40 sm:p-4">
                <div className="absolute -right-5 -top-8 size-24 rounded-full bg-violet-500/30 blur-2xl" />
                <div className="relative flex items-center justify-between">
                  <span className="grid size-8 place-items-center rounded-lg bg-white/10">
                    <Layers3 className="size-4 text-violet-200" />
                  </span>
                  <ArrowUpRight className="size-4 text-slate-400" />
                </div>
                <div className="relative">
                  <p className="text-xs font-semibold sm:text-sm">
                    Forma Finance
                  </p>
                  <p className="mt-1 text-[10px] text-slate-400 sm:text-xs">
                    Product design · 2025
                  </p>
                </div>
              </div>
              <div className="group relative flex min-h-32 flex-col justify-between overflow-hidden rounded-xl border border-white/8 bg-linear-to-br from-[#20343b] to-[#111a20] p-3 sm:min-h-40 sm:p-4">
                <div className="absolute -right-5 -top-8 size-24 rounded-full bg-cyan-500/20 blur-2xl" />
                <div className="relative flex items-center justify-between">
                  <span className="grid size-8 place-items-center rounded-lg bg-white/10">
                    <Code2 className="size-4 text-cyan-200" />
                  </span>
                  <ArrowUpRight className="size-4 text-slate-400" />
                </div>
                <div className="relative">
                  <p className="text-xs font-semibold sm:text-sm">
                    Atlas Studio
                  </p>
                  <p className="mt-1 text-[10px] text-slate-400 sm:text-xs">
                    Web experience · 2024
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between border-t border-white/[0.07] pt-4">
              <span className="text-[10px] text-slate-500 sm:text-xs">
                More work, all in one place.
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] font-medium text-violet-300 sm:text-xs">
                View portfolio <ArrowRight className="size-3" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#171721] px-4 py-3 shadow-xl sm:-left-8 sm:bottom-8">
        <span className="grid size-9 place-items-center rounded-xl bg-emerald-400/10 text-emerald-300">
          <Zap className="size-4" />
        </span>
        <div>
          <p className="text-xs font-semibold">Looking sharp</p>
          <p className="mt-0.5 text-[10px] text-slate-500">
            Your portfolio is live
          </p>
        </div>
        <Check className="ml-1 size-4 text-emerald-400" />
      </div>
    </div>
  );
};

export default PortfolioPreviewLP;
