import Head from 'next/head'
import { siteMeta } from 'lib/constants'
import { useRouter } from 'next/router'

const { siteTitle, siteDesc, siteUrl } = siteMeta

const Meta = ({ pageTitle, pageDesc }) => {
  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle
  const desc = pageDesc ?? siteDesc
  const router = useRouter()
  const url = `${siteUrl}${router.asPath}`

  return (
    <Head>
      <title>{title}</title>
      <meta property='og:title' content={title} />

      <meta name='description' content={desc} />
      <meta property='og:description' content={desc} />

      <link rel='canonical' href={url} />
      <meta property='og:url' content={url} />
    </Head>
  )
}

export default Meta
