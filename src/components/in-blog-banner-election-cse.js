import React from 'react'

import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styles from './in-blog-banner-election-cse.module.scss'

const InBlogBannerElectionCSE = () => (
  <StaticQuery
    query={graphql`
      {
        bannerElectionCSEDesktop: file(
          relativePath: { eq: "bannerElectionCSEDesktop.png" }
        ) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        bannerElectionCSEMobile: file(
          relativePath: { eq: "bannerElectionCSEMobile.png" }
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
          href="https://go.leeto.co/fr/elections-cse"
          className={styles.link}
          target="_blank"
          rel="noreferrer"
        >
          <div className={styles.desktop}>
            <Img
              fluid={data.bannerElectionCSEDesktop.childImageSharp.fluid}
              alt="Illustration Livre Blanc Election du CSE"
            />
          </div>
          <div className={styles.mobile}>
            <Img
              className={styles.mobile}
              fluid={data.bannerElectionCSEMobile.childImageSharp.fluid}
              alt="Illustration Livre Blanc Election du CSE"
            />
          </div>
        </a>
      </>
    )}
  />
)

export default InBlogBannerElectionCSE
