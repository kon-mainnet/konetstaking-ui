import { ForwardedRef, forwardRef } from 'react'
import { LinkStyle } from './LinkStyles'
import { LinkProps } from './types'

function Link(props: LinkProps, ref?: ForwardedRef<HTMLAnchorElement>) {
  return <LinkStyle target='_blank' rel='noopener' ref={ref} {...props} />
}

export default forwardRef(Link)