import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import Nav from './application/Nav'

/*
 * Just an example of how you can customize the blocks in an
 * MDX file.  The layout could potentially iterate over its
 * children to wrap each with custom tags.
 */

const mdxComponents = {
  h1: props => (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight text-gray-900" {...props} />
      </div>
    </header>
  ),
  p: props => (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <p {...props} />
      </div>
    </div>
  )
}

const ApplicationLayout = ({ children }) => {
  return (
    <div>
      <Nav />

      <MDXProvider components={mdxComponents}>
        {children}
      </MDXProvider>
    </div>
  )
}

export default ApplicationLayout

