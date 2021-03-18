
import styles from './NavBar1.module.scss'

import Link from 'next/link';





export default function NavBar1(): JSX.Element {
  let navbarTogglerIcon = '/icons/ui/menu.svg';
  function onOpenNavBar(){
  var checkedValue = (document.getElementById("navbarToggler") as HTMLInputElement); 
   navbarTogglerIcon = checkedValue.checked?  '/icons/ui/close.svg': '/icons/ui/menu.svg';
   console.log(checkedValue.checked);
   document.getElementById("navIcon").style.backgroundImage = "url("+navbarTogglerIcon+")";
  }
  
  return (
    <div className={`${styles.container}${styles.navbar__container}`}>
      <nav className={styles.navbar__flex}>


        <div className={styles.navbar__left}>
         <Link href="/"><img className={styles.img} src="/icons/logo.png"/>
         </Link>
        </div>


        <div className={styles.navbar__right}>

          <label htmlFor="navbarToggler" className={styles.navbar__toggler__label} >

            <span className={styles.navbar__hamberger} id='navIcon'></span>
          </label>
          <input type="checkbox" name="" className={styles.navbar__toggler__input} id="navbarToggler" onChange={onOpenNavBar}/>
          <ul className={styles.navbar__links}>
            <li><Link href="/about">ABOUT</Link></li>
            <li><Link href="/projects">PROJECTS</Link>
              <ul className={styles.navbar__sublinks}>
              <li><Link href="/projects">All Projects</Link></li>
                <li><Link href="/yuhangang.com">yuhangang.com</Link></li>
                <li><Link href="/theranos">Theranos</Link></li>
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
        <li><Link href="#">Profile</Link></li>
        <li><Link href="#">Connections</Link>
          <ul className={styles.navbar__sublinks}>
            <li><Link href="#">linkedin</Link></li>
            <li><Link href="#">dribbble</Link></li>
            <li><Link href="#">behance</Link></li>
            <li><Link href="#">codepen</Link></li>
            <li><Link href="#">vimeo</Link></li>
          </ul>
        </li>
        <li><Link href="#">Jobs</Link>
          <ul className={styles.navbar__sublinks}>
            <li><Link href="#">front-end developer</Link></li>
            <li><Link href="#">back-end developer</Link></li>
            <li><Link href="#">web designer</Link></li>
          </ul>
        </li>
        <li><Link href="#">About Us</Link></li>
      </ul>
    </div>
  </nav>
</div>


    );
}
*/