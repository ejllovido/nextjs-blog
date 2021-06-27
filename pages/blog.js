import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Blog() {
  return (
    <Layout>
      <Head>
        <title>Blog | EJ Llovido Blog</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>List of blogs</p>
      </section>
    </Layout>
  )
}