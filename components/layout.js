import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'

const name = 'Web Developement Treats'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Personal Blog"
        />
        <meta name="og:title" content='EJ Llovido Blog' />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <nav className={styles.navbar}>
        <div>EJ</div>
        <div className={styles.navbarItems}>
          <div>
            <Link href="/">
              <a>Home</a>
            </Link>
          </div>
          <div>
            <Link href="/about">
              <a>About</a>
            </Link>
          </div>
          <div>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </div>
        </div>
      </nav>
      <main>{children}</main>
      <footer className={styles.footer}>Made with 💖</footer>
    </div>
  )
}