import styles from '../styles/navbar.module.css'
import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div>
        <Link href='/'>
          <a>EJ</a>
        </Link>
      </div>
      <div className={styles.navbarItems}>
        <div>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </div>
      </div>
    </nav>
  )
}
