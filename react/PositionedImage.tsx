import React from 'react'
import { Image } from 'vtex.store-image'

import PositionedComponent, {
  Width,
  MaxWidth,
  HorizontalPosition,
  Padding,
} from './components/PositionedComponent'

type ImageProps = Parameters<typeof Image>[0]

interface Props {
  width?: Width
  maxWidth?: MaxWidth
  horizontalPosition?: HorizontalPosition
  imageProps?: ImageProps
  padding?: Padding
}

function PositionedImage(props: Props) {
  const { horizontalPosition = 'center', imageProps, padding = 0 } = props

  return (
    <PositionedComponent
      width="auto"
      maxWidth="none"
      padding={padding}
      horizontalPosition={horizontalPosition}
    >
      <Image {...imageProps} />
    </PositionedComponent>
  )
}

export default PositionedImage
