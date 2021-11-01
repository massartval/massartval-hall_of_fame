// Resolve the links() field from the User type in schema.graphql (using the relation defined in schema.prisma)
const links = (parent, args, context, info) => {
  const user = context.prisma.user.findUnique({
    where: {
      id: parent.id,
    },
  });
  return user.links();
};

const lastUpdates = (parent, args, context, info) => {
  const user = context.prisma.user.findUnique({
    where: {
      id: parent.id,
    },
  });
  return user.lastUpdates();
};

module.exports = {
  links,
  lastUpdates,
};