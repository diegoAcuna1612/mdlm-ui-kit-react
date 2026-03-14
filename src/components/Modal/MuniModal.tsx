import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { MuniColors } from '../../theme/colors';

interface MuniModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

export const MuniModal: React.FC<MuniModalProps> = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  footer,
  maxWidth = 'lg' 
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevenir scroll en el body cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Manejar el cierre con la tecla Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !mounted) return null;

  const maxWidthClasses = {
    'sm': 'max-w-sm',
    'md': 'max-w-md',
    'lg': 'max-w-lg',
    'xl': 'max-w-xl',
    '2xl': 'max-w-2xl',
    'full': 'max-w-[95%] sm:max-w-[90%]',
  };

  return createPortal(
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 backdrop-blur-sm"
      style={{ backgroundColor: 'rgba(51, 51, 51, 0.7)' }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Overlay para cerrar al hacer clic afuera */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />
      
      <div 
        className={`relative bg-white rounded-xl shadow-2xl w-full ${maxWidthClasses[maxWidth]} max-h-full flex flex-col animate-in fade-in zoom-in-95 duration-200`}
        style={{ borderTop: `6px solid ${MuniColors.primary}` }}
      >
        {/* Header */}
        <div 
          className="flex justify-between items-center px-5 py-4 sm:px-6 sm:py-5 border-b border-gray-100 rounded-t-xl"
          style={{ backgroundColor: MuniColors.neutral.light }}
        >
          <h3 
            id="modal-title"
            className="text-lg sm:text-xl font-bold pr-4" 
            style={{ color: MuniColors.secondary }}
          >
            {title}
          </h3>
          <button 
            onClick={onClose} 
            className="flex-shrink-0 rounded-full p-1.5 inline-flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1"
            style={{ '--tw-ring-color': MuniColors.secondary } as React.CSSProperties}
            aria-label="Cerrar modal"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Contenido */}
        <div className="p-5 sm:p-6 sm:py-8 overflow-y-auto" style={{ color: MuniColors.neutral.dark }}>
          {children}
        </div>

        {/* Footer opcional */}
        {footer && (
          <div className="px-5 py-4 sm:px-6 border-t border-gray-100 bg-gray-50 flex flex-col-reverse sm:flex-row justify-end gap-3 sm:gap-4 rounded-b-xl">
            {footer}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};