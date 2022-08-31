'use strict';

/**
 * live-streaming service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::live-streaming.live-streaming');
