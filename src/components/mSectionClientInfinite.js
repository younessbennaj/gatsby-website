import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Slider from 'react-slick'

import styles from './mSectionClientInfinite.module.scss'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

const settings = slidesToShow => {
  return {
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    arrows: false,
    dots: false,
  }
}

export default ({
  numberOfClients = 20,
  clientsStyle = styles.clients,
  clientStyle = styles.client,
  titleStyle = styles.title,
  title = 'Leur CSE nous font confiance',
}) => (
  <StaticQuery
    query={graphql`
      query ClientsInfiniteQuery {
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
          <Slider
            infinite
            speed={3000}
            slidesToShow={6}
            slidesToScroll={1}
            autoplaySpeed={0}
            autoplay
            cssEase="linear"
            pauseOnHover={false}
            responsive={[
              {
                breakpoint: 1300,
                settings: settings(6),
              },
              {
                breakpoint: 1100,
                settings: settings(4),
              },
              {
                breakpoint: 700,
                settings: settings(4),
              },
              {
                breakpoint: 480,
                settings: settings(3),
              },
            ]}
          >
            {data.allContentfulClient.edges
              .slice(0, numberOfClients)
              .map(({ node }) => (
                <div key={node.id}>
                  <div className={styles.client}>
                    <img
                      className={styles.logo}
                      alt={node.logo.title}
                      src={node.logo.file.url}
                    />
                  </div>
                </div>
              ))}
          </Slider>
        </div>
      </>
    )}
  />
)
