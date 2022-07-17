import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styles from './navigation.module.scss'
import MobileNavDropDown from './MobileNavDropDown'

const HeaderPagesPilierMobile = ({ pathname }) => {
  const data = useStaticQuery(graphql`
    query {
      parentMobile: allContentfulPagePilier(
        filter: { isParent: { eq: true } }
      ) {
        edges {
          node {
            id
            slug
            title
          }
        }
      }

      childrenMobile: allContentfulPagePilier(
        filter: { isParent: { ne: true } }
      ) {
        edges {
          node {
            id
            slug
            title
          }
        }
      }
    }
  `)
  // This navigation is meant to work with only one parent
  const parent = data.parentMobile.edges[0].node
  const children = data.childrenMobile.edges
  return (
    <MobileNavDropDown title={parent.title} slug={parent.slug}>
      {children.map(({ node }, key) => {
        return (
          <li key={key}>
            <Link
              to={`/${node.slug}`}
              className={styles.item}
              activeClassName={styles.active}
            >
              {node.title}
            </Link>
          </li>
        )
      })}
    </MobileNavDropDown>
  )
}

export default HeaderPagesPilierMobile
