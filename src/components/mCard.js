import React from 'react'
import { Link } from 'gatsby'

import styles from './mCard.module.scss'

export default ({ children, to = '/' }) => (
  <div className={styles.preview}>
    <Link to={to}>{children}</Link>
  </div>
)
