import React from 'react'

import Container from './container'
import Navigation from './navigation'
import Footer from './footer'
import Banner from './banner'
import { setUtms } from '../services/utm'
import '@fortawesome/fontawesome-svg-core/styles.css'

import styles from './layout.module.scss'

class Template extends React.Component {
  state = {
    displayBanner: false,
  }

  componentDidMount() {
    window.addEventListener('message', this.listener)
    const params = new URLSearchParams(location.search)
    if (
      params.get('utm_source') ||
      params.get('utm_medium') ||
      params.get('utm_campaign') ||
      params.get('gclid')
    ) {
      setUtms({
        gclid: params.get('gclid'),
        utm_source: params.get('utm_source'),
        utm_medium: params.get('utm_medium'),
        utm_campaign: params.get('utm_campaign'),
      })
    }
    this.setState({ displayBanner: false })
  }

  componentWillUnmount() {
    window.removeEventListener('message', this.listener)
  }

  listener = e => {
    if (
      e.data.event &&
      e.data.event.indexOf('calendly') === 0 &&
      window.analytics
    ) {
      console.log('calendlyEvent')
      switch (e.data.event) {
        case 'calendly.event_type_viewed':
          return window.analytics.track('Calendly Event Type Viewed')
        case 'calendly.date_and_time_selected':
          return window.analytics.track('Calendly Date And Time Selected')
        case 'calendly.event_scheduled':
          return window.analytics.track('Calendly Event Scheduled')
        default:
          return window.analytics.track('Calendly Event')
      }
    }
  }

  render() {
    const { location, children } = this.props
    const { displayBanner } = this.state

    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = `${__PATH_PREFIX__}/`
    }

    return (
      <Container>
        {displayBanner && (
          <Banner
            text={
              <>
                NOUVEAU :{' '}
                <a
                  style={{ color: 'white' }}
                  href="https://www.leeto.co/blog/leeto-rejoint-groupe-up/"
                >
                  Leeto rejoint le Groupe Up
                </a>{' '}
                🎉
              </>
            }
            to="/plateforme-cse/compte-pro"
            target="_blank"
          />
        )}
        <Navigation location={location} isTopBannerActive={displayBanner} />
        <div className={displayBanner ? styles.topBannerActive : ''}>
          {children}
        </div>
        <Footer />
      </Container>
    )
  }
}

export default Template
