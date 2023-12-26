const sequelize = require('../config/connection');
const { User } = require('../models');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

 /** 
  * DO SEEDS HERE
  */

  process.exit(0);
};

seedDatabase();
