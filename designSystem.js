// @see https://github.com/garris/BackstopJS

const siteConfig = {
  live: "https://designsystem.webstandards.ca.gov",
  test: "http://localhost:8080",
  pagesToTest: [
    { componentIndex: 'components/' },
    // { landing: '' }, template not in use.
    // { page: '' }, template not in use.
    { singleColumn: 'principles/' },
    { home: '' },
    { getStarted: 'get-started/' },
    { backToTop: 'components/back-to-top/readme/' },
    { icons: 'components/icons/readme/' },
    { about: 'about/' },
    { styleGuides: 'style/content/' },
    { design: 'style/design/' },

  ],
  readySelectorToTest: "body"
}

module.exports = siteConfig;
