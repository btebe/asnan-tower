import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import data from "../../data/data.json";
import styles from "../../styles/nav/navmobile.module.css";
import DropdownOptions from './DropdownOptions';
import SocialNav from './SocialNav';

function Navmobile({ scroll }) {

  const [dropdownNav, setDropdown] = useState(false);

  return (
    <div className={styles.mobile_nav_dropdwon}>
      <ul className={`${styles.mobile_nav} ${scroll > 0 && styles.onscroll}`}>
        {data[0].menu.map((item, index) => {
          if (item.dropdown) {
            return (
              <li key={index} onClick={() => setDropdown(!dropdownNav)} >
                <div className="dropicon">
                  <span className="nav-fs">{item.name}</span>
                  <Image src={item.icon} width={12} height={7} alt={item.name} />
                </div>
                {dropdownNav && <DropdownOptions data={data} />}
              </li>
            );
          } else if (item.icon.length > 0) {
            return (
              <li key={index}>
                <Link href={item.link} className="nav-fs"  >
                  {item.icon.length > 0 && <Image src={item.icon} width={38} height={13} alt={item.name} />}
                </Link>
              </li>
            );
          } else {
            return (
              <li key={index}>
                <Link href={item.link} className="nav-fs" >{item.name}</Link>
              </li>
            );
          }
        })}
      </ul>
      <div className={styles.mobile_social}>
        <p>AsnanTower on social media</p>
        <SocialNav />
      </div>
      <div className={styles.menu_mobile_footer}>
        <div className={styles.menu_footer_contact}>
          <p>contact us</p>
        </div>
        <div className={styles.menu_footer_img}>
        </div>
      </div>
    </div>
  )
}

export default Navmobile
