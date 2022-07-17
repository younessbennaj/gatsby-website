import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import { get } from 'lodash'

import lg from '../../static/locales/fr/translation.json'
import AButtonPrimaryEnabled from '../components/button'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Features from '../components/features'
import MSectionClient from '../components/mSectionClient'
import MSectionAssets from '../components/mSectionAssets'
import DemoContactForm from '../components/demo-contact-form'
import InlineTestimonialSection from '../components/inline-testimonial-section'
import styles from './solutions-rh-dirigeants.module.scss'

class SolutionsRHDirigeants extends React.Component {
  render() {
    const illustrationTitre = get(
      this,
      'props.data.solutionIllustration.childImageSharp.fluid'
    )
    const illustrationSubvention = get(
      this,
      'props.data.illustrationSubvention.childImageSharp.fluid'
    )
    const illustrationAvantages = get(
      this,
      'props.data.illustrationAvantages.childImageSharp.fluid'
    )
    const illustrationCommunication = get(
      this,
      'props.data.illustrationCommunication.childImageSharp.fluid'
    )
    const illustrationApprecieDesSalaries = get(
      this,
      'props.data.illustrationApprecieDesSalaries.childImageSharp.fluid'
    )

    // Assets
    const illustrationKey = get(
      this,
      'props.data.illustrationKey.childImageSharp.fluid'
    )
    const illustrationRedGift = get(
      this,
      'props.data.illustrationRedGift.childImageSharp.fluid'
    )
    const illustrationBuoy = get(
      this,
      'props.data.illustrationBuoy.childImageSharp.fluid'
    )

    const illustrationStar = get(
      this,
      'props.data.illustrationStar.childImageSharp.fluid'
    )

    const illustrationTimer = get(
      this,
      'props.data.illustrationTimer.childImageSharp.fluid'
    )

    return (
      <Layout location={this.props.location}>
        <SEO
          title="Avantages salariés et communication RH"
          pathname={this.props.location.pathname}
          description={lg.pages.solutionRH.description}
        />

        <div className={styles.heroSection}>
          <div className={styles.content}>
            <h1>{lg.pages.solutionRH.title}</h1>
            <p>{lg.pages.solutionRH.description}</p>
            <AButtonPrimaryEnabled to="#demo-contact">
              {lg.components.navigation.demo}
            </AButtonPrimaryEnabled>
          </div>
          <div className={styles.rightPane}>
            <Img
              fluid={illustrationTitre}
              className={styles.image}
              alt="Illustration de reconnaissance"
            />
          </div>
        </div>

        {/* Assets */}
        <MSectionAssets
          title="Des avantages personnalisés pour vos salariés"
          assets={[
            {
              title: 'Cagnotte culture, loisirs et sport',
              illustration: illustrationKey,
            },
            {
              title: 'Cartes cadeaux multi-enseignes',
              illustration: illustrationStar,
            },
            {
              title: 'Billetterie instantanée',
              illustration: illustrationTimer,
            },
            {
              title: 'Catalogue de réductions pour les salariés',
              illustration: illustrationRedGift,
            },
            {
              title: 'Service client disponible & réactif',
              illustration: illustrationBuoy,
            },
          ]}
        />

        {/* Features */}
        <Features
          features={[
            {
              content: [
                {
                  subtitle: lg.pages.solutionRH.feature_1.subtitle_1,
                  description: lg.pages.solutionRH.feature_1.description_1,
                },
                {
                  subtitle: lg.pages.solutionRH.feature_1.subtitle_2,
                  description: lg.pages.solutionRH.feature_1.description_2,
                },
              ],
              illustration: illustrationSubvention,
              slug: 'subvention',
              title: lg.pages.solutionRH.feature_1.title,
            },
            {
              content: [
                {
                  subtitle: lg.pages.solutionRH.feature_2.subtitle_1,
                  description: lg.pages.solutionRH.feature_2.description_1,
                },
                {
                  subtitle: lg.pages.solutionRH.feature_2.subtitle_2,
                  description: lg.pages.solutionRH.feature_2.description_2,
                },
              ],
              illustration: illustrationAvantages,
              slug: 'autres-avantages',
              title: lg.pages.solutionRH.feature_2.title,
            },
            {
              content: [
                {
                  subtitle: lg.pages.solutionRH.feature_3.subtitle_1,
                  description: lg.pages.solutionRH.feature_3.description_1,
                },
                {
                  subtitle: lg.pages.solutionRH.feature_3.subtitle_2,
                  description: lg.pages.solutionRH.feature_3.description_2,
                },
              ],
              illustration: illustrationCommunication,
              slug: 'communication',
              title: lg.pages.solutionRH.feature_3.title,
            },
            {
              content: [
                {
                  subtitle: lg.pages.solutionRH.feature_4.subtitle_1,
                  description: lg.pages.solutionRH.feature_4.description_1,
                },
                {
                  subtitle: lg.pages.solutionRH.feature_4.subtitle_2,
                  description: lg.pages.solutionRH.feature_4.description_2,
                },
              ],
              illustration: illustrationApprecieDesSalaries,
              slug: 'apprecie-des-salaries',
              title: lg.pages.solutionRH.feature_4.title,
            },
          ]}
        />

        {/* Formulaire de contact */}
        <DemoContactForm />

        {/* Témoignages */}
        <div className={styles.clientsSection}>
          <MSectionClient
            titleStyle={styles.clientsSectionTitle}
            title="Comme eux rejoignez le mouvement"
            numberOfClients={6}
          />
        </div>

        <InlineTestimonialSection />
      </Layout>
    )
  }
}

export default SolutionsRHDirigeants

export const pageQuery = graphql`
  query SolutionsRHDirigeantsQuery {
    solutionIllustration: file(
      relativePath: { eq: "solutions-rh-dirigeants.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2148, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    illustrationSubvention: file(
      relativePath: { eq: "nos-services/subvention-sport.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2148, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    illustrationAvantages: file(
      relativePath: { eq: "nos-services/autres-avantages.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2148, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    illustrationCommunication: file(
      relativePath: { eq: "nos-services/communication-sondage.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2148, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    illustrationApprecieDesSalaries: file(
      relativePath: { eq: "nos-services/apprecie-des-salaries.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2148, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    illustrationKey: file(relativePath: { eq: "bannerVisuals/key.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    illustrationRedGift: file(
      relativePath: { eq: "bannerVisuals/red-gift.png" }
    ) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    illustrationBuoy: file(relativePath: { eq: "bannerVisuals/buoy.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    illustrationStar: file(relativePath: { eq: "bannerVisuals/star.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    illustrationTimer: file(relativePath: { eq: "bannerVisuals/timer.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
