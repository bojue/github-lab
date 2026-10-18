import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Search } from 'lucide-react';
import { PRODUCTS, ProductItem } from '../data/projectsData';

interface ProjectsMatrixProps {
  onSelectProject: (project: ProductItem) => void;
}

export const ProductHuntIcon: React.FC<{ className?: string }> = ({ className }) => (
 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 40 40" className={className ?? 'size-6'}><g fill="none" fill-rule="evenodd"><path fill="#FF6154" d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20"></path><path fill="#FFF" d="M22.667 20H17v-6h5.667a3 3 0 0 1 0 6m0-10H13v20h4v-6h5.667a7 7 0 1 0 0-14"></path></g></svg>
);

/**
 * statusTag 按类型配色（关键词匹配，兼容「产品调研中」等变体）：
 * - 商业化 / 已上线 → 绿色
 * - 核心 → 蓝色
 * - 技术调研 → 青色
 * - 产品调研 → 橙色
 * - 行业工具 → 紫色
 * - 其他 → 灰色兜底
 */
const getStatusTagClass = (tag: string) => {
  if (tag.includes('商业化') || tag.includes('已上线')) return 'bg-[#00b578]/90';
  if (tag.includes('核心')) return 'bg-[#3370ff]/85';
  if (tag.includes('技术调研')) return 'bg-[#14c9c9]/90';
  if (tag.includes('产品调研') || tag.includes('调研')) return 'bg-[#ff8f1f]/90';
  if (tag.includes('工具')) return 'bg-[#722ed1]/90';
  return 'bg-[#86909c]/90';
};

/**
 * 缩略图：图片元素始终可见，请求返回的数据到达即直接绘制（流式渲染，不等整张下载完）；
 * 骨架屏垫底，加载完成后交叉淡出；初始锚定图片底部
 */
const BottomAnchoredThumb: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const ref = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  const anchorBottom = () => {
    const el = ref.current;
    if (el) el.scrollTop = el.scrollHeight;
  };

  // 图片尺寸就绪（元数据到达）即锚定底部，流式绘制期间同步跟随
  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    const ro = new ResizeObserver(anchorBottom);
    ro.observe(img);
    return () => ro.disconnect();
  }, []);

  // 缓存图片可能不触发 onLoad，挂载后检查 complete 兜底
  useEffect(() => {
    setLoaded(false);
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth > 0) setLoaded(true);
  }, [src]);

  return (
    <div className="relative h-full">
      {/* 骨架屏垫底：流式绘制期间可见，加载完成后淡出 */}
      <div className={`absolute inset-0 thumb-skeleton transition-opacity duration-500 ${loaded ? 'opacity-0' : 'opacity-100'}`} />
      <div
        ref={ref}
        className="relative h-full overflow-x-hidden overflow-y-auto group-hover/thumb:overflow-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          className="block -m-[10px] w-[calc(100%+20px)] max-w-none h-auto [clip-path:inset(10px)] transition-transform duration-300 ease-out group-hover/thumb:scale-150"
          draggable={false}
        />
      </div>
    </div>
  );
};

export const ProjectsMatrix: React.FC<ProjectsMatrixProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchKeyword, setSearchKeyword] = useState<string>('');

  const categories = [
    { id: 'all', label: `全部产品 (${PRODUCTS.length})` },
    { id: 'editor', label: '零代码搭建' },
    { id: 'topology', label: 'IDC组态编辑器' }
  ];

  const filteredProducts = PRODUCTS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.categories.includes(activeCategory as 'editor' | 'topology');
    const matchesSearch =
      searchKeyword.trim() === '' ||
      item.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      item.info.toLowerCase().includes(searchKeyword.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-12 sm:py-16 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
              低代码/零代码与编辑器矩阵
            </h2>
          </div>

          {/* Search + Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-4 mt-6">
            {/* Search Input */}
            <div className="relative w-full sm:w-56 shrink-0">
              <Search className="w-4 h-4 text-[var(--text-secondary)] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                placeholder="搜索产品..."
                className="w-full pl-9 pr-3 py-1.5 text-xs rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[#3370ff] transition-colors"
              />
            </div>

            <div className="flex items-center gap-2.5 overflow-x-auto pb-1 text-xs">
            {categories.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-1.5 rounded-full font-medium transition-all cursor-pointer whitespace-nowrap border ${
                  activeCategory === tab.id
                    ? 'bg-[#3370ff] text-white border-[#3370ff] shadow-[0_4px_12px_rgba(51,112,255,0.3)]'
                    : 'text-[var(--text-secondary)] border-[var(--border-color)] bg-[var(--bg-card)] hover:text-[var(--text-primary)] hover:border-[var(--border-color-hover)]'
                }`}
              >
                {tab.label}
              </button>
            ))}
            </div>
          </div>
        </div>

        {/* Flattened Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((proj) => (
            <div
              key={proj.id}
              className="relative flex flex-col rounded-xl overflow-hidden bg-[var(--bg-card)] p-2 group shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_32px_rgba(31,35,41,0.12)] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Product Screenshot（图区上限 174px，整块点击开大图） */}
              <div
                onClick={() => onSelectProject(proj)}
                className="relative h-[174px] shrink-0 cursor-pointer group/thumb overflow-hidden"
              >
                <BottomAnchoredThumb src={proj.thumb} alt={proj.name} />

                {/* Top badge */}
                {proj.statusTag && (
                  <div className={`absolute top-2 left-2 px-2 py-0.5 rounded backdrop-blur-xs text-[11px] font-medium text-white ${getStatusTagClass(proj.statusTag)}`}>
                    {proj.statusTag}
                  </div>
                )}
              </div>

              {/* Text below image */}
              <div className="flex flex-col flex-1 pb-4">
                <h3 className="text-sm font-bold text-[var(--text-primary)] group-hover:text-[#3370ff] transition-colors">
                  {proj.name}
                </h3>
                <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                  {/* 零代码搭建分类下的产品同时展示「零代码」标识 */}
                  {proj.categories.includes('editor') && (
                    <span className="inline-flex px-2 py-0.5 rounded text-[11px] font-medium text-[#3370ff] bg-[#3370ff]/10 border border-[#3370ff]/20">
                      零代码
                    </span>
                  )}
                  <span className="inline-flex px-2 py-0.5 rounded text-[11px] font-medium text-[var(--text-secondary)] bg-[var(--bg-page)] border border-[var(--border-color)]">
                    {proj.categoryLabel}
                  </span>
                  {proj.tags?.map((tag) => (
                    <span key={tag} className="inline-flex px-2 py-0.5 rounded text-[11px] font-medium text-[var(--text-secondary)] bg-[var(--bg-page)] border border-[var(--border-color)]">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-[var(--text-regular)] line-clamp-2 leading-relaxed mt-2 mb-2">
                  {proj.info}
                </p>

                {/* Actions */}
                <div className="mt-auto pt-3 border-t border-[var(--border-color)] flex items-center justify-end gap-1.5">
                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-7 h-7 rounded-md text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--border-color)]/50 transition-colors"
                        title="GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}

                    {proj.demoUrl && (
                      <a
                        href={proj.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-7 h-7 rounded-md text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--border-color)]/50 transition-colors"
                        title="在线体验"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}

                  {proj.productHunt && (
                      <a
                        href={proj.productHunt}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-7 h-7 rounded-md text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--border-color)]/50 transition-colors"
                        title="Product Hunt"
                      >
                        <ProductHuntIcon className="w-5 h-5" />
                      </a>
                    )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12 text-sm text-[var(--text-secondary)]">
            未找到匹配的产品，请尝试其他关键词
          </div>
        )}
      </div>
    </section>
  );
};
