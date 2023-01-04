import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from "../../styles/nav/navdropdown.module.css";
import DropdownOptions from './DropdownOptions';

function NavDropdown({ setDropdown, data }) {
  return (
    <div className={`${styles.dropdown_container} container`}>
      <article className='dropdown_desc'>
        <h1 className='droptitle'>Services</h1>
        <p className='drop-p'>This team empowers itself by utilizing the best materials also Asnan Tower’s team are constantly attending courses provide the exceptional dental care experience for its guests.</p>
      </article>
      <div className={styles.dropdown_close} onClick={() => setDropdown(false)}>
        <span className='close-p'>Close</span>
        <button>
          <Image src="/assets/menu/close-cross-icon.svg" width={35} height={30} alt="close" />
        </button>
      </div>
      <div className={styles.dropdown_options}>
        <DropdownOptions data={data} />
      </div>
    </div>
  )
}

export default NavDropdown
