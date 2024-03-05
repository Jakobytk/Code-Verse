const db = require('../config/connection');
const { Profile, Thought } = require('../models');
const cleanDB = require('./cleanDB');
const profileSeeds = require('./userData');
const thoughtSeeds = require('./thoughData');

db.once('open', async () => {
  try {
    await cleanDB('Profile', 'profiles')
    await Profile.create(profileSeeds);
    await cleanDB('Thought', 'thoughts')
    await Thought.create(thoughtSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
