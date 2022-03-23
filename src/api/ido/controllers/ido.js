'use strict';

/**
 *  ido controller
 */



const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::ido.ido',({ strapi }) => ({
    async findAll(ctx) {
      const entries = await strapi.db.query("api::ido.ido").findMany();
      ctx.body = entries;
    },
    async findOne(ctx){
      const {id} = ctx.params
      const entries = await strapi.db.query('api::ido.ido').findMany({
        where: {
         id : id,
        },
      });
      ctx.body = entries;
    }
  }));
