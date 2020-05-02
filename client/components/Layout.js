import React from 'react'
import Head from 'next/head'
import { MDXProvider } from '@mdx-js/react'

const mdxComponents = {
  h1: props => <h1 className="title" {...props} />,
  p: props => <p className="description" {...props} />
}

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MDXProvider components={mdxComponents}>
        <main>
          {children}
        </main>
      </MDXProvider>
    </div>
  )
}

export default Layout

