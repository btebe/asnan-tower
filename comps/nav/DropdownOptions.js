import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from "../../styles/nav/dropdownOptions.module.css";

function DropdownOptions({ data }) {
  return (
    <div className={styles.dropdown_options}>
      <nav>
        <ul>
          {data[0].services.map((item, index) => {
            return (
              <li key={index}>
                <Link href={item.link}>
                  <div className={styles.img_mobile} style={{ backgroundImage: `url(${item.image.mobile})` }}>
                    <div className={styles.overlay}></div>
                  </div>
                  <div className={styles.img_desktop} style={{ backgroundImage: `url(${item.image.desktop})` }}>
                    <div className={styles.overlay}></div>
                  </div>
                  <div className={styles.option_content}>
                    <article>
                      <h3 className={styles.options_title}>{item.title}</h3>
                      <div>
                        <p className={styles.options_sub}>{item.sub}</p>
                        <sub className={styles.options_location}>
                          {item.sub2}
                        </sub>
                      </div>
                    </article>
                    {index % 2 == 0 ? <Image src="/assets/service-nav/arrow-next.svg" width={40} height={50} alt="logo" />
                      : <Image src="/assets/service-nav/arrow-nexts.svg" width={40} height={50} alt="logo" />}

                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default DropdownOptions
