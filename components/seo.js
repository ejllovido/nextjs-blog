import Head from 'next/head'

export default function SEO({ title, description }) {
  return (
    <Head>
      <link rel='icon' href='/favicon.ico' />
      <title>{title ? `${title} | EJ Llovido Blog` : 'EJ Llovido Blog'}</title>
      <meta name='og:title' content={title} />
      <meta name='description' content={description} />
      <meta name='twitter:card' content='summary_large_image' />
    </Head>
  )
}

SEO.defaultProps = {
  description: 'Personal Blog',
}
