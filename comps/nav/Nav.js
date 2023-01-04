import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/router";
import React, { useEffect, useState } from 'react';
import data from "../../data/data.json";
import styles from "../../styles/nav/nav.module.css";
import NavContact from './NavContact';
import NavDropdown from './NavDropdown';
import Navmobile from './Navmobile';
import PrimaryNav from './PrimaryNav';
import SocialNav from './SocialNav';

function Nav({ show, setShow }) {

  const [scroll, setScroll] = useState(0);
  const [dropdown, setDropdown] = useState(false);
  // const [offset, setOffset] = useState(0);

  const navToggle = () => {
    setShow(!show);
  }

  useEffect(() => {
    const onScroll = () => setScroll(window.pageYOffset);
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);


  return (
    <header className={`${scroll > 0 ? `${styles.onscroll}` : `${styles.notscroll}`}${show ? `${styles.sticky_mobile}` : ''}`}>
      <div className="container">
        {!scroll > 0 && <div className={`${styles.menu_desktop_static}`}>
          <div className={styles.menu_container}>
            <div className={styles.logo}>
              <Image src="/assets/logo/Asnan-Header-logo-big.svg" width={120} height={98} alt="logo" />
            </div>
            <div className={styles.nav_social}>
              <SocialNav />
            </div>
            <div className={styles.nav_contact}>
              <NavContact show={show} />
            </div>
            <nav className={styles.primary_nav}>
              <PrimaryNav dropdown={dropdown} setDropdown={setDropdown} data={data} />
            </nav>
            <nav id='secondary_nav'
              className={`${styles.secondary_nav} container`}
              data-visible={show ? "true" : "false"}>
              <Navmobile />
            </nav>
            <div className={styles.mobile_menu}>
              <button
                className={styles.mobile_nav_toggle}
                aria-controls='secondary_nav'
                aria-expanded={show ? "true" : "false"}
                onClick={navToggle}
              >
                <span className='sr-only'>Menu</span>
              </button>
            </div>
          </div>
          {dropdown && <div className={styles.desktop_dropdown}>
            <NavDropdown setDropdown={setDropdown} data={data} />
          </div>}
        </div>}
        {scroll > 0 && !show && <div className={`${styles.onscroll_menu_desktop} ${show && styles.onscroll_open_menu}`}>
          <div className={styles.menu_container}>
            <div className={styles.logo}>
              <Image src="/assets/logo/Asnan-Header-logo-big.svg" width={120} height={98} alt="logo" />
            </div>
            <div className={styles.primary_nav}>
              <PrimaryNav dropdown={dropdown} setDropdown={setDropdown} data={data} scroll={scroll} />
            </div>
            <div className={styles.nav_contact}>
              <NavContact show={show} scroll={scroll} />
            </div>
            <nav id='secondary_nav'
              className={`${styles.secondary_nav} container`}
              data-visible={show ? "true" : "false"}>
              <Navmobile scroll={scroll} />
            </nav>
            <div className={styles.mobile_menu}>
              <button
                className={styles.mobile_nav_toggle}
                aria-controls='secondary_nav'
                aria-expanded={show ? "true" : "false"}
                onClick={navToggle}
              >
                <span className='sr-only'>Menu</span>
              </button>
            </div>
          </div>
          {dropdown && <div className={styles.desktop_dropdown}>
            <NavDropdown setDropdown={setDropdown} data={data} />
          </div>}
        </div>}
        {scroll > 0 && show && <div className={`${styles.menu_desktop_static}`}>
          <div className={styles.menu_container}>
            <div className={styles.logo}>
              <Image src="/assets/logo/Asnan-Header-logo-big.svg" width={120} height={98} alt="logo" />
            </div>
            <div className={styles.nav_social}>
              <SocialNav />
            </div>
            <div className={styles.nav_contact}>
              <NavContact show={show} />
            </div>
            <nav className={styles.primary_nav}>
              <PrimaryNav dropdown={dropdown} setDropdown={setDropdown} data={data} />
            </nav>
            <nav id='secondary_nav'
              className={`${styles.secondary_nav} container`}
              data-visible={show ? "true" : "false"}>
              <Navmobile />
            </nav>
            <div className={styles.mobile_menu}>
              <button
                className={styles.mobile_nav_toggle}
                aria-controls='secondary_nav'
                aria-expanded={show ? "true" : "false"}
                onClick={navToggle}
              >
                <span className='sr-only'>Menu</span>
              </button>
            </div>
          </div>
          {dropdown && <div className={styles.desktop_dropdown}>
            <NavDropdown setDropdown={setDropdown} data={data} />
          </div>}
        </div>}
      </div>
    </header>
  )
}

export default Nav

