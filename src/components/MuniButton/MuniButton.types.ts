import { type ButtonHTMLAttributes, type ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'darkGreen' | 'danger' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children:ReactNode;
    variant?:ButtonVariant;
    size?:ButtonSize;
    isLoading?: boolean;   
    fullWidth?: boolean;   
    leftIcon?: React.ReactNode;  
    rightIcon?: React.ReactNode; 
}