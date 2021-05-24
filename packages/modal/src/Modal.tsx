import { ForwardedRef, forwardRef } from 'react'

import {
  ModalStyle,
  ModalHeaderStyle,
  ModalTitleStyle,
  ModalCloseStyle,
  ModalContentStyle,
} from './ModalStyles'
import { ModalProps } from './types'
import ModalOverlay from './ModalOverlay'

function Modal(props: ModalProps, ref?: ForwardedRef<HTMLDivElement>) {
  const { children, title, center = false, ...rest } = props
  const { onClose } = props

  const closable = !!onClose
  const untitled = !title

  return (
    <ModalOverlay {...rest} ref={ref}>
      <ModalStyle $center={center}>
        <ModalHeaderStyle $short={untitled}>
          <ModalTitleStyle $center={center}>{title}</ModalTitleStyle>
          {closable && <ModalCloseStyle onClick={onClose} />}
        </ModalHeaderStyle>
        <ModalContentStyle>{children}</ModalContentStyle>
      </ModalStyle>
    </ModalOverlay>
  )
}

export default forwardRef(Modal)