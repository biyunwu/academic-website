const SitemapGenerator = require('sitemap-generator');

// create generator
const generator = SitemapGenerator('https://taojiangscholar.com', {
    stripQuerystring: false,
    maxDepth: 3,
    filepath: './sitemap.xml',
    maxEntriesPerFile: 50000
});

// register event listeners
generator.on('done', () => {
    console.log('DONE!');
    // sitemaps created
});

generator.on('error', (error) => {
    console.log(error);
    // => { code: 404, message: 'Not found.', url: 'http://example.com/foo' }
});

// start the crawler
generator.start();