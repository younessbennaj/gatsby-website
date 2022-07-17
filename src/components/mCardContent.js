import React from 'react'
import styles from './mCardContent.module.scss'

export default ({ node }) => (
  <a
    href={`${node.link}?utm_source=blog&utm_medium=articles_feed`}
    className={styles.link}
    target="_blank"
  >
    <div className={styles.preview}>
      <img
        alt={node.title}
        className={styles.blogPostPreviewImage}
        src={node.preview.fixed.src}
      />
    </div>
  </a>
)
