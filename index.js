var Metalsmith = require('metalsmith');
var collections = require('metalsmith-collections');
var serve = require('metalsmith-serve');
var watch = require('metalsmith-watch');
var assets = require('metalsmith-assets');
var inplace = require('metalsmith-in-place');
var date = require('metalsmith-build-date');
var filenames = require('metalsmith-filenames');
var sitemap = require('metalsmith-mapsite');

Metalsmith(__dirname)
  .metadata({
    site: {
      title: 'Agriturismo Aiole',
      url: 'http://www.agriturismo-aiole.com/'
    }
  })
  .clean(true)
  .source('./src')
  .destination('./out')
  .use(date())
  .use(filenames())
  .use(collections({
    it_pages: {
      sortBy: 'menu_order',
      refer: false,
      metadata: {
          lang: 'it',
          language: 'Italiano'
      }
    },
    de_pages: {
      pattern: '*.de.html',
      sortBy: 'menu_order',
      refer: false,
      metadata: {
          lang: 'de',
          language: 'Deutsch'
      }
    },
    fr_pages: {
      pattern: '*.fr.html',
      sortBy: 'menu_order',
      refer: false,
      metadata: {
          lang: 'fr',
          language: 'Français'
      }
    },
    en_pages: {
      pattern: '*.en.html',
      sortBy: 'menu_order',
      refer: false,
      metadata: {
          lang: 'en',
          language: 'English'
      }
    }
  }))
  // .use(function(files, metalsmith, done) {
  //   console.log('Files: ');
  //   console.log(Object.getOwnPropertyNames(files));
  //   console.log('Metalsmith: ');
  //   console.log(metalsmith);
  //   done();
  // })
  .use(inplace({
    engine: "swig",
  }))
  .use(assets({
    source: "./assets"
  }))
  .use(sitemap({
    hostname: 'http://www.agriturismo-aiole.com',
    changefreq: 'monthly',
    lastmod: new Date()    
  }))
  .use(serve({
    port: 8080,
    verbose: true
  }))
  .use(
    watch({
      paths: {
        "${source}/**/*": true,
        "templates/**/*": "**/*",
        "assets/aiole.css": true
      },
      livereload: true,
    })
  )  
  .build(function(err, files) {
    if (err) throw err;
  });;