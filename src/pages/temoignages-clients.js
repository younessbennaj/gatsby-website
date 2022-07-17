import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import get from 'lodash/get'
import styles from './temoignages-clients.module.scss'
import Layout from '../components/layout'
import MCard from '../components/mCard'
import MSectionClient from '../components/mSectionClient'
import PressSection from '../components/pressSection'

// import illustrationSupport from '../../static/support.png'
import CallToActionSection from '../components/call-to-action-section'
import SEO from '../components/seo'

import lg from '../../static/locales/fr/translation.json'

class TestimonialIndex extends React.Component {
  render() {
    const testimonials = get(this, 'props.data.allContentfulTestimonial.edges')
    return (
      <Layout location={this.props.location}>
        <SEO
          pathname={this.props.location.pathname}
          title="Avis clients plateforme CSE | Leeto"
          description="Vous recherchez de témoignages de clients de Leeto ? Découvrez les retours de nos clients et leur avis sur notre offre"
        />
        <div className={styles.heroSection}>
          <h1 className={styles.title}>{lg.pages.testimonials.title}</h1>
          <p className={styles.subtitle}>{lg.pages.testimonials.subtitle}</p>
        </div>

        <div className={styles.contentSection}>
          {testimonials.map(({ node: testimonial }) => (
            <div key={testimonial.slug} className={styles.testimonial}>
              <MCard to={`/temoignages-clients/${testimonial.slug}/`}>
                <div className={styles.testimonialCard}>
                  <img
                    className={styles.image}
                    alt={testimonial.slug}
                    src={testimonial.companyLogoCard.fluid.src}
                  />
                  <h5 className={styles.previewTitle}>{testimonial.quote}</h5>
                  <div className={styles.info}>
                    {testimonial.numberOfEmployees
                      ? `${testimonial.numberOfEmployees} employés - `
                      : null}
                    {testimonial.companySector}
                  </div>
                  <div className={styles.link}>
                    Découvrir le témoignage de{' '}
                    {testimonial.companyUserFirstName} →
                  </div>
                </div>
              </MCard>
            </div>
          ))}
        </div>
        <PressSection />
        <CallToActionSection />
      </Layout>
    )
  }
}

export default TestimonialIndex

export const pageQuery = graphql`
  query TestimonialIndexQuery {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    allContentfulTestimonial(sort: { fields: order }) {
      edges {
        node {
          companyName
          numberOfEmployees
          companySector
          quote
          slug
          companyUserFirstName
          companyLogoCard {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`
