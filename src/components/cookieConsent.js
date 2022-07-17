import React, { useState } from 'react'
import lg from '../../static/locales/fr/translation.json'
import cookieConsent from './cookieConsent.scss'

export default () => {
  const [trackingConsent, setTrackingConsent] = useState(true)
  const [adConsent, setAdConsent] = useState(true)

  return (
    <div className="gdpr-banner js-gdpr-banner hide" id="js-gdpr-banner">
      <div className="gdpr-banner-content js-gdpr-banner-content">
        <div className="gdpr-banner-text">
          En poursuivant votre navigation sur ce site, vous acceptez
          l’utilisation de cookies destinés à améliorer la performance de ce
          site, à en adapter les fonctionnalités.{' '}
          <button className="gdpr-banner-params clickable js-gdpr-banner-expand">
            En savoir plus
          </button>
        </div>
        <div className="gdpr-banner-actions">
          <div className="gdpr-banner-cta js-gdpr-banner-allow">Accepter</div>
        </div>
      </div>
      <div className="gdpr-banner-more js-gdpr-banner-more hide">
        <div className="gdpr-banner-fct-cookies gdpr-checkbox">
          <input type="checkbox" checked={true} disabled />
          <label>
            <div className="h5 consent-name">
              Cookie de fonctionnement <i>(obligatoires)</i>
            </div>
            <p className="consent-description">
              Ces cookies garantissent le bon fonctionnement du site Leeto et
              permettent son optimisation. Le site Web ne peut pas fonctionner
              correctement sans ces cookies.
            </p>
            <span className="lever js-gdpr-banner-fct-consent-lever"></span>
          </label>
        </div>
        <div className="gdpr-banner-tracking-cookies gdpr-checkbox">
          <input
            className="js-gdpr-banner-tracking-consent"
            type="checkbox"
            onChange={() => setTrackingConsent(!trackingConsent)}
            id="js-gdpr-banner-tracking-consent"
            checked={trackingConsent}
            value={trackingConsent}
          />
          <label htmlFor="js-gdpr-banner-tracking-consent">
            <div className="h5 consent-name">Cookie d'analytics</div>
            <p className="consent-description">
              Ces cookies permettent d’obtenir des statistiques de fréquentation
              anonymes du site Leeto afin d’optimiser son ergonomie, sa
              navigation et ses contenus. En désactivant ces cookies, nous ne
              pourrons pas analyser le trafic du site Leeto.
            </p>
            <span className="lever js-gdpr-banner-tracking-consent-lever"></span>
          </label>
        </div>
        <div className="gdpr-banner-ad-cookies gdpr-checkbox">
          <input
            className="js-gdpr-banner-ad-consent"
            type="checkbox"
            onChange={() => setAdConsent(!adConsent)}
            id="js-gdpr-banner-ad-consent"
            checked={adConsent}
            value={adConsent}
          />
          <label htmlFor="js-gdpr-banner-ad-consent">
            <div className="h5 consent-name">Cookie Publicitaires</div>
            <p className="consent-description">Publicité</p>
            <span className="lever js-gdpr-banner-ad-consent-lever"></span>
          </label>
        </div>
        <div className="gdpr-banner-cta js-gdpr-banner-save">Enregistrer</div>
      </div>
    </div>
  )
}
