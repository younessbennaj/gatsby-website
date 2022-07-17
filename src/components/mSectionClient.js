import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import styles from './mSectionClient.module.scss'

export default ({
  numberOfClients = 5,
  clientsStyle = styles.clients,
  clientStyle = styles.client,
  titleStyle = styles.title,
  title = 'Leur CSE nous font confiance',
}) => (
  <StaticQuery
    query={graphql`
      query ClientsQuery {
        allContentfulClient(sort: { fields: order }) {
          edges {
            node {
              id
              name
              logo {
                title
                file {
                  url
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <p className={titleStyle}>{title}</p>
        <div className={clientsStyle}>
          {data.allContentfulClient.edges
            .slice(0, numberOfClients)
            .map(({ node }) => (
              <div key={node.id} className={clientStyle}>
                <img
                  className={styles.logo}
                  alt={node.logo.title}
                  src={node.logo.file.url}
                />
              </div>
            ))}
        </div>
      </>
    )}
  />
)
