import React from 'react'
import classnames from 'classnames'

export type HorizontalPosition = 'left' | 'right' | 'center'
export type MaxWidth = number | 'none' | '100%'
export type Width = number | 'auto'
export type Padding = number

interface Options {
  width: Width
  padding: Padding
  maxWidth: MaxWidth
}

function generateTachyonsClass({
  prefix,
  value,
  min,
  max,
}: {
  prefix: string
  value: number | string
  min: number
  max: number
}) {
  return (
    prefix +
    (typeof value === 'number'
      ? Math.max(min, Math.min(max, value as number)).toString()
      : value)
  )
}

function getColClasses(options: Options) {
  const { maxWidth, width, padding } = options
  let maxWidthClass

  if (typeof maxWidth === 'number') {
    maxWidthClass = generateTachyonsClass({
      prefix: 'mw',
      value: maxWidth,
      min: 1,
      max: 9,
    })
  } else if (typeof maxWidth === 'string') {
    maxWidthClass = `mw-${maxWidth}`
  }

  const widthClass = generateTachyonsClass({
    prefix: 'w-',
    value: width,
    min: 10,
    max: 100,
  })

  const paddingClass = generateTachyonsClass({
    prefix: 'pa',
    value: padding,
    min: 0,
    max: 9,
  })

  return classnames(widthClass, maxWidthClass, paddingClass)
}

function getClasses(horizontalPosition: HorizontalPosition) {
  let horizontalClass

  switch (horizontalPosition) {
    case 'left':
      horizontalClass = 'justify-start'
      break

    case 'right':
      horizontalClass = 'justify-end'
      break

    default:
      horizontalClass = 'justify-center'
      break
  }

  return classnames(horizontalClass)
}

export interface Props {
  horizontalPosition: HorizontalPosition
  width: Width
  maxWidth: MaxWidth
  children: React.ReactNode
  padding: Padding
}

function PositionedComponent(props: Props) {
  const { horizontalPosition, width, maxWidth, padding, children } = props

  const rootClasses = classnames(
    'flex justify-center w-100',
    getClasses(horizontalPosition)
  )

  const colClasses = classnames(
    'flex jusitfy-center',
    getColClasses({ width, maxWidth, padding }),
    {
      dib: width === 'auto',
    }
  )

  return (
    <div className={rootClasses}>
      <div className={colClasses}>{children}</div>
    </div>
  )
}

export default PositionedComponent
