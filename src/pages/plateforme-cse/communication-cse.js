import React from 'react'
import { get } from 'lodash'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import styles from './communication-cse.module.scss'

import AButtonPrimaryEnabled from '../../components/button'
import lg from '../../../static/locales/fr/translation.json'
import Layout from '../../components/layout'
import MSectionClient from '../../components/mSectionClient'
import InlineTestimonialSection from '../../components/inline-testimonial-section'
import Features from '../../components/features'
import MSectionAssets from '../../components/mSectionAssets'
import SEO from '../../components/seo'
import DemoContactForm from '../../components/demo-contact-form'

class CommunicationCSE extends React.Component {
  render() {
    const illustrationBirthdayCake = get(
      this,
      'props.data.illustrationBirthdayCake.childImageSharp.fluid'
    )

    const illustrationStarFolder = get(
      this,
      'props.data.illustrationStarFolder.childImageSharp.fluid'
    )

    const illustrationMegaphone = get(
      this,
      'props.data.illustrationMegaphone.childImageSharp.fluid'
    )

    const illustrationPiggyBank = get(
      this,
      'props.data.illustrationPiggyBank.childImageSharp.fluid'
    )

    const illustrationUser = get(
      this,
      'props.data.illustrationUser.childImageSharp.fluid'
    )

    // Features
    const communicationIllustration = get(
      this,
      'props.data.communicationIllustration.childImageSharp.fluid'
    )

    const filActuIllustration = get(
      this,
      'props.data.filActuIllustration.childImageSharp.fluid'
    )

    const trombiIllustration = get(
      this,
      'props.data.trombiIllustration.childImageSharp.fluid'
    )

    const likesIllustration = get(
      this,
      'props.data.likesIllustration.childImageSharp.fluid'
    )

    const eventIllustration = get(
      this,
      'props.data.eventIllustration.childImageSharp.fluid'
    )

    return (
      <Layout location={this.props.location}>
        <SEO
          title={lg.pages.communicationCSE.title}
          pathname={this.props.location.pathname}
          description={lg.pages.communicationCSE.description}
        />

        <div className={styles.heroSection}>
          <div className={styles.content}>
            <h1>{lg.pages.communicationCSE.title}</h1>
            <p>{lg.pages.communicationCSE.description}</p>
            <AButtonPrimaryEnabled to="#demo-contact">
              {lg.pages.neobanque.action}
            </AButtonPrimaryEnabled>
          </div>
          <div className={styles.rightPane}>
            <Img
              fluid={communicationIllustration}
              className={styles.image}
              alt="Illustration de reconnaissance"
            />
          </div>
        </div>

        {/* Assets */}
        <MSectionAssets
          title="Digitalisez votre communication CSE"
          assets={[
            {
              title: 'Proximité salarié et CSE renforcée',
              illustration: illustrationUser,
            },
            {
              title: 'Partage des PV de réunion',
              illustration: illustrationStarFolder,
            },
            {
              title: 'Communication digitale',
              illustration: illustrationMegaphone,
            },
            {
              title: 'Gestion des évènements',
              illustration: illustrationBirthdayCake,
            },
            {
              title: 'Récolte des cotisations évènements',
              illustration: illustrationPiggyBank,
            },
          ]}
        />

        {/* Features */}
        <Features
          features={[
            {
              content: [
                {
                  subtitle: lg.pages.communicationCSE.feature_1.subtitle_1,
                  description:
                    lg.pages.communicationCSE.feature_1.description_1,
                },
                {
                  subtitle: lg.pages.communicationCSE.feature_1.subtitle_2,
                  description:
                    lg.pages.communicationCSE.feature_1.description_2,
                },
              ],
              illustration: likesIllustration,
              slug: 'Communiquer avec les salariés',
              title: lg.pages.communicationCSE.feature_1.title,
            },
            {
              content: [
                {
                  subtitle: lg.pages.communicationCSE.feature_2.subtitle_1,
                  description:
                    lg.pages.communicationCSE.feature_2.description_1,
                },
                {
                  subtitle: lg.pages.communicationCSE.feature_2.subtitle_2,
                  description:
                    lg.pages.communicationCSE.feature_2.description_2,
                },
              ],
              illustration: eventIllustration,
              slug: 'Évènement yoga',
              title: lg.pages.communicationCSE.feature_2.title,
            },
            {
              content: [
                {
                  subtitle: lg.pages.communicationCSE.feature_3.subtitle_1,
                  description:
                    lg.pages.communicationCSE.feature_3.description_1,
                },
                {
                  subtitle: lg.pages.communicationCSE.feature_3.subtitle_2,
                  description:
                    lg.pages.communicationCSE.feature_3.description_2,
                },
              ],
              illustration: filActuIllustration,
              slug: 'fil actualites',
              title: lg.pages.communicationCSE.feature_3.title,
            },
            {
              content: [
                {
                  subtitle: lg.pages.communicationCSE.feature_4.subtitle_1,
                  description:
                    lg.pages.communicationCSE.feature_4.description_1,
                },
                {
                  subtitle: lg.pages.communicationCSE.feature_4.subtitle_2,
                  description:
                    lg.pages.communicationCSE.feature_4.description_2,
                },
              ],
              illustration: trombiIllustration,
              slug: 'fichiers trombinoscope',
              title: lg.pages.communicationCSE.feature_4.title,
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

        {/* FAQ */}
        <div className={styles.faq}>
          <h2 class="h3">{lg.pages.communicationCSE.faq.title}</h2>
          <div className={styles.questionSection}>
            <div className={styles.section}>
              {lg.pages.communicationCSE.faq.questions.map(
                (question, index) => (
                  <div key={index} className={styles.section}>
                    <div class={styles.faq__title}>{question.title}</div>
                    {question.description.map((description, index) => (
                      <p
                        key={index}
                        dangerouslySetInnerHTML={{
                          __html: description,
                        }}
                      />
                    ))}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default CommunicationCSE

export const pageQuery = graphql`
  query CommunicationCSEQuery {
    communicationIllustration: file(
      relativePath: { eq: "nos-services/communication-hero.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2148, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    trombiIllustration: file(
      relativePath: { eq: "nos-services/fichiers-trombi.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2148, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    filActuIllustration: file(
      relativePath: { eq: "nos-services/fil-actus.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2148, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    likesIllustration: file(
      relativePath: { eq: "nos-services/communication-salaries.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2148, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    eventIllustration: file(relativePath: { eq: "nos-services/events.png" }) {
      childImageSharp {
        fluid(maxWidth: 2148, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
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
    illustrationBirthdayCake: file(
      relativePath: { eq: "bannerVisuals/birthday-cake.png" }
    ) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    illustrationStarFolder: file(
      relativePath: { eq: "bannerVisuals/star-folder.png" }
    ) {
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
    illustrationPiggyBank: file(
      relativePath: { eq: "bannerVisuals/piggy-bank.png" }
    ) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
