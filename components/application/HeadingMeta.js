import React, { useState } from 'react'
import Transition from '../Transition'
import useClickAway from '../useClickAway'
import { CheveronDown } from 'heroicons-react'

const MetaSection = (props) => {
  return (
    <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap" {...props} />
  )
}

const MetaItem = ({icon, label}) => {
  return (
    <div className="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mr-6">
      {React.createElement(icon, { className: "flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"})}
      {label}
    </div>
  )
}

const SecondaryAction = ({icon, label, href, first}) => {
  return (
    <span className={`hidden sm:block shadow-sm rounded-md ${first ? '' : 'ml-3'}`}>
      <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50 transition duration-150 ease-in-out">
        {React.createElement(icon, { className: "-ml-1 mr-2 h-5 w-5 text-gray-500"})}
        {label}
      </button>
    </span>
  )
}

const PrimaryAction = ({icon, label, href, first}) => {
  return (
    <span className={`sm:ml-3 shadow-sm rounded-md ${first ? '' : 'ml-3'}`}>
      <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700 transition duration-150 ease-in-out">
        {React.createElement(icon, { className: "-ml-1 mr-2 h-5 w-5"})}
        {label}
      </button>
    </span>
  )
}

const SecondaryDropdown = ({items}) => {
  const [isOpen, setOpen] = useState(false)
  const dropdownRef = useClickAway(() => setOpen(false))

  return (
    <span ref={dropdownRef} className="ml-3 relative shadow-sm rounded-md sm:hidden">
      <button onClick={() => setOpen(!isOpen)} type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out" id="mobile-menu" aria-haspopup="true">
        More
        <CheveronDown className="-mr-1 ml-2 h-5 w-5 text-gray-500" />
      </button>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="transform origin-top-right absolute right-0 mt-2 -mr-1 w-48 rounded-md shadow-lg" aria-labelledby="mobile-menu" role="menu">
          <div className="py-1 rounded-md bg-white shadow-xs">
            {items.map(({icon, label, href}, index) =>
              <a key={`${href}${label}`} href={href} className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out" role="menuitem">{label}</a>
            )}
          </div>
        </div>
      </Transition>
    </span>
  )
}

const HeadingMeta = ({title, metadata, primary, secondary}) => {
  return (
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="flex-1 min-w-0">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
          {title}
        </h2>

        <MetaSection>
          {metadata.map(({icon, label}) =>
            <MetaItem key={label} icon={icon} label={label} />
          )}
        </MetaSection>
      </div>

      <div className="mt-5 flex lg:mt-0 lg:ml-4">
        {secondary.map(({icon, label, href}, index) => {
          const first = index == 0
          return <SecondaryAction key={`${href}${label}`} icon={icon} label={label} href={href} first={first} />
        })}

        {primary.map(({icon, label, href}, index) => {
          const first = index == 0
          return <PrimaryAction key={`${href}${label}`} icon={icon} label={label} href={href} first={first} />
        })}

        <SecondaryDropdown items={secondary} />

      </div>
    </div>
  )
}

export default HeadingMeta

