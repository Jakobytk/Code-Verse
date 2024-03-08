const db = require('../config/connection');
const { User, Thought } = require('../models');
const cleanDB = require('./cleanDB');
const userData =  require('./userData.json');
const thoughtData = require('./thoughtData.json');

db.once('open', async () => {
  try {
    await cleanDB('Thought', 'thoughts');
    await cleanDB('User', 'users');

    await User.create(userData);

    for (let i = 0; i < thoughtData.length; i++) {
      const { _id, thoughtAuthor } = await Thought.create(thoughtData[i]);
      const user = await User.findOneAndUpdate(
        { username: thoughtAuthor },
        {
          $addToSet: {
            thoughts: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
