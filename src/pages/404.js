import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import AButtonPrimary from '../components/button'
import styles from './404.module.scss'
import SEO from '../components/seo'

class unknownPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO
          pathname={this.props.location.pathname}
          title="Page inconnue | Leeto"
        />
        <div className={styles.container}>
          <h1>Oh !</h1>
          <p>Nous ne retrouvons pas votre page.</p>
          <AButtonPrimary to="/">Retour sur la page d'accueil</AButtonPrimary>
        </div>
      </Layout>
    )
  }
}

export default unknownPage

export const pageQuery = graphql`
  query unknownPageQuery {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
  }
`
