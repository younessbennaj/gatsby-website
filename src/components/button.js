import React from 'react'
import { Link } from 'gatsby'
import styles from './button.module.scss'

export default ({ children, to, type, href, ...props }) => {
  if (type === 'submit') {
    return <button className={styles.cta}>{children}</button>
  }
  if (type === 'external') {
    return (
      <a href={href}>
        <button className={styles.cta}>{children}</button>
      </a>
    )
  }
  return (
    <Link to={to} className={styles.link} {...props}>
      <button className={styles.cta}>{children}</button>
    </Link>
  )
}
