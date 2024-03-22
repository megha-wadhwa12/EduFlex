const express = require("express");
const cors = require("cors");
require("dotenv").config()

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT

app.use("/api/Users",require("./Routes/UserRoutes"))

app.listen(port, () => {
  console.log(`App is running on PORT: ${port}`);
});
