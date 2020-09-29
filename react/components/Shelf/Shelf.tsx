import * as React from 'react'
import classnames from 'classnames'
import {
  ProductSummaryList,
  ProductSummaryCustom,
  ProductSummaryName,
  ProductSummaryImage,
  ProductSummarySpecificationBadges,
} from 'vtex.product-summary'
import { SliderLayout } from 'vtex.slider-layout'
import { index as StackLayout } from 'vtex.stack-layout'
import { Wrapper as AddToCartButton } from 'vtex.add-to-cart-button'
import { RateStars, ProductPrice } from 'marinbrasil.store-components'
import { useCssHandles } from 'vtex.css-handles'

import './styles.css'

interface ShelfProps {
  orderBy?: OrderBy
  category?: string
  maxItems?: number
  collection?: string
  specificationFilters?: SpecfiicationFilter[]
  hideUnavailableItems?: boolean
}

interface SpecfiicationFilter {
  Id?: string
  value?: string
}

type OrderBy =
  | 'OrderByTopSaleDESC'
  | 'OrderByReleaseDateDESC'
  | 'OrderByBestDiscountDESC'
  | 'OrderByPriceDESC'
  | 'OrderByPriceASC'
  | 'OrderByNameASC'
  | 'OrderByNameDESC'

interface SummaryProps {
  product: any
}

// const CSS_HANDLES = ['summaryContainer'] as const

function ProductSummary(props: SummaryProps) {
  const { product } = props
  // const handles = useCssHandles(CSS_HANDLES)

  return (
    <ProductSummaryCustom product={product}>
      <StackLayout>
        <ProductSummaryImage />
        <ProductSummarySpecificationBadges />
      </StackLayout>
      <ProductSummaryName />
      <RateStars />
      <ProductPrice />
      <AddToCartButton />
    </ProductSummaryCustom>
  )
}

const ITEMS_PER_PAGE = {
  desktop: 4,
  tablet: 2,
  phone: 1,
}

const SHELF_CSS_HANDLES = [
  'customShelfContainer',
  'customSliderContainer',
  'shelfTitle',
  'titleUnderscore',
] as const

function Shelf(props: ShelfProps) {
  const {
    orderBy,
    category,
    maxItems,
    collection,
    hideUnavailableItems,
    specificationFilters,
  } = props

  const handles = useCssHandles(SHELF_CSS_HANDLES)

  const titleClasses = classnames(
    handles.shelfTitle,
    't-heading-2 c-on-base mv7 relative pb5'
  )

  const underscoreClasses = classnames(handles.titleUnderscore, 'absolute')

  return (
    <div className={handles.customShelfContainer}>
      <h2 className={titleClasses}>
        Os queridinhos <span className={underscoreClasses} />
      </h2>
      <div className={handles.customSliderContainer}>
        <ProductSummaryList
          orderBy={orderBy}
          maxItems={maxItems}
          category={category}
          collection={collection}
          ProductSummary={ProductSummary}
          hideUnavailableItems={hideUnavailableItems}
          specificationFilters={specificationFilters}
        >
          <SliderLayout
            showNavigationArrows="never"
            itemsPerPage={ITEMS_PER_PAGE}
          />
        </ProductSummaryList>
      </div>
    </div>
  )
}

export default Shelf
