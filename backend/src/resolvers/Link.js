  // No need for explicit resolvers if they are straightforward like the 'Link' example below:
  /*
  Link: {
    id: (parent) => parent.id,
    description: (parent) => parent.description,
    url: (parent) => parent.url,
  },
  // Or:
  const id = (parent) => parent.id;
  const description = (parent) => parent.description;
  const url = (parent) => parent.url;
  */

// Resolve the postedBy() field from the Link type in schema.graphql (using the relation defined in schema.prisma)
const postedBy = (parent, args, context, info)  => {
  const link = context.prisma.link.findUnique({ 
    where: { 
      id: parent.id, 
    }, 
  });
  return link.postedBy();
};

const lastUpdatedBy = (parent, args, context, info) => {
  const link = context.prisma.link.findUnique({ 
    where: { 
      id: parent.id, 
    }, 
  });
  return link.lastUpdatedBy();
}

module.exports = {
  postedBy,
  lastUpdatedBy,
};