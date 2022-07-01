import express from "express";
const app = express();
const port = 8087;

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
