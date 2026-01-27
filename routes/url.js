const express = require("express");
const { handlegenerateShortUrl ,handleAnalyticsShortUrl} = require("../controllers/url");
const router = (n = express.Router());

router.post("/", handlegenerateShortUrl);

router.get("/url/analytics/:shortId",handleAnalyticsShortUrl)

module.exports = router;
