const {
  useFacebookConversionApi,
} = require('./src/hooks/useFacebookConversionApi')

exports.onRouteUpdate = ({ location }) => {
  window.analytics && window.analytics.page && window.analytics.page()

  // Send events to Facebook (server-side)
  useFacebookConversionApi(location)
}
