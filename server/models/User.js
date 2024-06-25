import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, rquired: true },
    password: { type: String, required: true, min: 6 },
    avatar: {
      imgName: { type: String },
      imgPath: { type: String },
      imgType: { type: String },
      imgSize: { type: Number },
    },
    tasks: [{ type: Schema.Types.ObjectId, ref: "Task" }],
  },
  { timestamps: true }
);

const User = model("User", userSchema);

export default User;
