import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import styles from './mentions-legales.module.scss'
import SEO from '../components/seo'

class Legal extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO
          title="Mentions légales | Leeto"
          pathname={this.props.location.pathname}
          description="Découvrez les mentions légales de Leeto, expert en CSE"
        />
        <div className={styles.container}>
          <h1>Mentions Légales (dernière mise à jour le 12/02/2021)</h1>
          <hr />
          <h3>Editeur du site Internet :</h3>
          <p>
            Dénomination sociale de l’éditeur : Clan, société immatriculée au
            registre du commerce et des sociétés de Bobigny sous le numéro 841
            674 997, exploitant le nom commercial Leeto est enregistrée par
            l’Autorité de Contrôle Prudentiel et de Résolution (« ACPR ») sous
            le numéro 841674997 (agrément consultable dans le Registre des
            agents financiers (www.regafi.com) en tant qu’agent de services de
            paiement de l'établissement de monnaie électronique Treezor, dont le
            siège social est situé 33 avenue Wagram 75017 Paris.
          </p>
          <p>Statut de la société : Société par actions simplifiée</p>
          <p>RCS : Paris n° 841 674 997</p>
          <p>N° TVA intracommunautaire : FR58841674997</p>
          <p>Capital social : 1.000€</p>
          <p>Siège social : 12 rue Anselme, 93400 Saint Ouen</p>
          <p>Adresse électronique : contact@leeto.co</p>
          <br />
          <p>Représentant légal : Président : Arthur Reboul</p>
          <p>Nom du Directeur de la publication : Arthur Reboul</p>
          <br />
          <h3>Hébergeur du site Internet :</h3>
          <p>Amazon Web Services EMEA SARL</p>
          <p>5 rue Plaetis L-2338Luxembourg</p>
          <p>Télécopieur : 352 2789 0057</p>
          <p>https://aws.amazon.com</p>
        </div>
      </Layout>
    )
  }
}

export default Legal

export const pageQuery = graphql`
  query LegalQuery {
    site {
      siteMetadata {
        description
        siteUrl
      }
    }
  }
`
