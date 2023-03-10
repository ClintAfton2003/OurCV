const { default: mongoose } = require('mongoose');

mongoose.set('strictQuery', true);

async function connect() {
  try {
    await mongoose.connect('mongodb+srv://DevCV:ourcv@cv.swv3g3k.mongodb.net/OurCV');
    console.log('Database connected!!');
  } catch (error) {
    console.log('Database not connected!!');
  }
}

module.exports = { connect };
