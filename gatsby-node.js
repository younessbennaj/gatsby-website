const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const TestimonialPost = path.resolve('./src/templates/testimonial-post.js')
    const BlogPost = path.resolve('./src/templates/blog-post.js')
    const PilierTemplate = path.resolve('./src/templates/pilier-template.js')
    resolve(
      graphql(
        `
          {
            allContentfulTestimonial {
              edges {
                node {
                  slug
                }
              }
            }
            allContentfulPagePilier {
              edges {
                node {
                  slug
                }
              }
            }
            allContentfulBlogArticle {
              edges {
                node {
                  slug
                  author {
                    name
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const testimonial = result.data.allContentfulTestimonial.edges
        testimonial.forEach((post, index) => {
          createPage({
            path: `/temoignages-clients/${post.node.slug}/`,
            component: TestimonialPost,
            context: {
              slug: post.node.slug,
            },
          })
        })

        const piliers = result.data.allContentfulPagePilier.edges
        piliers.forEach((post, index) => {
          createPage({
            path: `/${post.node.slug}/`,
            component: PilierTemplate,
            context: {
              slug: post.node.slug,
            },
          })
        })

        const blogPost = result.data.allContentfulBlogArticle.edges
        blogPost.forEach((post, index) => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: BlogPost,
            context: {
              slug: post.node.slug,
              authorName: post.node.author.name,
            },
          })
        })
      })
    )
  })
}
