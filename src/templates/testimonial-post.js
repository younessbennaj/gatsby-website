import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/layout'
import styles from './testimonial-post.module.scss'
import CallToActionSection from '../components/call-to-action-section'
import SEO from '../components/seo'

import MSectionClient from '../components/mSectionClient'

import iconIndustry from '../assets/testimonialPostIcons/icon-industry.svg'
import iconEmployees from '../assets/testimonialPostIcons/icon-profil-user.svg'

class TestimonialPostTemplate extends React.Component {
  render() {
    const siteMetadata = get(this, 'props.data.site.siteMetadata')
    const testimonial = get(this, 'props.data.contentfulTestimonial')

    return (
      <Layout location={this.props.location}>
        <SEO
          pathname={this.props.location.pathname}
          title={`Avis clients ${testimonial.companyName} plateforme CSE | Leeto`}
          description={`Vous souhaitez un avis client sur la plateforme CSE Leeto ? Découvrez l'avis de ${testimonial.companyName}, client chez Leeto`}
          image={testimonial.companyUserAvatar.fluid.src}
        />
        <div className={styles.wrapper}>
          <div className={styles.testimonialHeader}>
            <h1>{testimonial.companyName}</h1>
            <div className={styles.figures}>
              {testimonial.numberOfEmployees ? (
                <div className={styles.figure}>
                  <img src={iconEmployees} alt="Nombre d'employés" />
                  <p>{testimonial.numberOfEmployees} employés</p>
                </div>
              ) : null}
              <div className={styles.figure}>
                <img src={iconIndustry} alt="Secteur de l'entreprise" />
                <p>{testimonial.companySector}</p>
              </div>
            </div>
          </div>
          <hr />
          <div className={styles.testimonialUser}>
            <Img
              alt={testimonial.companyUserAvatar.title}
              className={styles.image}
              fluid={testimonial.companyUserAvatar.fluid}
            />
            <div className={styles.content}>
              <p>
                <strong>{testimonial.companyUserName}</strong>
              </p>
              <p>{testimonial.companyUserPosition}</p>
            </div>
          </div>
          <div className={styles.testimonialContainer}>
            <div
              dangerouslySetInnerHTML={{
                __html: testimonial.testimonial.childMarkdownRemark.html,
              }}
            />
          </div>
        </div>

        <div className={styles.clientsSection}>
          <MSectionClient />
        </div>
        <CallToActionSection />
      </Layout>
    )
  }
}

export default TestimonialPostTemplate

export const pageQuery = graphql`
  query TestimonialPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    contentfulTestimonial(slug: { eq: $slug }) {
      companySector
      companyUserName
      companyUserPosition
      numberOfEmployees
      companyName
      slug
      testimonial {
        childMarkdownRemark {
          html
        }
      }
      companyUserAvatar {
        title
        fluid(quality: 90, maxWidth: 90) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
