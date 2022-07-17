import React from 'react'
import styles from './logo.module.scss'
import logo from '../../static/leeto_logo.png'

export default () => (
  // <span className={styles.container}>
  <img
    className={styles.logo}
    src={logo}
    alt="Leeto - Faites briller votre comité - logo"
  />
  // </span>
)
