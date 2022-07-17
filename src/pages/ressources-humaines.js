import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'

import lg from '../../static/locales/fr/translation.json'
import Layout from '../components/layout'
import AButtonPrimaryEnabled from '../components/button'
import CallToActionSection from '../components/call-to-action-section'
import PressSection from '../components/pressSection'
import TestimonialsSection from '../components/testimonials-section'
import SEO from '../components/seo'
import styles from './page-metier.module.scss'

class ProductPage extends React.Component {
  render() {
    const subsidyIllustration = get(
      this,
      'props.data.subsidyIllustration.childImageSharp.fluid'
    )
    const peaceIllustration = get(
      this,
      'props.data.peaceIllustration.childImageSharp.fluid'
    )
    const communicationIllustration = get(
      this,
      'props.data.communicationIllustration.childImageSharp.fluid'
    )
    const discountsIllustration = get(
      this,
      'props.data.discountsIllustration.childImageSharp.fluid'
    )
    const customIllustration = get(
      this,
      'props.data.customIllustration.childImageSharp.fluid'
    )
    return (
      <Layout location={this.props.location}>
        <SEO
          pathname={this.props.location.pathname}
          title="Merci pour votre demande | Leeto"
          description="Quels avantages pour les RH à faire appel à une plateforme CSE ? Découvrez comment Leeto accompagne les RH dans le cadre du CSE"
        />
        <div className={styles.container} id="subsidies">
          <div className={styles.heroSection}>
            <h1 className={styles.title}>{lg.pages.rh.heroSection.title}</h1>
            <p className={styles.subtitle}>
              {lg.pages.rh.heroSection.subtitle}
            </p>
            <div className={styles.cta}>
              <AButtonPrimaryEnabled to="/demande-demo/">
                {lg.pages.rh.heroSection.cta}
              </AButtonPrimaryEnabled>
            </div>
          </div>
          <div className={styles.featuresSection}>
            <div className={styles.feature}>
              <div className={styles.illustration}>
                <Img
                  fluid={subsidyIllustration}
                  alt="Renforcez la marque employeur"
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>
                  {lg.pages.rh.featuresSection[0].title}
                </h3>
                <div className={styles.subtitle}>
                  {lg.pages.rh.featuresSection[0].subtitle}
                </div>
                <p className={styles.description}>
                  {lg.pages.rh.featuresSection[0].description}
                </p>
              </div>
            </div>
            <div className={styles.feature}>
              <div className={styles.illustration}>
                <Img
                  fluid={communicationIllustration}
                  alt="Faites vous entendre de vos salariés"
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>
                  {lg.pages.rh.featuresSection[1].title}
                </h3>
                <div className={styles.subtitle}>
                  {lg.pages.rh.featuresSection[1].subtitle}
                </div>
                <p className={styles.description}>
                  {lg.pages.rh.featuresSection[1].description}
                </p>
              </div>
            </div>
            <div className={styles.feature}>
              <div className={styles.illustration}>
                <Img
                  fluid={customIllustration}
                  alt="Personnalisez vos avantages salariés"
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>
                  {lg.pages.rh.featuresSection[2].title}
                </h3>
                <div className={styles.subtitle}>
                  {lg.pages.rh.featuresSection[2].subtitle_1}
                </div>
                <p className={styles.description}>
                  {lg.pages.rh.featuresSection[2].description_1}
                </p>
                <h3 className={styles.title}>
                  {lg.pages.rh.featuresSection[2].title_2}
                </h3>
                <div className={styles.subtitle}>
                  {lg.pages.rh.featuresSection[2].subtitle_2}
                </div>
                <p className={styles.description}>
                  {lg.pages.rh.featuresSection[2].description_2}
                </p>
              </div>
            </div>
            <div className={styles.feature}>
              <div className={styles.illustration}>
                <Img
                  fluid={peaceIllustration}
                  alt="Offrez Leeto en 2 min, on s'occupe du reste"
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>
                  {lg.pages.rh.featuresSection[3].title}
                </h3>
                <div className={styles.subtitle}>
                  {lg.pages.rh.featuresSection[3].subtitle_1}
                </div>
                <p className={styles.description}>
                  {lg.pages.rh.featuresSection[3].description_1}
                </p>
                <h3 className={styles.title}>
                  {lg.pages.rh.featuresSection[3].title_2}
                </h3>
                <div className={styles.subtitle}>
                  {lg.pages.rh.featuresSection[3].subtitle_2}
                </div>
                <p className={styles.description}>
                  {lg.pages.rh.featuresSection[3].description_2}
                </p>
              </div>
            </div>
            <div className={styles.feature}>
              <div className={styles.illustration}>
                <Img
                  fluid={discountsIllustration}
                  alt="Augmentez le pouvoir d'achat de vos salariés"
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>
                  {lg.pages.rh.featuresSection[4].title}
                </h3>
                <div className={styles.subtitle}>
                  {lg.pages.rh.featuresSection[4].subtitle_1}
                </div>
                <p className={styles.description}>
                  {lg.pages.rh.featuresSection[4].description_1}
                </p>
                <h3 className={styles.title}>
                  {lg.pages.rh.featuresSection[4].title_2}
                </h3>
                <div className={styles.subtitle}>
                  {lg.pages.rh.featuresSection[4].subtitle_2}
                </div>
                <p className={styles.description}>
                  {lg.pages.rh.featuresSection[4].description_2}
                </p>
              </div>
            </div>
          </div>
          <div>
            <TestimonialsSection />
          </div>
          <PressSection />

          <div className={styles.demoSection}>
            <CallToActionSection />
          </div>
        </div>
      </Layout>
    )
  }
}

export default ProductPage

export const pageQuery = graphql`
  query RessourcesHumainesQueryPage {
    subsidyIllustration: file(
      relativePath: { eq: "home-hero-illustration.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    peaceIllustration: file(relativePath: { eq: "illustration-peace.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    communicationIllustration: file(
      relativePath: { eq: "illustration-communication.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    discountsIllustration: file(
      relativePath: { eq: "illustration-perks-logos.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    customIllustration: file(
      relativePath: { eq: "illustration-3d-manage.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
