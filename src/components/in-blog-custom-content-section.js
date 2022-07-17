import React from 'react'
import styles from './in-blog-custom-content-section.module.scss'

export default ({ emoji, content, children }) => {
  if (children) {
    return (
      <div className={styles.customContent}>
        <div className={styles.emoji}>{emoji}</div>
        <div className={styles.content}>{children}</div>
      </div>
    )
  }
  return (
    <div className={styles.customContent}>
      <div className={styles.emoji}>{emoji}</div>
      <div className={styles.content}>{content}</div>
    </div>
  )
}
