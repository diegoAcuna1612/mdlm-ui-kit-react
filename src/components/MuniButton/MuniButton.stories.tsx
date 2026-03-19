import type { Meta, StoryObj } from '@storybook/react';
import { MuniButton } from './MuniButton';

const meta: Meta<typeof MuniButton>={
  title: 'Components/MuniButton',
  component: MuniButton,
  argTypes: {
    variant: { control: 'select' },
    size: { control: 'select' },
  },
}

export default meta;
type Story = StoryObj<typeof MuniButton>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Botón Municipal',
    size: 'md',
  },
};

export const Secondary:Story={
  args: {
    variant: 'secondary',
    children: 'Botón Municipal',
    size: 'md',
  },
}

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Eliminar Expediente',
    size: 'md',
  },
};

export const Accent: Story = {
  args: {
    variant: 'accent',
    children: 'Confirmar Acción',
    size: 'md',
  },
};

export const DarkGreen: Story = {
  args: {
    variant: 'darkGreen',
    children: 'Guardar Cambios',
    size: 'md',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Cancelar / Atrás',
    size: 'md',
  },
};
export const Disabled: Story = {
  args: {
    variant: 'primary',
    children: 'Botón Bloqueado',
    size: 'md',
    disabled: true, 
  },
};


export const AllSizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-4">
      <MuniButton {...args} size="sm">Pequeño</MuniButton>
      <MuniButton {...args} size="md">Mediano</MuniButton>
      <MuniButton {...args} size="lg">Grande</MuniButton>
    </div>
  ),
  args: {
    variant: 'primary',
  }
};

export const AllVariants: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-4">
      <MuniButton {...args} variant="primary">Primary</MuniButton>
      <MuniButton {...args} variant="secondary">Secondary</MuniButton>
      <MuniButton {...args} variant="accent">Accent</MuniButton>
      <MuniButton {...args} variant="darkGreen">Dark Green</MuniButton>
      <MuniButton {...args} variant="danger">Danger</MuniButton>
      <MuniButton {...args} variant="ghost">Ghost</MuniButton>
    </div>
  ),

  
};

export const AllDisabled: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-4">
      <MuniButton {...args} variant="primary" disabled>Primary</MuniButton>
      <MuniButton {...args} variant="secondary" disabled>Secondary</MuniButton>
      <MuniButton {...args} variant="accent" disabled>Accent</MuniButton>
      <MuniButton {...args} variant="darkGreen" disabled>Dark Green</MuniButton>
      <MuniButton {...args} variant="danger" disabled>Danger</MuniButton>
      <MuniButton {...args} variant="ghost" disabled>Ghost</MuniButton>

    </div>
  ),
};

export const Loading: Story = {
  args: {
    variant: 'primary',
    children: 'Enviar',
    isLoading: true,
  },
};

export const FullWidth: Story = {
  args: {
    variant: 'primary',
    children: 'Botón Ancho Completo',
    fullWidth: true,
  },
};

export const WithIcons: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">    
      <MuniButton {...args} leftIcon="📁" >
        Abrir Archivo
      </MuniButton>
      <MuniButton {...args} variant="secondary" rightIcon="➡">
        Siguiente Paso
      </MuniButton>
      <MuniButton {...args} variant="darkGreen" leftIcon="➕" rightIcon="💾">
        Crear y Guardar
      </MuniButton>
    </div>
  ),
};

export const FullWidthWithIcons: Story = {
  args: {
    variant: 'primary',
    children: 'Confirmar y Continuar',
    fullWidth: true,
    leftIcon: '✔',
    rightIcon: '➡',
  },
};