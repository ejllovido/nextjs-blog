import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About | EJ Llovido Blog</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>This is all about learning NextJS</p>
      </section>
    </Layout>
  )
}