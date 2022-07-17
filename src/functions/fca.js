const axios = require('axios')

/**
 * Netlify Function to send events,
 * like a page view, to the Facebook Conversion API
 * @param {Object} event
 */
exports.handler = async event => {
  let requestBody
  let eventSuccessfullySent = false

  try {
    requestBody = JSON.parse(event.body)
    // eslint-disable-next-line no-empty
  } catch (error) {}

  if (requestBody) {
    // eslint-disable-next-line camelcase
    const { event_name, event_source_url } = requestBody

    await axios
      .post(
        `https://graph.facebook.com/v13.0/${process.env.FACEBOOK_CONVERSION_API_PIXEL_ID}/events?access_token=${process.env.FACEBOOK_CONVERSION_API_ACCESS_TOKEN}`,
        {
          data: [
            {
              event_name,
              event_source_url,
              event_time: Math.floor(new Date().getTime() / 1000),
              user_data: {
                client_user_agent: event.headers['user-agent'],
                client_ip_address: event.headers['x-nf-client-connection-ip'],
              },
              action_source: 'website',
            },
          ],
        }
      )
      .then(() => {
        eventSuccessfullySent = true
      })
  }

  return {
    statusCode: eventSuccessfullySent ? 200 : 404,
  }
}
