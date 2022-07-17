import React, { useState, useEffect, useRef } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Slider from 'react-slick'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/layout'
import styles from './pilier-template.module.scss'
import SEO from '../components/seo'

import { AnchorLink } from 'gatsby-plugin-anchor-links'

import { BLOCKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import slugify from '../utilities/slugify'

import iconIndustry from '../assets/testimonialPostIcons/icon-industry.svg'
import iconBenefits from '../assets/testimonialPostIcons/icon-computer.svg'
import iconEmployees from '../assets/testimonialPostIcons/icon-profil-user.svg'

import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

export const sidebarAnchorsoptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => null,
    [BLOCKS.HEADING_2]: (node, children) => {
      const slug = slugify(children[0])
      return (
        <AnchorLink to={`#${slug}`} className={styles.sidebarTitle}>
          {children}
        </AnchorLink>
      )
    },
    [BLOCKS.HEADING_3]: (node, children) => {
      const slug = slugify(children[0])
      return (
        <AnchorLink to={`#${slug}`} className={styles.sidebarSubTitle}>
          {children}
        </AnchorLink>
      )
    },

    [BLOCKS.HEADING_4]: (node, children) => null,
    [BLOCKS.HEADING_5]: (node, children) => null,
    [BLOCKS.HEADING_6]: (node, children) => null,
    [BLOCKS.UL_LIST]: (node, children) => null,
    [BLOCKS.OL_LIST]: (node, children) => null,
    [BLOCKS.HR]: (node, children) => null,
    [BLOCKS.QUOTE]: (node, children) => null,
    [BLOCKS.EMBEDDED_ENTRY]: (node, children) => null,
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => null,
  },
}
export const mainContentOptions = {
  renderNode: {
    [BLOCKS.HEADING_2]: (node, children, key) => {
      const slug = slugify(children[0])
      return (
        <h2 data-item={`${slug}`} className="js--anchor">
          <span id={`${slug}`}></span>
          {children}
        </h2>
      )
    },
    [BLOCKS.HEADING_3]: (node, children) => {
      const slug = slugify(children[0])
      return (
        <h3 data-item={`${slug}`} className="js--anchor">
          <span id={`${slug}`}></span>
          {children}
        </h3>
      )
    },
  },
}

const PilierTemplate = ({ data, location }) => {
  const siteMetadata = data.site.siteMetadata
  const page = data.contentfulPagePilier
  const parent = data.parentPilierBreadcrumb.edges[0].node
  const childrenMenu = data.childrenPilierMenu.edges

  // manage sticky sideBar
  const [isSticky, setSticky] = useState(false)
  const [reachedBottom, setReachedBottom] = useState(false)
  const ref = useRef(null)
  const sideBarRef = useRef(null)
  const mainContentRef = useRef(null)

  const handleScroll = () => {
    //handle sideBar STicky
    if (ref.current) {
      setReachedBottom(ref.current.getBoundingClientRect().bottom <= 750)

      setSticky(
        ref.current.getBoundingClientRect().top <= 150 &&
          ref.current.getBoundingClientRect().bottom >= 750
      )
    }

    //handle active links in Table of content
    let scrollDistance = 180
    const anchors =
      mainContentRef.current &&
      mainContentRef.current.querySelectorAll('.js--anchor')

    if (anchors && anchors.length > 0) {
      let currentId = ''

      anchors.forEach((anchor, k) => {
        if (anchor.getBoundingClientRect().top <= scrollDistance) {
          currentId = anchor.getAttribute('data-item')
        }
      })

      //remove active Class on all all links
      sideBarRef.current &&
        sideBarRef.current.querySelectorAll('a').forEach(link => {
          link.classList.remove(styles.activeLink)
        })

      // add active class on current active Link
      const currentActiveLink =
        sideBarRef.current &&
        sideBarRef.current.querySelector(`[href*="#${currentId}"]`)
      currentActiveLink && currentActiveLink.classList.add(styles.activeLink)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    // Slider.unslick()

    return () => {
      window.removeEventListener('scroll', () => handleScroll)
    }
  }, [])

  const sliderSettings = {
    infinite: true,
    arrows: false,
    dots: false,
    pauseOnHover: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
    autoPlaySpeed: 2000,
  }

  const childrenMenuItems =
    childrenMenu &&
    childrenMenu.map(({ node }, key) => {
      return (
        <Link
          key={key}
          to={`/${node.slug}`}
          className={styles.pageHeader__link}
        >
          {node.title}
          <img src={node.pictoParentMenu.fixed.src} alt={node.title} />
        </Link>
      )
    })

  return (
    <Layout location={location}>
      <SEO
        pathname={location.pathname}
        title={`${page.seoMetaTitle}`}
        description={page.seoMetaDescription}
      />
      <div className={styles.container}>
        <section className={styles.pageHeader}>
          {!page.isParent ? (
            <div className={styles.breadcrumb}>
              <Link to={`/${parent.slug}`}>{parent.title}</Link> >{' '}
              <p>{page.title}</p>
            </div>
          ) : null}
          <h1 className={styles.pageTitle}>{page.title}</h1>
          {page.isParent ? (
            <>
              <div className={styles.pageHeader__childrenMenu}>
                {childrenMenuItems}
              </div>
              <div className={styles.pageHeader__childrenMenuMobile}>
                <Slider
                  infinite
                  speed={500}
                  slidesToShow={1}
                  slidesToScroll={1}
                  autoplaySpeed={3000}
                  autoplay
                  cssEase="ease-out"
                  pauseOnHover={true}
                >
                  {childrenMenuItems}
                </Slider>
              </div>
            </>
          ) : null}
        </section>
        <div className={`${styles.pageContent}`} ref={ref}>
          <aside
            className={`${styles.sideBar} ${styles.stickyWrapper} ${
              isSticky ? styles.sticky : ''
            } ${reachedBottom ? styles.bottomSideBar : ''}`}
          >
            {console.log(
              reachedBottom,
              `${styles.sideBar} ${styles.stickyWrapper} ${
                isSticky ? styles.sticky : ''
              } ${reachedBottom ? styles.bottomSideBar : ''}`
            )}
            <div
              className={`${styles.sideBarContainer} ${styles.stickyInner}`}
              ref={sideBarRef}
            >
              {documentToReactComponents(
                page.pageContent.json,
                sidebarAnchorsoptions
              )}
            </div>
          </aside>
          <main className={styles.mainContent} ref={mainContentRef}>
            {documentToReactComponents(
              page.pageContent.json,
              mainContentOptions
            )}
          </main>
        </div>
      </div>
    </Layout>
  )
}

export default PilierTemplate

export const pageQuery = graphql`
  query PilierPageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    contentfulPagePilier(slug: { eq: $slug }) {
      slug
      title
      seoMetaDescription
      seoMetaTitle
      isParent
      pageContent {
        json
      }
    }

    parentPilierBreadcrumb: allContentfulPagePilier(
      filter: { isParent: { eq: true } }
    ) {
      edges {
        node {
          slug
          title
        }
      }
    }

    childrenPilierMenu: allContentfulPagePilier(
      filter: { isParent: { ne: true } }
      sort: { order: ASC, fields: order }
    ) {
      edges {
        node {
          id
          slug
          title
          pictoParentMenu {
            fixed(width: 48) {
              src
            }
          }
        }
      }
    }
  }
`
