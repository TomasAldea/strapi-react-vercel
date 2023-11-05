'use strict';

/**
 * gourmet service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::gourmet.gourmet');
