import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://20.244.50.144/test";

// TODO: Replace the values below with your own before running this file.
// const yourUsername = "";
// const yourPassword = "";
//const yourAPIKey = "";
const yourBearerToken = "";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

// app.get("/noAuth", async (req, res) => {
//   try {
//     const result = await axios.get(API_URL + "/random");
//     res.render("index.ejs", { content: JSON.stringify(result.data) });
//   } catch (error) {
//     res.status(404).send(error.message);
//   }
// });


const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};

app.get("/bearerToken", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "//2", config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
