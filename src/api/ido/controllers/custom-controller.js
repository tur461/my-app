const { createCoreController } = require('@strapi/strapi').factories;
const modelUid ="api::ido.ido"

module.exports = createCoreController(modelUid,({strapi})=>({
    async deleteAllExpired(ctx){
        console.log('request received')
    }
}));