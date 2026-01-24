import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import poppins100 from '@fontsource/poppins/100.css?url'
import poppins200 from '@fontsource/poppins/200.css?url'
import poppins300 from '@fontsource/poppins/300.css?url'
import poppins400 from '@fontsource/poppins/400.css?url'
import poppins500 from '@fontsource/poppins/500.css?url'
import poppins600 from '@fontsource/poppins/600.css?url'
import poppins700 from '@fontsource/poppins/700.css?url'
import poppins800 from '@fontsource/poppins/800.css?url'
import poppins900 from '@fontsource/poppins/900.css?url'

export const Route = createRootRoute({
  head: () => ({
    links: [
      { rel: 'stylesheet', href: poppins100 },
      { rel: 'stylesheet', href: poppins200 },
      { rel: 'stylesheet', href: poppins300 },
      { rel: 'stylesheet', href: poppins400 },
      { rel: 'stylesheet', href: poppins500 },
      { rel: 'stylesheet', href: poppins600 },
      { rel: 'stylesheet', href: poppins700 },
      { rel: 'stylesheet', href: poppins800 },
      { rel: 'stylesheet', href: poppins900 },
    ],
  }),
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
