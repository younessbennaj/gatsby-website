import React from 'react'
import { get } from 'lodash'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import styles from './experts-cse.module.scss'

import AButtonPrimaryEnabled from '../../components/button'
import lg from '../../../static/locales/fr/translation.json'
import Layout from '../../components/layout'
import MSectionClient from '../../components/mSectionClient'
import InlineTestimonialSection from '../../components/inline-testimonial-section'
import Features from '../../components/features'
import MSectionAssets from '../../components/mSectionAssets'
import SEO from '../../components/seo'
import DemoContactForm from '../../components/demo-contact-form'

class ExpertiseCSE extends React.Component {
  render() {
    const illustrationAccompagnement = get(
      this,
      'props.data.illustrationAccompagnement.childImageSharp.fluid'
    )

    const illustrationCustomSupport = get(
      this,
      'props.data.illustrationCustomSupport.childImageSharp.fluid'
    )

    const illustrationColumnChart = get(
      this,
      'props.data.illustrationColumnChart.childImageSharp.fluid'
    )

    const illustrationUser = get(
      this,
      'props.data.illustrationUser.childImageSharp.fluid'
    )

    const illustrationStar = get(
      this,
      'props.data.illustrationStar.childImageSharp.fluid'
    )

    const illustrationBuoy = get(
      this,
      'props.data.illustrationBuoy.childImageSharp.fluid'
    )

    const expertiseCSEIllustration = get(
      this,
      'props.data.expertiseCSEIllustration.childImageSharp.fluid'
    )

    const expertiseIllustration = get(
      this,
      'props.data.expertiseIllustration.childImageSharp.fluid'
    )

    const serviceIllustration = get(
      this,
      'props.data.serviceIllustration.childImageSharp.fluid'
    )

    return (
      <Layout location={this.props.location}>
        <SEO
          title={lg.pages.expertiseCSE.title}
          pathname={this.props.location.pathname}
          description={lg.pages.expertiseCSE.description}
        />

        <div className={styles.heroSection}>
          <div className={styles.content}>
            <h1>{lg.pages.expertiseCSE.title}</h1>
            <p>{lg.pages.expertiseCSE.description}</p>
            <AButtonPrimaryEnabled to="#demo-contact">
              {lg.pages.neobanque.action}
            </AButtonPrimaryEnabled>
          </div>
          <div className={styles.rightPane}>
            <Img
              fluid={expertiseCSEIllustration}
              className={styles.image}
              alt="Illustration de reconnaissance"
            />
          </div>
        </div>

        {/* Assets */}

        <MSectionAssets
          title="Des experts du CSE à votre service"
          assets={[
            {
              title: 'Accompagnement dédié par des experts CSE',
              illustration: illustrationUser,
            },
            {
              title: 'Assistance juridique pour le CSE & les salariés',
              illustration: illustrationBuoy,
            },
            {
              title: 'Communauté d’élus CSE',
              illustration: illustrationColumnChart,
            },
            {
              title: 'Réseau d’experts avec avis vérifiés',
              illustration: illustrationStar,
            },
          ]}
        />

        {/* Features */}
        <Features
          features={[
            {
              content: [
                {
                  subtitle: lg.pages.expertiseCSE.feature_4.subtitle_1,
                  description: lg.pages.expertiseCSE.feature_4.description_1,
                },
              ],
              illustration: illustrationAccompagnement,
              slug: 'Le meilleur expert',
              title: lg.pages.expertiseCSE.feature_4.title,
            },
            {
              content: [
                {
                  subtitle: lg.pages.expertiseCSE.feature_1.subtitle_1,
                  description: lg.pages.expertiseCSE.feature_1.description_1,
                },
              ],
              illustration: serviceIllustration,
              slug: 'Le meilleur expert',
              title: lg.pages.expertiseCSE.feature_1.title,
            },
            {
              content: [
                {
                  subtitle: lg.pages.expertiseCSE.feature_2.subtitle_1,
                  description: lg.pages.expertiseCSE.feature_2.description_1,
                },
                {
                  description: (
                    <a
                      href="https://go.leeto.co/communaute-cse"
                      target="_blank"
                      rel="noreferrer"
                    >
                      S'inscrire à la communauté
                    </a>
                  ),
                },
              ],
              illustration: expertiseIllustration,
              slug: 'Une équipe réactive',
              title: lg.pages.expertiseCSE.feature_2.title,
            },
            {
              content: [
                {
                  subtitle: lg.pages.expertiseCSE.feature_3.subtitle_1,
                  description: lg.pages.expertiseCSE.feature_3.description_1,
                },
                {
                  subtitle: lg.pages.expertiseCSE.feature_3.subtitle_2,
                  description: lg.pages.expertiseCSE.feature_3.description_2,
                },
              ],
              illustration: illustrationCustomSupport,
              slug: 'Service à votre écoute',
              title: lg.pages.expertiseCSE.feature_3.title,
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
          <h2 class="h3">{lg.pages.expertiseCSE.faq.title}</h2>
          <div className={styles.questionSection}>
            <div className={styles.section}>
              {lg.pages.expertiseCSE.faq.questions.map((question, index) => (
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
              ))}
              Visionnez ce webinar pour{' '}
              <a
                href="https://www.leeto.co/blog/questions-reponses-accompagnement-nouveau-cse/"
                target="_blank"
                rel="noopener noreferrer"
              >
                tout savoir sur l'accompagnement aux CSE et le recours aux
                experts
              </a>
              .
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default ExpertiseCSE

export const pageQuery = graphql`
  query ExpertiseCSEQuery {
    illustrationAccompagnement: file(
      relativePath: { eq: "nos-services/accompagnement.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2148, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    illustrationCustomSupport: file(
      relativePath: { eq: "support-illustration.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2148, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    expertiseCSEIllustration: file(
      relativePath: { eq: "nos-services/expertise-cse.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2148, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    expertiseIllustration: file(
      relativePath: { eq: "nos-services/expertise.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2148, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    serviceIllustration: file(
      relativePath: { eq: "nos-services/avis-verifies.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2148, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    illustrationColumnChart: file(
      relativePath: { eq: "bannerVisuals/column-chart.png" }
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
  }
`
