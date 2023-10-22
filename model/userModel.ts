import mongoose, { Document } from 'mongoose';

interface IUser extends Document {
  name: string;
  email: string;
  phone: string;
  password: string;
  isVerified: boolean;
  isAdmin: boolean;
  forgotPasswordToken?: string;
  forgotPasswordExpire?: Date;
  verificationToken?: string;
  verificationExpire?: Date;
}


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter your name'],
    trim: true,
    maxLength: [30, 'Your name cannot exceed 30 characters'],
  },
  email: {
    type: String,
    required: [true, 'Please enter your email'],
    trim: true,
    unique: true,
  },
  phone: {
    type: String,
    required: [true, 'Please enter your phone number'],
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please enter your password'],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordExpire: Date, 
  verificationToken: String,
  verificationExpire: Date,
},{
    timestamps: true,
  });

const User = mongoose.models.users || mongoose.model<IUser>('users', userSchema);

// let user_model;

// try {
//   user_model = mongoose.model('users');
// } catch (error) {
//   user_model = mongoose.model('users', userSchema);
// }

// const User = user_model;
// // const User = mongoose.model.users || mongoose.model('users', userSchema);

export default User;