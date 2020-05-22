import React from 'react'
import { CheveronDown, ChartBarOutline, CursorClickOutline, ShieldCheckOutline, ViewGridAddOutline, RefreshOutline, PlayOutline, PhoneOutline, SupportOutline, BookmarkAltOutline, CalendarOutline } from 'heroicons-react'

const MobileMenuItem = ({icon, title, href}) => {
  return (
    <a href={href} className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
      {React.createElement(icon, { className: "flex-shrink-0 h-6 w-6 text-indigo-600"})}
      <div className="text-base leading-6 font-medium text-gray-900">
        {title}
      </div>
    </a>
  )
}

const MobileMenuSecondaryItem = ({title, href}) => {
  return (
    <a href={href} className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
      {title}
    </a>
  )
}

const MobileMenu = ({onClose}) => {
  return (
    <div className="absolute top-0 inset-x-0 p-2 transform origin-top-right md:hidden">
      <div className="rounded-lg shadow-lg">
        <div className="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <img className="h-8 w-auto" src="/img/logos/workflow-mark-on-white.svg" alt="Workflow" />
              </div>
              <div className="-mr-2">
                <button onClick={onClose} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                  <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>
            </div>
            <div>
              <nav className="grid row-gap-8">
                <MobileMenuItem
                  icon={ChartBarOutline}
                  title="Analytics"
                  href="#" />
                
                <MobileMenuItem
                  icon={CursorClickOutline}
                  title="Engagement"
                  href="#" />
                
                <MobileMenuItem
                  icon={ShieldCheckOutline}
                  title="Security"
                  href="#" />
                
                <MobileMenuItem
                  icon={ViewGridAddOutline}
                  title="Integrations"
                  href="#" />
                
                <MobileMenuItem
                  icon={RefreshOutline}
                  title="Automations"
                  href="#" />
              </nav>
            </div>
          </div>
          <div className="py-6 px-5 space-y-6">
            <div className="grid grid-cols-2 row-gap-4 col-gap-8">
              <MobileMenuSecondaryItem href="#" title="Pricing" />
              <MobileMenuSecondaryItem href="#" title="Docs" />
              <MobileMenuSecondaryItem href="#" title="Enterprise" />
              <MobileMenuSecondaryItem href="#" title="Blog" />
              <MobileMenuSecondaryItem href="#" title="Help Center" />
              <MobileMenuSecondaryItem href="#" title="Guides" />
              <MobileMenuSecondaryItem href="#" title="Security" />
              <MobileMenuSecondaryItem href="#" title="Events" />
            </div>
            <div className="space-y-6">
              <span className="w-full flex rounded-md shadow-sm">
                <a href="#" className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                  Sign up
                </a>
              </span>
              <p className="text-center text-base leading-6 font-medium text-gray-500">
                Existing customer?&nbsp;
                <a href="#" className="text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu

