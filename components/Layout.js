import React from 'react'
import Head from 'next/head'
import { MDXProvider } from '@mdx-js/react'
import Nav from './Nav'

const mdxComponents = {
  h1: props => <h1 className="title" {...props} />,
  p: props => <p className="description" {...props} />
}

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <MDXProvider components={mdxComponents}>
        {children}
      </MDXProvider>
    </div>
  )
}

export default Layout

