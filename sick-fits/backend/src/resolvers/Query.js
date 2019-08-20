// Actual query definitions
// This is where logic could be implemented or simply
// forward to the db if query is same as one in prisma.graphql

const { forwardTo } = require('prisma-binding');

const Query = {
  // async items(parent, args, ctx, info) {
  //   const items = await ctx.db.query.items();
  //   return items;
  // },
  items: forwardTo('db'),
};

module.exports = Query;
