import React from 'react'

import Img from 'gatsby-image'
import PropTypes from 'prop-types'

import styles from './mSectionAssets.module.scss'

const MSectionAssets = ({ assets, title }) => (
  <div className={styles.wrapper}>
    <h2 className={styles.h3}>{title}</h2>

    <div className={styles.illustrationList}>
      {assets.map((asset, index) => (
        <div className={styles.listElement} key={asset.title}>
          <Img
            className={styles.image}
            fluid={asset.illustration}
            alt={`asset-${index}`}
          />
          <p className={styles.imageDescription}>{asset.title}</p>
        </div>
      ))}
    </div>
  </div>
)

MSectionAssets.defaultProps = {
  title: null,
}

MSectionAssets.propTypes = {
  assets: PropTypes.arrayOf(
    PropTypes.shape({
      illustration: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string,
}

export default MSectionAssets
