import styles from '../styles/layout.module.css'
import SEO from './seo'
import NavBar from './navbar'
import Footer from './footer'

export default function Layout({ children, seoTitle, seoDescription }) {
  return (
    <div className={styles.container}>
      <SEO title={seoTitle} description={seoDescription} />
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
