'use strict';

/**
 * live-streaming router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::live-streaming.live-streaming');
