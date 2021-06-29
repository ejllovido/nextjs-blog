import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Blog() {
  return (
    <Layout seoTitle='Blog'>
      <section className={utilStyles.headingMd}>
        <p>List of blogs</p>
      </section>
    </Layout>
  )
}
