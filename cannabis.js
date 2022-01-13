// @see https://github.com/garris/BackstopJS

const siteConfig = {
  live: "https://headless.cannabis.ca.gov",
  test: "http://localhost:8081",
  pagesToTest: [
    { landing: '' }, // landing.njk
    { event: '2021/12/06/cannabis-advisory-committee-meeting/' }, // event.njk
    { page: 'resources/rulemaking/' }, // page.njk
    { post: '2022/01/05/californias-cannabis-department-awards-nearly-100-million-in-grants-to-local-governments/' }, // post.njk
    { pressRelease: '2021/12/20/california-to-offer-financial-support-for-cannabis-equity-businesses-through-fee-waivers/' }, // press-release.njk
    { singleColunWide: 'about-us/dcc-events/' }, // single-column-wide.njk
    { search: 'serp/?q=cannabis' }, // search.njk
    { singleColumn: 'about-us/announcements/' }, // single-column.njk
  ],
  readySelectorToTest: "body"
}

module.exports = siteConfig;
