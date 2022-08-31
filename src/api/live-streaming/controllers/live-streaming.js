'use strict';

/**
 *  live-streaming controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::live-streaming.live-streaming');
