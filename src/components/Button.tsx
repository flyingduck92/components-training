import type { FunctionComponent } from 'react'
import { cn } from '@sglara/cn'

type BaseProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  outline?: boolean
  rounded?: boolean
}
type Variant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger'

// type ButtonVariant will
// outer loop [K in Variant]:
// return object from Variant using mapping with {}[Variant]
// if [P in K] then {P: boolean} => {primary: boolean}
// then rest, loop [P in Variant except K] is {P: never} => {secondary: never},...
// default, loop [K in Variant] => all Variant are never
type ButtonVariant =
  | {
      [K in Variant]: { [P in K]?: boolean } & {
        [P in Exclude<Variant, K>]?: never
      }
    }[Variant]
  | { [K in Variant]?: never }

type ButtonProps = BaseProps & ButtonVariant

const Button: FunctionComponent<ButtonProps> = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  className,
  ...rest
}) => {
  let classes = cn([
    `flex items-center px-3 py-1 border`, // default
    `transition-colors transition-transform duration-150 ease-out`, // transition
    `active:scale-95 disabled:active:scale-100`, // :active (when user click)
    {
      'border-blue-500 bg-blue-500 hover:bg-blue-600 hover:border-blue-600':
        primary,
      'border-gray-900 bg-blue-900 hover:bg-blue-950 hover:border-blue-950':
        secondary,
      'border-green-500 bg-green-500 hover:bg-green-600 hover:border-green-600':
        success,
      'border-yellow-400 bg-yellow-400 hover:bg-yellow-500 hover:border-yellow-500':
        warning,
      'border-red-500 bg-red-500 hover:bg-red-600 hover:border-red-600': danger,
      'rounded-full hover:shadow-sm': rounded,
      'text-white':
        !outline && (primary || secondary || success || warning || danger),
      'bg-white hover:text-current': outline,
      'text-blue-500 hover:bg-blue-50': outline && primary,
      'text-gray-500 hover:bg-gray-100': outline && secondary,
      'text-green-500 hover:bg-green-50': outline && success,
      'text-yellow-500 hover:bg-yellow-50': outline && warning,
      'text-red-500 hover:bg-red-50': outline && danger,
    },
    className,
  ])

  return (
    <button
      {...rest}
      className={classes}
    >
      {children}
    </button>
  )
}

export default Button
