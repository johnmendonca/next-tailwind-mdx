import React, { useState } from 'react'
import { ChevronDown } from 'heroicons-react'
import { Transition } from '@tailwindui/react'
import useClickAway from '../useClickAway'

export const FlyoutList = (props) => {
  return (
    <div className="z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8" {...props} />
  )
}

export const FlyoutItem = ({icon, title, content, href}) => {
  return (
    <a href={href} className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
      {React.createElement(icon, { className: "flex-shrink-0 h-6 w-6 text-indigo-600"})}
      <div className="space-y-1">
        <p className="text-base leading-6 font-medium text-gray-900">
          {title}
        </p>
        <p className="text-sm leading-5 text-gray-500">
          {content}
        </p>
      </div>
    </a>
  )
}

export const FlyoutActionFooter = (props) => {
  return (
    <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8" {...props} />
  )
}

export const FooterAction = ({icon, title, href}) => {
  return (
    <div className="flow-root">
      <a href={href} className="-m-3 p-3 flex items-center space-x-3 rounded-md text-base leading-6 font-medium text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150">
        {React.createElement(icon, { className: "flex-shrink-0 h-6 w-6 text-gray-400"})}
        <span>{title}</span>
      </a>
    </div>
  )
}

export const FlyoutListFooter = ({title, moreHref, moreText, children}) => {
  return (
    <div className="px-5 py-5 bg-gray-50 space-y-5 sm:px-8 sm:py-8">
      <div className="space-y-4">
        <h3 className="text-sm leading-5 tracking-wide font-medium text-gray-500 uppercase">
          {title}
        </h3>
        <ul className="space-y-4">
          {children}
        </ul>
      </div>
      <div className="text-sm leading-5">
        <a href={moreHref} className="font-medium text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150">
          {moreText}
        </a>
      </div>
    </div>
  )
}

export const FooterListItem = ({href, title}) => {
  return (
    <li className="text-base leading-6 truncate">
      <a href={href} className="font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
        {title}
      </a>
    </li>
  )
}

export const Flyout = ({title, children}) => {
  const [isOpen, setOpen] = useState(false)
  const dropdownRef = useClickAway(() => setOpen(false))

  return (
    <div ref={dropdownRef} className="relative">
      <button onClick={() => setOpen(!isOpen)} type="button" className="text-gray-500 group inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
        <span>{title}</span>
        <ChevronDown className="text-gray-400 h-5 w-5 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150" />
      </button>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <div className="absolute -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
          <div className="rounded-lg shadow-lg">
            <div className="rounded-lg shadow-xs overflow-hidden">
              {children}
            </div>
          </div>
        </div>
      </Transition>
    </div>
  )
}

