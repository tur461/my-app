'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('custom-plugin')
      .service('myService')
      .getWelcomeMessage();
  },
};
