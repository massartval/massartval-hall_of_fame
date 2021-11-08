const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { APP_SECRET, getUserId } = require('../utils');

const signup = async (parent, args, context, info) => { 
  // 1
  const password = await bcrypt.hash(args.password, 10);
  // 2
  const user = await context.prisma.user.create({ 
    data: { 
      ...args, 
      password 
    }, 
  });
  // 3
  const token = jwt.sign({ userId: user.id }, APP_SECRET);
  // 4
  return {
    token,
    user,
  };
};

const login = async (parent, args, context, info) => {
  // 1
  const user = await context.prisma.user.findUnique({ 
    where: { 
      email: args.email 
    }, 
  });
  if (!user) {
    throw new Error('No such user found');
  };
  // 2
  const valid = await bcrypt.compare(args.password, user.password);
  if (!valid) {
    throw new Error('Invalid password');
  };
  const token = jwt.sign({ userId: user.id }, APP_SECRET);
  // 3
  return {
    token,
    user,
  };
};

const postLink = async (parent, args, context, info)  => {
  const { userId } = context;
  const newLink = await context.prisma.link.create({
    data: {
      title: args.title,
      description: args.description,
      url: args.url,
      // connect the Link to be created with the User who is creating it through a nested write.
      postedBy: { connect: { id: userId } },
    },
  });
  return newLink;
};

const updateLink = async (parent, args, context, info) => {
  const { userId } = context;
  const editedLink = await context.prisma.link.update({
    where: {
      id: +args.id,
    },
    data: {
      title: args.title,
      description: args.description,
      url: args.url,
      // connect the Link to be updated with the User who is updating it through a nested write.
      lastUpdatedBy: { connect: { id: userId } },
    },
  });
  return editedLink;
}; 

const deleteLink = async (parent, args, context, info) => {
  const { userId } = context;
  const deletedLink = await context.prisma.link.delete({
    where: {
      id: +args.id,
    },
  });
  return deletedLink;
}

module.exports = {
  signup,
  login,
  postLink,
  updateLink,
  deleteLink,
};