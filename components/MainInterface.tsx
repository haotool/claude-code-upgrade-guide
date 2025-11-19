
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Command, Monitor, Sparkles, Globe, Copy, Check } from 'lucide-react';
import { PLATFORM_DATA, UI_TEXT } from '@/lib/constants';
import { PlatformID, Language } from '@/lib/types';
import { CodeCard } from '@/components/CodeCard';
import { CustomFooter } from '@/components/CustomFooter';

const MainInterface: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PlatformID>(PlatformID.MACOS);
  const [lang, setLang] = useState<Language>('zh'); // Default to Chinese
  const [copiedAll, setCopiedAll] = useState(false);

  const activeData = PLATFORM_DATA.find(p => p.id === activeTab);

  const handleCopyAll = async () => {
    if (!activeData) return;
    
    const allCommands = activeData.steps.map(step => step.command).join('\n');
    
    try {
      await navigator.clipboard.writeText(allCommands);
      setCopiedAll(true);
      setTimeout(() => setCopiedAll(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // Icon mapping
  const getIcon = (iconName: string, active: boolean) => {
    const className = `w-5 h-5 transition-colors duration-300 ${active ? 'text-claude-accent' : 'text-claude-muted'}`;
    switch (iconName) {
      case 'Apple': return <Command className={className} aria-hidden="true" />;
      case 'Terminal': return <Terminal className={className} aria-hidden="true" />;
      case 'Monitor': return <Monitor className={className} aria-hidden="true" />;
      default: return <Terminal className={className} aria-hidden="true" />;
    }
  };

  return (
    <div className="min-h-screen w-full bg-claude-bg text-claude-text selection:bg-claude-accent/30 selection:text-white overflow-x-hidden font-sans flex flex-col">
      {/* Language Toggle - Fixed Top Right */}
      <div className="fixed top-4 right-4 z-50">
        <button 
          onClick={() => setLang(prev => prev === 'en' ? 'zh' : 'en')}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-claude-card/80 backdrop-blur-md border border-claude-border/60 hover:border-claude-accent/50 transition-all duration-300 shadow-lg group"
          aria-label="Switch Language"
        >
          <Globe size={14} className="text-claude-muted group-hover:text-claude-accent transition-colors" />
          <span className="text-xs font-medium text-claude-muted group-hover:text-white transition-colors w-[44px] text-center">
            {lang === 'en' ? 'EN' : '繁中'}
          </span>
        </button>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-12 sm:py-20 flex flex-col items-center gap-8 flex-1">
        
        {/* Header Section */}
        <header className="text-center space-y-5 w-full">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-claude-card border border-claude-border/60 shadow-sm mb-4">
            <Sparkles size={14} className="text-claude-accent animate-pulse" />
            <span className="text-xs font-medium tracking-wide text-claude-muted uppercase">
              {UI_TEXT.badge[lang]}
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
            {UI_TEXT.title[lang]}
            <br />
            <span className="font-serif italic text-claude-accent opacity-90 text-4xl sm:text-5xl md:text-7xl pt-2 block">
              {UI_TEXT.subtitle[lang]}
            </span>
          </h1>
          
          <p className={`mt-6 text-claude-muted text-sm sm:text-base max-w-md mx-auto leading-relaxed ${lang === 'zh' ? 'tracking-wide' : ''}`}>
            {UI_TEXT.description[lang]}
          </p>
        </motion.div>
      </header>

      {/* Platform Selector - Mobile First Design */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full max-w-md"
      >
        <div className="grid grid-cols-3 gap-2 p-1.5 bg-claude-card/80 backdrop-blur-md border border-claude-border rounded-2xl shadow-lg" role="tablist">
          {PLATFORM_DATA.map((platform) => {
            const isActive = activeTab === platform.id;
            return (
              <button
                key={platform.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(platform.id)}
                className={`relative flex flex-col sm:flex-row items-center justify-center gap-2 py-3 sm:py-3 px-2 rounded-xl transition-all duration-300 ${isActive ? 'text-white' : 'text-claude-muted hover:text-white/80'}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white/10 rounded-xl shadow-inner border border-white/5"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{getIcon(platform.iconName, isActive)}</span>
                <span className={`relative z-10 text-xs sm:text-sm font-medium ${isActive ? 'text-claude-accent' : ''}`}>
                  {platform.name.split(' ')[0]}
                </span>
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Content Area */}
      <div className="w-full space-y-6 min-h-[400px]">
        <AnimatePresence mode='wait'>
          <motion.div
            key={`${activeTab}-${lang}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center justify-between px-2">
              <h2 className="text-lg font-medium text-white/90 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-claude-accent shadow-[0_0_10px_rgba(217,119,87,0.8)]" aria-hidden="true"></span>
                {UI_TEXT.forPlatform[lang]} {activeData?.name}
              </h2>
              <span className="text-xs text-claude-muted bg-claude-card px-2 py-1 rounded border border-claude-border/50">
                {activeData?.steps.length} {UI_TEXT.stepCount[lang]}
              </span>
            </div>

            {activeData?.steps.map((step, index) => (
              <CodeCard 
                key={step.id}
                index={index}
                label={step.label[lang]}
                command={step.command}
                description={step.description?.[lang]}
              />
            ))}

            {/* Elegant Copy All Button */}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              onClick={handleCopyAll}
              className="relative w-full mt-6 group overflow-hidden rounded-2xl bg-claude-card/40 hover:bg-claude-card/60 border border-claude-border/40 hover:border-claude-accent/40 backdrop-blur-sm transition-all duration-300"
            >
              <div className="relative flex items-center justify-center gap-2.5 px-5 py-3.5">
                {copiedAll ? (
                  <>
                    <Check className="w-4 h-4 text-claude-accent" />
                    <span className="text-sm font-medium text-claude-text">
                      {UI_TEXT.copiedAll[lang]}
                    </span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-claude-muted group-hover:text-claude-accent transition-colors duration-300" />
                    <span className="text-sm font-medium text-claude-muted group-hover:text-claude-text transition-colors duration-300">
                      {UI_TEXT.copyAllCommands[lang]}
                    </span>
                  </>
                )}
              </div>
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>
      </div>
      
      {/* Footer outside of max-w container */}
      <CustomFooter lang={lang} />
    </div>
  );
};

export default MainInterface;
