import React from 'react'
import Img from 'gatsby-image'
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import styles from './merci.module.scss'
import SEO from '../components/seo'

import lg from '../../static/locales/fr/translation.json'

class ThankYou extends React.Component {
  render() {
    const thankYouIllustration = get(
      this,
      'props.data.pricingIllustration.childImageSharp.fluid'
    )

    return (
      <Layout location={this.props.location}>
        <SEO
          pathname={this.props.location.pathname}
          description="Merci de nous avoir contacté ! Nos experts vous répondront rapidement ! "
        />
        <div className={styles.heroSection}>
          <div className={styles.heroText}>
            <h1>{lg.pages['thank-you'].title}</h1>
            <p>{lg.pages['thank-you'].subtitle}</p>
            <Link to="/" className={styles.link}>
              {lg.pages['thank-you'].back_link}
            </Link>
          </div>
          <div className={styles.heroImage}>
            <Img
              className={styles.image}
              fluid={thankYouIllustration}
              alt="Illustration pour la demande de démonstration"
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default ThankYou

export const pageQuery = graphql`
  query ThankYouQuery {
    pricingIllustration: file(relativePath: { eq: "illustration-peace.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
