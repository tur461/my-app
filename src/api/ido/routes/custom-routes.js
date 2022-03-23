module.exports = {
  routes: [
    {
      method: "GET",
      path: "/ido_detail",
      handler: "ido.findAll",
    },
    {
      method: "GET",
      path: "/ido/:id",
      handler: "ido.findOne",
    },
  ],
};
   