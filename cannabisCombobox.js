// @see https://github.com/garris/BackstopJS

const siteConfig = {
  live: "https://headless.cannabis.ca.gov",
  test: "http://localhost:8081",
  pagesToTest: [
    { combobox: 'cannabis-laws/where-cannabis-business-is-legal-in-california/' }, 
  ],
  readySelectorToTest: "body"
}

module.exports = siteConfig;
