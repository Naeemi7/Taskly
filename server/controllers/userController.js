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

/**
 * Handler function for logging users in
 * @param {*} req
 * @param {*} res
 */
export const loginUser = async (req, res) => {
  try {
    // Convert the user's email to lowercase
    const lowercaseEmail = req.body.email.toLowerCase();

    // Find the user with the provided lowercase email
    const user = await User.findOne({ email: lowercaseEmail });

    // Throw a bad request error if the credentials are invalid
    if (!user) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Invalid user credentials" });
    }

    // compare the provided password with the hashed password in the database
    const matchedPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    // Check if the password matches
    if (matchedPassword) {
      // Generates a token for the user
      const token = generateJwt(user._id);

      // Set the token as an HTTP-only cookie
      res.cookie("userToken", token, {
        httpOnly: true,
        secure: false,
      });

      // Return a successful response
      return res.status(StatusCodes.OK).json({
        message: `Login successful. Welcome, ${user.firstname} ${user.lastname}`,
        user: {
          firstname: user.firstname,
          lastname: user.lastname,
          username: user.username,
          email: user.email,
          userId: user._id,
        },
      });
    } else {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: "Invalid Credentials." });
    }
  } catch (error) {
    // Handle any unexpected errors
    console.error("Error in loginUser:", error);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Internal Server Error" });
  }
};

/**
 * Handler function for logging the users out
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const logoutUser = async (req, res) => {
  try {
    res.clearCookie("userToken", {
      httpOnly: true,
      secure: false,
    });

    return res.status(StatusCodes.OK).json({ message: "user logged out!" });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Internal server error!" });
  }
};
