import React from 'react'

export const MobileSection = (props) => {
  return <div className="pt-5 pb-6 px-5 space-y-6" {...props} />
}

export const MobilePrimaryNav = (props) => {
  return <div><nav className="grid gap-y-8" {...props} /></div>
}

export const MobileSecondaryNav = (props) => {
  return <div className="grid grid-cols-2 gap-y-4 gap-x-8" {...props} />
}

export const MobilePrimaryItem = ({icon, title, href}) => {
  return (
    <a href={href} className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
      {React.createElement(icon, { className: "flex-shrink-0 h-6 w-6 text-indigo-600"})}
      <div className="text-base leading-6 font-medium text-gray-900">
        {title}
      </div>
    </a>
  )
}

export const MobileSecondaryItem = ({title, href}) => {
  return (
    <a href={href} className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
      {title}
    </a>
  )
}

export const MobileCTA = ({title, href}) => {
  return (
    <span className="w-full flex rounded-md shadow-sm">
      <a href={href} className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
        {title}
      </a>
    </span>
  )
}

export const MobileMenu = ({children}) => {
  return (
    <div className="absolute top-0 inset-x-0 p-2 transform origin-top-right md:hidden">
      <div className="rounded-lg shadow-lg">
        <div className="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
          {children}
        </div>
      </div>
    </div>
  )
}

