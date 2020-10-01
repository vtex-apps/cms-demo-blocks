import * as React from 'react'
import { ImageList } from 'vtex.store-image'
import { SliderLayout } from 'vtex.slider-layout'

interface Image {
  image: string
  description: string
  link?: string
}

const ITEMS_PER_PAGE = {
  desktop: 1,
  tablet: 1,
  phone: 1,
}

function Carousel(images: Image[]) {
  const convertedImages = React.useMemo(
    () =>
      images.map(({ description, image, link }) => ({
        description,
        image,
        mobileImage: image,
        // experimentalPreventLayoutShift: true,
        link: link
          ? {
              url: link,
              noFollow: false,
            }
          : undefined,
      })),
    [images]
  )

  return (
    <ImageList images={convertedImages}>
      <SliderLayout itemsPerPage={ITEMS_PER_PAGE} infinite />
    </ImageList>
  )
}

export default Carousel
