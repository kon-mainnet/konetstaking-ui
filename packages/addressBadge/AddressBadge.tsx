import { ForwardedRef, forwardRef } from 'react'
import { useBreakpoint } from '../hooks'
import { AddressBadgeStyle } from './AddressBadgeStyles'
import { AddressBadgeProps } from './types'

export const AddressBadge = forwardRef(
  (
    { address, symbolsMobile = 3, symbolsDesktop = 6 }: AddressBadgeProps,
    ref?: ForwardedRef<HTMLDivElement>,
  ) => {
    const isMobile = useBreakpoint('md')

    return (
      <AddressBadgeStyle
        symbols={isMobile ? symbolsMobile : symbolsDesktop}
        address={address ?? ''}
        ref={ref}
      />
    )
  },
)
AddressBadge.displayName = 'AddressBadge'
