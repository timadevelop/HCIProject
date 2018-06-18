'use strict';

/**
 * Checklist.js controller
 *
 * @description: A set of functions called "actions" for managing `Checklist`.
 */

module.exports = {

  /**
   * Retrieve checklist records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.checklist.fetchAll(ctx.query);
  },

  /**
   * Retrieve a checklist record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.checklist.fetch(ctx.params);
  },

  /**
   * Count checklist records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.checklist.count(ctx.query);
  },

  /**
   * Create a/an checklist record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.checklist.add(ctx.request.body);
  },

  /**
   * Update a/an checklist record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.checklist.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an checklist record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.checklist.remove(ctx.params);
  }
};
