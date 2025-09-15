import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "./button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card"

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Card className='w-[350px]'>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content can be any React node</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  ),
}

export const SimpleCard: Story = {
  render: () => (
    <Card className='w-[350px]'>
      <CardHeader>
        <CardTitle>Simple Card</CardTitle>
      </CardHeader>
      <CardContent>
        <p>This is a simple card with just a title and content.</p>
      </CardContent>
    </Card>
  ),
}

export const WithForm: Story = {
  render: () => (
    <Card className='w-[400px]'>
      <CardHeader>
        <CardTitle>Create Account</CardTitle>
        <CardDescription>Enter your details to create a new account</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className='grid w-full items-center gap-4'>
            <div className='flex flex-col space-y-1.5'>
              <span className='text-sm font-medium'>Name</span>
              <input
                placeholder='Your name'
                className='flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm'
                aria-label='Name'
              />
            </div>
            <div className='flex flex-col space-y-1.5'>
              <span className='text-sm font-medium'>Email</span>
              <input
                type='email'
                placeholder='Your email'
                className='flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm'
                aria-label='Email'
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className='flex justify-between'>
        <Button variant='outline'>Cancel</Button>
        <Button>Create</Button>
      </CardFooter>
    </Card>
  ),
}

export const WithList: Story = {
  render: () => (
    <Card className='w-[350px]'>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Your recent account activity</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className='space-y-2'>
          <li className='flex items-center justify-between text-sm'>
            <span>Login from Chrome</span>
            <span className='text-muted-foreground'>2 hours ago</span>
          </li>
          <li className='flex items-center justify-between text-sm'>
            <span>Password changed</span>
            <span className='text-muted-foreground'>3 days ago</span>
          </li>
          <li className='flex items-center justify-between text-sm'>
            <span>Email verified</span>
            <span className='text-muted-foreground'>1 week ago</span>
          </li>
        </ul>
      </CardContent>
    </Card>
  ),
}

export const CardGrid: Story = {
  render: () => (
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
      <Card>
        <CardHeader>
          <CardTitle>Card 1</CardTitle>
          <CardDescription>First card in the grid</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Content for the first card</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Card 2</CardTitle>
          <CardDescription>Second card in the grid</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Content for the second card</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Card 3</CardTitle>
          <CardDescription>Third card in the grid</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Content for the third card</p>
        </CardContent>
      </Card>
    </div>
  ),
}

export const NoShadow: Story = {
  render: () => (
    <Card className='w-[350px] shadow-none'>
      <CardHeader>
        <CardTitle>No Shadow Card</CardTitle>
        <CardDescription>This card has no shadow</CardDescription>
      </CardHeader>
      <CardContent>
        <p>You can customize the card appearance using className</p>
      </CardContent>
    </Card>
  ),
}

export const DarkModeShowcase: Story = {
  render: () => (
    <div className='grid grid-cols-2 gap-8'>
      <div className='p-6 rounded-lg bg-white'>
        <h3 className='mb-4 text-lg font-semibold text-gray-900'>Light Mode</h3>
        <Card className='w-[320px]'>
          <CardHeader>
            <CardTitle>Featured Card</CardTitle>
            <CardDescription>This card demonstrates light mode styling</CardDescription>
          </CardHeader>
          <CardContent>
            <div className='space-y-2'>
              <p className='text-sm'>
                The card uses default light theme colors with subtle shadows.
              </p>
              <div className='flex gap-2'>
                <span className='px-2 py-1 text-xs rounded bg-slate-100 text-slate-700'>Tag 1</span>
                <span className='px-2 py-1 text-xs rounded bg-slate-100 text-slate-700'>Tag 2</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant='outline' className='w-full'>
              View Details
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div className='p-6 rounded-lg bg-slate-900 dark'>
        <h3 className='mb-4 text-lg font-semibold text-slate-100'>Dark Mode</h3>
        <Card className='w-[320px]'>
          <CardHeader>
            <CardTitle>Featured Card</CardTitle>
            <CardDescription>This card demonstrates dark mode styling</CardDescription>
          </CardHeader>
          <CardContent>
            <div className='space-y-2'>
              <p className='text-sm dark:text-slate-300'>
                The card adapts to dark theme with enhanced shadows and borders.
              </p>
              <div className='flex gap-2'>
                <span className='px-2 py-1 text-xs rounded bg-slate-800 text-slate-300'>Tag 1</span>
                <span className='px-2 py-1 text-xs rounded bg-slate-800 text-slate-300'>Tag 2</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant='outline' className='w-full'>
              View Details
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  ),
}
