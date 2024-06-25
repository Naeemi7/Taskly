// External packages import
import dotenv from "dotenv";

// Internal imports
import app from "./app.js";
import connectToMongoDB from "./config/database.js";
import userRouters from "./routes/userRoutes.js";

// Define the PORT variable

const PORT = process.env.PORT || 3001;

// Registering routes
app.use("/api/user", userRouters);

// Server is listening ion the specified port
connectToMongoDB().then(() =>
  app.listen(PORT, () => {
    console.log("Server is listening on port ", PORT);
  })
);
