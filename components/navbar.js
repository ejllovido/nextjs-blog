import styles from '../styles/navbar.module.css'
import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div>EJ</div>
      <div className={styles.navbarItems}>
        <div>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </div>
        <div>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </div>
        <div>
          <Link href='/blog'>
            <a>Blog</a>
          </Link>
        </div>
      </div>
    </nav>
  )
}
