import { ForwardedRef, forwardRef } from 'react'
import { useMergeRefs } from '@lidofinance/hooks'
import { PopupMenuProvider } from './PopupMenuProvider'
import { PopupMenuStyle } from './PopupMenuStyles'
import { PopupMenuProps } from './types'
import { usePopupFocus } from './usePopupFocus'

function PopupMenu(
  { variant, children, onKeyDown, onMouseMove, ...rest }: PopupMenuProps,
  externalRef?: ForwardedRef<HTMLDivElement>,
) {
  const {
    ref: controlRef,
    handleMouseMove,
    handleKeyDown,
    handleEnter,
    handleExit,
  } = usePopupFocus({ onMouseMove, onKeyDown })
  const popupRef = useMergeRefs([controlRef, externalRef])

  return (
    <PopupMenuStyle
      onMouseMove={handleMouseMove}
      onKeyDown={handleKeyDown}
      onEnter={handleEnter}
      onExit={handleExit}
      tabIndex={-1}
      role='listbox'
      {...rest}
      ref={popupRef}
    >
      <PopupMenuProvider variant={variant}>{children}</PopupMenuProvider>
    </PopupMenuStyle>
  )
}

export default forwardRef(PopupMenu)
