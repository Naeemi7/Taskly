import { Schema } from "mongoose";

export const todoSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: false,
      trim: true,
    },
    deadline: { type: Date, default: Date.now },
    category: {
      type: String,
      enum: ["home", "work", "personal", "health", "fitness", "education"],
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
