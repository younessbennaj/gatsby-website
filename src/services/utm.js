export const isBrowser = () => typeof window !== 'undefined'

export const getUtms = () =>
  isBrowser() && window.localStorage.getItem('original_utms')
    ? JSON.parse(window.localStorage.getItem('original_utms'))
    : {}

export const setUtms = utms =>
  window.localStorage.setItem('original_utms', JSON.stringify(utms))
