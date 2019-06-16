import { log, error } from "console";

export const initApplication = async () => {
  try {
    // Load a local .env file if not in production
    if (process.env.NODE_ENV !== "production") {
      require("dotenv").config();
    }
    log("Node environment: " + process.env.NODE_ENV);
    log("Application launched successfully!");
  } catch (err) {
    error(`APP FAILED TO LAUNCH: ${err}`);
    process.exit();
  }
};
