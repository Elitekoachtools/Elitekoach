import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'outline' | 'solid';
}

export const Badge: React.FC<BadgeProps> = ({ children, className = '', variant = 'outline' }) => {
  const styles = variant === 'outline' 
    ? "border border-brand-accent/30 text-brand-accent"
    : "bg-brand-accent text-brand-bg";
    
  return (
    <span className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-display font-bold uppercase tracking-[0.2em] ${styles} ${className}`}>
      {children}
    </span>
  );
};
