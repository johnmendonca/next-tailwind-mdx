import React from 'react'
import { CheveronDown, XOutline, ChartBarOutline, CursorClickOutline, ShieldCheckOutline, ViewGridAddOutline, RefreshOutline, PlayOutline, PhoneOutline, SupportOutline, BookmarkAltOutline, CalendarOutline } from 'heroicons-react'

const MobileSection = (props) => {
  return <div className="pt-5 pb-6 px-5 space-y-6" {...props} />
}

const MobilePrimaryNav = (props) => {
  return <div><nav className="grid row-gap-8" {...props} /></div>
}

const MobileSecondaryNav = (props) => {
  return <div className="grid grid-cols-2 row-gap-4 col-gap-8" {...props} />
}

const MobilePrimaryItem = ({icon, title, href}) => {
  return (
    <a href={href} className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
      {React.createElement(icon, { className: "flex-shrink-0 h-6 w-6 text-indigo-600"})}
      <div className="text-base leading-6 font-medium text-gray-900">
        {title}
      </div>
    </a>
  )
}

const MobileSecondaryItem = ({title, href}) => {
  return (
    <a href={href} className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
      {title}
    </a>
  )
}

const MobileCTA = ({title, href}) => {
  return (
    <span className="w-full flex rounded-md shadow-sm">
      <a href={href} className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
        {title}
      </a>
    </span>
  )
}

const MobileMenu = ({onClose}) => {
  return (
    <div className="absolute top-0 inset-x-0 p-2 transform origin-top-right md:hidden">
      <div className="rounded-lg shadow-lg">
        <div className="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
          <MobileSection>
            <div className="flex items-center justify-between">
              <div>
                <img className="h-8 w-auto" src="/img/logos/workflow-mark-on-white.svg" alt="Workflow" />
              </div>
              <div className="-mr-2">
                <button onClick={onClose} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                  <XOutline className="h-6 w-6" />
                </button>
              </div>
            </div>
            <MobilePrimaryNav>
              <MobilePrimaryItem icon={ChartBarOutline} title="Analytics" href="#" />
              <MobilePrimaryItem icon={CursorClickOutline} title="Engagement" href="#" />
              <MobilePrimaryItem icon={ShieldCheckOutline} title="Security" href="#" />
              <MobilePrimaryItem icon={ViewGridAddOutline} title="Integrations" href="#" />
              <MobilePrimaryItem icon={RefreshOutline} title="Automations" href="#" />
            </MobilePrimaryNav>
          </MobileSection>
          <MobileSection>
            <MobileSecondaryNav>
              <MobileSecondaryItem href="#" title="Pricing" />
              <MobileSecondaryItem href="#" title="Docs" />
              <MobileSecondaryItem href="#" title="Enterprise" />
              <MobileSecondaryItem href="#" title="Blog" />
              <MobileSecondaryItem href="#" title="Help Center" />
              <MobileSecondaryItem href="#" title="Guides" />
              <MobileSecondaryItem href="#" title="Security" />
              <MobileSecondaryItem href="#" title="Events" />
            </MobileSecondaryNav>
            <div className="space-y-6">
              <MobileCTA title="Sign up" href="#" />
              <p className="text-center text-base leading-6 font-medium text-gray-500">
                Existing customer?&nbsp;
                <a href="#" className="text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150">
                  Sign in
                </a>
              </p>
            </div>
          </MobileSection>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu

