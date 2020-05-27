import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import MarketingHeader from './marketing/Header'

const MarketingLayout = ({children}) => {
  return (
    <div>
      <MarketingHeader />
      <main className="markdown-body">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            {children}
          </div>
        </div>
      </main>
    </div>
  )
}

export default MarketingLayout

