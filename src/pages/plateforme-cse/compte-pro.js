import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { get } from 'lodash'

import Layout from '../../components/layout'
import AButtonPrimaryEnabled from '../../components/button'
import styles from './compte-pro.module.scss'

import lg from '../../../static/locales/fr/translation.json'
import MSectionClient from '../../components/mSectionClient'
import InlineTestimonialSection from '../../components/inline-testimonial-section'
import CallToActionSection from '../../components/call-to-action-section'
import Features from '../../components/features'
import MSectionAssets from '../../components/mSectionAssets'
import SEO from '../../components/seo'

class NeoBanque extends React.Component {
  componentDidMount() {
    const script = document.createElement('script')
    script.src = 'https://js.hsforms.net/forms/v2.js'
    document.body.appendChild(script)

    script.addEventListener('load', () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: 'eu1',
          portalId: '25191803',
          formId: '839ee7be-03e7-479d-a684-531e98e41114',
          target: '#hubspotForm',
        })
      }
    })
  }

  render() {
    // Features
    const illustrationSecurite = get(
      this,
      'props.data.illustrationSecurite.childImageSharp.fluid'
    )

    const illustrationComptePro = get(
      this,
      'props.data.illustrationComptePro.childImageSharp.fluid'
    )

    const illustrationBudget = get(
      this,
      'props.data.illustrationBudget.childImageSharp.fluid'
    )

    const illustrationCompteProCSE = get(
      this,
      'props.data.illustrationCompteProCSE.childImageSharp.fluid'
    )

    const illustrationServices = get(
      this,
      'props.data.illustrationServices.childImageSharp.fluid'
    )

    // Assets
    const illustrationBuoy = get(
      this,
      'props.data.illustrationBuoy.childImageSharp.fluid'
    )
    const illustrationCardWallet = get(
      this,
      'props.data.illustrationCardWallet.childImageSharp.fluid'
    )
    const illustrationKey = get(
      this,
      'props.data.illustrationKey.childImageSharp.fluid'
    )
    const illustrationStar = get(
      this,
      'props.data.illustrationStar.childImageSharp.fluid'
    )
    const illustrationColumnChart = get(
      this,
      'props.data.illustrationColumnChart.childImageSharp.fluid'
    )

    return (
      <Layout location={this.props.location}>
        <SEO
          title={lg.pages.neobanque.title}
          pathname={this.props.location.pathname}
          description={lg.pages.neobanque.description}
        />

        <div className={styles.heroSection}>
          <div className={styles.content}>
            <h1>{lg.pages.neobanque.title}</h1>
            <p>{lg.pages.neobanque.description}</p>

            <div id="hubspotForm" />
          </div>
          <div className={styles.rightPane}>
            <Img
              fluid={illustrationComptePro}
              className={styles.image}
              alt="Illustration de reconnaissance"
            />
          </div>
        </div>

        {/* Assets */}
        <MSectionAssets
          title={lg.components.bankSection.title}
          assets={[
            {
              title: lg.components.bankSection.onlineAccount,
              illustration: illustrationKey,
            },
            {
              title: lg.components.bankSection.marketplace,
              illustration: illustrationCardWallet,
            },
            {
              title: lg.components.bankSection.customerService,
              illustration: illustrationBuoy,
            },
            {
              title: lg.components.bankSection.accounting,
              illustration: illustrationColumnChart,
            },
            {
              title: lg.components.bankSection.subsidies,
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
                  subtitle: lg.pages.neobanque.feature_1.subtitle_1,
                  description: lg.pages.neobanque.feature_1.description_1,
                },
                {
                  subtitle: lg.pages.neobanque.feature_1.subtitle_2,
                  description: lg.pages.neobanque.feature_1.description_2,
                },
              ],
              illustration: illustrationCompteProCSE,
              slug: 'Compte bancaire ASC',
              title: lg.pages.neobanque.feature_1.title,
            },
            {
              content: [
                {
                  subtitle: lg.pages.neobanque.feature_2.subtitle_1,
                  description: lg.pages.neobanque.feature_2.description_1,
                },
                {
                  subtitle: lg.pages.neobanque.feature_2.subtitle_2,
                  description: lg.pages.neobanque.feature_2.description_2,
                },
              ],
              illustration: illustrationServices,
              slug: 'Deux comptes intégrés',
              title: lg.pages.neobanque.feature_2.title,
            },
            {
              content: [
                {
                  subtitle: lg.pages.neobanque.feature_3.subtitle_1,
                  description: lg.pages.neobanque.feature_3.description_1,
                },
                {
                  subtitle: lg.pages.neobanque.feature_3.subtitle_2,
                  description: lg.pages.neobanque.feature_3.description_2,
                },
              ],
              illustration: illustrationBudget,
              slug: 'Gestion du budget',
              title: lg.pages.neobanque.feature_3.title,
            },
            {
              content: [
                {
                  subtitle: lg.pages.neobanque.feature_4.subtitle_1,
                  description: lg.pages.neobanque.feature_4.description_1,
                },
                {
                  subtitle: lg.pages.neobanque.feature_4.subtitle_2,
                  description: lg.pages.neobanque.feature_4.description_2,
                },
              ],
              illustration: illustrationSecurite,
              slug: 'Une équipe réactive',
              title: lg.pages.neobanque.feature_4.title,
            },
          ]}
        />

        {/* Témoignages */}
        <div className={styles.clientsSection}>
          <MSectionClient
            titleStyle={styles.clientsSectionTitle}
            title="Comme eux rejoignez le mouvement"
            numberOfClients={6}
          />
        </div>

        <InlineTestimonialSection />

        {/* Nos services */}
        <div className={styles.services}>
          <div className={styles.services__title}>
            {lg.pages.neobanque.services.title}
          </div>
          <p>{lg.pages.neobanque.services.description}</p>

          <div className={styles.wordCloud}>
            {lg.pages.neobanque.services.services.map((service, index) => (
              <div className={styles.wordCloud__subtitle} key={index}>
                {service}
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className={styles.faq}>
          <h2 class="h3">{lg.pages.neobanque.faq.title}</h2>

          <div className={styles.questionSection}>
            <div className={styles.section}>
              <div class={styles.faq__title}>
                {lg.pages.neobanque.faq.whyLeeto.title}
              </div>
              <ul>
                {lg.pages.neobanque.faq.whyLeeto.reasons.map((reason, i) => (
                  <li key={i}>{reason}</li>
                ))}
              </ul>
              <span
                dangerouslySetInnerHTML={{
                  __html: lg.pages.neobanque.faq.whyLeeto.description,
                }}
              />
              <a
                href="https://www.leeto.co/blog/cse-banque-traditionnelle-vs-compte-pro-leeto/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {lg.pages.neobanque.faq.whyLeeto.link}
              </a>
            </div>

            <div className={styles.section}>
              <div class={styles.faq__title}>
                {lg.pages.neobanque.faq.who.title}{' '}
              </div>
              <p>
                {lg.pages.neobanque.faq.who.descriptions.map(
                  (description, i) => (
                    <p key={i}>
                      {description.text}
                      {description.link && (
                        <a
                          href="https://www.leeto.co/blog/cse-banque-traditionnelle-vs-compte-pro-leeto/"
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
                {lg.pages.neobanque.faq.bankAdmin.title}{' '}
              </div>
              <p>
                {lg.pages.neobanque.faq.bankAdmin.descriptions.map(
                  (description, i) => (
                    <p key={i}>
                      {description.text}
                      {description.link && (
                        <a
                          href="https://www.leeto.co/blog/role-tresorier-comite-entreprise-cse/"
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
              {lg.pages.neobanque.faq.questions.map((question, index) => (
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
            </div>
          </div>
        </div>

        <CallToActionSection />
      </Layout>
    )
  }
}

export default NeoBanque

export const pageQuery = graphql`
  query CompteProQuery {
    illustrationSecurite: file(
      relativePath: { eq: "nos-services/securite-transactions.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2148, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    illustrationComptePro: file(
      relativePath: { eq: "nos-services/compte-pro.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2148, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    illustrationCompteProCSE: file(
      relativePath: { eq: "nos-services/compte-pro-cse.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2148, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    illustrationServices: file(
      relativePath: { eq: "nos-services/services-besoins-cse.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2148, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    illustrationBudget: file(
      relativePath: { eq: "nos-services/budgetisation-comptabilite.png" }
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
    illustrationCardWallet: file(
      relativePath: { eq: "bannerVisuals/card-wallet.png" }
    ) {
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
    illustrationStar: file(relativePath: { eq: "bannerVisuals/star.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
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
  }
`
