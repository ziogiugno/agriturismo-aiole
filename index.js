var Metalsmith = require('metalsmith');
var collections = require('metalsmith-collections');
var assets = require('metalsmith-assets');
var inplace = require('metalsmith-in-place');
var date = require('metalsmith-build-date');
var filenames = require('metalsmith-filenames');

Metalsmith(__dirname)
  .metadata({
    site: {
      title: 'Agriturismo Aiole',
      url: 'http://www.agriturismo-aiole.com/'
    }
  })
  .clean(false)
  .source('./src')
  .destination('./out')
  .use(date({ key: 'lastmod'}))
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
  .use(inplace({
    engine: "swig",
  }))
  .use(assets({
    source: "./assets"
  }))
  .build(function(err, files) {
    if (err) throw err;
  });;