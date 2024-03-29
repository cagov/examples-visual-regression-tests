// @see https://github.com/garris/BackstopJS

// Get environment variables from ./.env
require("dotenv").config();
const site = process.env.SITE;

const siteConfig = require(`./${site}.js`);


// Get URLs.
const liveURL = siteConfig.live.replace(/\/$/, "");
const multidevURL = siteConfig.test.replace(/\/$/, "");

// Get screens.
const phone = {
  name: "phone",
  width: 380,
  height: 480,
};
const desktop = {
  name: "desktop",
  width: 1920,
  height: 1080,
};


let clickSelectorsToTest = [];
let keyPressSelectorsToTest = [];
let hoverSelectorsToTest = [];
let viewportsToTest = [phone, desktop];
let pagesToTest = siteConfig.pagesToTest;
let readySelectorToTest = siteConfig.readySelectorToTest;

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
    selectors: ["document", "viewport"],
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
    bitmaps_reference: `backstop_data/bitmaps_reference/${site}`,
    bitmaps_test: "backstop_data/bitmaps_test",
    engine_scripts: "backstop_data/engine_scripts",
    html_report: `backstop_data/html_report/${site}`,
    ci_report: "backstop_data/ci_report",
  },
  report: ["browser", "CI"],
  engine: "playwright",
  engineOptions: {
    args: ["--no-sandbox"],
    browser: "webkit"
  },
  onReadyScript: "playwright/onReady.js",
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
  debug: false,
  debugWindow: false,
};
