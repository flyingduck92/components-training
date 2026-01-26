import type { FunctionComponent } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@sglara/cn'

const buttonVariants = cva(
  `flex items-center px-3 py-1 border transition-all duration-150 ease-out active:scale-95 disabled:active:scale-100`,
  {
    variants: {
      variant: {
        plain: '', // default
        primary:
          'text-white border-blue-500 bg-blue-500 hover:bg-blue-600 hover:border-blue-600',
        secondary:
          'text-white border-gray-900 bg-blue-900 hover:bg-blue-950 hover:border-blue-950',
        success:
          'text-white border-green-500 bg-green-500 hover:bg-green-600 hover:border-green-600',
        warning:
          'text-white border-yellow-400 bg-yellow-400 hover:bg-yellow-500 hover:border-yellow-500',
        danger:
          'text-white border-red-500 bg-red-500 hover:bg-red-600 hover:border-red-600',
      },
      outline: { true: 'bg-white hover:text-current' },
      rounded: { true: 'rounded-full hover:shadow-sm' },
    },
    compoundVariants: [
      {
        variant: 'primary',
        outline: true,
        className: 'text-blue-500 hover:bg-blue-50',
      },
      {
        variant: 'secondary',
        outline: true,
        className: 'text-gray-500 hover:bg-gray-100',
      },
      {
        variant: 'success',
        outline: true,
        className: 'text-green-500 hover:bg-green-50',
      },
      {
        variant: 'warning',
        outline: true,
        className: 'text-yellow-500 hover:bg-yellow-50',
      },
      {
        variant: 'danger',
        outline: true,
        className: 'text-red-500 hover:bg-red-50',
      },
    ],
    defaultVariants: {
      variant: 'plain',
      rounded: false,
      outline: false,
    },
  },
)

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>

const Button2: FunctionComponent<ButtonProps> = ({
  children,
  variant,
  outline,
  rounded,
  className,
  ...rest
}) => {
  let classes = cn(buttonVariants({ variant, outline, rounded }), className)

  return (
    <button
      {...rest}
      className={classes}
    >
      {children}
    </button>
  )
}

export default Button2
