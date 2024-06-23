// External packages import
import dotenv from "dotenv";

// Internal imports
import app from "./app.js";

// Define the PORT variable

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("Server is listening on port ", PORT);
});
