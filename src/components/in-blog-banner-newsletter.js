import React from 'react'

import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styles from './in-blog-banner-newsletter.module.scss'

const InBlogBannerNewsletter = ({ utms = '' }) => (
  <StaticQuery
    query={graphql`
      {
        bannerNewsletterDesktop: file(
          relativePath: { eq: "bannerNewsletterDesktop.png" }
        ) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        bannerNewsletterMobile: file(
          relativePath: { eq: "bannerNewsletterMobile.png" }
        ) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <a
          href={`https://go.leeto.co/newsletter/${utms}`}
          className={styles.link}
          target="_blank"
          rel="noreferrer"
        >
          <div className={styles.desktop}>
            <Img
              fluid={data.bannerNewsletterDesktop.childImageSharp.fluid}
              alt="Illustration Inscription Newsletter"
            />
          </div>
          <div className={styles.mobile}>
            <Img
              className={styles.mobile}
              fluid={data.bannerNewsletterMobile.childImageSharp.fluid}
              alt="Illustration Inscription Newsletter"
            />
          </div>
        </a>
      </>
    )}
  />
)

export default InBlogBannerNewsletter
