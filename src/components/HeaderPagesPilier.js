import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import folder from '../assets/bannerVisuals/folder.png'

import styles from './navigation.module.scss'

const HeaderPagesPilier = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      parent: allContentfulPagePilier(filter: { isParent: { eq: true } }) {
        edges {
          node {
            id
            slug
            title
            descriptionHeader
            pictoHeader {
              fixed(width: 45) {
                src
              }
            }
          }
        }
      }

      children: allContentfulPagePilier(
        filter: { isParent: { ne: true } }
        sort: { order: ASC, fields: order }
      ) {
        edges {
          node {
            iconName
            id
            slug
            title
            descriptionHeader
            pictoHeader {
              fixed(width: 45) {
                src
              }
            }
          }
        }
      }
    }
  `)
  // This navigation is meant to work with only one parent
  const parent = data.parent.edges[0].node
  const children = data.children.edges
  return (
    <div className={`${styles.nav_dropdown} ${styles.item}`}>
      <Link to="/guide-cse" className={styles.linkMenu}>
        {parent.title}
      </Link>
      <div className={styles.nav__submenu}>
        <div className={styles.nav__submenu_parent}>
          <img src={folder} alt={parent.title} />
          <Link to={`/${parent.slug}`}>{parent.title}</Link>
          <p>{parent.descriptionHeader}</p>
        </div>
        <ul className={`${styles.nav__submenu_nav} ${styles.item}`}>
          {children.map(({ node }) => {
            return (
              <li key={node.title} className={styles.nav__submenu_item}>
                <Link to={`/${node.slug}`}>
                  <div className={styles.title}>
                    <span className="material-icons-round">
                      {node.iconName}
                    </span>
                    {node.title}
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default HeaderPagesPilier
