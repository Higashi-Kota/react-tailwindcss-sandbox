export function AboutPage() {
  return (
    <div className='space-y-6'>
      <h1 className='text-4xl font-bold tracking-tight'>About</h1>
      <div className='prose prose-neutral dark:prose-invert max-w-none'>
        <p className='text-lg text-muted-foreground'>
          This is a modern React boilerplate template designed for building scalable web
          applications.
        </p>

        <h2 className='text-2xl font-semibold mt-8 mb-4'>Features</h2>
        <ul className='space-y-2 text-muted-foreground'>
          <li>React 19 with TypeScript 5.9</li>
          <li>Vite for fast development and optimized builds</li>
          <li>React Router v7 for modern routing</li>
          <li>shadcn/ui components with Tailwind CSS</li>
          <li>Biome for fast linting and formatting</li>
          <li>pnpm workspace for monorepo management</li>
          <li>MPA/SPA hybrid support</li>
        </ul>

        <h2 className='text-2xl font-semibold mt-8 mb-4'>Architecture</h2>
        <p className='text-muted-foreground'>
          The project uses a monorepo structure with pnpm workspaces, allowing for multiple
          applications and shared packages. The main application is built with Vite and can be
          configured for both single-page and multi-page application patterns.
        </p>
      </div>
    </div>
  )
}
