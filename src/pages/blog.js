import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import styles from './blog.module.scss'
import Layout from '../components/layout'
import MCardArticle from '../components/mCardArticle'
import MCardContent from '../components/mCardContent'
import illustration from '../../static/leeto_blog_cse_ce.png'
import CallToActionSection from '../components/call-to-action-section'
import SEO from '../components/seo'

import lg from '../../static/locales/fr/translation.json'

class BlogIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogArticle.edges')
    const contents = get(this, 'props.data.allContentfulBlogContent.edges')

    let contentIndex = 0

    return (
      <Layout location={this.props.location}>
        <SEO
          title="Actualités CE - Avantages Salariés | Leeto"
          pathname={this.props.location.pathname}
        />
        <div className={styles.heroSection}>
          <h1>{lg.pages.blog.title}</h1>
          <img src={illustration} alt="Illustration de notre blog" />
        </div>
        <hr />
        <div className={styles.contentSection}>
          {posts.map(({ node }, key) => {
            if ([0, 4, 7, 10].includes(key) && contents[contentIndex]) {
              const currIndex = contentIndex
              contentIndex += 1

              return (
                <React.Fragment key={node.slug}>
                  <div className={styles.articleCard}>
                    <MCardContent node={contents[currIndex].node} />
                  </div>
                  <div className={styles.articleCard}>
                    <MCardArticle node={node} />
                  </div>
                </React.Fragment>
              )
            }
            return (
              <div key={node.slug} className={styles.articleCard}>
                <MCardArticle node={node} />
              </div>
            )
          })}
        </div>
        <CallToActionSection />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogContent(sort: { fields: position }) {
      edges {
        node {
          link
          name
          preview {
            title
            fixed {
              src
            }
          }
        }
      }
    }
    allContentfulBlogArticle(sort: { fields: order }) {
      edges {
        node {
          tags
          slug
          title
          publishDate(formatString: "DD MMMM", locale: "fr")
          blogPostPreviewImage {
            title
            fluid(
              maxWidth: 350
              maxHeight: 196
              resizingBehavior: SCALE
              quality: 100
            ) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`
