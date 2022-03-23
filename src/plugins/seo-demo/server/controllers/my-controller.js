'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('seo_demo')
      .service('myService')
      .getWelcomeMessage();
  },
};
