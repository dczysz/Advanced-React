// Actual mutation definitions
// This is where logic like charging credit card would happen

const Mutations = {
  async createItem(parent, args, ctx, info) {
    //TODO: check if logged in

    //* ctx.db.[query|mutation] grants access to methods in prisma.graphql
    const item = await ctx.db.mutation.createItem(
      {
        data: {
          ...args,
        },
      },
      info
    );

    console.log(item);

    return item;
  },
};

module.exports = Mutations;
