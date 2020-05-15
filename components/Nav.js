import React, { useState } from 'react'
import Link from 'next/link'
import ProfileDropdown from './ProfileDropdown'

const links = [
  { href: '#', label: 'Dashboard' },
  { href: '#', label: 'Team' },
  { href: '#', label: 'Projects' },
  { href: '#', label: 'Calendar' },
]

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
        {links.map(({ href, label }, index) => {
          const first = index == 0
          // todo: detect active page
          const isActive = first

          return (
            <a
              key={href} href={href}
              className={`${first ? classes.first : ""} ${isActive ? classes.onlyActive : classes.onlyNormal} ${classes.common}`}
            >
              {label}
            </a>
          )
        })}
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
        {links.map(({ href, label }, index) => {
          const first = index == 0
          // todo: detect active page
          const isActive = first

          return (
            <a
              key={href} href={href}
              className={`${first ? classes.first : ""} ${isActive ? classes.onlyActive : classes.onlyNormal} ${classes.common}`}
            >
              {label}
            </a>
          )
        })}
      </div>
    </div>
  )
}

const Nav = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">

          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button onClick={() => setMobileNavOpen(!mobileNavOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out" aria-label="Main menu" aria-expanded="false">
              <svg className={`${mobileNavOpen ? 'hidden' : 'block'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
              <svg className={`${mobileNavOpen ? 'block' : 'hidden'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
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
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
              </svg>
            </button>

            <ProfileDropdown />

          </div>
        </div>
      </div>

      <MobileNavItems open={mobileNavOpen}/>

    </nav>
  )
}

export default Nav

