const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Admin = require('../models/Admin');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected...');

    await seedAdmin();
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

const seedAdmin = async () => {
  try {
    const adminUser = await User.findOne({ username: 'admin' });

    if (!adminUser) {
      const hashedPassword = await bcrypt.hash('admin123', 10);

      await User.create({
        username: 'admin',
        password: hashedPassword,
        user_role: 1,
      });

      console.log('Admin user created in User table');
    } else {
      console.log('Admin user already exists in User table');
    }

    const adminEntry = await Admin.findOne({ username: 'admin' });

    if (!adminEntry) {
      await Admin.create({
        username: 'admin',
        fullName: 'Team DrPet',
      });

      console.log('Admin entry created in Admin table');
    } else {
      console.log('Admin entry already exists in Admin table');
    }
  } catch (error) {
    console.error('Error seeding admin user or admin table:', error);
  }
};

module.exports = connectDB;
