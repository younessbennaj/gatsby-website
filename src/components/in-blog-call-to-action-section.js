import React from 'react'
import { navigate } from 'gatsby'
import AButtonPrimaryEnabled from './button'

import styles from './in-blog-call-to-action-section.module.scss'

import lg from '../../static/locales/fr/translation.json'

export default class extends React.Component {
  state = {
    phoneNumber: '',
    'bot-field': '',
  }

  render() {
    const { phoneNumber } = this.state

    const encode = data => {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    }

    const handleBlur = () => {
      if (window.analytics) {
        window.analytics.track('Contact Express In Blog Form Input Blurred', {
          phoneNumber,
        })
      }
    }

    const handleChange = e => {
      const {
        target: { name, value },
      } = e
      this.setState({ [name]: value })
    }

    const handleSubmit = e => {
      // Netlify
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact-express-in-blog', ...this.state }),
      })
        .then(() => {
          // navigate('/merci')
        })
        .catch(error => console.log(error))

      // Segment
      if (window.analytics) {
        window.analytics.track('Contact Express In Blog Form Submitted', {
          phoneNumber,
        })

        window.analytics.identify({ phoneNumber })
      }

      // GA
      if (window.ga) {
        window.ga('create', 'UA-124722883-1', 'auto')
        window.ga(
          'send',
          'event',
          'Form',
          'Submitted',
          'Contact Express In Blog Form Submitted'
        )
      }

      e.preventDefault()
    }
    return (
      <div className={styles.mSectionCta}>
        <div className={styles.content}>
          <h3>{lg.components.in_blog_call_to_action_section.title}</h3>
          <p>{lg.components.in_blog_call_to_action_section.description}</p>
          <form
            onSubmit={e => handleSubmit(e)}
            className={styles.mFormSinglePrimary}
            name="contact-express-in-blog"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input
              type="hidden"
              name="form-name"
              value="contact-express-in-blog"
            />
            {/* Honeypot field, do not remove */}
            <input className={styles.input} name="bot-field" />
            <input
              value={this.state.phoneNumber}
              onChange={e => handleChange(e)}
              className={styles.input}
              type="tel"
              pattern="[0]{1}[0-9]{9}"
              required
              name="phoneNumber"
              onBlur={() => handleBlur()}
              placeholder={
                lg.components.in_blog_call_to_action_section.placeholder
              }
            />
            <AButtonPrimaryEnabled type="submit">
              {lg.components.in_blog_call_to_action_section.button}
            </AButtonPrimaryEnabled>
          </form>
        </div>
      </div>
    )
  }
}
