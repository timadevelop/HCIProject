'use strict';

/**
 * Trip.js service
 *
 * @description: A set of functions similar to controller's actions to avoid code duplication.
 */

// Public dependencies.
const _ = require('lodash');

module.exports = {

  /**
   * Promise to fetch all trips.
   *
   * @return {Promise}
   */

  fetchAll: (params) => {
    // Convert `params` object to filters compatible with Mongo.
    const filters = strapi.utils.models.convertParams('trip', params);
    // Select field to populate.
    const populate = Trip.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias)
      .join(' ');

    return Trip
      .find()
      .where(filters.where)
      .sort(filters.sort)
      .skip(filters.start)
      .limit(filters.limit)
      .populate(populate);
  },

  /**
   * Promise to fetch a/an trip.
   *
   * @return {Promise}
   */

  fetch: (params) => {
    // Select field to populate.
    const populate = Trip.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias)
      .join(' ');

    return Trip
      .findOne(_.pick(params, _.keys(Trip.schema.paths)))
      .populate(populate);
  },

  /**
   * Promise to count trips.
   *
   * @return {Promise}
   */

  count: (params) => {
    // Convert `params` object to filters compatible with Mongo.
    const filters = strapi.utils.models.convertParams('trip', params);

    return Trip
      .count()
      .where(filters.where);
  },

  /**
   * Promise to add a/an trip.
   *
   * @return {Promise}
   */

  add: async (values) => {
    // Extract values related to relational data.
    const relations = _.pick(values, Trip.associations.map(ast => ast.alias));
    const data = _.omit(values, Trip.associations.map(ast => ast.alias));

    // Create entry with no-relational data.
    const entry = await Trip.create(data);

    // Create relational data and return the entry.
    return Trip.updateRelations({ id: entry.id, values: relations });
  },

  /**
   * Promise to edit a/an trip.
   *
   * @return {Promise}
   */

  edit: async (params, values) => {
    // Extract values related to relational data.
    const relations = _.pick(values, Trip.associations.map(a => a.alias));
    const data = _.omit(values, Trip.associations.map(a => a.alias));

    // Update entry with no-relational data.
    const entry = await Trip.update(params, data, { multi: true });

    // Update relational data and return the entry.
    return Trip.updateRelations(Object.assign(params, { values: relations }));
  },

  /**
   * Promise to remove a/an trip.
   *
   * @return {Promise}
   */

  remove: async params => {
    // Select field to populate.
    const populate = Trip.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias)
      .join(' ');

    // Note: To get the full response of Mongo, use the `remove()` method
    // or add spent the parameter `{ passRawResult: true }` as second argument.
    const data = await Trip
      .findOneAndRemove(params, {})
      .populate(populate);

    if (!data) {
      return data;
    }

    await Promise.all(
      Trip.associations.map(async association => {
        const search = _.endsWith(association.nature, 'One') || association.nature === 'oneToMany' ? { [association.via]: data._id } : { [association.via]: { $in: [data._id] } };
        const update = _.endsWith(association.nature, 'One') || association.nature === 'oneToMany' ? { [association.via]: null } : { $pull: { [association.via]: data._id } };

        // Retrieve model.
        const model = association.plugin ?
          strapi.plugins[association.plugin].models[association.model || association.collection] :
          strapi.models[association.model || association.collection];

        return model.update(search, update, { multi: true });
      })
    );

    return data;
  }
};
