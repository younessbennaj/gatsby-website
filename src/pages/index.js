import React from 'react'
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Slider from 'react-slick'
import axios from 'axios'
import Layout from '../components/layout'
import AButtonPrimary from '../components/button'
import CallToActionSection from '../components/call-to-action-section'
import TestimonialsSection from '../components/testimonials-section'

import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import illustrationSecurity from '../../static/leeto_securite_rgpd.png'
import MCard from '../components/mCard'
import MSectionClientInfinite from '../components/mSectionClientInfinite'
import styles from './index.module.scss'
import lg from '../../static/locales/fr/translation.json'
import PressSection from '../components/pressSection'
import SEO from '../components/seo'
import MSectionAssets from '../components/mSectionAssets'

class RootIndex extends React.Component {
  state = {
    loading: false,
    error: false,
    offers: [],
  }

  componentDidMount() {
    this.fetchJobOffers()
  }

  fetchJobOffers = () => {
    this.setState({ loading: true })
    axios
      .get(
        `https://www.welcomekit.co/api/v1/embed?organization_reference=P6RPdXk`
      )
      .then(ret => {
        this.setState({
          loading: false,
          offers: ret.data.jobs
            .filter(offer => get(offer, 'websites_urls.length', 0))
            .map(
              ({ name, websites_urls, office, reference, contract_type }) => ({
                title: name,
                url: get(websites_urls, '0.url'),
                location: office.name,
                reference,
                type: contract_type.fr,
              })
            ),
        })
      })
      .catch(error => {
        this.setState({ loading: false, error })
      })
  }

  handleExternalClick = (eventName, eventParams) => {
    if (window.analytics) {
      window.analytics.track(eventName, eventParams)
    }
  }

  render() {
    const settings = {
      arrows: false,
      dots: true,
      infinite: true,
      speed: 1200,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
    }

    const benefits = get(this, 'props.data.allContentfulBenefit.edges')
    const illustrationHero = get(
      this,
      'props.data.homeHeroIllustration.childImageSharp.fluid'
    )
    const illustrationMarketplace = get(
      this,
      'props.data.marketplaceIllustration.childImageSharp.fluid'
    )
    const illustrationRecognition = get(
      this,
      'props.data.recognitionIllustration.childImageSharp.fluid'
    )
    const illustrationSolutionRH = get(
      this,
      'props.data.illustrationSolutionRH.childImageSharp.fluid'
    )
    const illustrationSupport = get(
      this,
      'props.data.illustrationSupport.childImageSharp.fluid'
    )

    // Banner's Assets
    const illustrationBuoy = get(
      this,
      'props.data.illustrationBuoy.childImageSharp.fluid'
    )

    const illustrationRedGift = get(
      this,
      'props.data.illustrationRedGift.childImageSharp.fluid'
    )

    const illustrationUser = get(
      this,
      'props.data.illustrationUser.childImageSharp.fluid'
    )

    const illustrationMegaphone = get(
      this,
      'props.data.illustrationMegaphone.childImageSharp.fluid'
    )

    const illustrationCardWallet = get(
      this,
      'props.data.illustrationCardWallet.childImageSharp.fluid'
    )

    const illustrationClayForm = get(
      this,
      'props.data.illustrationClayForm.childImageSharp.fluid'
    )

    return (
      <Layout location={this.props.location}>
        <SEO
          pathname={this.props.pathname}
          title="Plateforme CSE - Compte pro CSE - Experts CSE | Leeto"
          description="A la recherche d'une plateforme dédiée à la gestion de votre CSE ? Découvrez Leeto, spécialiste de la gestion CSE"
        />
        <div className={styles.body}>
          <div className={styles.heroSection}>
            <div className={styles.content}>
              <h1
                dangerouslySetInnerHTML={{
                  __html: lg.pages.index.heroSection.title,
                }}
              />
              <p>{lg.pages.index.heroSection.subtitle}</p>
              <div className={styles.ctas}>
                <div className={styles.cta}>
                  <AButtonPrimary to="/demande-demo/">
                    {lg.pages.index.heroSection.cta}
                  </AButtonPrimary>
                </div>
                <div className={`${styles.cta} ${styles.inverted}`}>
                  <AButtonPrimary to="/plateforme-cse/">
                    {lg.pages.index.heroSection.know_more}
                  </AButtonPrimary>
                </div>
              </div>
            </div>
            <div className={styles.illustration}>
              <Img
                className={styles.image}
                fluid={illustrationHero}
                alt="Illustration de Leeto"
              />
            </div>
          </div>
          <div className={styles.clientsSection}>
            <MSectionClientInfinite
              title={lg.pages.index.clientSection.title}
            />
          </div>

          <MSectionAssets
            title="Un ensemble de solutions pour CSE et RH"
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

          <div className={styles.valuePropositionsSection}>
            {benefits.map(({ node: benefit }) => (
              <MCard key={benefit.id} to="/plateforme-cse/">
                <div className={styles.valueProposition}>
                  <Img
                    className={styles.image}
                    fluid={benefit.image.fluid}
                    alt={benefit.image.title}
                  />
                  <p className={styles.description}>{benefit.description}</p>
                  <div className={styles.name}>{benefit.name}</div>
                </div>
              </MCard>
            ))}
          </div>
          <div className={styles.productFeatures}>
            <div className={styles.productFeature}>
              <div className={styles.content}>
                <div className={styles.text}>
                  <div className={styles.title}>
                    {lg.pages.index.feature_1.title}
                  </div>
                  <div className={styles.subtitle}>
                    {lg.pages.index.feature_1.subtitle}
                  </div>
                  <div className={styles.description}>
                    {lg.pages.index.feature_1.description_1}
                  </div>
                  <div className={styles.description}>
                    {lg.pages.index.feature_1.description_2}
                  </div>
                  <Link to="/tarifs/">
                    {lg.pages.index.feature_1.link_description}
                  </Link>
                </div>
              </div>
              <div className={styles.illustration}>
                <Img
                  fluid={illustrationRecognition}
                  className={styles.image}
                  alt="Illustration de reconnaissance"
                />
              </div>
            </div>

            <div className={styles.productFeature}>
              <div className={styles.content}>
                <div className={styles.text}>
                  <div className={styles.title}>
                    {lg.pages.index.feature_2.title}
                  </div>
                  <div className={styles.subtitle}>
                    {lg.pages.index.feature_2.subtitle}
                  </div>
                  <div className={styles.description}>
                    {lg.pages.index.feature_2.description_1}
                  </div>
                  <div className={styles.description}>
                    {lg.pages.index.feature_2.description_2}
                  </div>
                  <Link to="/solutions-rh-dirigeants">
                    {lg.pages.index.feature_2.link_description}
                  </Link>
                </div>
              </div>
              <div className={styles.illustration}>
                <Img
                  fluid={illustrationSolutionRH}
                  className={styles.image}
                  alt="Illustration solution RH et dirigeant"
                />
              </div>
            </div>

            <div className={styles.productFeature}>
              <div className={styles.content}>
                <div className={styles.text}>
                  <div className={styles.title}>
                    {lg.pages.index.feature_3.title}
                  </div>
                  <div className={styles.subtitle}>
                    {lg.pages.index.feature_3.subtitle_1}
                  </div>
                  <div className={styles.description}>
                    {lg.pages.index.feature_3.description_1}
                  </div>
                  <div className={styles.description}>
                    {lg.pages.index.feature_3.description_2}
                  </div>
                </div>
                <Link to="/demande-demo/">
                  {lg.pages.index.feature_3.link_description}
                </Link>
              </div>
              <div className={styles.illustration}>
                <Img
                  fluid={illustrationMarketplace}
                  className={styles.image}
                  alt="Illustration de la marketplace"
                />
              </div>
            </div>
          </div>
          <div>
            <TestimonialsSection />
          </div>
          <PressSection />
          <div className={styles.supportSection}>
            <div className={styles.wrapper}>
              <div className={styles.illustration}>
                <Img
                  className={styles.image}
                  fluid={illustrationSupport}
                  alt="Illustration du service client"
                />
              </div>
              <div className={styles.content}>
                <div className={styles.title}>
                  {lg.pages.index.supportSection.title}
                </div>
                <div className={styles.description}>
                  {lg.pages.index.supportSection.description}
                </div>
                <div className={styles.mCardTestimonialExternal}>
                  <div className={styles.quote}>
                    {
                      lg.pages.index.supportSection.mCardTestimonialExternal
                        .quote
                    }
                  </div>
                  <div className={styles.person}>
                    {/* <img className={styles.avatar} alt="Avatar d'un client" /> */}
                    <div className={styles.right}>
                      <div className={styles.name}>
                        {
                          lg.pages.index.supportSection.mCardTestimonialExternal
                            .name
                        }
                      </div>
                      <div className={styles.company}>
                        {
                          lg.pages.index.supportSection.mCardTestimonialExternal
                            .company
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.securitySection}>
            <div className={styles.contentSecurity}>
              <div className={styles.title}>
                {lg.pages.index.securitySection.title}
              </div>
              <div className={styles.description}>
                {lg.pages.index.securitySection.description}
              </div>
              <div className={styles.cta}>
                <AButtonPrimary to="/demande-demo/">
                  {lg.pages.index.securitySection.cta}
                </AButtonPrimary>
              </div>
            </div>
            <div className={styles.illustrationSecurity}>
              <img
                src={illustrationSecurity}
                alt="Illustration de la sécurité"
              />
            </div>
          </div>
          <div className={styles.trustSection}>
            <h5 className={styles.name}>{lg.pages.index.trustSection.name}</h5>
            <Slider {...settings}>
              {lg.pages.index.trustSection.testimonials.map(
                (testimonial, i) => (
                  <div key={i}>
                    <div className={styles.slideContent}>
                      <p>{testimonial.testimonial}</p>
                      {/* <h5>{testimonial.name}</h5>
                      <div className={styles.job}>{testimonial.job}</div> */}
                    </div>
                  </div>
                )
              )}
            </Slider>
            <div className={styles.callToAction}>
              <div className={styles.callToActionCard}>
                <CallToActionSection />
              </div>
            </div>
          </div>
          <div className={styles.callToActionSection} />
          <div className={styles.jobsSection}>
            <h2>{lg.pages.index.jobSection.name}</h2>
            <p>{lg.pages.index.jobSection.description}</p>
            <div className={styles.cta}>
              <a
                onClick={() =>
                  this.handleExternalClick('WTTJ Section Clicked', {
                    url: 'https://www.welcometothejungle.co/fr/companies/leeto',
                  })
                }
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.welcometothejungle.co/fr/companies/leeto"
              >
                <button>{lg.pages.index.jobSection.cta}</button>
              </a>
            </div>
            <div className={styles.jobList}>
              {this.state.offers.map(job => (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  key={job.reference}
                  className={styles.offer}
                  href={job.url}
                  onClick={() =>
                    this.handleExternalClick('WTTJ Section Clicked', {
                      url: job.url,
                    })
                  }
                >
                  <h5>
                    {job.title} - {job.type}
                  </h5>
                  <span className={styles.location}>{job.location}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    homeHeroIllustration: file(
      relativePath: { eq: "home-hero-illustration.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    marketplaceIllustration: file(
      relativePath: { eq: "illustration-perks-logos.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2148, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    recognitionIllustration: file(
      relativePath: { eq: "nos-services/tout-en-un-3.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2148, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    illustrationSolutionRH: file(
      relativePath: { eq: "solutions-rh-dirigeants.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2148, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    illustrationSupport: file(
      relativePath: { eq: "support-illustration.png" }
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
    illustrationRedGift: file(
      relativePath: { eq: "bannerVisuals/red-gift.png" }
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
    illustrationMegaphone: file(
      relativePath: { eq: "bannerVisuals/megaphone.png" }
    ) {
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
    illustrationClayForm: file(
      relativePath: { eq: "bannerVisuals/clay-form.png" }
    ) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allContentfulBenefit(sort: { fields: order }) {
      edges {
        node {
          id
          name
          description
          image {
            title
            fluid(maxWidth: 300, quality: 100) {
              ...GatsbyContentfulFluid_noBase64
            }
          }
        }
      }
    }
  }
`
