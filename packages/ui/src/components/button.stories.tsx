import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "./button"

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
      description: "The visual style of the button",
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
      description: "The size of the button",
    },
    asChild: {
      control: "boolean",
      description: "Render as a child component using Radix UI Slot",
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled",
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Button",
  },
}

export const Variants: Story = {
  render: () => (
    <div className='flex flex-wrap gap-4 p-4 rounded-lg bg-background'>
      <Button variant='default'>Default</Button>
      <Button variant='secondary'>Secondary</Button>
      <Button variant='destructive'>Destructive</Button>
      <Button variant='outline'>Outline</Button>
      <Button variant='ghost'>Ghost</Button>
      <Button variant='link'>Link</Button>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className='flex items-center gap-4'>
      <Button size='sm'>Small</Button>
      <Button size='default'>Default</Button>
      <Button size='lg'>Large</Button>
      <Button size='icon' aria-label='Arrow right'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='h-4 w-4'
          aria-hidden='true'
        >
          <path d='M5 12h14' />
          <path d='m12 5 7 7-7 7' />
        </svg>
      </Button>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className='flex flex-wrap gap-4'>
      <Button disabled>Disabled Default</Button>
      <Button variant='secondary' disabled>
        Disabled Secondary
      </Button>
      <Button variant='outline' disabled>
        Disabled Outline
      </Button>
    </div>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <div className='flex flex-wrap gap-4'>
      <Button>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='mr-2 h-4 w-4'
          aria-hidden='true'
        >
          <path d='M5 12h14' />
        </svg>
        With Icon
      </Button>
      <Button variant='outline'>
        Text First
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='ml-2 h-4 w-4'
          aria-hidden='true'
        >
          <path d='M5 12h14' />
          <path d='m12 5 7 7-7 7' />
        </svg>
      </Button>
    </div>
  ),
}

export const AsLink: Story = {
  render: () => (
    <Button asChild>
      <a href='https://example.com'>Link Button</a>
    </Button>
  ),
}

export const DarkModeShowcase: Story = {
  render: () => (
    <div className='grid grid-cols-2 gap-8'>
      <div className='p-6 rounded-lg bg-white'>
        <h3 className='mb-4 text-lg font-semibold text-gray-900'>Light Mode</h3>
        <div className='flex flex-col gap-3'>
          <Button variant='default'>Default Button</Button>
          <Button variant='secondary'>Secondary Button</Button>
          <Button variant='destructive'>Destructive Button</Button>
          <Button variant='outline'>Outline Button</Button>
          <Button variant='ghost'>Ghost Button</Button>
          <Button variant='link'>Link Button</Button>
        </div>
      </div>
      <div className='p-6 rounded-lg bg-slate-900 dark'>
        <h3 className='mb-4 text-lg font-semibold text-slate-100'>Dark Mode</h3>
        <div className='flex flex-col gap-3'>
          <Button variant='default'>Default Button</Button>
          <Button variant='secondary'>Secondary Button</Button>
          <Button variant='destructive'>Destructive Button</Button>
          <Button variant='outline'>Outline Button</Button>
          <Button variant='ghost'>Ghost Button</Button>
          <Button variant='link'>Link Button</Button>
        </div>
      </div>
    </div>
  ),
}
