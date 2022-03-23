module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5bebf9a5ccba92803da986984865c517'),
  },
});
