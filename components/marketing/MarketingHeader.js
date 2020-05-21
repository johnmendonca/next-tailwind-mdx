import React, { useState } from 'react'
import { Flyout, FlyoutList, FlyoutItem, FlyoutActionFooter, FooterAction, FlyoutListFooter, FooterListItem } from './Flyout'
import { CheveronDown, ChartBarOutline, CursorClickOutline, ShieldCheckOutline, ViewGridAddOutline, RefreshOutline, PlayOutline, PhoneOutline, SupportOutline, BookmarkAltOutline, CalendarOutline } from 'heroicons-react'
import Transition from '../Transition'
import useClickAway from '../useClickAway'

const MarketingHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const mobileMenuRef = useClickAway(() => setMobileMenuOpen(false))

  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="lg:w-0 lg:flex-1">
            <a href="#" className="flex">
              <img className="h-8 w-auto sm:h-10" src="/img/logos/workflow-mark-on-white.svg" alt="Workflow" />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button onClick={() => setMobileMenuOpen(true)} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">

            <Flyout title="Solutions">
              <FlyoutList>
                <FlyoutItem
                  icon={ChartBarOutline}
                  title="Analytics"
                  content="Get a better understanding of where your traffic is coming from."
                  href="#" />
                
                <FlyoutItem
                  icon={CursorClickOutline}
                  title="Engagement"
                  content="Speak directly to your customers in a more meaningful way."
                  href="#" />
                
                <FlyoutItem
                  icon={ShieldCheckOutline}
                  title="Security"
                  content="Your customers data will be safe and secure."
                  href="#" />
                
                <FlyoutItem
                  icon={ViewGridAddOutline}
                  title="Integrations"
                  content="Connect with third-party tools that you’re already using."
                  href="#" />
                
                <FlyoutItem
                  icon={RefreshOutline}
                  title="Automations"
                  content="Build strategic funnels that will drive your customers to convert"
                  href="#" />
              </FlyoutList>
              <FlyoutActionFooter>
                <FooterAction
                  icon={PlayOutline}
                  title="Watch Demo"
                  href="#" />
                <FooterAction
                  icon={PhoneOutline}
                  title="Contact Sales"
                  href="#" />
              </FlyoutActionFooter>
            </Flyout>

            <a href="#" className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
              Pricing
            </a>
            <a href="#" className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
              Docs
            </a>

            <Flyout title="More">
              <FlyoutList>
                <FlyoutItem
                  icon={SupportOutline}
                  title="Help Center"
                  content="Get all of your questions answered in our forums or contact support."
                  href="#" />
                
                <FlyoutItem
                  icon={BookmarkAltOutline}
                  title="Guides"
                  content="Learn how to maximize our platform to get the most out of it."
                  href="#" />
                
                <FlyoutItem
                  icon={CalendarOutline}
                  title="Events"
                  content="See what meet-ups and other events we might be planning near you."
                  href="#" />
                
                <FlyoutItem
                  icon={ShieldCheckOutline}
                  title="Security"
                  content="Understand how we take your privacy seriously."
                  href="#" />
              </FlyoutList>
              <FlyoutListFooter title="Recent Posts" moreHref="#" moreText="View all posts &rarr;">
                <FooterListItem href="#" title="Boost your conversion rate"/>
                <FooterListItem href="#" title="How to use search engine optimization to drive traffic to your site"/>
                <FooterListItem href="#" title="Improve your customer experience"/>
              </FlyoutListFooter>
            </Flyout>

          </nav>
          <div className="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
            <a href="#" className="whitespace-no-wrap text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900">
              Sign in
            </a>
            <span className="inline-flex rounded-md shadow-sm">
              <a href="#" className="whitespace-no-wrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                Sign up
              </a>
            </span>
          </div>
        </div>
      </div>

      {/*
        Mobile menu, show/hide based on mobile menu state.

        Entering: "duration-200 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95"
      */}
      <Transition
        show={mobileMenuOpen}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div ref={mobileMenuRef} className="absolute top-0 inset-x-0 p-2 transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg">
            <div className="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <img className="h-8 w-auto" src="/img/logos/workflow-mark-on-white.svg" alt="Workflow" />
                  </div>
                  <div className="-mr-2">
                    <button onClick={() => setMobileMenuOpen(false)} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                      <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                      </svg>
                    </button>
                  </div>
                </div>
                <div>
                  <nav className="grid row-gap-8">
                    <a href="#" className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                      <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                      </svg>
                      <div className="text-base leading-6 font-medium text-gray-900">
                        Analytics
                      </div>
                    </a>
                    <a href="#" className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                      <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"/>
                      </svg>
                      <div className="text-base leading-6 font-medium text-gray-900">
                        Engagement
                      </div>
                    </a>
                    <a href="#" className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                      <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                      </svg>
                      <div className="text-base leading-6 font-medium text-gray-900">
                        Security
                      </div>
                    </a>
                    <a href="#" className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                      <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"/>
                      </svg>
                      <div className="text-base leading-6 font-medium text-gray-900">
                        Integrations
                      </div>
                    </a>
                    <a href="#" className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                      <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
                        <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                      </svg>
                      <div className="text-base leading-6 font-medium text-gray-900">
                        Automations
                      </div>
                    </a>
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div className="grid grid-cols-2 row-gap-4 col-gap-8">
                  <a href="#" className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                    Pricing
                  </a>
                  <a href="#" className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                    Docs
                  </a>
                  <a href="#" className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                    Enterprise
                  </a>
                  <a href="#" className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                    Blog
                  </a>
                  <a href="#" className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                    Help Center
                  </a>
                  <a href="#" className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                    Guides
                  </a>
                  <a href="#" className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                    Security
                  </a>
                  <a href="#" className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                    Events
                  </a>
                </div>
                <div className="space-y-6">
                  <span className="w-full flex rounded-md shadow-sm">
                    <a href="#" className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                      Sign up
                    </a>
                  </span>
                  <p className="text-center text-base leading-6 font-medium text-gray-500">
                    Existing customer?
                    <a href="#" className="text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150">
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  )
}

export default MarketingHeader
