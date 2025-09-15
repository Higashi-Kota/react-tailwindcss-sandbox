import { Button } from "@internal/ui"

export function DashboardPage() {
  return (
    <div className='space-y-6'>
      <div>
        <h1 className='text-3xl font-bold tracking-tight'>Dashboard</h1>
        <p className='text-muted-foreground'>Welcome to your application dashboard</p>
      </div>

      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
        <div className='rounded-lg border bg-card p-6'>
          <div className='text-2xl font-bold'>1,234</div>
          <p className='text-xs text-muted-foreground'>Total Users</p>
        </div>
        <div className='rounded-lg border bg-card p-6'>
          <div className='text-2xl font-bold'>56</div>
          <p className='text-xs text-muted-foreground'>Active Sessions</p>
        </div>
        <div className='rounded-lg border bg-card p-6'>
          <div className='text-2xl font-bold'>89%</div>
          <p className='text-xs text-muted-foreground'>Success Rate</p>
        </div>
        <div className='rounded-lg border bg-card p-6'>
          <div className='text-2xl font-bold'>12ms</div>
          <p className='text-xs text-muted-foreground'>Avg Response Time</p>
        </div>
      </div>

      <div className='rounded-lg border bg-card p-6'>
        <h2 className='text-xl font-semibold mb-4'>Quick Actions</h2>
        <div className='flex gap-4'>
          <Button>Create New</Button>
          <Button variant='outline'>View Reports</Button>
          <Button variant='outline'>Settings</Button>
        </div>
      </div>
    </div>
  )
}
