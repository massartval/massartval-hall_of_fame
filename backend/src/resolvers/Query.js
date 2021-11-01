const info = () => `This is the API of a Hackernews Clone!`;

const getFeed = (parent, args, context, info) => {
  return context.prisma.link.findMany();
};

const getLink = (parent, args, context, info) => {
  const link = context.prisma.link.findUnique({
    where: {
      id: +args.id,
    },
  });
  return link;
};

module.exports = {
  info,
  getFeed,
  getLink
};