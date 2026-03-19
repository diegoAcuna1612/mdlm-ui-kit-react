
import { forwardRef } from 'react';
import { MuniSizes } from '../../theme/sizes';
import type { ButtonProps, ButtonSize, ButtonVariant } from './MuniButton.types';

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-muni-primary text-white enabled:hover:bg-muni-darkGreen shadow-sm',
  secondary: 'bg-muni-secondary text-white enabled:hover:opacity-90',
  accent: 'bg-muni-accent text-muni-neutral-dark enabled:hover:brightness-95',
  darkGreen: 'bg-muni-darkGreen text-white enabled:hover:opacity-90',
  danger: 'bg-muni-danger text-white enabled:hover:opacity-90 shadow-sm',
  ghost: 'bg-muni-lightGray text-muni-darkGray enabled:hover:bg-muni-darkGray enabled:hover:text-white',
};

const sizeStyles: Record<ButtonSize, string> = MuniSizes.button;

export const MuniButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    variant = 'primary', 
    size = 'md', 
    children, 
    className = '', 
    isLoading = false, 
    fullWidth = false, 
    leftIcon, 
    rightIcon, 
    ...props }, ref) => {
    const baseClasses = 'rounded font-semibold transition-all duration-100 enabled:active:scale-95 focus:outline-none inline-flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50';
    
    const widthClass = fullWidth ? 'w-full' : 'w-fit';

    const combinedClasses = `${baseClasses} ${variantStyles[variant]} ${sizeStyles[size]} ${widthClass} ${className}`;

    return (
      <button 
        ref={ref}
        className={combinedClasses} 
        disabled={isLoading || props.disabled}
        {...props}>
        {isLoading ? (
          <div className="flex items-center gap-2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            <span>Cargando...</span>
          </div>
        ) : (
          <>
            {leftIcon && <span className="inline-flex items-center justify-center">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="inline-flex items-center justify-center">{rightIcon}</span>}
          </>
        )}
      </button>
    );
  }
);

MuniButton.displayName = 'MuniButton';