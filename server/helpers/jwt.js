import jwt from "jsonwebtoken";

/**
 * Handler function for generating jwt token using the userId as props
 * @param {*} userId
 * @returns
 */
export const generateJwt = (userId) => {
  const payload = {
    id: userId,
  };

  const token = jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: "12h",
  });

  return token;
};

/**
 * Handler function for verifying jwt using the token
 * @param {*} token
 * @returns
 */
export const verifyJwt = (token) => {
  return jwt.verify(token, process.env.SECRET_KEY);
};
