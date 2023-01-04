import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/router";
import React, { useEffect, useState } from 'react';
import styles from "../../styles/nav/primarynav.module.css";
import DropdownOptions from './DropdownOptions';
import NavDropdown from './NavDropdown';


function PrimaryNav({ data, dropdown, setDropdown, scroll }) {

  const router = useRouter();

  // const [dropdown, setDropdown] = useState(false);
  const [selectNav, setSelectNav] = useState(null);

  useEffect(() => {
    setSelectNav(router.asPath);
  }, [router.asPath, selectNav])

  return (
    <div className={styles.primary_nav}>
      <ul className={`${scroll > 0 && styles.primary_onscroll} ${dropdown && styles.onscroll_dropdown}`}>
        {data[0].menu.map((item, index) => {
          if (item.dropdown) {
            return (
              <li key={index} onClick={() => setDropdown(!dropdown)} >
                <div className='dropicon'>
                  <span className='nav-fs'>{item.name}</span>
                  <Image src={item.icon} width={12} height={7} alt={item.name} />
                </div>
              </li>
            );
          } else if (item.icon.length > 0) {
            return (
              <li key={index} onClick={() => setDropdown(false)} >
                <Link className={`nav-fs ${selectNav == item.link ? styles.nav_active : ""}`} href={item.link} >
                  {item.icon.length > 0 && <Image src={item.icon} width={38} height={13} alt={item.name} />}
                </Link>
              </li>
            );
          } else {
            return (
              <li key={index} onClick={() => setDropdown(false)}>
                <Link className={`nav-fs ${selectNav == item.link ? styles.nav_active : ""}`} href={item.link}>{item.name}</Link>
              </li>
            );
          }
        })}
      </ul>
      {/* {dropdown && <div className={styles.desktop_dropdown}>
        <NavDropdown setDropdown={setDropdown} data={data} />
      </div>} */}
    </div>
  )
}

export default PrimaryNav
