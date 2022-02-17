const express = require("express");
const app = express();
const port = 3001;
const ContactRouter = require("./app/routes/contact");
require("../api/config/db");

/**
 * username: req.body.username,
 * TypeError: Cannot read properties of undefined (reading 'username')
 *
 *! app.use(express.json());
 */

app.use(express.json());
app.use("/contact", ContactRouter);

app.listen(port, () => {
  console.log(`app listening on port http://localhost:${port}`);
});
