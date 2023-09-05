// @see https://github.com/garris/BackstopJS

const siteConfig = {
  live: "https://innovation.ca.gov",
  test: "http://localhost:8080",
  pagesToTest: [
    { home: '' },
    { page: 'who-we-are/our-vision/' },
    { project: 'our-work/projects/getting-compensation-to-more-california-crime-victims/' }, 
    { blogindex: 'blog/' }, 
    { blogarticle: 'blog/posts/helping-californians-have-a-voice-in-toxic-cleanup-projects/' }, 
    { notFound: 'snertfoodle' }, // 404
  ],
  readySelectorToTest: "body"
}

module.exports = siteConfig;
