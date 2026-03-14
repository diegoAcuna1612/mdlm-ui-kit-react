import type { Meta, StoryObj } from '@storybook/react';
import { MuniModal } from './MuniModal';
import { MuniColors } from '../../theme/colors';
import  { useState } from 'react';

const meta: Meta<typeof MuniModal> = {
  title: 'Muni-UI/Modal', // Cómo se verá en el menú de Storybook
  component: MuniModal,
  parameters: {
    layout: 'centered', // Centra el componente en la vista previa
  },
  // Esto permite que Storybook genere controles automáticos para tus props
  argTypes: {
    onClose: { action: 'cerrado' },
    maxWidth: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '2xl', 'full'],
      description: 'Ancho máximo del modal'
    }
  },
};

export default meta;
type Story = StoryObj<typeof MuniModal>;

// Componente Wrapper para probar la apertura y cierre en Storybook de forma dinámica
const ModalWrapper = (args: any) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);

  return (
    <div>
      <button 
        onClick={() => setIsOpen(true)}
        style={{ 
          backgroundColor: MuniColors.secondary, 
          color: 'white', 
          border: 'none', 
          padding: '10px 20px', 
          borderRadius: '6px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}
        className="hover:opacity-90 transition-opacity"
      >
        Abrir Modal
      </button>
      <MuniModal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

// 1. Historia Base (Aviso Estándar)
export const Basico: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    isOpen: false,
    title: 'Aviso de Sistema',
    maxWidth: 'lg',
    children: (
      <div className="space-y-4">
        <p>Este es un mensaje informativo para el usuario final utilizando el Design System de La Molina.</p>
        <p className="text-sm text-gray-500">Puedes probar el comportamiento responsive ajustando el tamaño de tu navegador. El modal y sus botones se adaptarán fluidamente a dispositivos móviles.</p>
      </div>
    ),
    footer: (
      <button 
        style={{ 
          backgroundColor: MuniColors.primary, 
          color: 'white', 
          border: 'none', 
          padding: '10px 24px', 
          borderRadius: '6px',
          fontWeight: '600',
          cursor: 'pointer',
          width: '100%'
        }}
        className="sm:w-auto hover:opacity-90 transition-opacity shadow-sm"
      >
        Aceptar
      </button>
    )
  },
};

// 2. Historia de Ajuste Técnico (Contexto real de tu trabajo actual)
export const AjusteTecnico: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    isOpen: false,
    title: 'Confirmación de Ajustes Técnicos',
    maxWidth: 'md',
    children: (
      <div>
        <p style={{ marginBottom: '16px' }}>
          Se realizará de manera <strong>obligatoria</strong> lo relacionado a los ajustes técnicos del módulo:
        </p>
        <div className="p-4 rounded-lg" style={{ backgroundColor: `${MuniColors.secondary}08`, border: `1px solid ${MuniColors.secondary}20` }}>
          <ul className="list-disc list-inside space-y-2" style={{ color: MuniColors.secondary }}>
            <li>Licencias & Anuncios</li>
            <li>Sincronización de base de datos</li>
            <li>Actualización de expedientes</li>
          </ul>
        </div>
      </div>
    ),
    footer: (
      <>
        <button 
          style={{ 
            padding: '10px 20px', 
            background: 'white', 
            border: `1px solid ${MuniColors.neutral.light}`, 
            color: MuniColors.neutral.dark,
            borderRadius: '6px',
            fontWeight: '600',
            cursor: 'pointer',
            width: '100%'
          }}
          className="sm:w-auto hover:bg-gray-50 transition-colors shadow-sm"
        >
          Cancelar
        </button>
        <button 
          style={{ 
            backgroundColor: MuniColors.secondary, 
            color: 'white', 
            border: 'none', 
            padding: '10px 24px', 
            borderRadius: '6px',
            fontWeight: '600',
            cursor: 'pointer',
            width: '100%'
          }}
          className="sm:w-auto hover:opacity-90 transition-opacity shadow-sm"
        >
          Proceder con Ajuste
        </button>
      </>
    )
  },
};

// 3. Historia sin Footer (Solo información)
export const SoloInformacion: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    isOpen: false,
    title: 'Estado de Servidores',
    maxWidth: 'sm',
    children: (
      <div className="flex flex-col items-center text-center space-y-4 py-4">
        <div style={{ backgroundColor: `${MuniColors.primary}15`, padding: '16px', borderRadius: '50%' }}>
          <svg style={{ color: MuniColors.primary, width: '48px', height: '48px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-2" style={{ color: MuniColors.neutral.dark }}>¡Todo en orden!</h4>
          <p className="text-gray-600">Todos los servicios de la Municipalidad de La Molina se encuentran operativos actualmente.</p>
        </div>
      </div>
    ),
  },
};