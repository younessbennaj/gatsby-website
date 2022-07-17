import React from 'react'
import { Link } from 'gatsby'
import styles from './banner.module.scss'

export default ({ text, to, ...props }) => (
  <div className={styles.banner}>
    {/* <Link to={to}> */}
    <a href={to} {...props}>
      <p className={styles.content}>{text}</p>
      {/* </Link> */}
    </a>
  </div>
)
