// @see https://github.com/garris/BackstopJS

const siteConfig = {
  live: "https://abortion.ca.gov/",
  test: "http://127.0.0.1:8080",
  pagesToTest: [
    { home: '' }, 
    { findAProvider: 'find-a-provider' },
    { 404: '404/' },
    { ourPartners: 'our-partners' },
    { privacyPolicy: 'privacy-policy' },
  ],
  readySelectorToTest: "body"
}

module.exports = siteConfig;
