const mongoose = require("mongoose");

const MONGO_URI = "mongodb://localhost:27017/jwt-expressjs-medium";
const OPTIONS = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

mongoose
  .connect(MONGO_URI, OPTIONS)
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log("error connecting database =>", err));

mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

module.exports = mongoose;
