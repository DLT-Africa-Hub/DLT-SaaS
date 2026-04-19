import mongoose, { Document, Schema } from 'mongoose';

export interface IMessage extends Document {
  name: string;
  email: string;
  company?: string;
  projectGoal?: string;
  timeline?: string;
  budgetBand?: string;
  message?: string;
}

const messageSchema = new Schema<IMessage>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    company: String,
    projectGoal: String,
    timeline: String,
    budgetBand: String,
    message: String,
  },
  {
    timestamps: true,
  },
);

const Message = mongoose.model<IMessage>('Message', messageSchema);

export default Message;
