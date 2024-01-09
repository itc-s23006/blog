import Head from 'next/head'

import { siteMeta } from 'lib/constants'
const { siteTitle } = siteMeta

const Meta = ({ pageTitle }) => (
const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle

  <Head>
    <title>{title}</title>
    <meta property='og:title' content={title} />
  </Head>
)

export default Meta
