import React, { Fragment } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookSquare,
  faTwitterSquare,
  faLinkedin,
  faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons'
import styles from './footer.module.scss'

import lg from '../../static/locales/fr/translation.json'

export default () => {
  // menu pages piliers from Contentful
  const data = useStaticQuery(graphql`
    query {
      parentFooter: allContentfulPagePilier(
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

      childrenFooter: allContentfulPagePilier(
        filter: { isParent: { ne: true } }
        sort: { order: ASC, fields: order }
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
  const parent = data.parentFooter.edges[0].node
  const children = data.childrenFooter.edges
  return (
    <footer className={styles.mSectionFooter}>
      <div className={styles.mainFooter}>
        <div className={`${styles.col} ${styles.col1}`}>
          <div className={styles.title}>{lg.components.footer.col1Title}</div>
          <div className={styles.description}>
            {lg.components.footer.acpr_legal}
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.title}>
            <Link to="/plateforme-cse">{lg.components.footer.col2Title}</Link>
          </div>
          {lg.components.footer.platform.map((service, i) => (
            <Fragment key={i}>
              <Link className={styles.link} to={`/${service.slug}`}>
                {service.name}
              </Link>
              <br />
            </Fragment>
          ))}
          <div className={styles.title}>
            <Link to="/solutions-rh-dirigeants">
              {lg.components.footer.col2Title2}
            </Link>
          </div>
          <div className={styles.title}>
            <Link to="/tarifs">{lg.components.footer.col2Title3}</Link>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.title}>
            <Link to={`/${parent.slug}`}>{parent.title}</Link>
          </div>
          {children.map(({ node }, key) => {
            return (
              <Fragment key={key}>
                <Link to={`/${node.slug}`} className={styles.link}>
                  {node.title}
                </Link>
                <br />
              </Fragment>
            )
          })}
        </div>
        <div className={styles.col}>
          <div className={styles.title}>{lg.components.footer.col4Title}</div>
          {lg.components.footer.functionalities.map((functionality, i) => (
            <Fragment key={i}>
              {functionality.link ? (
                <a
                  className={styles.link}
                  target="_blank"
                  rel="noreferrer"
                  href={functionality.link}
                >
                  {functionality.name}
                </a>
              ) : (
                <Link className={styles.link} to={`/${functionality.slug}`}>
                  {functionality.name}
                </Link>
              )}

              <br />
            </Fragment>
          ))}
        </div>
        <div className={styles.col}>
          <div className={styles.title}>{lg.components.footer.col5Title}</div>
          <Link className={styles.link} to="/press-kit/">
            {lg.components.footer.press}
          </Link>
          <br />

          <a
            className={styles.link}
            href="https://www.welcometothejungle.co/fr/companies/leeto"
            target="_blank"
            rel="noreferrer noopener"
          >
            {lg.components.footer.job}
          </a>
          <br />

          <a
            className={styles.link}
            href="https://help.leeto.co/fr/"
            target="_blank"
            rel="noreferrer noopener"
          >
            {lg.components.footer.faq}
          </a>
          <br />

          <Link className={styles.link} to="/contact/">
            {lg.components.footer.contact}
          </Link>
        </div>
      </div>
      <hr />
      <div className={styles.bottomFooter}>
        <div className={styles.left}>
          <Link className={styles.link} to="/politique-de-confidentialite/">
            {lg.components.footer.privacy}
          </Link>
          <Link
            className={styles.link}
            to="/conditions-generales-dutilisation-du-site/"
          >
            {lg.components.footer.gcu}
          </Link>
          <Link className={styles.link} to="/mentions-legales/">
            {lg.components.footer.legal}
          </Link>
        </div>
        <div className={styles.right}>
          <a
            href="https://www.facebook.com/leeto.benefits/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookSquare} />
          </a>
          <a
            href="https://twitter.com/leeto_benefits"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTwitterSquare} />
          </a>
          <a
            href="https://www.instagram.com/leeto_benefits/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagramSquare} />
          </a>

          <a
            href="https://www.linkedin.com/company/leeto-hq/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </footer>
  )
}
