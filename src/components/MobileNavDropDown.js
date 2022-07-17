import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import arrow from '../assets/keyboard_arrow_down.png'

import styles from './MobileNavDropDown.module.scss'

const MobileNavDropDown = ({ children, title, slug, activeClassName }) => {
  const [active, setActive] = useState(false)

  const handleClick = function(e) {
    setActive(!active)
  }

  return (
    <div className={styles.mobileDropDown}>
      <div className={styles.parentLink}>
        <Link to={`/${slug}`} activeClassName={styles.parentActive}>
          {title}
        </Link>
        <div className={styles.dropdownLink} onClick={handleClick}>
          <img
            src={arrow}
            alt="Dérouler le sous menu"
            className={active ? `${styles.arrowActive}` : ''}
          />
        </div>
      </div>
      <ul className={active ? `${styles.subMenuActive}` : ''}>{children}</ul>
    </div>
  )
}

export default MobileNavDropDown
