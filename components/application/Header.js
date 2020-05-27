import React, { useState } from 'react'
import { XOutline, MenuOutline, BellOutline } from 'heroicons-react'
import ProfileDropdown from './ProfileDropdown'

const links = [
  { href: '#', label: 'Dashboard' },
  { href: '#', label: 'Team' },
  { href: '#', label: 'Projects' },
  { href: '#', label: 'Calendar' },
]

const StyledLinks = ({links, classes}) => {
  return (
    <>
      {links.map(({ href, label }, index) => {
        const first = index == 0
        // todo: detect active page
        const isActive = first

        return (
          <a
            key={`${href}${label}`} href={href}
            className={`${first ? classes.first : ""} ${isActive ? classes.onlyActive : classes.onlyNormal} ${classes.common}`}
          >
            {label}
          </a>
        )
      })}
    </>
  )
}

const DesktopNavItems = () => {
  const classes = {
    "common": "px-3 py-2 rounded-md text-sm font-medium leading-5 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out",
    "onlyActive": "text-white bg-gray-900",
    "onlyNormal": "text-gray-300 hover:text-white hover:bg-gray-700",
    "first": "ml-4"
  }

  return (
    <div className="hidden sm:block sm:ml-6">
      <div className="flex">
        <StyledLinks links={links} classes={classes}/>
      </div>
    </div>
  )
}

const MobileNavItems = ({open}) => {
  const classes = {
    "common": "block px-3 py-2 rounded-md text-base font-medium focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out",
    "onlyActive": "text-white bg-gray-900",
    "onlyNormal": "text-gray-300 hover:text-white hover:bg-gray-700",
    "first": "mt-1"
  }

  return (
    <div className={`${open ? 'block' : 'hidden'} sm:hidden`}>
      <div className="px-2 pt-2 pb-3">
        <StyledLinks links={links} classes={classes}/>
      </div>
    </div>
  )
}

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">

          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button onClick={() => setMobileNavOpen(!mobileNavOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out" aria-label="Main menu" aria-expanded="false">
              <MenuOutline className={`${mobileNavOpen ? 'hidden' : 'block'} h-6 w-6`} />
              <XOutline className={`${mobileNavOpen ? 'block' : 'hidden'} h-6 w-6`} />
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <img className="block lg:hidden h-8 w-auto" src="/img/logos/workflow-mark-on-dark.svg" alt="Workflow logo" />
              <img className="hidden lg:block h-8 w-auto" src="/img/logos/workflow-logo-on-dark.svg" alt="Workflow logo" />
            </div>

            <DesktopNavItems />

          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out" aria-label="Notifications">
              <BellOutline className="h-6 w-6" />
            </button>

            <ProfileDropdown />

          </div>
        </div>
      </div>

      <MobileNavItems open={mobileNavOpen}/>

    </nav>
  )
}

export default Header

