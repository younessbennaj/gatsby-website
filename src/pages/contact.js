import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { get } from 'lodash'

import Layout from '../components/layout'
import styles from './contact.module.scss'
import SEO from '../components/seo'

class Contact extends React.Component {
  render() {
    const illustrationBackpack = get(
      this,
      'props.data.illustrationBackpack.childImageSharp.fluid'
    )

    const illustrationPuzzle = get(
      this,
      'props.data.illustrationPuzzle.childImageSharp.fluid'
    )

    const illustrationUser = get(
      this,
      'props.data.illustrationUser.childImageSharp.fluid'
    )

    const illustrationSwitch = get(
      this,
      'props.data.illustrationSwitch.childImageSharp.fluid'
    )

    const illustrationMegaphone = get(
      this,
      'props.data.illustrationMegaphone.childImageSharp.fluid'
    )

    return (
      <Layout location={this.props.location}>
        <SEO
          title="Contacter l’équipe Leeto"
          pathname={this.props.location.pathname}
          description="Dites-nous votre besoin, nous vous redirigerons vers la bonne équipe pour répondre à toutes vos questions."
        />
        <div className={styles.heroSection}>
          <h1>Contacter l’équipe Leeto</h1>
          <p>
            Dites-nous votre besoin, nous vous redirigerons vers la bonne équipe
            pour répondre à toutes vos questions.
          </p>
          <div className={styles.content}>
            <div className={styles.contactBlock}>
              <Img
                className={styles.image}
                fluid={illustrationBackpack}
                alt="illustrationBackpack"
              />
              <p className={styles.contactTitle}>CSE/RH</p>
              <p className={styles.contactDescription}>
                Je souhaite mettre en place Leeto dans mon entreprise
              </p>

              <Link to="/demande-demo" className={styles.contactLink}>
                > Contactez notre équipe commerciale
              </Link>
            </div>
            <div className={styles.contactBlock}>
              <Img
                className={styles.image}
                fluid={illustrationPuzzle}
                alt="illustrationPuzzle"
              />
              <p className={styles.contactTitle}>Potentiel partenaire</p>
              <p className={styles.contactDescription}>
                Je souhaite faire partie du catalogue Leeto
              </p>
              <a
                className={styles.contactLink}
                href="mailto:partenariats@leeto.co"
                target="_blank"
                rel="noreferrer"
              >
                > Contactez notre équipe partenariats
              </a>
            </div>
            <div className={styles.contactBlock}>
              <Img
                className={styles.image}
                fluid={illustrationUser}
                alt="illustrationUser"
              />
              <p className={styles.contactTitle}>Utilisateur</p>
              <p className={styles.contactDescription}>
                J’ai besoin d’aide pour utiliser mon compte Leeto
              </p>
              <a
                className={styles.contactLink}
                href="mailto:contact@leeto.co"
                target="_blank"
                rel="noreferrer"
              >
                > Écrivez-nous
              </a>
            </div>
            <div className={styles.contactBlock}>
              <Img
                className={styles.image}
                fluid={illustrationSwitch}
                alt="illustrationSwitch"
              />
              <p className={styles.contactTitle}>Salarié</p>
              <p className={styles.contactDescription}>
                Je souhaite soumettre Leeto à mon CSE / équipe RH
              </p>
              <a
                target="_blank"
                rel="noreferrer"
                className={styles.contactLink}
                href="https://go.leeto.co/recommandation"
              >
                > Recommander Leeto
              </a>
            </div>
            <div className={styles.contactBlock}>
              <Img
                className={styles.image}
                fluid={illustrationMegaphone}
                alt="illustrationMegaphone"
              />
              <p className={styles.contactTitle}>Autre demande</p>
              <p className={styles.contactDescription}>
                J’ai un besoin marketing, presse ou une autre demande.
              </p>
              <a
                target="_blank"
                rel="noreferrer"
                className={styles.contactLink}
                href="mailto:marketing@leeto.co"
              >
                > Contactez-nous
              </a>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Contact

export const pageQuery = graphql`
  query ContactQuery {
    illustrationContact: file(
      relativePath: { eq: "main-illustration-body.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2148, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    illustrationBackpack: file(
      relativePath: { eq: "bannerVisuals/backpack.png" }
    ) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    illustrationPuzzle: file(
      relativePath: { eq: "bannerVisuals/puzzle2.png" }
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
    illustrationSwitch: file(relativePath: { eq: "bannerVisuals/switch.png" }) {
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
  }
`
