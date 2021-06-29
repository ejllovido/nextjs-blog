import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm EJ. I'm a Front End Developer at Mashup Garage.</p>
      </section>
    </Layout>
  )
}
