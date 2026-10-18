import React from 'react';
import { Sun, Moon, Layers } from 'lucide-react';

interface HeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isDark, onToggleTheme }) => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[var(--bg-header)] border-b border-[var(--border-color)] transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Brand Wordmark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2.5 text-base font-semibold text-[var(--text-primary)] hover:opacity-90 transition-opacity whitespace-nowrap shrink-0"
        >
          <div className="w-7 h-7 rounded-lg bg-[#3370ff] flex items-center justify-center text-white shadow-sm">
            <Layers className="w-4 h-4" />
          </div>
          <span className="tracking-tight font-medium">Bojue`s Lab</span>
        </a>

        {/* Actions */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Theme switcher */}
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--border-color)]/50 transition-colors cursor-pointer"
            title={isDark ? '切换浅色模式' : '切换深色模式'}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </header>
  );
};
