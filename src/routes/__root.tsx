import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

export const Route = createRootRoute({
  component: RootLayout,
})

// NavLinkItem Type
type NavLinkItem = {
  to: string
  label: string
}

// navItems List
const navItems: NavLinkItem[] = [
  { to: '/', label: 'Home' },
  { to: '/button-boolean', label: 'Button Boolean' },
  { to: '/button-variant', label: 'Button Variant' },
  { to: '/accordion', label: 'Accordion' },
]

function RootLayout() {
  return (
    <main className='flex min-h-screen'>
      <nav className='w-40 flex p-4 flex-col gap-2 text-center'>
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            activeProps={{ className: 'active' }}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <main className='p-4'>
        <Outlet />
      </main>
      <TanStackDevtools
        config={{
          position: 'bottom-right',
        }}
        plugins={[
          {
            name: 'Tanstack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
    </main>
  )
}
