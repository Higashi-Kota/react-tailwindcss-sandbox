import { env } from "@internal/config"
import { Link, Outlet } from "react-router-dom"

export function RootLayout() {
  // Mode-specific color mapping
  const modeColors: Record<string, string> = {
    development: "bg-blue-500",
    test: "bg-yellow-500",
    staging: "bg-purple-500",
    production: "bg-red-500",
  }

  const currentMode = env.VITE_MODE.value as string
  const ribbonColor = modeColors[currentMode] || "bg-gray-500"

  return (
    <div className='min-h-screen bg-background relative'>
      {/* Diagonal ribbon in top-left corner */}
      <div className='absolute top-0 left-0 w-32 h-32 overflow-hidden z-50 pointer-events-none'>
        <div
          className={`absolute top-8 -left-8 w-40 ${ribbonColor} text-white text-xs font-bold uppercase tracking-wider text-center py-1 transform -rotate-45 shadow-lg`}
        >
          {currentMode}
        </div>
      </div>

      <header className='border-b'>
        <nav className='container mx-auto flex h-16 items-center px-4'>
          <Link to='/' className='mr-8 font-bold text-xl'>
            React Boilerplate
          </Link>
          <div className='flex gap-6'>
            <Link to='/' className='text-sm font-medium transition-colors hover:text-primary'>
              Home
            </Link>
            <Link to='/about' className='text-sm font-medium transition-colors hover:text-primary'>
              About
            </Link>
            <Link
              to='/contact'
              className='text-sm font-medium transition-colors hover:text-primary'
            >
              Contact
            </Link>
            <Link
              to='/dashboard'
              className='text-sm font-medium transition-colors hover:text-primary'
            >
              Dashboard
            </Link>
          </div>
        </nav>
      </header>
      <main className='container mx-auto px-4 py-8'>
        <Outlet />
      </main>
    </div>
  )
}
