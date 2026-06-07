import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'secondary';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "px-10 py-4 rounded-full font-display uppercase tracking-widest text-sm transition-all duration-300 flex items-center justify-center gap-2 font-black";
  const variants = {
    primary: "bg-brand-accent text-brand-bg hover:bg-white hover:text-black active:scale-95 neon-glow hover:neon-glow-strong",
    secondary: "bg-white text-brand-bg hover:bg-brand-accent hover:text-brand-bg active:scale-95",
    outline: "border-2 border-white/20 text-white hover:border-brand-accent hover:text-brand-accent active:scale-95",
    ghost: "text-white/60 hover:text-brand-accent active:scale-95"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
