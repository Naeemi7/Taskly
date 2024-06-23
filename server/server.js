// External packages import
import dotenv from "dotenv";

// Internal imports
import app from "./app.js";
import connectToMongoDB from "./config/database.js";

// Define the PORT variable

const PORT = process.env.PORT || 3001;

connectToMongoDB().then(() =>
  app.listen(PORT, () => {
    console.log("Server is listening on port ", PORT);
  })
);
