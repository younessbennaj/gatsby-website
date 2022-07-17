import React from 'react'

import Img from 'gatsby-image'
import PropTypes from 'prop-types'

import styles from './features.module.scss'

const Feature = ({ features }) => (
  <div className={styles.productFeatures}>
    {/* eslint-disable-next-line react/prop-types */}
    {features.map((feature, key) => (
      <div className={styles.productFeature} key={key}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h2 className={styles.title}>{feature.title}</h2>
            {feature.content.map((featureContent, key) => (
              <div key={key}>
                {featureContent.subtitle && (
                  <h3 className={styles.subtitle}>{featureContent.subtitle}</h3>
                )}

                {featureContent.description && (
                  <div className={styles.description}>
                    {featureContent.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.illustration}>
          <Img
            fluid={feature.illustration}
            className={styles.image}
            alt={feature.slug}
          />
        </div>
      </div>
    ))}
  </div>
)

Feature.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.shape({
        subtitle: PropTypes.string,
        description: PropTypes.string,
      }),
      illustration: PropTypes.string.isRequired,
      title: PropTypes.string,
    })
  ).isRequired,
}

export default Feature
