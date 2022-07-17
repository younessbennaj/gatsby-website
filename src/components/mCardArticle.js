import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import MCard from './mCard'
import styles from './mCardArticle.module.scss'

export default ({ node }) => (
  <div className={styles.preview}>
    <MCard to={`/blog/${node.slug}/`}>
      <div className={styles.preview}>
        <Img
          alt={node.blogPostPreviewImage.title}
          className={styles.blogPostPreviewImage}
          fluid={node.blogPostPreviewImage.fluid}
        />
        <div className={styles.articleInfo}>
          <span className={styles.publishDate}>{node.publishDate}</span>
          <span className={styles.tags}>{node.tags}</span>
        </div>
        <h5 className={styles.previewTitle}>{node.title}</h5>
      </div>
    </MCard>
  </div>
)
