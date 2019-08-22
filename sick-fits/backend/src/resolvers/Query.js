// Actual query definitions
// This is where logic could be implemented or simply
// forward to the db if query is same as one in prisma.graphql

const { forwardTo } = require('prisma-binding');

const Query = {
  items: forwardTo('db'),
  item: forwardTo('db'),
  itemsConnection: forwardTo('db'),
};

module.exports = Query;
