import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

const { Schema, model } = mongoose;

const resetTokenSchema = new Schema({
  owner: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    expires: '5m', // Expire after 5 minutes
    default: Date.now,
  },
});

resetTokenSchema.pre('save', async function (next) {
  if (this.isModified('token')) {
    const hashedToken = jwt.sign({ token: this.token }, process.env.JWT_SECRET);
    this.token = hashedToken;
  }

  next();
});

resetTokenSchema.methods.compareToken = async function (token) {
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    return this.token === decodedToken.token;
  } catch (error) {
    return false;  
  }
};

const ResetToken = model('ResetToken', resetTokenSchema);

export default ResetToken;
