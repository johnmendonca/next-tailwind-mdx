import React from 'react'
import MarketingHeader from '../components/marketing/MarketingHeader'

const MarketingLayout = ({children}) => {
  return (
    <div>
      <MarketingHeader />
      {children}
    </div>
  )
}

export default MarketingLayout


