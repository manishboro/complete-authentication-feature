const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

let PORT = process.env.PORT;

// connecting database
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("DB connection successful!"))
  .catch((err) => console.warn(err.message));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
