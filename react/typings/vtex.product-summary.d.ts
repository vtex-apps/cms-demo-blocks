declare module 'vtex.product-summary' {
  import * as React from 'react'

  export const ProductSummaryList: React.FC<any>
  export const ProductSummaryCustom: React.FC<{ product: any }>
  export const ProductSummaryName: React.FC
  export const ProductSummaryImage: React.FC
  export const ProductSummarySpecificationBadges: React.FC
}
