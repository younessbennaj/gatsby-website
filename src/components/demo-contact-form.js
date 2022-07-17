import React from 'react'

import styles from './demo-contact-form.module.scss'

import lg from '../../static/locales/fr/translation.json'

export default class extends React.Component {
  componentDidMount() {
    const script = document.createElement('script')
    script.src = 'https://js.hsforms.net/forms/v2.js'
    document.body.appendChild(script)

    script.addEventListener('load', () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: 'eu1',
          portalId: '25191803',
          formId: '9be79d51-f26a-4fe1-a84c-857fd9d96049',
          target: '#hubspotForm',
        })
      }
    })
  }

  render() {
    return (
      <div className={styles.contactForm} id="demo-contact">
        <div className={styles.contactForm__title}>
          {lg.pages.avantages.form.title}
        </div>

        <div id="hubspotForm" />
      </div>
    )
  }
}
