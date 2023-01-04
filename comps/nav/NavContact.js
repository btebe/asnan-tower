import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from "../../styles/nav/navcontact.module.css";

function NavContact({ show, scroll }) {
  return (
    <>
      {!scroll > 0 && <div className={styles.nav_contact}>
        <div className={styles.nav_contact_mobile}>
          {show ?
            <div className={styles.nav_contact_active}>
              <Image src="/assets/other/Asnan-Appointment-icon.svg" width={30} height={38} alt="appt" />
              <Link href={"#"} className="nav-ar">عربي</Link>
            </div> :
            <>
              <span className='nav-tel'>
                +965-189
                <span style={{ color: "var(--accent-yellow)" }}>
                  6666
                </span>
              </span>
              <Link className='nav-req' href={"#"}>Request an Appointment</Link>
              <Image src="/assets/other/Asnan-Appointment-icon.svg" width={30} height={38} alt="appt" />
            </>
          }
        </div>
        <div className={styles.nav_contact_desktop}>
          <span className='nav-tel'>
            +965-189
            <span style={{ color: "var(--accent-yellow)" }}>
              6666
            </span>
          </span>
          <div className={styles.btn_warpper}>
            <Link className={`${styles.appt_btn} nav-req`} href={"#"}>
              Request an Appointment
            </Link>
            <Image src="/assets/other/next-arrow.svg" width={10} height={15} alt="arrow" />
            <Image src="/assets/other/Asnan-Appointment-icon.svg" width={30} height={38} alt="appt" />
          </div>
        </div>
      </div>}
      {scroll > 0 && !show && <div className={styles.scroll_nav_contact}>
        <div>
          <h3>app</h3>
        </div>
      </div>}
      {scroll > 0 && show && <>
        <div className={styles.nav_contact_active}>
          <Image src="/assets/other/Asnan-Appointment-icon.svg" width={30} height={38} alt="appt" />
          <Link href={"#"} className="nav-ar">عربي</Link>
        </div>
      </>
      }
    </>
  )
}

export default NavContact
