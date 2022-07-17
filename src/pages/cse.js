import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import styles from './page-metier.module.scss'
import AButtonPrimaryEnabled from '../components/button'
import CallToActionSection from '../components/call-to-action-section'
import PressSection from '../components/pressSection'
import TestimonialsSection from '../components/testimonials-section'

import SEO from '../components/seo'

import lg from '../../static/locales/fr/translation.json'

const DefaultContentLayout = ({ title, propositions }) => (
  <div className={styles.content}>
    <h3 className={styles.title}>{title}</h3>
    {propositions.map(({ subtitle, description }) => (
      <>
        <div className={styles.subtitle}>{subtitle}</div>
        <p className={styles.description}>{description}</p>
      </>
    ))}
  </div>
)
class ProductPage extends React.Component {
  render() {
    const subsidyIllustration = get(
      this,
      'props.data.subsidyIllustration.childImageSharp.fluid'
    )
    const giftCardIllustration = get(
      this,
      'props.data.giftCardIllustration.childImageSharp.fluid'
    )
    const purchasePowerIllustration = get(
      this,
      'props.data.purchasePowerIllustration.childImageSharp.fluid'
    )
    const communicationIllustration = get(
      this,
      'props.data.communicationIllustration.childImageSharp.fluid'
    )
    const peaceIllustration = get(
      this,
      'props.data.peaceIllustration.childImageSharp.fluid'
    )
    return (
      <Layout location={this.props.location}>
        <SEO
          pathname={this.props.location.pathname}
          title="Plateforme CSE Experts CSE | Leeto"
          description="Quels avantages pour les CSE à faire appel à une plateforme dédiée ? Découvrez comment Leeto accompagne les CSE dans leur fonctionnement"
        />
        <div className={styles.container} id="subsidies">
          <div className={styles.heroSection}>
            <h1 className={styles.title}>{lg.pages.cse.heroSection.title}</h1>
            <p className={styles.subtitle}>
              {lg.pages.cse.heroSection.subtitle}
            </p>
            <div className={styles.cta}>
              <AButtonPrimaryEnabled to="/demande-demo/">
                {lg.pages.cse.heroSection.cta}
              </AButtonPrimaryEnabled>
            </div>
          </div>
          <div className={styles.featuresSection}>
            <div className={styles.feature}>
              <div className={styles.illustration}>
                <Img
                  fluid={subsidyIllustration}
                  alt="Remboursement des activités sportives et culturelles des salariés"
                />
              </div>
              <DefaultContentLayout
                title={lg.pages.cse.featuresSection[0].title}
                propositions={[
                  {
                    subtitle: lg.pages.cse.featuresSection[0].subtitle_1,
                    description: lg.pages.cse.featuresSection[0].description_1,
                  },
                  {
                    subtitle: lg.pages.cse.featuresSection[0].subtitle_2,
                    description: lg.pages.cse.featuresSection[0].description_2,
                  },
                ]}
              />
            </div>
            <div className={styles.feature}>
              <div className={styles.illustration}>
                <Img
                  fluid={purchasePowerIllustration}
                  alt="Pouvoir d'achat pour les salariés"
                />
              </div>
              <DefaultContentLayout
                title={lg.pages.cse.featuresSection[1].title}
                propositions={[
                  {
                    subtitle: lg.pages.cse.featuresSection[1].subtitle_1,
                    description: lg.pages.cse.featuresSection[1].description_1,
                  },
                  {
                    subtitle: lg.pages.cse.featuresSection[1].subtitle_2,
                    description: lg.pages.cse.featuresSection[1].description_2,
                  },
                ]}
              />
            </div>
            <div className={styles.feature}>
              <div className={styles.illustration}>
                <Img fluid={peaceIllustration} alt="Esprit en paix" />
              </div>
              <DefaultContentLayout
                title={lg.pages.cse.featuresSection[2].title}
                propositions={[
                  {
                    subtitle: lg.pages.cse.featuresSection[2].subtitle_1,
                    description: lg.pages.cse.featuresSection[2].description_1,
                  },
                  {
                    subtitle: lg.pages.cse.featuresSection[2].subtitle_2,
                    description: lg.pages.cse.featuresSection[2].description_2,
                  },
                ]}
              />
            </div>
            <div className={styles.feature}>
              <div className={styles.illustration}>
                <Img
                  fluid={communicationIllustration}
                  alt="Communication des avantages salariés"
                />
              </div>
              <DefaultContentLayout
                title={lg.pages.cse.featuresSection[3].title}
                propositions={[
                  {
                    subtitle: lg.pages.cse.featuresSection[3].subtitle_1,
                    description: lg.pages.cse.featuresSection[3].description_1,
                  },
                  {
                    subtitle: lg.pages.cse.featuresSection[3].subtitle_2,
                    description: lg.pages.cse.featuresSection[3].description_2,
                  },
                ]}
              />
            </div>
            <div className={styles.feature}>
              <div className={styles.illustration}>
                <Img
                  fluid={giftCardIllustration}
                  alt="Tous les avantages Leeto à portée de main"
                />
              </div>
              <DefaultContentLayout
                title={lg.pages.cse.featuresSection[4].title}
                propositions={[
                  {
                    subtitle: lg.pages.cse.featuresSection[4].subtitle_1,
                    description: lg.pages.cse.featuresSection[4].description_1,
                  },
                  {
                    subtitle: lg.pages.cse.featuresSection[4].subtitle_2,
                    description: lg.pages.cse.featuresSection[4].description_2,
                  },
                ]}
              />
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
  query CSEQueryPage {
    subsidyIllustration: file(
      relativePath: { eq: "illustration-3d-manage.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    giftCardIllustration: file(
      relativePath: { eq: "leeto_carte_cadeaux.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    purchasePowerIllustration: file(
      relativePath: { eq: "illustration-3d-marketplace.png" }
    ) {
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
    peaceIllustration: file(relativePath: { eq: "illustration-peace.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
