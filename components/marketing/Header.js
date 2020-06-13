import React, { useState } from 'react'
import { Flyout, FlyoutList, FlyoutItem, FlyoutActionFooter, FooterAction, FlyoutListFooter, FooterListItem } from './Flyout'
import { MobileMenu, MobileSection, MobilePrimaryNav, MobileSecondaryNav, MobilePrimaryItem, MobileSecondaryItem, MobileCTA } from './MobileMenu'
import { ChevronDown, XOutline, MenuOutline, ChartBarOutline, CursorClickOutline, ShieldCheckOutline, ViewGridAddOutline, RefreshOutline, PlayOutline, PhoneOutline, SupportOutline, BookmarkAltOutline, CalendarOutline } from 'heroicons-react'
import Transition from '../Transition'
import useClickAway from '../useClickAway'

const IconButton = (props) => {
  return <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" {...props} />
}

const HeaderItem = ({href, title}) => {
  return (
    <a href={href} className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
      {title}
    </a>
  )
}

const Header = () => {
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

            <HeaderItem href="#" title="Pricing" />

            <HeaderItem href="#" title="Docs" />

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

          {/* Menu Button Mobile */}
          <div className="-mr-2 -my-2 md:hidden">
            <IconButton onClick={() => setMobileMenuOpen(true)}>
              <MenuOutline className="h-6 w-6" />
            </IconButton>
          </div>
        </div>
      </div>

      <Transition
        show={mobileMenuOpen}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <MobileMenu ref={mobileMenuRef}>
          <MobileSection>
            <div className="flex items-center justify-between">
              <div>
                <img className="h-8 w-auto" src="/img/logos/workflow-mark-on-white.svg" alt="Workflow" />
              </div>
              <div className="-mr-2">
                <IconButton onClick={() => setMobileMenuOpen(false)}>
                  <XOutline className="h-6 w-6" />
                </IconButton>
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
            <MobileCTA title="Sign up" href="#" />
            <p className="text-center text-base leading-6 font-medium text-gray-500">
              Existing customer?&nbsp;
              <a href="#" className="text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150">
                Sign in
              </a>
            </p>
          </MobileSection>
        </MobileMenu>
      </Transition>
    </div>
  )
}

export default Header

