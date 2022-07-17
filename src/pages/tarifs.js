import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import styles from './tarif.module.scss'
import AButtonPrimaryEnabled from '../components/button'
import MSectionClient from '../components/mSectionClient'
import TestimonialsSection from '../components/testimonials-section'
import CallToActionSection from '../components/call-to-action-section'
import SEO from '../components/seo'

import lg from '../../static/locales/fr/translation.json'

class Pricing extends React.Component {
  render() {
    const pricingIllustration = get(
      this,
      'props.data.pricingIllustration.childImageSharp.fluid'
    )

    const crownIllustration = get(
      this,
      'props.data.crownIllustration.childImageSharp.fluid'
    )
    const startupIllustration = get(
      this,
      'props.data.startupIllustration.childImageSharp.fluid'
    )
    const enterpriseIllustration = get(
      this,
      'props.data.enterpriseIllustration.childImageSharp.fluid'
    )

    return (
      <Layout location={this.props.location}>
        <SEO
          pathname={this.props.location.pathname}
          title="Un tarif adapté à vos besoins | Leeto"
          description="Combien coûte une plateforme de gestion de CSE ? Découvrez les différents tarifs des offres proposées par Leeto"
        />
        <div className={styles.heroSection}>
          <div className={styles.heroLeft}>
            <div className={styles.heroText}>
              <h1>{lg.pages.pricing.heroSection.title}</h1>
              <p>{lg.pages.pricing.heroSection.subtitle}</p>
            </div>
          </div>
          <div className={styles.pricingBoxes}>
            <div className={styles.pricingBox}>
              <div className={styles.top}>
                <h3 className={styles.planName}>
                  {lg.pages.pricing.heroSection.neobanque.name}
                </h3>
                <p className={styles.description}>
                  {lg.pages.pricing.heroSection.neobanque.description}
                </p>
                <span className={styles.price}>
                  <strong>
                    {lg.pages.pricing.heroSection.neobanque.price}
                  </strong>
                  {lg.pages.pricing.heroSection.neobanque.price_detail}
                </span>
              </div>
              <div className={styles.bottom}>
                <div className={styles.features}>
                  {lg.pages.pricing.heroSection.neobanque.features.map(
                    (feature, i) => (
                      <div key={i} className={styles.feature}>
                        {feature}
                      </div>
                    )
                  )}
                </div>
                <div className={styles.cta}>
                  <AButtonPrimaryEnabled
                    // to={'/demande-demo'}
                    // state={{ plan: 'neobanque' }}
                    href="https://app.leeto.co/inscription/role"
                    type="external"
                  >
                    {lg.pages.pricing.heroSection.neobanque.cta}
                  </AButtonPrimaryEnabled>
                </div>
              </div>
            </div>

            <div className={styles.pricingBox}>
              <div className={styles.top}>
                <h3 className={styles.planName}>
                  {lg.pages.pricing.heroSection['tout-en-un'].name}
                </h3>
                <p className={styles.description}>
                  {lg.pages.pricing.heroSection['tout-en-un'].description}
                </p>
              </div>
              {/* <hr className={styles.hr} /> */}
              <div className={styles.bottom}>
                <div className={styles.features}>
                  <div className={styles.customFeature}>
                    {lg.pages.pricing.heroSection['tout-en-un'].customFeature}
                  </div>
                  {lg.pages.pricing.heroSection['tout-en-un'].features.map(
                    (feature, i) => (
                      <div key={i} className={styles.feature}>
                        {feature}
                      </div>
                    )
                  )}
                </div>
                <div className={styles.cta}>
                  <AButtonPrimaryEnabled to="/demande-demo/">
                    {lg.pages.pricing.heroSection['tout-en-un'].cta}
                  </AButtonPrimaryEnabled>
                </div>
              </div>
            </div>

            <div className={styles.pricingBox}>
              <div className={styles.top}>
                <h3 className={styles.planName}>
                  {lg.pages.pricing.heroSection.marketplace.name}
                </h3>
                <p className={styles.description}>
                  {lg.pages.pricing.heroSection.marketplace.description}
                </p>
              </div>
              {/* <hr className={styles.hr} /> */}
              <div className={styles.bottom}>
                <div className={styles.features}>
                  <div className={styles.customFeature}>
                    {lg.pages.pricing.heroSection['tout-en-un'].customFeature}
                  </div>
                  {lg.pages.pricing.heroSection.marketplace.features.map(
                    (feature, i) => (
                      <div key={i} className={styles.feature}>
                        {feature}
                      </div>
                    )
                  )}
                </div>
                <div className={styles.cta}>
                  <AButtonPrimaryEnabled to="/demande-demo/">
                    {lg.pages.pricing.heroSection.marketplace.cta}
                  </AButtonPrimaryEnabled>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.commonFeatures}>
            <h3 className={styles.title}>
              {lg.pages.pricing.commonFeatures.title}
            </h3>
            <div className={styles.features}>
              {lg.pages.pricing.commonFeatures.features.map((feature, i) => (
                <div key={i} className={styles.feature}>
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.clientsSection}>
          <MSectionClient />
        </div>
        <div>
          <TestimonialsSection />
        </div>
        <div className={styles.questionsSection}>
          <div className={styles.wrapper}>
            <h2 className={styles.title}>
              {lg.pages.pricing.questionsSection.title}
            </h2>
            <div className={styles.questions}>
              {lg.pages.pricing.questionsSection.questions.map(
                (question, i) => (
                  <div key={i} className={styles.question}>
                    <h5>{question.title}</h5>
                    <p>{question.question}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        <div className={styles.demoSection}>
          <CallToActionSection />
        </div>
      </Layout>
    )
  }
}

export default Pricing

export const pageQuery = graphql`
  query PricingQuery {
    pricingIllustration: file(relativePath: { eq: "illustration-peace.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    crownIllustration: file(relativePath: { eq: "illustration-crown.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    startupIllustration: file(relativePath: { eq: "startup_plan.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    enterpriseIllustration: file(relativePath: { eq: "enterprise_plan.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
