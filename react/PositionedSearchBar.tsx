import React from 'react'
import { SearchBar } from 'vtex.store-components'

import PositionedComponent, {
  Width,
  MaxWidth,
  HorizontalPosition,
  Padding,
} from './components/PositionedComponent'

interface Props {
  placeholder?: string
  horizontalPosition?: HorizontalPosition
  width?: Width
  maxWidth?: MaxWidth
  padding?: Padding
}

function PositionedSearchBar(props: Props) {
  const {
    width = 50,
    placeholder,
    maxWidth = 5,
    padding = 0,
    horizontalPosition = 'center',
  } = props

  return (
    <PositionedComponent
      width={width}
      maxWidth={maxWidth}
      padding={padding}
      horizontalPosition={horizontalPosition}
    >
      <SearchBar placeholder={placeholder} />
    </PositionedComponent>
  )
}

export default PositionedSearchBar
