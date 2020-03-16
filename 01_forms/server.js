const express = require("express");

const app = express();
app.use(express.static("public"));
app.use(express.json());

app.post("/message", (req, res) => {
  console.log(req.body);
  // do something with the message body, like write it to a database
  res.json({ message: "Successfully submitted message :)"});
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Express server listening on port ${port}!`);
});
