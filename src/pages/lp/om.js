import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Slider from 'react-slick'
import axios from 'axios'
import Layout from '../../components/layout'
import AButtonPrimary from '../../components/button'
import CallToActionSection from '../../components/call-to-action-section'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import MCard from '../../components/mCard'
import MSectionClient from '../../components/mSectionClient'
import styles from './om.module.scss'
import lg from '../../../static/locales/fr/translation.json'
import SEO from '../../components/seo'

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
            .map(({ name, websites_urls, office, reference }) => ({
              title: name,
              url: get(websites_urls, '0.url'),
              location: office.name,
              reference,
            })),
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
      dotsClass: 'custom-slick-dots',
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
    const managementIllustration = get(
      this,
      'props.data.managementIllustration.childImageSharp.fluid'
    )
    const illustrationGiftCard = get(
      this,
      'props.data.giftCardIllustration.childImageSharp.fluid'
    )
    const carteBenefitIllustration = get(
      this,
      'props.data.carteBenefit.childImageSharp.fluid'
    )
    const marketplaceBenefitIllustration = get(
      this,
      'props.data.marketplaceBenefit.childImageSharp.fluid'
    )
    const cotisationBenefitIllustration = get(
      this,
      'props.data.cotisationBenefit.childImageSharp.fluid'
    )
    const illustrationSupport = get(
      this,
      'props.data.illustrationSupport.childImageSharp.fluid'
    )

    return (
      <Layout location={this.props.location}>
        <SEO pathname={this.props.pathname} />
        <div className={styles.body}>
          <div className={styles.heroSection}>
            <div className={styles.content}>
              <h1
                dangerouslySetInnerHTML={{
                  __html: lg.landing.om.heroSection.title,
                }}
              />
              <p>
                {lg.landing.om.heroSection.subtitle}
                <br />
              </p>
              <div className={styles.cta}>
                <AButtonPrimary to="/demande-demo/">
                  {lg.landing.om.heroSection.cta}
                </AButtonPrimary>
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
            <MSectionClient />
          </div>
          <div className={styles.valuePropositionsSection}>
            {/* {lg.landing.om.benefitsSection.map(benefit => ( */}
            <MCard
              key={lg.landing.om.benefitsSection[0].name}
              to="/plateforme-cse/"
            >
              <div className={styles.valueProposition}>
                <Img
                  className={styles.image}
                  fluid={carteBenefitIllustration}
                  // alt={node.image.title}
                />
                <p className={styles.description}>
                  {lg.landing.om.benefitsSection[0].description}
                </p>
                <div className={styles.name}>
                  {lg.landing.om.benefitsSection[0].name}
                </div>
              </div>
            </MCard>
            <MCard
              key={lg.landing.om.benefitsSection[1].name}
              to="/plateforme-cse/"
            >
              <div className={styles.valueProposition}>
                <Img
                  className={styles.image}
                  fluid={marketplaceBenefitIllustration}
                  // alt={node.image.title}
                />
                <p className={styles.description}>
                  {lg.landing.om.benefitsSection[1].description}
                </p>
                <div className={styles.name}>
                  {lg.landing.om.benefitsSection[1].name}
                </div>
              </div>
            </MCard>
            <MCard
              key={lg.landing.om.benefitsSection[2].name}
              to="/plateforme-cse/"
            >
              <div className={styles.valueProposition}>
                <Img
                  className={styles.image}
                  fluid={cotisationBenefitIllustration}
                  // alt={node.image.title}
                />
                <p className={styles.description}>
                  {lg.landing.om.benefitsSection[2].description}
                </p>
                <div className={styles.name}>
                  {lg.landing.om.benefitsSection[2].name}
                </div>
              </div>
            </MCard>
            {/* ))} */}
          </div>
          <div className={styles.giftCardSection}>
            <div className={styles.content}>
              <div className={styles.text}>
                <div className={styles.title}>
                  {lg.landing.om.giftCardSection.title}
                </div>
                <div className={styles.description}>
                  {lg.landing.om.giftCardSection.description}
                </div>
              </div>
            </div>
            <div className={styles.illustration}>
              <Img
                fluid={illustrationGiftCard}
                className={styles.image}
                alt="Illustration de la giftCard"
              />
            </div>
          </div>
          <div className={styles.marketplaceSection}>
            <div className={styles.illustration}>
              <Img
                fluid={managementIllustration}
                className={styles.image}
                alt="Illustration de la marketplace"
              />
            </div>
            <div className={styles.content}>
              <div className={styles.text}>
                <div className={styles.title}>
                  {lg.landing.om.whySection.title}
                </div>
                <div className={styles.description}>
                  {lg.landing.om.whySection.description}
                </div>
              </div>
            </div>
          </div>
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
                  {lg.landing.om.supportSection.title}
                </div>
                <div className={styles.description}>
                  {lg.landing.om.supportSection.description}
                </div>
                <div className={styles.mCardTestimonialExternal}>
                  <div className={styles.quote}>
                    {
                      lg.landing.om.supportSection.mCardTestimonialExternal
                        .quote
                    }
                  </div>
                  <div className={styles.person}>
                    {/* <img className={styles.avatar} alt="Avatar d'un client" /> */}
                    <div className={styles.right}>
                      <div className={styles.name}>
                        {
                          lg.landing.om.supportSection.mCardTestimonialExternal
                            .name
                        }
                      </div>
                      <div className={styles.company}>
                        {
                          lg.landing.om.supportSection.mCardTestimonialExternal
                            .company
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.trustSection}>
            <h5 className={styles.name}>{lg.landing.om.trustSection.name}</h5>
            <Slider {...settings}>
              {lg.landing.om.trustSection.testimonials.map((testimonial, i) => (
                <div key={i}>
                  <div className={styles.slideContent}>
                    <p>{testimonial.testimonial}</p>
                    <h5>{testimonial.name}</h5>
                    <div className={styles.job}>{testimonial.job}</div>
                  </div>
                </div>
              ))}
            </Slider>
            <div className={styles.callToAction}>
              <div className={styles.callToActionCard}>
                <CallToActionSection
                  button="En savoir plus"
                  description="Leeto vous permet d'offrir plus, plus simplement à vos salariés. Laissez votre e-mail pour être recontacté"
                  placeholder="adam@we.co"
                />
              </div>
            </div>
          </div>
          <div className={styles.callToActionSection} />
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query LPOMQuery {
    homeHeroIllustration: file(
      # relativePath: { eq: "home-hero-illustration.png" }
      relativePath: { eq: "lp/om/manage-benefits-2.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    managementIllustration: file(
      # relativePath: { eq: "illustration-3d-manage.png" }
      relativePath: { eq: "home-hero-illustration.png" }
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
    carteBenefit: file(relativePath: { eq: "lp/om/benefits/carte.png" }) {
      childImageSharp {
        fluid(maxWidth: 2148, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    marketplaceBenefit: file(
      relativePath: { eq: "lp/om/benefits/marketplace.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2148, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    cotisationBenefit: file(
      relativePath: { eq: "lp/om/benefits/cotisations.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2148, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
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
