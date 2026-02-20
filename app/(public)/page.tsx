import React, { useState, useEffect, useMemo } from 'react';
import { 
  Leaf, 
  BookOpen, 
  Shield, 
  ArrowRight, 
  Menu, 
  X, 
  Github, 
  Globe, 
  Sun, 
  Moon,
  ArrowUp,
  ChevronDown,
  Clock,
  ExternalLink,
  Lock
} from 'lucide-react';

// Advanced Adaptive Styling (Day & Night)
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;0,9..144,800;1,9..144,300&family=JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap');

  :root {
    --bg: #fcfcf7;
    --ink: #1a1b18;
    --forest: #2d4232;
    --moss: #588157;
    --clay: #a47148;
    --border: rgba(26, 27, 24, 0.08);
    --card: #ffffff;
    --accent: #588157;
  }

  [data-theme='dark'] {
    --bg: #0f100e;
    --ink: #e2e2dc;
    --forest: #8fb996;
    --moss: #a3b18a;
    --clay: #d4a373;
    --border: rgba(226, 226, 220, 0.1);
    --card: #161715;
    --accent: #a3b18a;
  }

  body {
    font-family: 'Plus Jakarta Sans', sans-serif;
    background-color: var(--bg);
    color: var(--ink);
    transition: background-color 0.4s ease, color 0.4s ease;
    -webkit-font-smoothing: antialiased;
  }

  .serif { font-family: 'Fraunces', serif; }
  .mono { font-family: 'JetBrains Mono', monospace; }

  .stream-container {
    max-width: 720px;
    margin: 0 auto;
  }

  .drop-cap::first-letter {
    font-family: 'Fraunces', serif;
    font-size: 4.5rem;
    float: left;
    line-height: 4rem;
    padding-right: 0.75rem;
    font-weight: 800;
    color: var(--moss);
  }

  .article-content p {
    margin-bottom: 2rem;
    line-height: 1.85;
    font-size: 1.15rem;
  }

  .glass-nav {
    backdrop-filter: blur(12px);
    background: rgba(var(--bg-rgb), 0.8);
    border-bottom: 1px solid var(--border);
  }

  .gradient-mask {
    mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
  }

  @keyframes slideUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .animate-slide-up {
    animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  /* Custom logic for "Read Full" transition */
  .truncate-content {
    max-height: 400px;
    overflow: hidden;
    position: relative;
  }

  .truncate-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 150px;
    background: linear-gradient(transparent, var(--bg));
  }
`;

const App = () => {
  const [theme, setTheme] = useState('light');
  const [expandedPosts, setExpandedPosts] = useState({});
  const [visibleCount, setVisibleCount] = useState(3);
  const [isScrolled, setIsScrolled] = useState(false);

  // Initialize Theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('manopchar-theme') || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('manopchar-theme', newTheme);
  };

  // Scroll detection for "Back to Top" or Nav shrinking
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500) {
        setVisibleCount(prev => Math.min(prev + 2, posts.length));
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const posts = [
    {
      id: 1,
      tag: "PHASE 3.0",
      title: "The Shield: Decoupling Survival from Market Friction",
      date: "2024.02.20",
      author: "Tutor-Farmer",
      content: `
        <p>The "What If" Protocol is not an experiment in wealth; it is an experiment in immunity. By the time this ledger entry is published, the Phase 3.0 Shield will be active. This is a perpetual endowment of ₹12,000 Crore, designed to protect the Knowledge Hub (1.0) and the Wild Forest (2.0) from the volatility of external markets.</p>
        <p>When survival is monetized, the soul is leased. By providing a 0% cost-of-living buffer for our graduates, we allow them to think in centuries rather than quarters. Sovereign Efficiency is only possible when the threat of starvation is removed by design, not by charity.</p>
        <p>The Shield works via a Zero-Burn mandate. We never touch the principal. We only harvest the energy of the interest, mirroring the way we harvest the energy of the sun in the forest floor. It is biological financial engineering.</p>
      `,
      full: true
    },
    {
      id: 2,
      tag: "ECOLOGY",
      title: "Abundance as an Immune System",
      date: "2024.01.15",
      author: "Tutor-Farmer",
      content: `
        <p>In a Tier-C town, the 'fence' is the default architecture. We view the fence as a failure of imagination. In our Phase 2.0 implementation, we replace physical barriers with metabolic abundance. When the forest produces 10 times the local caloric requirement, theft becomes an obsolete concept.</p>
        <p>A hungry man will climb a wall. A man surrounded by fruit will sit down and eat. We are planting the solution to crime. By de-privatizing the forest, we create a community immune system where the graduates of 1.0 act as the stewards of the flow, rather than the guards of the gate.</p>
        <p>This is the transition from Scarcity-Logic to Flow-Logic. It requires a hard-fork of the human ego, facilitated by the safety of the Shield.</p>
      `
    },
    {
      id: 3,
      tag: "PEDAGOGY",
      title: "The Curriculum of the Un-Learned",
      date: "2023.12.01",
      author: "Tutor-Farmer",
      content: `
        <p>The modern education system is a training camp for the rat race. It teaches you to compete for a seat on a sinking ship. At the Manopchar Hub, our curriculum is focused on the 'Un-learning' of industrial habits. We don't teach students to find jobs; we teach them to find soil.</p>
        <p>A student's final thesis is not a paper, but a self-sustaining swale. If the water flows and the trees grow, they pass. If the logic fails, the forest reflects it immediately. Feedback loops in nature are honest. Grading systems in schools are not.</p>
        <p>We are building a generation of Sovereign Engineers who can bridge the gap between a decentralized ledger and a nitrogen-fixing root system. Digital to Dirt.</p>
      `
    },
    {
      id: 4,
      tag: "PHILOSOPHY",
      title: "The Lazy Moron: A Study in High Efficiency",
      date: "2023.11.10",
      author: "Tutor-Farmer",
      content: `
        <p>To the frantic observer, the Tutor-Farmer looks lazy. To the Sovereign observer, the frantic man looks inefficient. Work is often a mask for lack of design. If you design a system correctly, the system does the work. You simply observe the flow.</p>
        <p>The 'Lazy Moron' is the one who refuses to do unnecessary work. They would rather spend three months designing a gravity-fed irrigation system than three years carrying buckets of water. Tier-C towns are full of bucket-carriers. We are training the designers.</p>
      `
    }
  ];

  const toggleExpand = (id) => {
    setExpandedPosts(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen selection:bg-moss selection:text-white">
      <style>{styles}</style>

      {/* Sovereign Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass-nav' : 'py-8'}`}>
        <div className="max-w-screen-xl mx-auto px-6 flex items-center justify-between">
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-8 h-8 bg-forest flex items-center justify-center rounded-lg text-white">
              <Leaf size={16} strokeWidth={2.5} />
            </div>
            <span className="serif font-extrabold text-2xl tracking-tighter">manopchar<span className="text-moss">.in</span></span>
          </div>

          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex items-center space-x-8 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500">
              <a href="#" className="hover:text-forest transition-colors">Manifesto</a>
              <a href="#" className="hover:text-forest transition-colors">Protocol</a>
              <a href="#" className="flex items-center text-clay">
                CC0 Repo <ExternalLink size={12} className="ml-1" />
              </a>
            </nav>
            
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-stone-200/50 transition-colors text-stone-500"
              title="Toggle Day/Night"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Sovereign Stream */}
      <main className="pt-32 pb-32 px-6">
        <div className="stream-container">
          
          {/* Status Bar */}
          <div className="mb-20 flex items-center justify-between border-y border-border py-4 mono text-[10px] uppercase tracking-widest text-stone-400">
            <span className="flex items-center"><Clock size={12} className="mr-2" /> Last Update: {posts[0].date}</span>
            <span className="flex items-center text-moss"><Shield size={12} className="mr-2" /> Shield Status: Nominal</span>
          </div>

          <div className="space-y-32">
            {posts.slice(0, visibleCount).map((post, index) => {
              const isFirst = index === 0;
              const isExpanded = expandedPosts[post.id] || isFirst;

              return (
                <article 
                  key={post.id} 
                  className={`animate-slide-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Metadata */}
                  <div className="mb-6 flex items-center space-x-4">
                    <span className="mono text-[10px] font-bold px-2 py-0.5 rounded bg-accent/10 text-accent uppercase tracking-widest">
                      {post.tag}
                    </span>
                    <span className="text-stone-400 text-xs font-mono">{post.date}</span>
                  </div>

                  {/* Title */}
                  <h2 className={`serif font-black mb-8 leading-tight text-forest ${isFirst ? 'text-5xl md:text-6xl' : 'text-3xl md:text-4xl'}`}>
                    {post.title}
                  </h2>

                  {/* Content Body */}
                  <div className={`article-content ${!isExpanded ? 'truncate-content' : ''}`}>
                    <div 
                      className={`${isFirst ? 'drop-cap' : ''}`}
                      dangerouslySetInnerHTML={{ __html: post.content }} 
                    />
                    
                    {!isExpanded && (
                      <>
                        <div className="truncate-overlay"></div>
                        <button 
                          onClick={() => toggleExpand(post.id)}
                          className="relative z-10 mt-4 flex items-center space-x-2 text-xs font-black uppercase tracking-widest text-clay hover:text-moss transition-colors group"
                        >
                          <span>Read Full Entry</span>
                          <ChevronDown size={14} className="group-hover:translate-y-1 transition-transform" />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Expanded Footer */}
                  {isExpanded && !isFirst && (
                    <button 
                      onClick={() => toggleExpand(post.id)}
                      className="mt-8 text-[10px] font-bold uppercase tracking-widest text-stone-400 hover:text-ink transition-colors"
                    >
                      Collapse Entry
                    </button>
                  )}

                  {isFirst && (
                    <div className="mt-12 p-8 rounded-3xl bg-accent/5 border border-accent/10 flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-forest flex items-center justify-center text-white serif italic font-bold">TF</div>
                      <div>
                        <p className="text-sm font-bold leading-none mb-1">The Tutor-Farmer</p>
                        <p className="text-[10px] mono text-stone-400 uppercase">Principal Architect / Tier-C Sovereign</p>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          {/* Infinite Scroll Indicator */}
          {visibleCount < posts.length && (
            <div className="mt-24 pt-24 border-t border-border text-center">
              <div className="inline-block animate-bounce text-stone-300">
                <ChevronDown size={32} strokeWidth={1} />
              </div>
              <p className="mt-4 mono text-[10px] text-stone-400 uppercase tracking-[0.3em]">Descending into older layers...</p>
            </div>
          )}
        </div>
      </main>

      {/* Floating Action / Back to Top */}
      {isScrolled && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-10 right-10 w-12 h-12 bg-forest text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-50"
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* Global Footer */}
      <footer className="py-32 border-t border-border bg-stone-100/30 dark:bg-stone-900/10">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-16 mb-20">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-8">
                <Leaf className="text-moss" />
                <span className="serif font-black text-2xl tracking-tight">manopchar<span className="text-moss">.in</span></span>
              </div>
              <p className="text-stone-500 max-w-sm text-lg leading-relaxed">
                A repository of Sovereign Efficiency. Built for the transition of Tier-C towns from dependency to biological abundance.
              </p>
            </div>
            
            <div className="space-y-12">
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-widest text-ink mb-6">Connect</h4>
                <div className="flex space-x-6 text-stone-400">
                  <Github className="hover:text-ink cursor-pointer transition-colors" />
                  <Globe className="hover:text-ink cursor-pointer transition-colors" />
                  <Lock className="hover:text-ink cursor-pointer transition-colors" title="Encrypted Channel" />
                </div>
              </div>
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-widest text-ink mb-6">License</h4>
                <p className="text-xs text-stone-500 font-mono">Creative Commons Zero (CC0). No rights reserved. The logic is the gift.</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-border text-[10px] font-bold uppercase tracking-widest text-stone-400">
            <p>© 2024 MANOPCHAR PROTOCOL</p>
            <p className="mt-4 md:mt-0 italic font-serif normal-case text-base text-stone-300">"Success is a shadow."</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;