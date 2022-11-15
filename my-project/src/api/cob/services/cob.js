'use strict';

/**
 * cob service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cob.cob');
