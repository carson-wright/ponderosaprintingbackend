'use strict';

/**
 * success-manager service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::success-manager.success-manager');
