import React from 'react';
import { cn } from '../../lib/utils';

const Logo = ({ 
  size = 'md', 
  variant = 'default', 
  className = '',
  showText = true,
  animated = true,
  ...props 
}) => {
  const sizeClasses = {
    xs: 'h-6 w-6',
    sm: 'h-8 w-8', 
    md: 'h-10 w-10',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16',
    '2xl': 'h-20 w-20',
    '3xl': 'h-24 w-24'
  };

  const textSizeClasses = {
    xs: 'text-sm',
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
    xl: 'text-2xl',
    '2xl': 'text-3xl',
    '3xl': 'text-4xl'
  };

  const variants = {
    default: 'filter-none',
    glow: animated ? 'animate-glow' : 'drop-shadow-lg',
    float: animated ? 'animate-float' : '',
    pulse: animated ? 'animate-pulse-slow' : ''
  };

  return (
    <div 
      className={cn(
        "flex items-center gap-3 transition-all duration-300",
        className
      )}
      {...props}
    >
      {/* Logo Image */}
      <div className={cn(
        "relative flex items-center justify-center",
        sizeClasses[size],
        variants[variant]
      )}>
        {/* Glow Background Effect */}
        {variant === 'glow' && (
          <div className={cn(
            "absolute inset-0 bg-gradient-glow rounded-full blur-md opacity-60",
            animated && "animate-pulse-slow"
          )} />
        )}
        
        {/* Logo Image */}
        <img
          src="/logo.png"
          alt="PromoHive Logo"
          className={cn(
            "relative z-10 object-contain transition-transform duration-300",
            "hover:scale-110 hover:rotate-3",
            animated && "animate-bounce-in"
          )}
          style={{
            filter: variant === 'glow' 
              ? 'drop-shadow(0 0 8px rgba(0, 212, 255, 0.6)) drop-shadow(0 0 16px rgba(255, 0, 128, 0.4))'
              : 'none'
          }}
        />
      </div>

      {/* Logo Text */}
      {showText && (
        <div className="flex flex-col">
          <h1 className={cn(
            "font-bold bg-gradient-primary bg-clip-text text-transparent",
            "tracking-tight leading-none",
            textSizeClasses[size],
            animated && "animate-fade-in-up"
          )}>
            PromoHive
          </h1>
          {size !== 'xs' && size !== 'sm' && (
            <p className={cn(
              "text-xs text-text-secondary font-medium tracking-wide",
              "opacity-80",
              animated && "animate-fade-in-up animation-delay-100"
            )}>
              Earn & Thrive
            </p>
          )}
        </div>
      )}
    </div>
  );
};

// Specialized Logo Components
export const LogoIcon = (props) => (
  <Logo {...props} showText={false} />
);

export const LogoWithGlow = (props) => (
  <Logo {...props} variant="glow" />
);

export const FloatingLogo = (props) => (
  <Logo {...props} variant="float" />
);

export const PulseLogo = (props) => (
  <Logo {...props} variant="pulse" />
);

// Brand Colors Export for consistency
export const brandColors = {
  primary: '#00d4ff',
  secondary: '#ff0080',
  gradient: 'linear-gradient(135deg, #00d4ff 0%, #ff0080 100%)'
};

export default Logo;
