import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const { Schema, model } = mongoose;

const adminSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
    minLength: 3,
    maxLength: 50,
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please provide a valid email',
    ],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
  },
  publicKey: {
    type: String,
  },
  role: {
    type: String,
    default: 'admin',
  },
});

adminSchema.pre('save', async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

adminSchema.methods.createJWT = function () {
  return jwt.sign(
    { adminId: this._id, name: this.name, email:this.email, publicKey:this.publicKey,role:this.role },
    process.env.JWT_SECRET,
    { expiresIn: '2d' }
  );
};

adminSchema.methods.comparePasswords = async function (candidatePassword) {
  console.log('Candidate Password:', candidatePassword);
  console.log('Stored Hashed Password:', this.password);

  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  console.log('Is Password Match:', isMatch);

  return isMatch;
};

const Admin = model('Admin', adminSchema);

export default Admin;
