import React, { useEffect } from 'react';
import { X, ExternalLink, Github } from 'lucide-react';
import { ProductItem } from '../data/projectsData';

interface ProjectModalProps {
  project: ProductItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[92vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="w-full flex items-center justify-between px-4 py-2.5 mb-2 rounded-lg bg-black/60 backdrop-blur-md text-white border border-white/10 text-xs">
          <div className="flex items-center gap-2.5">
            <span className="font-semibold text-sm text-slate-100">{project.name}</span>
          </div>

          <div className="flex items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white transition-colors"
                title="GitHub"
              >
                <Github className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">代码</span>
              </a>
            )}

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#3370ff] hover:bg-[#4c7dff] text-white transition-colors"
                title="在线体验"
              >
                <span>在线体验</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}

            <button
              onClick={onClose}
              className="p-1.5 ml-2 rounded-md text-slate-400 hover:text-white hover:bg-white/15 transition-colors cursor-pointer"
              aria-label="Close"
              title="关闭 (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Pure Large Image Viewer */}
        <div className="relative rounded-xl overflow-hidden border border-white/15 bg-slate-950/80 shadow-2xl max-h-[82vh] flex items-center justify-center">
          <img
            src={project.image}
            alt={project.name}
            referrerPolicy="no-referrer"
            className="w-auto h-auto max-w-full max-h-[82vh] object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};
