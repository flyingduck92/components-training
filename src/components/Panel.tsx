import { cn } from '@sglara/cn'
import type { ReactNode, ComponentPropsWithoutRef } from 'react'

type PanelProps = ComponentPropsWithoutRef<'div'> & {
  children: ReactNode
  className?: string
}

function Panel({ children, className, ...rest }: PanelProps) {
  const classNames = cn(['shadow-md bg-white w-full', className])

  return (
    <div
      {...rest}
      className={classNames}
    >
      {children}
    </div>
  )
}

export default Panel
