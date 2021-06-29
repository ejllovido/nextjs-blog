import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function About() {
  return (
    <Layout seoTitle='About'>
      <section className={utilStyles.headingMd}>
        <p>This is all about learning NextJS</p>
      </section>
    </Layout>
  )
}
