'use strict';

/**
 * Trip.js controller
 *
 * @description: A set of functions called "actions" for managing `Trip`.
 */

module.exports = {

  /**
   * Retrieve trip records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.trip.fetchAll(ctx.query);
  },

  /**
   * Retrieve a trip record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.trip.fetch(ctx.params);
  },

  /**
   * Count trip records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.trip.count(ctx.query);
  },

  /**
   * Create a/an trip record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.trip.add(ctx.request.body);
  },

  /**
   * Update a/an trip record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.trip.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an trip record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.trip.remove(ctx.params);
  }
};
