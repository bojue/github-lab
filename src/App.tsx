import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectsMatrix } from './components/ProjectsMatrix';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ProductItem } from './data/projectsData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProductItem | null>(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.body.classList.remove('theme-light');
    } else {
      document.body.classList.add('theme-light');
    }
  }, [isDark]);

  const handleToggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const handleExploreProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] transition-colors duration-200 flex flex-col justify-between">
      <div>
        <Header
          isDark={isDark}
          onToggleTheme={handleToggleTheme}
        />

        <main>
          {/* Top Hero Section */}
          <Hero onExploreProjects={handleExploreProjects} />

          {/* Direct Flattened Products Grid Section */}
          <ProjectsMatrix onSelectProject={setSelectedProject} />
        </main>
      </div>

      <Footer />

      {/* Product Lightbox & Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
