const { User, Group } = require('./models');
const Sequelize = require('sequelize');

const findAllGroups = async () => {
  const groups = await Group.findAll({
    include: [
      {
        model: User,
      },
    ],
  });
  console.log(
    'All Group with their associated users:',
    JSON.stringify(groups, null, 4)
  );
};

const run = async () => {
  await findAllGroups();
  await process.exit();
};

run();
