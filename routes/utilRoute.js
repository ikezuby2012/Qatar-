const express = require("express");

const {
    fetchData 
} = require("../controllers/cryptoPricesController");
const router = express.Router();


router.get("/stock", fetchData);

module.exports = router;