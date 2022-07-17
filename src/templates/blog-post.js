import React from 'react'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import get from 'lodash/get'
import Img from 'gatsby-image'
import MCardArticle from '../components/mCardArticle'
import Layout from '../components/layout'
import CallToActionSection from '../components/call-to-action-section'
import BlogPostInlineCallToActionSection from '../components/in-blog-call-to-action-section'
import BlogPostInlineCustomContentSection from '../components/in-blog-custom-content-section'
import BlogPostInlineBannerElectionCSE from '../components/in-blog-banner-election-cse'
import BlogPostInlineBannerNewsletter from '../components/in-blog-banner-newsletter'
import BlogPostInlineBannerEluDuCSE from '../components/in-blog-banner-elu-du-cse'
import styles from './blog-post.module.scss'
import aIconSocialPrimaryFacebook from '../../static/social-icons/a-icon-social-primary-facebook.svg'
import aIconSocialPrimaryTwitter from '../../static/social-icons/a-icon-social-primary-twitter.svg'
import aIconSocialPrimaryLinkedIn from '../../static/social-icons/a-icon-social-primary-linked-in.svg'
import SEO from '../components/seo'

import lg from '../../static/locales/fr/translation.json'

const BetterLink = ({ children, href }) => {
  const hrefTrailingSlash = href.endsWith('/') ? href : `${href}/`
  return (
    <a
      href={hrefTrailingSlash}
      rel="nofollow noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  )
}

class BlogPostTemplate extends React.Component {
  // Need to put location in state because on first render this.props.location
  // is empty
  state = {
    location: {},
  }

  componentDidMount() {
    const { location } = this.props
    this.setState({ location })
  }

  render() {
    const blogPost = get(this, 'props.data.contentfulBlogArticle')
    const posts = get(this, 'props.data.allContentfulBlogArticle.edges')

    const { location } = this.state
    return (
      <Layout location={this.props.location}>
        <SEO
          pathname={this.props.location.pathname}
          title={`${blogPost.seoBlogArticlePageTitle} | Blog Leeto`}
          description={blogPost.seoMetaDescription}
          image={blogPost.blogPostPreviewImage.fluid.src}
        />
        <div className={styles.heroSection}>
          <h1>{blogPost.title}</h1>
          <div className={styles.author}>
            <Img
              className={styles.image}
              alt={blogPost.author.name}
              fluid={blogPost.author.image.fluid}
            />
            <div className={styles.info}>
              <div className={styles.name}>{blogPost.author.name}</div>
              <div className={styles.title}>{blogPost.author.title}</div>
              <div className={styles.articleInfo}>
                <span className={styles.publishDate}>
                  {blogPost.publishDate}
                </span>
                <span className={styles.tags}>{blogPost.tags}</span>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.articleContainer}>
          <div className={styles.socials}>
            <div>{lg.templates['blog-post'].socials.follow}</div>
            <iframe
              title="Follow @leeto_benefits"
              src="https://platform.twitter.com/widgets/follow_button.html?screen_name=leeto_benefits&show_screen_name=false&show_count=false&size=l&lang=fr"
              width="100"
              screen_name="leeto_benefits"
              data-size="large"
              height="40"
              show-count="false"
              style={{ border: 0, overflow: 'hidden', paddingTop: 10 }}
            />
            <iframe
              src="https://www.facebook.com/plugins/like.php?locale=fr_FR&href=https%3A%2F%2Fwww.facebook.com%2Fleeto.benefits%2F&width=450&layout=button&action=like&size=large&show_faces=false&share=false&height=35&appId"
              title="Like Leeto on Facebook"
              height="35"
              style={{ border: 'none', overflow: 'hidden', paddingTop: 10 }}
              scrolling="no"
              frameBorder="0"
              allowTransparency="true"
              allow="encrypted-media"
            />
            <div className={styles.socials.icons}>
              {lg.templates['blog-post'].socials.share}
              <div
                className={styles.snIcon}
                role="button"
                onClick={() => {
                  window.open(
                    `https://www.facebook.com/sharer/sharer.php?u=${location.href}`,
                    '_blank',
                    'width=600,height=400'
                  )
                }}
              >
                <img src={aIconSocialPrimaryFacebook} alt="Logo Facebook" />
              </div>

              <div
                className={styles.snIcon}
                role="button"
                onClick={() => {
                  window.open(
                    `https://twitter.com/intent/tweet?url=${location.href}&text=${blogPost.title}&via=leeto_benefits`,
                    '_blank',
                    'width=600,height=400'
                  )
                }}
              >
                <img src={aIconSocialPrimaryTwitter} alt="Logo Twitter" />
              </div>

              <div
                className={styles.snIcon}
                role="button"
                onClick={() => {
                  window.open(
                    `https://www.linkedin.com/sharing/share-offsite/?url=${location.href}`,
                    '_blank',
                    'width=600,height=400'
                  )
                }}
              >
                <img src={aIconSocialPrimaryLinkedIn} alt="Logo LinkedIn" />
              </div>
            </div>
          </div>
          <MDXProvider
            components={{
              CTA: BlogPostInlineCallToActionSection,
              CustomContent: BlogPostInlineCustomContentSection,
              BannerContentElectionCSE: BlogPostInlineBannerElectionCSE,
              BannerContentEluDuCSE: BlogPostInlineBannerEluDuCSE,
              BannerContentNewsletter: BlogPostInlineBannerNewsletter,
              a: BetterLink,
            }}
          >
            <MDXRenderer>{blogPost.body.childMdx.body}</MDXRenderer>
          </MDXProvider>
        </div>
        <CallToActionSection />
        <hr />
        <div className={styles.otherArticles}>
          <h5>{lg.templates['blog-post'].other_articles}</h5>
          <div className={styles.contentSection}>
            {posts.map(({ node }) => (
              <div key={node.slug} className={styles.articleCard}>
                <MCardArticle node={node} />
              </div>
            ))}
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!, $authorName: String!) {
    contentfulBlogArticle(slug: { eq: $slug }) {
      blogPostPreviewImage {
        fluid {
          src
        }
      }
      author {
        name
        title
        image {
          fluid(
            maxWidth: 100
            maxHeight: 100
            resizingBehavior: SCALE
            quality: 100
          ) {
            ...GatsbyContentfulFluid
          }
        }
      }
      title
      tags
      publishDate(formatString: "DD MMMM", locale: "fr")
      body {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
        childMdx {
          body
        }
      }
      seoBlogArticlePageTitle
      seoMetaDescription
    }
    allContentfulBlogArticle(
      filter: { author: { name: { eq: $authorName } } }
      sort: { fields: publishDate, order: DESC }
      limit: 3
    ) {
      edges {
        node {
          tags
          slug
          title
          publishDate(formatString: "DD MMMM", locale: "fr")
          blogPostPreviewImage {
            fluid(
              maxWidth: 350
              maxHeight: 196
              resizingBehavior: SCALE
              quality: 100
            ) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
