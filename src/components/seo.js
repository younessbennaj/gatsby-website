import React from 'react'
import Helmet from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby'
import imageTwitter from '../../static/leeto_twitter_card.png'
import imageOG from '../../static/leeto_og_image.png'

const SEO = ({
  title = null,
  description = null,
  image = null,
  pathname = '/',
}) => (
  <StaticQuery
    query={graphql`
      query SEOQuery {
        site {
          siteMetadata {
            defaultTitle: title
            defaultDescription: description
            siteUrl
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { defaultTitle, defaultDescription, siteUrl },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: image || `${siteUrl}${imageOG}`,
        url: `${siteUrl}${pathname}`,
      }
      return (
        <Helmet title={seo.title}>
          <html lang="fr" />
          <meta name="description" content={seo.description} />
          <meta property="og:title" content={seo.title} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={seo.url} />
          <meta property="og:image" content={seo.image} />
          <meta property="og:description" content={seo.description} />
          <meta property="og:site_name" content={seo.title} />
          <meta property="facebook:pages" content="379074715831731" />
          <meta
            name="facebook-domain-verification"
            content="636vowt9sqrmn9cozx2j60ulc0r99s"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@leeto_benefits" />
          <meta name="twitter:title" content={seo.title} />
          <meta name="twitter:description" content={seo.description} />
          <meta name="twitter:creator" content="@leeto_benefits" />
          <meta name="twitter:image" content={`${seo.url}${imageTwitter}`} />
          <link rel="canonical" href={seo.url} />
        </Helmet>
      )
    }}
  />
)

export default SEO
