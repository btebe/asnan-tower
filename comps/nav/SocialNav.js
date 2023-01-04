import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import data from "../../data/data.json";
import styles from "../../styles/nav/navsocial.module.css";
function SocialNav() {
  return (
    <>
      <div className={styles.social_desktop}>
        <div className={styles.nav_social}>
          <ul>
            {data[0].social.map((item, index) => {
              return (
                <li key={index}>
                  <Link href={item.link}>
                    <Image src={item.icon} width={item.width} height={item.height} alt={item.name} />
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link href={"#"} className="nav-ar">عربي</Link>
        </div>
      </div>
      <div className={styles.social_mobile}>
        <div className={styles.nav_social}>
          <ul>
            {data[0].social.map((item, index) => {
              return (
                <li key={index}>
                  <Link href={item.link}>
                    <Image src={item.icon} width={item.width} height={item.height} alt={item.name} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>

  )
}

export default SocialNav
