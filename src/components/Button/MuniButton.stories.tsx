import type { Meta, StoryObj } from '@storybook/react';
import { MuniButton } from './MuniButton';

const meta: Meta<typeof MuniButton> = {
  title: 'Muni-UI/Button',
  component: MuniButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'outline', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    fullWidth: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof MuniButton>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Botón Primario',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Botón Secundario',
  },
};

export const Accent: Story = {
  args: {
    variant: 'accent',
    children: 'Botón Acento',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Botón Outline',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Botón Ghost',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <MuniButton size="sm">Pequeño</MuniButton>
      <MuniButton size="md">Mediano</MuniButton>
      <MuniButton size="lg">Grande</MuniButton>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <MuniButton variant="primary">Primario</MuniButton>
      <MuniButton variant="secondary">Secundario</MuniButton>
      <MuniButton variant="accent">Acento</MuniButton>
      <MuniButton variant="outline">Outline</MuniButton>
      <MuniButton variant="ghost">Ghost</MuniButton>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    children: 'Deshabilitado',
    disabled: true,
  },
};

export const FullWidth: Story = {
  render: () => (
    <div className="w-80 space-y-3">
      <MuniButton fullWidth variant="primary">Acción Principal</MuniButton>
      <MuniButton fullWidth variant="outline">Cancelar</MuniButton>
    </div>
  ),
};
