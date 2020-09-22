//const withCSS = require('@zeit/next-css')
//
//module.exports = withCSS({
//  cssLoaderOptions: {
//    url: false
//  }
//});

const withImages = require('next-images');
module.exports = withImages();

const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
  /* config for next-optimized-images */

  // your config for other plugins or the general next.js here...
});