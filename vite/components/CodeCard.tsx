import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface CodeCardProps {
  label: string;
  command: string;
  description?: string;
  index: number;
}

export const CodeCard: React.FC<CodeCardProps> = ({ label, command, description, index }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative w-full rounded-3xl bg-claude-card/60 border border-claude-border/50 hover:border-claude-accent/30 backdrop-blur-md p-5 overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(217,119,87,0.15)]"
    >
      {/* Decoration Line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-claude-accent/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-claude-text tracking-wide flex items-center gap-2">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-claude-bg border border-claude-border text-xs text-claude-muted font-mono">
              {index + 1}
            </span>
            {label}
          </h3>
          {description && (
            <span className="text-xs text-claude-muted hidden sm:block">{description}</span>
          )}
        </div>

        <div 
          onClick={handleCopy}
          className="relative flex items-center bg-black/40 rounded-xl border border-claude-border/30 p-4 cursor-pointer group/code hover:bg-black/60 transition-colors"
        >
          <code className="flex-1 font-mono text-sm sm:text-base text-claude-accent break-all pr-8 selection:bg-claude-accent/20">
             <span className="text-claude-muted mr-2 select-none">$</span>{command}
          </code>
          
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <button 
              className={`p-2 rounded-lg transition-all duration-200 ${copied ? 'bg-green-500/20 text-green-400' : 'bg-claude-bg text-claude-muted hover:text-white hover:bg-claude-border'}`}
              aria-label="Copy command"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </button>
          </div>
        </div>

        {description && (
          <span className="text-xs text-claude-muted sm:hidden">{description}</span>
        )}
      </div>
    </motion.div>
  );
};