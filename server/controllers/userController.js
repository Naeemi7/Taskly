import { StatusCodes } from "http-status-codes";
import bcrypt from "bcrypt";
import User from "../models/User.js";
import { generateJwt } from "../helpers/jwt.js";

/**
 * Handler function for creating user accounts
 * @param {*} req
 * @param {*} res
 */
export const createUser = async (req, res) => {
  const { firstname, lastname, username, email, password } = req.body;

  // Hash the user's password
  const hashedPassword = await bcrypt.hash(password, 12);

  try {
    const newUser = await User.create({
      firstname,
      lastname,
      username,
      email,
      password: hashedPassword,
    });

    // Returns a bad request response if user don't provide the required data
    if (!newUser) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: "You need to provide the required information to sign up!",
      });
    }

    // Return a success response with newly created user
    return res
      .status(StatusCodes.OK)
      .json({ message: "User successfully created", data: newUser });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Internal server error! " });
  }
};
