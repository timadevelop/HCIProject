'use strict';

/**
 * Task.js controller
 *
 * @description: A set of functions called "actions" for managing `Task`.
 */

module.exports = {

  /**
   * Retrieve task records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.task.fetchAll(ctx.query);
  },

  /**
   * Retrieve a task record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.task.fetch(ctx.params);
  },

  /**
   * Count task records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.task.count(ctx.query);
  },

  /**
   * Create a/an task record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.task.add(ctx.request.body);
  },

  /**
   * Update a/an task record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.task.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an task record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.task.remove(ctx.params);
  }
};
