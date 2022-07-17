import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { get } from 'lodash'

import Layout from '../../components/layout'
import AButtonPrimaryEnabled from '../../components/button'
import styles from './avantages-salaries.module.scss'

import lg from '../../../static/locales/fr/translation.json'
import MSectionClient from '../../components/mSectionClient'
import InlineTestimonialSection from '../../components/inline-testimonial-section'
import CallToActionSection from '../../components/call-to-action-section'
import Features from '../../components/features'
import MSectionAssets from '../../components/mSectionAssets'
import SEO from '../../components/seo'
import DemoContactForm from '../../components/demo-contact-form'

class Avantages extends React.Component {
  render() {
    // Features
    const benefitsIllustration = get(
      this,
      'props.data.benefitsIllustration.childImageSharp.fluid'
    )

    const leeshopIllustration = get(
      this,
      'props.data.leeshopIllustration.childImageSharp.fluid'
    )

    const illustrationSubsidy = get(
      this,
      'props.data.illustrationSubsidy.childImageSharp.fluid'
    )

    const illustrationGiftcard = get(
      this,
      'props.data.illustrationGiftcard.childImageSharp.fluid'
    )

    const illustrationAccounting = get(
      this,
      'props.data.illustrationAccounting.childImageSharp.fluid'
    )

    // Assets
    const illustrationBuoy = get(
      this,
      'props.data.illustrationBuoy.childImageSharp.fluid'
    )
    const illustrationStar = get(
      this,
      'props.data.illustrationStar.childImageSharp.fluid'
    )
    const illustrationKey = get(
      this,
      'props.data.illustrationKey.childImageSharp.fluid'
    )
    const illustrationBlueClock = get(
      this,
      'props.data.illustrationBlueClock.childImageSharp.fluid'
    )
    const illustrationRedGift = get(
      this,
      'props.data.illustrationRedGift.childImageSharp.fluid'
    )

    return (
      <Layout location={this.props.location}>
        <SEO
          title={lg.pages.avantages.title}
          pathname={this.props.location.pathname}
          description={lg.pages.avantages.description}
        />

        <div className={styles.heroSection}>
          <div className={styles.content}>
            <h1>{lg.pages.avantages.title}</h1>
            <p>{lg.pages.avantages.description}</p>
            <AButtonPrimaryEnabled to="#demo-contact">
              {lg.pages.avantages.action}
            </AButtonPrimaryEnabled>
          </div>
          <div className={styles.rightPane}>
            <Img
              fluid={benefitsIllustration}
              className={styles.image}
              alt="Illustration de reconnaissance"
            />
          </div>
        </div>

        {/* Assets */}
        <MSectionAssets
          title="Des avantages personnalisés pour vos bénéficiaires"
          assets={[
            {
              title: 'Gestion de bout en bout du remboursement sur facture',
              illustration: illustrationKey,
            },
            {
              title: 'Cartes cadeaux multi-enseignes',
              illustration: illustrationStar,
            },
            {
              title: 'Billetterie instantanée',
              illustration: illustrationBlueClock,
            },
            {
              title: 'Catalogue de réductions pour les salariés',
              illustration: illustrationRedGift,
            },
            {
              title: 'Service client aux petits soins',
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
                  subtitle: lg.pages.avantages.feature_1.subtitle_1,
                  description: lg.pages.avantages.feature_1.description_1,
                },
                {
                  subtitle: lg.pages.avantages.feature_1.subtitle_2,
                  description: lg.pages.avantages.feature_1.description_2,
                },
              ],
              illustration: leeshopIllustration,
              slug: 'Réductions de la marketplace',
              title: lg.pages.avantages.feature_1.title,
            },
            {
              content: [
                {
                  subtitle: lg.pages.avantages.feature_2.subtitle_1,
                  description: lg.pages.avantages.feature_2.description_1,
                },
                {
                  subtitle: lg.pages.avantages.feature_2.subtitle_2,
                  description: lg.pages.avantages.feature_2.description_2,
                },
              ],
              illustration: illustrationSubsidy,
              slug: 'Avantage subvention',
              title: lg.pages.avantages.feature_2.title,
            },
            {
              content: [
                {
                  subtitle: lg.pages.avantages.feature_3.subtitle_1,
                  description: lg.pages.avantages.feature_3.description_1,
                },
                {
                  subtitle: lg.pages.avantages.feature_3.subtitle_2,
                  description: lg.pages.avantages.feature_3.description_2,
                },
              ],
              illustration: illustrationGiftcard,
              slug: 'Avantage cartes cadeaux',
              title: lg.pages.avantages.feature_3.title,
            },
            {
              content: [
                {
                  subtitle: lg.pages.avantages.feature_4.subtitle_1,
                  description: lg.pages.avantages.feature_4.description_1,
                },
                {
                  subtitle: lg.pages.avantages.feature_4.subtitle_2,
                  description: lg.pages.avantages.feature_4.description_2,
                },
              ],
              illustration: illustrationAccounting,
              slug: 'Gestion du budget',
              title: lg.pages.avantages.feature_4.title,
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
          <h2 class="h3">{lg.pages.avantages.faq.title}</h2>

          <div className={styles.questionSection}>
            <div className={styles.section}>
              <div class={styles.faq__title}>
                {lg.pages.avantages.faq.question_1.title}
              </div>
              <p>
                {lg.pages.avantages.faq.question_1.descriptions.map(
                  (description, i) => (
                    <p key={i}>
                      {description.text}
                      {description.link && (
                        <a
                          href="https://www.leeto.co/guide-cse-avantages-salaries-et-cse/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {description.link}
                        </a>
                      )}
                    </p>
                  )
                )}
              </p>
            </div>

            <div className={styles.section}>
              <div class={styles.faq__title}>
                {lg.pages.avantages.faq.question_2.title}
              </div>
              <p>{lg.pages.avantages.faq.question_2.description_1}</p>
              <ul>
                {lg.pages.avantages.faq.question_2.reasons.map((reason, i) => (
                  <li key={i}>{reason}</li>
                ))}
              </ul>

              <span
                dangerouslySetInnerHTML={{
                  __html: lg.pages.avantages.faq.question_2.description_2,
                }}
              />
              <a
                href="https://www.leeto.co/blog/les-3-benefices-directs-des-avantages-salaries/"
                target="_blank"
                rel="noopener noreferrer"
                dangerouslySetInnerHTML={{
                  __html: lg.pages.avantages.faq.question_2.link,
                }}
              />
            </div>

            <div className={styles.section}>
              <div class={styles.faq__title}>
                {lg.pages.avantages.faq.question_3.title}
              </div>
              <p>
                {lg.pages.avantages.faq.question_3.descriptions.map(
                  (description, i) => (
                    <p key={i}>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: description.text,
                        }}
                      />
                      {description.link && (
                        <a
                          href="https://www.leeto.co/blog/cartes-cadeaux-multi-enseignes/"
                          target="_blank"
                          rel="noopener noreferrer"
                          dangerouslySetInnerHTML={{
                            __html: description.link,
                          }}
                        />
                      )}
                    </p>
                  )
                )}
              </p>
            </div>
          </div>
        </div>

        <CallToActionSection />
      </Layout>
    )
  }
}

export default Avantages

export const pageQuery = graphql`
  query AvantagesQuery {
    benefitsIllustration: file(
      relativePath: { eq: "illustration-3d-benefits.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2148, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    leeshopIllustration: file(relativePath: { eq: "offres-leeshop.png" }) {
      childImageSharp {
        fluid(maxWidth: 2148, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    illustrationSubsidy: file(relativePath: { eq: "benefits-subvention.png" }) {
      childImageSharp {
        fluid(maxWidth: 2148, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    illustrationGiftcard: file(relativePath: { eq: "benefits-giftcard.png" }) {
      childImageSharp {
        fluid(maxWidth: 2148, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    illustrationAccounting: file(relativePath: { eq: "accounting.png" }) {
      childImageSharp {
        fluid(maxWidth: 2148, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
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
    illustrationKey: file(relativePath: { eq: "bannerVisuals/key.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    illustrationBlueClock: file(
      relativePath: { eq: "bannerVisuals/blue-clock.png" }
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
  }
`
