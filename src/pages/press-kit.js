import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import SEO from '../components/seo'

import imageTwitter from '../../static/leeto_twitter_card.png'
import imageOG from '../../static/leeto_og_image.png'

import styles from './press-kit.module.scss'

import lg from '../../static/locales/fr/translation.json'

class PressKit extends React.Component {
  render() {
    const siteMetadata = get(this, 'props.data.site.siteMetadata')

    return (
      <Layout location={this.props.location}>
        <SEO
          pathname={this.props.location.pathname}
          title="Leeto - Presse"
          description="Vous souhaitez nous contacter pour un partenariat ? Découvrez le kit press de Leeto"
        />
        <div className={styles.container}>
          <div className={styles.introductionSection}>
            <h1>{lg.pages['press-kit'].title}</h1>
            <p>{lg.pages['press-kit'].introduction.body1}</p>
            <p>{lg.pages['press-kit'].introduction.body2}</p>
            <ul>
              <li>{lg.pages['press-kit'].introduction.body3}</li>
              <li>{lg.pages['press-kit'].introduction.body4}</li>
              <li>{lg.pages['press-kit'].introduction.body5}</li>
            </ul>
            <p>
              {lg.pages['press-kit'].introduction.body6}
              <a
                href="mailto:media@leeto.co"
                target="_blank"
                rel="noopener noreferrer"
              >
                {lg.pages['press-kit'].introduction.email}
              </a>
              .
            </p>
          </div>

          <div className={styles.pressKitSection}>
            <h2>{lg.pages['press-kit'].kit.title}</h2>
            <p>{lg.pages['press-kit'].kit.body}</p>
            <a
              href="https://drive.google.com/drive/folders/1eFj84h539yke52AUv1TS4Q6C7DUJsMWC"
              target="_blank"
              rel="noopener noreferrer"
            >
              {lg.pages['press-kit'].kit.link}
            </a>
          </div>
        </div>
      </Layout>
    )
  }
}

export default PressKit

export const pageQuery = graphql`
  query PressKitPageQuery {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
  }
`
