import axios from 'axios'

export const useFacebookConversionApi = location => {
  const trackingEnabled = false
  const netlifyFunctionEndpoint = '/.netlify/functions/fca'

  if (!trackingEnabled) {
    return false
  }

  if (location.pathname === '/demande-demo/') {
    // Paiement initié
    axios.post(netlifyFunctionEndpoint, {
      event_name: 'Paiement initié',
      event_source_url: location.href,
    })
  } else {
    // PageView
    axios.post(netlifyFunctionEndpoint, {
      event_name: 'PageView',
      event_source_url: location.href,
    })
  }
}
