import { Link } from '@tanstack/react-router'

type NavLinkItem = {
  to: string
  label: string
}

type navItemsProps = {
  navItems: NavLinkItem[]
}

function Navigation({ navItems }: navItemsProps) {
  return (
    <nav className='w-48 flex p-4 flex-col gap-2 text-center'>
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
  )
}

export default Navigation
