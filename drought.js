// @see https://github.com/garris/BackstopJ// @see https://github.com/garris/BackstopJS

const siteConfig = {
  live: "https://drought.ca.gov",
  test: "http://localhost:8080",
  pagesToTest: [
    { landing: '' }, // landing.njk
    { page: 'current-drought-conditions/' }, // page.njk
    { post: 'as-drought-conditions-deepen-governor-newsom-calls-on-californians-to-take-simple-actions-to-reduce-water-use-2/' }, // post.njk
    { singleColumn: 'water-saving-tips/' }, // single-column.njk
    { search: 'search/?q=drought' }, // search.njk
    { development: 'development-sample-page/'}, // development-sample-page.njk
  ],
  readySelectorToTest: "body"
}

module.exports = siteConfig;
