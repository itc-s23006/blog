import Head from 'next/head'

import { siteMeta } from 'lib/constants'
const { siteTitle } = siteMeta

const Meta = ({ pageTitle }) => (
  <Head>
    <title>
      {pageTitle} | {siteTitle}
    </title>
    <meta property='og:title' content={`${pageTitle} | ${siteTitle}`} />
  </Head>
)

export default Meta
