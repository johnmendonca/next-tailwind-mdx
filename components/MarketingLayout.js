import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import MarketingHeader from './marketing/MarketingHeader'

const MarketingLayout = ({children}) => {
  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <MarketingHeader />
      <div className="px-4 py-6 sm:px-0">
        {children}
      </div>
    </div>
  )
}

export default MarketingLayout


