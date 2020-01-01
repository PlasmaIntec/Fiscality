const express = require("express");
const path = require("path");
const morgan = require("morgan");
const getBankingData = require("./banking.js");

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan("dev"));

app.get("/scrape", async(req, res, next) => {
    var scrapedData = await getBankingData();
    res.send({ data: scrapedData });
});

app.use("/", express.static(path.join(__dirname, "../public")));

app.listen(port, () => {
    console.log("Fiscality server listening on port:", port);
});