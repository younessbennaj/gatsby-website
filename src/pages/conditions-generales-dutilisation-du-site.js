import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'
import styles from './conditions-generales-dutilisation-du-site.module.scss'
import SEO from '../components/seo'

class GCU extends React.Component {
  render() {
    const CGVU = get(this, 'props.data.file.childMdx.body')

    return (
      <Layout location={this.props.location}>
        <SEO
          title="Conditions générales de vente et d'utilisation | Leeto"
          pathname={this.props.location.pathname}
          description="Découvrez les conditions générales d'utilisation du site de Leeto, expert en CSE"
        />
        <div className={styles.container}>
          <h1>Conditions générales de vente et d'utilisation</h1>
          <hr />
          <MDXRenderer>{CGVU}</MDXRenderer>
        </div>
      </Layout>
    )
  }
}

export default GCU

export const pageQuery = graphql`
  query GCUQuery {
    site {
      siteMetadata {
        description
        siteUrl
      }
    }
    file(relativePath: { eq: "cgvu.mdx" }) {
      childMdx {
        body
      }
    }
  }
`
