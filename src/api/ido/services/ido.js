'use strict';

/**
 * ido service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ido.ido',({strapi})=>{
    
    console.log('request received');

});


module.exports = createCoreService('api::ido.custom-controller')