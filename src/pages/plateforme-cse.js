import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import styles from './plateforme-cse.module.scss'
import AButtonPrimaryEnabled from '../components/button'

import SEO from '../components/seo'
import Features from '../components/features'
import lg from '../../static/locales/fr/translation.json'
import MSectionAssets from '../components/mSectionAssets'
import DemoContactForm from '../components/demo-contact-form'
import InlineTestimonialSection from '../components/inline-testimonial-section'

class PrateformCSE extends React.Component {
  render() {
    const illustrationTitre = get(
      this,
      'props.data.illustrationToutEnUn.childImageSharp.fluid'
    )

    const illustrationEventailAvantages = get(
      this,
      'props.data.illustrationEventailAvantages.childImageSharp.fluid'
    )

    const illustrationOutilsInterconnectes = get(
      this,
      'props.data.illustrationOutilsInterconnectes.childImageSharp.fluid'
    )

    const illustrationProximiteCSE = get(
      this,
      'props.data.illustrationProximiteCSE.childImageSharp.fluid'
    )

    const illustrationAccompagnement = get(
      this,
      'props.data.illustrationAccompagnement.childImageSharp.fluid'
    )

    const illustrationApprecieDesSalaries = get(
      this,
      'props.data.illustrationApprecieDesSalaries.childImageSharp.fluid'
    )
    // Assets
    const illustrationCardWallet = get(
      this,
      'props.data.illustrationCardWallet.childImageSharp.fluid'
    )
    const illustrationRedGift = get(
      this,
      'props.data.illustrationRedGift.childImageSharp.fluid'
    )
    const illustrationBuoy = get(
      this,
      'props.data.illustrationBuoy.childImageSharp.fluid'
    )

    const illustrationMegaphone = get(
      this,
      'props.data.illustrationMegaphone.childImageSharp.fluid'
    )

    const illustrationClayForm = get(
      this,
      'props.data.illustrationClayForm.childImageSharp.fluid'
    )

    const illustrationUser = get(
      this,
      'props.data.illustrationUser.childImageSharp.fluid'
    )

    return (
      <Layout location={this.props.location}>
        <SEO
          pathname={this.props.location.pathname}
          title="Plateforme CSE - Gestion CSE - Logiciel CSE"
          description="En quoi consiste une plateforme pour CSE ? Quels sont les avantages d'une plateforme CSE ? Découvrez tous les services proposés par Leeto, expert en CSE"
        />

        <div className={styles.heroSection}>
          <div className={styles.content}>
            <h1>{lg.pages.plateformeCSE.title}</h1>
            <p>{lg.pages.plateformeCSE.description}</p>
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
          title="Le tout-en-un pour votre CSE"
          assets={[
            {
              title: 'Compte pro CSE en ligne et suivi de trésorerie ',
              illustration: illustrationCardWallet,
            },
            {
              title: 'Avantages salariés pour vos bénéficiaires',
              illustration: illustrationRedGift,
            },
            {
              title: 'Communication aux salariés et évènements',
              illustration: illustrationMegaphone,
            },
            {
              title: 'Logiciel de comptabilité simplifiée',
              illustration: illustrationClayForm,
            },
            {
              title: 'Assistance juridique pour le CSE & les salariés',
              illustration: illustrationBuoy,
            },
            {
              title: 'Communautés d’élus et d’experts CSE',
              illustration: illustrationUser,
            },
          ]}
        />

        <Features
          features={[
            {
              content: [
                {
                  subtitle: lg.pages.plateformeCSE.feature_1.subtitle_1,
                  description: lg.pages.plateformeCSE.feature_1.description_1,
                },
                {
                  subtitle: lg.pages.plateformeCSE.feature_1.subtitle_2,
                  description: lg.pages.plateformeCSE.feature_1.description_2,
                },
              ],
              illustration: illustrationEventailAvantages,
              slug: 'eventail-avantages',
              title: lg.pages.plateformeCSE.feature_1.title,
            },
            {
              content: [
                {
                  subtitle: lg.pages.plateformeCSE.feature_2.subtitle_1,
                  description: lg.pages.plateformeCSE.feature_2.description_1,
                },
                {
                  subtitle: lg.pages.plateformeCSE.feature_2.subtitle_2,
                  description: lg.pages.plateformeCSE.feature_2.description_2,
                },
              ],
              illustration: illustrationOutilsInterconnectes,
              slug: 'outils-interconnectes',
              title: lg.pages.plateformeCSE.feature_2.title,
            },
            {
              content: [
                {
                  subtitle: lg.pages.plateformeCSE.feature_3.subtitle_1,
                  description: lg.pages.plateformeCSE.feature_3.description_1,
                },
                {
                  subtitle: lg.pages.plateformeCSE.feature_3.subtitle_2,
                  description: lg.pages.plateformeCSE.feature_3.description_2,
                },
              ],
              illustration: illustrationProximiteCSE,
              slug: 'proximite-cse-salarie',
              title: lg.pages.plateformeCSE.feature_3.title,
            },
            {
              content: [
                {
                  subtitle: lg.pages.plateformeCSE.feature_4.subtitle_1,
                  description: lg.pages.plateformeCSE.feature_4.description_1,
                },
                {
                  subtitle: lg.pages.plateformeCSE.feature_4.subtitle_2,
                  description: lg.pages.plateformeCSE.feature_4.description_2,
                },
              ],
              illustration: illustrationAccompagnement,
              slug: 'accompagnement',
              title: lg.pages.plateformeCSE.feature_4.title,
            },
            {
              content: [
                {
                  subtitle: lg.pages.plateformeCSE.feature_5.subtitle_1,
                  description: lg.pages.plateformeCSE.feature_5.description_1,
                },
                {
                  subtitle: lg.pages.plateformeCSE.feature_5.subtitle_2,
                  description: lg.pages.plateformeCSE.feature_5.description_2,
                },
              ],
              illustration: illustrationApprecieDesSalaries,
              slug: 'apprecie-des-salaries',
              title: lg.pages.plateformeCSE.feature_5.title,
            },
          ]}
        />

        {/* Formulaire de contact */}
        <DemoContactForm />

        <div style={{ marginBottom: '48px' }} />

        <InlineTestimonialSection />
      </Layout>
    )
  }
}

export default PrateformCSE

export const pageQuery = graphql`
  query PrateformCSEQueryPage {
    illustrationToutEnUn: file(
      relativePath: { eq: "nos-services/tout-en-un-3.png" }
    ) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    illustrationEventailAvantages: file(
      relativePath: { eq: "nos-services/eventail-avantages.png" }
    ) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    illustrationOutilsInterconnectes: file(
      relativePath: { eq: "nos-services/outils-interconnectes.png" }
    ) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    illustrationProximiteCSE: file(
      relativePath: { eq: "nos-services/proximite-cse-salaries.png" }
    ) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    illustrationAccompagnement: file(
      relativePath: { eq: "nos-services/accompagnement.png" }
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

    illustrationCardWallet: file(
      relativePath: { eq: "bannerVisuals/card-wallet.png" }
    ) {
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
    illustrationMegaphone: file(
      relativePath: { eq: "bannerVisuals/megaphone.png" }
    ) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    illustrationClayForm: file(
      relativePath: { eq: "bannerVisuals/clay-form.png" }
    ) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    illustrationUser: file(relativePath: { eq: "bannerVisuals/user.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
