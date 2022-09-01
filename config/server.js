module.exports = ({ env }) => ({
  url: env('APP_URL'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
