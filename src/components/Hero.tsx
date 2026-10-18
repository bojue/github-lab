import React from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects }) => {
  return (
    <section className="pt-14 pb-12 sm:pt-20 sm:pb-16 border-b border-[var(--border-color)] transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] leading-tight mb-4">
            用代码解决实际问题
          </h1>

          {/* Lead description */}
          <p className="text-base sm:text-lg text-[var(--text-regular)] leading-relaxed mb-8">
            专注前端低代码技术与可视化工具链研发，打造可复用的页面搭建器、动态表单体系、IDC 机房组态底图与工业看板等核心编辑器产品。
          </p>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onExploreProjects}
              className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-white bg-[linear-gradient(258.13deg,#97baff_3.11%,#3278ff_35.52%,#5a90ff_76.49%,#d0cfff_111.85%)] rounded-full transition-all cursor-pointer shadow-[0_8px_24px_rgba(51,112,255,0.28)] hover:shadow-[0_10px_28px_rgba(51,112,255,0.36)] hover:-translate-y-0.5"
            >
              <span>浏览产品矩阵</span>
              <ArrowDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
