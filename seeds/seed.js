const sequelize = require('../config/connection');
const { User, Blog } = require('../models');

const userData = require('./userData.json');
const blogsData = require('./blogsData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log(User);
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  console.log(users)

  for (const blog of blogsData) {
    await Blog.create({
      ...blog,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  process.exit(0);
};

seedDatabase();
