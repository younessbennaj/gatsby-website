import React from 'react'

// import pressLogos from '../assets/press-logo/icon-industry.svg'

import styles from './pressSection.module.scss'
import lg from '../../static/locales/fr/translation.json'

// Util to get all the svgs from the functionalitiesIcons folder
const reqSvgs = require.context('../assets/press-logo', true, /\.png$/)
const paths = reqSvgs.keys()
const pressLogos = paths.map(path => ({
  name: path.match(/.\/(.*)?\.png$/)[1],
  src: reqSvgs(path),
}))

export default () => (
  <div className={styles.container}>
    <div className={styles.quote}>{lg.components.pressSection.quote}</div>
    <div className={styles.video}>
      <iframe
        width="560"
        height="315"
        title="Arthur Good Morning BFM"
        src="https://www.youtube.com/embed/YoGKfTUKswY"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
    <p className={styles.title}>{lg.components.pressSection.title}</p>
    <div className={styles.media}>
      {pressLogos.map((logo, k) => (
        <div className={styles.medium} key={k}>
          <img className={styles.logo} src={logo.src} alt={logo.name} key={k} />
        </div>
      ))}
    </div>
  </div>
)
