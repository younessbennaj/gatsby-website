import React from 'react'

import styles from './call-to-action-section.module.scss'

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
          formId: '35efca09-068a-4959-8eb2-9458710e7336',
          target: '#callToActionHubspotForm',
        })
      }
    })
  }

  render() {
    const {
      title = lg.components.call_to_action_section.title,
      description = lg.components.call_to_action_section.description,
    } = this.props

    return (
      <div className={styles.mSectionCta}>
        <div className={styles.content}>
          <h3>{title}</h3>
          <p>{description}</p>

          <div id="callToActionHubspotForm" />
        </div>
      </div>
    )
  }
}
