
import styles from './NavBar1.module.scss'

import Link from 'next/link';






export default function NavBar1(): JSX.Element {
  return (
    <div className={`${styles.container}${styles.navbar__container}`}>
      <nav className={styles.navbar__flex}>


        <div className={styles.navbar__left}>

          <Link href='/'><div className={styles.h3}>yuhangang</div></Link>
        </div>


        <div className={styles.navbar__right}>

          <label htmlFor="navbarToggler" className={styles.navbar__toggler__label}>

            <span className={styles.navbar__hamberger}></span>
          </label>
          <input type="checkbox" name="" className={styles.navbar__toggler__input} id="navbarToggler" />
          <ul className={styles.navbar__links}>
            <li><a href="/about">ABOUT</a></li>
            <li><a href="/projects">PROJECTS</a>
              <ul className={styles.navbar__sublinks}>
                <li><a href="/yuhangang.com">yuhangang.com</a></li>
                <li><a href="/theranos">Theranos</a></li>
              </ul>
            </li>

            <li><a href="mailto:redrainhang@gmail.com" target="_blank">CONTACT</a></li>
          </ul>
        </div>

      </nav>
    </div>


  );
}

/*
export default function NavBar1():JSX.Element{
    return(
        <div className={`${styles.container}${styles.navbar__container}`}>
  <nav className={styles.navbar__flex}>
    <div className={styles.navbar__left}>
      <span className={styles.navbar__hamburger}></span>
      <form className={styles.navbar__search}>
        <div className={styles.navbar__inputwithicon}>
          <input type="text" name="" className={styles.navbar__input} placeholder="Search my site..."/>
          <input type="submit" name="" className={styles.navbar__button} value=""/>
        </div>
      </form>
    </div>
    <div className={styles.navbar__right}>
      <label className={styles.navbar__toggler__label}>
      <span className={styles.navbar__hamberger}></span>
      <span>Menu</span></label>
      <input type="checkbox" name="" className={styles.navbar__toggler__input} id="navbarToggler"/>
      <ul className={styles.navbar__links}>
        <li><a href="#">Profile</a></li>
        <li><a href="#">Connections</a>
          <ul className={styles.navbar__sublinks}>
            <li><a href="#">linkedin</a></li>
            <li><a href="#">dribbble</a></li>
            <li><a href="#">behance</a></li>
            <li><a href="#">codepen</a></li>
            <li><a href="#">vimeo</a></li>
          </ul>
        </li>
        <li><a href="#">Jobs</a>
          <ul className={styles.navbar__sublinks}>
            <li><a href="#">front-end developer</a></li>
            <li><a href="#">back-end developer</a></li>
            <li><a href="#">web designer</a></li>
          </ul>
        </li>
        <li><a href="#">About Us</a></li>
      </ul>
    </div>
  </nav>
</div>


    );
}
*/