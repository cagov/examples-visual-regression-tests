// @see https://github.com/garris/BackstopJS

// Get URLs.
const liveURL = process.env.LIVE_SITE_URL.replace(/\/$/, "");
const multidevURL = process.env.MULTIDEV_SITE_URL.replace(/\/$/, "");
const site = process.env.SITE;
const phone = {
  name: "phone",
  width: 320,
  height: 480,
};
const desktop = {
  name: "desktop",
  width: 1920,
  height: 1080,
};
const desktopShort = {
  name: "desktopShort",
  width: 1220,
  height: 500,
};

const pagesToTest = [
  { landing: '' }, // landing.njk
  { event: '2021/12/06/cannabis-advisory-committee-meeting/' }, // event.njk
  { page: 'resources/rulemaking/' }, // page.njk
  { post: '2022/01/05/californias-cannabis-department-awards-nearly-100-million-in-grants-to-local-governments/' }, // post.njk
  { pressRelease: '2021/12/20/california-to-offer-financial-support-for-cannabis-equity-businesses-through-fee-waivers/' }, // press-release.njk
  { singleColunWide: 'about-us/dcc-events/' }, // single-column-wide.njk
  { search: 'serp/?q=cannabis' }, // search.njk
  { singleColumn: 'about-us/announcements/' }, // single-column.njk
];

let clickSelectorsToTest = [];
let keyPressSelectorsToTest = [];
let hoverSelectorsToTest = [];
let viewportsToTest = [phone, desktop];
let readySelectorToTest = "body";

// -------------
// Define scenario.
let scenariosToTest = [];
for (const pageToTest of pagesToTest) {
  const label = Object.keys(pageToTest)[0];
  const path = Object.values(pageToTest)[0];

  scenariosToTest.push({
    label: label,
    url: multidevURL + "/" + path,
    referenceUrl: liveURL + "/" + path,
    hideSelectors: [],
    removeSelectors: [],
    keyPressSelectors: keyPressSelectorsToTest,
    readySelector: readySelectorToTest,
    hoverSelectors: hoverSelectorsToTest,
    clickSelectors: clickSelectorsToTest,
    selectorExpansion: true,
    selectors: ["body"],
    readyEvent: null,
    delay: 7000,
    misMatchThreshold: 0.1,
  });
}

// Put it all together.
module.exports = {
  id: site,
  viewports: viewportsToTest,
  scenarios: scenariosToTest,
  paths: {
    bitmaps_reference: "backstop_data/bitmaps_reference",
    bitmaps_test: "backstop_data/bitmaps_test",
    engine_scripts: "backstop_data/engine_scripts",
    html_report: "backstop_data/html_report",
    ci_report: "backstop_data/ci_report",
  },
  report: ["browser", "CI"],
  engine: "puppeteer",
  engineOptions: {
    args: ["--no-sandbox"],
  },
  onReadyScript: "puppet/onReady.js",
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
  debug: false,
  debugWindow: false,
};
