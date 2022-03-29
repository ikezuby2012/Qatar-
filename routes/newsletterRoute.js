const express = require("express");
const {
    createNewsletter, deleteNewsletter, getNewsletter
} = require("../controllers/newsletterController");

const router = express.Router();
router.route("/").post(createNewsletter);
router.route("/:id").get(getNewsletter).deleteNewsletter;

module.exports = router;