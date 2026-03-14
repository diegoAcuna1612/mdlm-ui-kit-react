import React from 'react';
import { MuniColors } from '../../theme/colors';

type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface MuniButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    backgroundColor: MuniColors.primary,
    color: '#ffffff',
    border: 'none',
  },
  secondary: {
    backgroundColor: MuniColors.secondary,
    color: '#ffffff',
    border: 'none',
  },
  accent: {
    backgroundColor: MuniColors.accent,
    color: MuniColors.neutral.dark,
    border: 'none',
  },
  outline: {
    backgroundColor: 'transparent',
    color: MuniColors.secondary,
    border: `2px solid ${MuniColors.secondary}`,
  },
  ghost: {
    backgroundColor: 'transparent',
    color: MuniColors.neutral.dark,
    border: 'none',
  },
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-base',
  lg: 'px-7 py-3.5 text-lg',
};

export const MuniButton: React.FC<MuniButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  className = '',
  disabled,
  ...props
}) => {
  return (
    <button
      className={`
        inline-flex items-center justify-center
        font-semibold rounded-lg
        transition-all duration-200 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        hover:opacity-90 hover:shadow-md
        active:scale-[0.97]
        cursor-pointer
        ${sizeClasses[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      style={{
        ...variantStyles[variant],
        ...(variant === 'primary' ? { '--tw-ring-color': MuniColors.primary } as React.CSSProperties : {}),
        ...(variant === 'secondary' || variant === 'outline' ? { '--tw-ring-color': MuniColors.secondary } as React.CSSProperties : {}),
        ...(variant === 'accent' ? { '--tw-ring-color': MuniColors.accent } as React.CSSProperties : {}),
      }}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
