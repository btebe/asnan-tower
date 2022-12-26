import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
function Nav() {
  return (
    <header>
      <div className="logo">
        <Image src="#" alt="logo" />
      </div>
      <div>
        <div className='rw-1'>
          <ul className="social">
            <li>
              <Link>youtube</Link>
            </li>
            <li>
              <Link>insta</Link>
            </li>
            <li>
              <Link>snapchat</Link>
            </li>
          </ul>
          <Link>ar</Link>
        </div>
        <div className="rw-2">
          <h3>phone</h3>
          <Link>appointment</Link>
        </div>
        <nav className='rw-3'>
          <ul>
            <li>
              <Link>home</Link>
            </li>
            <li>
              <Link>why asnan?</Link>
            </li>
            <li>
              <Link>asnanopedia</Link>
            </li>
            <li>
              <Link>services</Link>
            </li>
          </ul>
        </nav>
        <div className="menu">
          <button
            className="mobile_nav_toggle"
            aria-controls='primary-navation'
          >
            <span className='sr-only'>Menu</span>
          </button>
        </div>
      </div>

    </header>
  )
}

export default Nav
