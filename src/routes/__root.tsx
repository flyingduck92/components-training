import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import Navigation from '@/components/Navigation'

export const Route = createRootRoute({
  component: RootLayout,
})

// navItems List
const navItems = [
  { to: '/', label: 'Home' },
  { to: '/button-boolean', label: 'Button Boolean' },
  { to: '/button-variant', label: 'Button Variant' },
  { to: '/accordion', label: 'Accordion' },
  { to: '/dropdown', label: 'Dropdown' },
  { to: '/modal', label: 'Modal' },
  { to: '/table', label: 'Table' },
]

function RootLayout() {
  return (
    <main className='flex min-h-screen'>
      <Navigation navItems={navItems} />
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
