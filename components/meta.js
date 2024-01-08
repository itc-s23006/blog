import Head from 'next/head'

const Meta =( pageTitle ) => (
<Head>
<title>{pageTitle}</title>
<meta property="og:title" content={pageTitle} />
)

export default Meta
