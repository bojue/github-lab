import React from 'react';

const ProductHuntIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm0 22.083A10.083 10.083 0 1 1 12 1.917a10.083 10.083 0 0 1 0 20.166zm1.214-15.333H8.4v10.5h2.143v-3.368h2.671a3.566 3.566 0 1 0 0-7.132zm-.107 5.142h-2.564V8.75h2.564a1.571 1.571 0 1 1 0 3.142z" />
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--bg-page)] text-[var(--text-secondary)] py-8 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-center gap-3 text-xs">
        <a
          href="https://www.producthunt.com/products/nocokit"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          title="Product Hunt - NoCoKit"
          aria-label="Product Hunt"
        >
          <ProductHuntIcon className="w-4 h-4" />
        </a>
        <span className="text-[var(--text-muted)]">
          © {new Date().getFullYear()} Bojue`s Lab
        </span>
      </div>
    </footer>
  );
};
