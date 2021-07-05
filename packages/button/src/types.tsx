import { LidoComponentProps } from '@lidofinance/utils'
export type { Theme } from '@lidofinance/theme'

export enum ButtonSize {
  xxs,
  xs,
  sm,
  md,
  lg,
}
export type ButtonSizes = keyof typeof ButtonSize

export enum ButtonVariant {
  filled,
  outlined,
  text,
  ghost,
  translucent,
}
export type ButtonVariants = keyof typeof ButtonVariant

export enum ButtonColor {
  primary,
  secondary,
}
export type ButtonColors = keyof typeof ButtonColor

export type ButtonProps = LidoComponentProps<
  'button',
  {
    size?: ButtonSizes
    variant?: ButtonVariants
    color?: ButtonColors
    fullwidth?: boolean
    square?: boolean
    loading?: boolean
    as?: never
  }
>

export type ButtonIconProps = {
  icon: React.ReactNode
} & ButtonProps
