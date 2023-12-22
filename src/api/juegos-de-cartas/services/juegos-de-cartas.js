'use strict';

/**
 * juegos-de-cartas service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::juegos-de-cartas.juegos-de-cartas');
