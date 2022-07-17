import React from 'react'
import { get } from 'lodash'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import styles from './comptabilite-cse.module.scss'

import AButtonPrimaryEnabled from '../../components/button'
import lg from '../../../static/locales/fr/translation.json'
import Layout from '../../components/layout'
import MSectionClient from '../../components/mSectionClient'
import InlineTestimonialSection from '../../components/inline-testimonial-section'
import Features from '../../components/features'
import MSectionAssets from '../../components/mSectionAssets'
import SEO from '../../components/seo'
import DemoContactForm from '../../components/demo-contact-form'

class Comptabilite extends React.Component {
  render() {
    const illustrationComptePro = get(
      this,
      'props.data.illustrationComptePro.childImageSharp.fluid'
    )

    const comptabiliteIllustration = get(
      this,
      'props.data.comptabiliteIllustration.childImageSharp.fluid'
    )

    const accompagnementIllustration = get(
      this,
      'props.data.accompagnementIllustration.childImageSharp.fluid'
    )

    const outilComptaIllustration = get(
      this,
      'props.data.outilComptaIllustration.childImageSharp.fluid'
    )

    // Assets
    const illustrationTarget = get(
      this,
      'props.data.illustrationTarget.childImageSharp.fluid'
    )

    const illustrationStar = get(
      this,
      'props.data.illustrationStar.childImageSharp.fluid'
    )

    const illustrationClayForm = get(
      this,
      'props.data.illustrationClayForm.childImageSharp.fluid'
    )

    const illustrationSwitch = get(
      this,
      'props.data.illustrationSwitch.childImageSharp.fluid'
    )

    const illustrationFolder = get(
      this,
      'props.data.illustrationFolder.childImageSharp.fluid'
    )

    return (
      <Layout location={this.props.location}>
        <SEO
          title={lg.pages.comptabilite.title}
          pathname={this.props.location.pathname}
          description={lg.pages.comptabilite.description}
        />

        <div className={styles.heroSection}>
          <div className={styles.content}>
            <h1>{lg.pages.comptabilite.title}</h1>
            <p>{lg.pages.comptabilite.description}</p>
            <AButtonPrimaryEnabled to="#demo-contact">
              {lg.pages.neobanque.action}
            </AButtonPrimaryEnabled>
          </div>
          <div className={styles.rightPane}>
            <Img
              fluid={comptabiliteIllustration}
              className={styles.image}
              alt="module comptabilite"
            />
          </div>
        </div>

        {/* Assets */}

        <MSectionAssets
          title="Votre comptabilité CSE n’a jamais été aussi simple"
          assets={[
            {
              title: 'Deux budgets distincts : AEP et ASC',
              illustration: illustrationTarget,
            },
            {
              title: 'Catégorisation des transactions',
              illustration: illustrationStar,
            },
            {
              title: 'Centralisation de toutes vos informations comptables',
              illustration: illustrationClayForm,
            },
            {
              title: "Correspondance comptable avec les normes de l'ANC",
              illustration: illustrationSwitch,
            },
            {
              title: 'Génération automatique de vos documents comptables',
              illustration: illustrationFolder,
            },
          ]}
        />

        {/* Features */}
        <Features
          features={[
            {
              content: [
                {
                  subtitle: lg.pages.comptabilite.feature_1.subtitle_1,
                  description: lg.pages.comptabilite.feature_1.description_1,
                },
                {
                  subtitle: lg.pages.comptabilite.feature_1.subtitle_2,
                  description: lg.pages.comptabilite.feature_1.description_2,
                },
              ],
              illustration: outilComptaIllustration,
              slug: 'outil comptabilite',
              title: lg.pages.comptabilite.feature_1.title,
            },
            {
              content: [
                {
                  subtitle: lg.pages.comptabilite.feature_2.subtitle_1,
                  description: lg.pages.comptabilite.feature_2.description_1,
                },
                {
                  subtitle: lg.pages.comptabilite.feature_2.subtitle_2,
                  description: lg.pages.comptabilite.feature_2.description_2,
                },
              ],
              illustration: accompagnementIllustration,
              slug: 'Une équipe réactive',
              title: lg.pages.comptabilite.feature_2.title,
            },
            {
              content: [
                {
                  subtitle: lg.pages.comptabilite.feature_3.subtitle_1,
                  description: lg.pages.comptabilite.feature_3.description_1,
                },
                {
                  subtitle: lg.pages.comptabilite.feature_3.subtitle_2,
                  description: lg.pages.comptabilite.feature_3.description_2,
                },
              ],
              illustration: illustrationComptePro,
              slug: 'Service à votre écoute',
              title: lg.pages.comptabilite.feature_3.title,
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

export default Comptabilite

export const pageQuery = graphql`
  query ComptabiliteQuery {
    illustrationComptePro: file(
      relativePath: { eq: "nos-services/compte-pro-cse-correspondances.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2148, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    comptabiliteIllustration: file(
      relativePath: { eq: "nos-services/module-comptabilite.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2148, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    accompagnementIllustration: file(
      relativePath: { eq: "nos-services/accompagnement-quotidien.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2148, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    outilComptaIllustration: file(
      relativePath: { eq: "nos-services/outil-compta.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2148, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }

    illustrationTarget: file(relativePath: { eq: "bannerVisuals/target.png" }) {
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
    illustrationClayForm: file(
      relativePath: { eq: "bannerVisuals/clay-form.png" }
    ) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    illustrationSwitch: file(relativePath: { eq: "bannerVisuals/switch.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    illustrationFolder: file(relativePath: { eq: "bannerVisuals/folder.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
