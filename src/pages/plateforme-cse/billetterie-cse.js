import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { get } from 'lodash'

import Layout from '../../components/layout'
import AButtonPrimaryEnabled from '../../components/button'
import styles from './billetterie-cse.module.scss'

import lg from '../../../static/locales/fr/translation.json'
import MSectionClient from '../../components/mSectionClient'
import InlineTestimonialSection from '../../components/inline-testimonial-section'
import CallToActionSection from '../../components/call-to-action-section'
import Features from '../../components/features'
import MSectionAssets from '../../components/mSectionAssets'
import SEO from '../../components/seo'
import DemoContactForm from '../../components/demo-contact-form'

class BilletterieCSE extends React.Component {
  render() {
    // Features
    const benefitsIllustration = get(
      this,
      'props.data.benefitsIllustration.childImageSharp.fluid'
    )

    const customerServiceIllustration = get(
      this,
      'props.data.customerServiceIllustration.childImageSharp.fluid'
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
            <h1>Votre billetterie CSE</h1>
            <p>
              Augmentez le pouvoir d???achat de vos b??n??ficiaires en leur donnant
              acc??s ?? des centaines d???offres de billetterie et d???offres
              exclusives n??goci??es sur leurs marques pr??f??r??es avec des
              r??ductions allant jusqu????? -75%.
            </p>
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
          title="La billetterie CSE 100% en ligne"
          assets={[
            {
              title: 'Un catalogue complet national et local',
              illustration: illustrationKey,
            },
            {
              title: 'Tous les univers de consommation',
              illustration: illustrationStar,
            },
            {
              title: 'Billetterie instantan??e',
              illustration: illustrationBlueClock,
            },
            {
              title: 'Des r??ductions exclusives jusqu????? -75%',
              illustration: illustrationRedGift,
            },
            {
              title: 'Service client disponible & r??actif',
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
                  subtitle: 'Toutes vos marques pr??f??r??es',
                  description:
                    'Un catalogue de centaines d???offres de billetterie, offres n??goci??es et cartes cadeaux sur tous vos univers de consommation (culture, voyages, pu??riculture, loisirs, mode, cosm??tique, maison, alimentaire...).',
                },
                {
                  subtitle:
                    'R??ductions nationales et locales allant jusqu????? -75%',
                  description:
                    'Une grande vari??t?? de r??ductions importantes sur la boutique en ligne avec des marques nationales et locales jusqu????? -75%, pour plaire au plus grand nombre (cin??ma, parc d???attractions, vacances..).',
                },
              ],
              illustration: leeshopIllustration,
              slug: 'R??ductions de la marketplace',
              title: 'Des centaines d???offres avec tarifs pr??f??rentiels',
            },
            {
              content: [
                {
                  subtitle: 'Une billetterie instantan??e et d??mat??rialis??e',
                  description:
                    'Une fois votre commande pay??e, vous recevez directement vos e-billets dans votre boite email. Fini l???attente pour recevoir ses tickets de cin??ma ?? prix r??duits en papiers.',
                },
                {
                  subtitle: 'Divers moyens de paiement',
                  description:
                    'Vos b??n??ficiaires peuvent utiliser diff??rents moyens de paiement sur leur boutique en ligne : carte bancaire, utilisation de leur subvention (pour les activit??s sociales et culturelles) ou leur carte cadeau (activit?? ??ligible URSSAF en fonction de l?????v??nement).',
                },
              ],
              illustration: illustrationSubsidy,
              slug: 'Avantage subvention',
              title: 'Grande simplicit?? d???utilisation',
            },
            {
              content: [
                {
                  subtitle: 'Augmentez encore le pouvoir d???achat des salari??s',
                  description:
                    'Vous pouvez choisir de subventionner davantage les offres n??goci??es de billetterie, ou m??me d???offrir un certain nombre de ticket ?? vos b??n??ficiaires simplement.',
                },
                {
                  subtitle: 'Personnalisez votre billetterie',
                  description:
                    'La plateforme est personnalisable en fonction de votre culture d???entreprise. Vous pouvez ainsi rendre inaccessible certains univers de consommation.',
                },
              ],
              illustration: illustrationGiftcard,
              slug: 'Avantage cartes cadeaux',
              title: 'Aller plus loin avec la billetterie',
            },
            {
              content: [
                {
                  subtitle: 'Disponibilit?? sur mobile',
                  description:
                    'Gr??ce ?? notre Progressive Web App, l???outil Leeto ne quittera plus vos salari??s. Disponible sans t??l??chargement, elle propose les m??mes fonctionnalit??s et services dont les salari??s disposent via ordinateur et tablette gr??ce ?? une utilisation simple et intuitive.',
                },
                {
                  subtitle: 'Un acc??s pratique ?? tous les avantages',
                  description:
                    "M??me ?? distance, offrez ?? vos salari??s la possibilit?? de g??rer leurs avantages comme ils l???entendent. Acc??s ?? la billetterie instantan??e, aux offres promos et aux demandes de remboursement... Accompagnez vos salari??s o?? qu'ils soient !",
                },
              ],
              illustration: illustrationAccounting,
              slug: 'Gestion du budget',
              title: 'Des avantages salari??s mobiles',
            },
          ]}
        />
        {/* Formulaire de contact */}
        <DemoContactForm />

        {/* T??moignages */}

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

        <p>test</p>
        <CallToActionSection />
        <p>test</p>
      </Layout>
    )
  }
}

export default BilletterieCSE

export const pageQuery = graphql`
  query BilletterieCSEQuery {
    benefitsIllustration: file(relativePath: { eq: "billetterie-cse.webp" }) {
      childImageSharp {
        fluid(maxWidth: 2148, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    customerServiceIllustration: file(
      relativePath: { eq: "support-illustration.png" }
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
    illustrationSubsidy: file(
      relativePath: { eq: "simplicite-utilisation.webp" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2148, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    illustrationGiftcard: file(relativePath: { eq: "aller-plus-loin.webp" }) {
      childImageSharp {
        fluid(maxWidth: 2148, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    illustrationAccounting: file(
      relativePath: { eq: "apprecie-des-salaries.png" }
    ) {
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
    illustrationKey: file(
      relativePath: { eq: "bannerVisuals/piggy-bank.png" }
    ) {
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
