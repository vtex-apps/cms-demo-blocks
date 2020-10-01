import * as React from 'react'
import classnames from 'classnames'
import { Image } from 'vtex.store-image'
import { useCssHandles } from 'vtex.css-handles'

interface ImageType {
  image: string
  description: string
  link?: string
}

const CSS_HANDLES = ['bannerContainer', 'bannerImageWrapper'] as const

function Banners(images: ImageType[]) {
  const handles = useCssHandles(CSS_HANDLES)
  const containerClasses = classnames(handles.bannerContainer, 'flex pv7 ph0')

  const imageWrapperClasses = classnames(handles.bannerImageWrapper, 'pa3')

  const convertedImages = React.useMemo(
    () =>
      images.map(({ description, image, link }) => ({
        description,
        image,
        mobileImage: image,
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
    <div className={containerClasses}>
      {convertedImages.map(({ description, image, link }, idx) => (
        <div className={imageWrapperClasses} key={idx}>
          <Image alt={description} src={image} link={link} width="100%" />
        </div>
      ))}
    </div>
  )
}

export default Banners
