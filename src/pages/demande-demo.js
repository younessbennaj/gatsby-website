import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import styles from './demande-demo.module.scss'
import SEO from '../components/seo'
import MSectionClient from '../components/mSectionClient'

import lg from '../../static/locales/fr/translation.json'

class DemandeDemo extends React.Component {
  componentDidMount() {
    const script = document.createElement('script')
    script.src = 'https://js.hsforms.net/forms/v2.js'
    document.body.appendChild(script)

    script.addEventListener('load', () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: 'eu1',
          portalId: '25191803',
          formId: '08854ec8-d84e-4814-97a7-383b0b176f67',
          target: '#hubspotForm',
        })
      }
    })
  }

  render() {
    const illustrationContact = get(
      this,
      'props.data.illustrationContact.childImageSharp.fluid'
    )

    return (
      <Layout location={this.props.location}>
        <SEO
          title="Bénéficiez d'une démo personnalisée | Leeto"
          pathname={this.props.location.pathname}
          description="Vous avez des questions à propos de Leeto et de nos offres ? Contactez-nous directement et posez-nous toutes vos questions !"
        />
        <div className={styles.heroSection}>
          <div className={styles.content}>
            <h1>{lg.pages.contact.title}</h1>
            <p>{lg.pages.contact.body}</p>
            <p>
              Vous êtes déjà utilisateur de Leeto ? Contactez notre équipe
              support sur l'adresse{' '}
              <a href="mailto:contact@leeto.co">contact@leeto.co</a>
            </p>

            <div id="hubspotForm" />

            <div className={styles.employeeCTA}>
              <a
                onClick={() =>
                  this.handleExternalClick('Refer Company Link Clicked', {
                    url: 'https://leeto.typeform.com/to/yOVPhb',
                  })
                }
                href="https://go.leeto.co/recommandation"
                className={styles.link}
                target="_blank"
                rel="noreferrer"
              >
                {lg.pages.contact.link}
              </a>
            </div>
          </div>

          <div className={styles.rightPane}>
            <Img
              className={styles.image}
              fluid={illustrationContact}
              alt="Illustration de la demande de démonstration"
            />
            <MSectionClient
              numberOfClients={4}
              clientsStyle={styles.clientsStyle}
              clientStyle={styles.clientStyle}
              titleStyle={styles.titleStyle}
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default DemandeDemo

export const pageQuery = graphql`
  query DemandeDemoQuery {
    illustrationContact: file(
      relativePath: { eq: "main-illustration-body.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2148, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
