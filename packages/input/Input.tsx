import React, { ForwardedRef, forwardRef } from 'react'
import {
  InputWrapperStyle,
  InputContentStyle,
  InputControlWrapperStyle,
  InputStyle,
  InputLeftDecoratorStyle,
  InputRightDecoratorStyle,
  InputMessageStyle,
} from './InputStyles'
import { InputLabelStyle } from './LabelStyles'
import { InputProps } from './types'

function Input(props: InputProps, ref?: ForwardedRef<HTMLInputElement>) {
  const {
    label,
    error,
    warning,
    success,
    active = false,
    fullwidth = false,
    placeholder = ' ',
    leftDecorator,
    rightDecorator,
    className,
    style,
    variant = 'default',
    color = 'default',
    wrapperRef,
    children,
    ...rest
  } = props

  const { id, disabled = false } = props
  const wrapperProps = { className, style }

  const hasLabel = !!label && variant === 'default'

  const hasError = !!error
  const hasErrorMessage = hasError && typeof error !== 'boolean'
  const hasWarning = !hasError && !!warning // `error` overrides `warning`
  const hasWarningMessage = hasWarning && typeof warning !== 'boolean'
  const hasSuccess = !!success && !error
  const hasSuccessMessage = hasSuccess && typeof success !== 'boolean'

  const hasLeftDecorator = !!leftDecorator
  const hasRightDecorator = !!rightDecorator

  return (
    <InputWrapperStyle
      $disabled={disabled}
      $fullwidth={fullwidth}
      htmlFor={id}
      ref={wrapperRef}
      {...wrapperProps}
    >
      <InputContentStyle
        $color={color}
        $variant={variant}
        $error={hasError}
        $warning={hasWarning}
        $active={active}
        $disabled={disabled}
      >
        {hasLeftDecorator && (
          <InputLeftDecoratorStyle>{leftDecorator}</InputLeftDecoratorStyle>
        )}

        <InputControlWrapperStyle>
          <InputStyle
            $labeled={hasLabel}
            $color={color}
            placeholder={placeholder}
            aria-invalid={hasError}
            type='text'
            ref={ref}
            {...rest}
          />
          {hasLabel && (
            <InputLabelStyle $color={color}>{label}</InputLabelStyle>
          )}
        </InputControlWrapperStyle>

        {hasRightDecorator && (
          <InputRightDecoratorStyle>{rightDecorator}</InputRightDecoratorStyle>
        )}
      </InputContentStyle>

      {hasErrorMessage && (
        <InputMessageStyle $variant='error' $bordered>
          {error}
        </InputMessageStyle>
      )}
      {hasWarningMessage && (
        <InputMessageStyle $variant='warning' $bordered>
          {warning}
        </InputMessageStyle>
      )}
      {hasSuccessMessage && (
        <InputMessageStyle $variant='success' $bordered>
          {success}
        </InputMessageStyle>
      )}
    </InputWrapperStyle>
  )
}

export default forwardRef(Input)