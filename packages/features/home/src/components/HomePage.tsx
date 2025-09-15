import { Button } from "@internal/ui"

export function HomePage() {
  return (
    <div className='space-y-8'>
      <section>
        <h1 className='text-4xl font-bold tracking-tight lg:text-5xl'>
          Welcome to React Boilerplate
        </h1>
        <p className='mt-4 text-xl text-muted-foreground'>
          A modern React application with TypeScript, Vite, React Router v7, and shadcn/ui
        </p>
      </section>

      <section className='flex gap-4'>
        <Button>Get Started</Button>
        <Button variant='outline'>Learn More</Button>
      </section>

      <section className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        <div className='rounded-lg border bg-card p-6'>
          <h3 className='text-lg font-semibold'>React 19</h3>
          <p className='mt-2 text-sm text-muted-foreground'>
            Latest version of React with all new features and improvements
          </p>
        </div>
        <div className='rounded-lg border bg-card p-6'>
          <h3 className='text-lg font-semibold'>TypeScript 5.9</h3>
          <p className='mt-2 text-sm text-muted-foreground'>
            Type-safe development with the latest TypeScript features
          </p>
        </div>
        <div className='rounded-lg border bg-card p-6'>
          <h3 className='text-lg font-semibold'>Vite</h3>
          <p className='mt-2 text-sm text-muted-foreground'>
            Lightning-fast HMR and optimized build performance
          </p>
        </div>
        <div className='rounded-lg border bg-card p-6'>
          <h3 className='text-lg font-semibold'>React Router v7</h3>
          <p className='mt-2 text-sm text-muted-foreground'>
            Modern routing with type-safe navigation and data loading
          </p>
        </div>
        <div className='rounded-lg border bg-card p-6'>
          <h3 className='text-lg font-semibold'>shadcn/ui</h3>
          <p className='mt-2 text-sm text-muted-foreground'>
            Beautiful and customizable UI components built with Radix UI
          </p>
        </div>
        <div className='rounded-lg border bg-card p-6'>
          <h3 className='text-lg font-semibold'>Biome</h3>
          <p className='mt-2 text-sm text-muted-foreground'>
            Fast formatter and linter for maintaining code quality
          </p>
        </div>
      </section>
    </div>
  )
}
