require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: process.env.CONTENTFUL_HOST,
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  )
}

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://www.leeto.co',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const isNetlifyProduction = NETLIFY_ENV
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

module.exports = {
  siteMetadata: {
    siteUrl,
    title: 'Leeto | Améliorez le bien-être de vos salariés',
    description:
      "Leeto modernise les comités d'entreprise en développant une plateforme SaaS simple et intuitive pour gérer les avantages salariés",
  },
  pathPrefix: '/gatsby-contentful-starter',
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    'gatsby-plugin-mdx',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-force-trailing-slashes',
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        duration: 0,
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['material icons', 'material icons round'],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: './src/assets/favicon.ico',
        name: 'Leeto',
        short_name: 'Leeto',
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Work+Sans:400,500,600,700'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-5BHKM65',

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: 'gatsby' },
      },
    },
    {
      // Plugin to create robot.txt file for us.
      // TODO Change policies for staging / preview / production
      // More info here: https://github.com/mdreizin/gatsby-plugin-robots-txt#netlify
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          master: {
            policy: [{ userAgent: '*' }],
            sitemap: 'https://www.leeto.co/sitemap.xml',
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: 'https://www.leeto.co/sitemap.xml',
            host: null,
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    'gatsby-plugin-calendly',
  ],
}
