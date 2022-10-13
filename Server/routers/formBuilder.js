const express = require("express");
const { createFormBuilder, getForms } = require("../controller/formBuilder");

const router = express.Router();
router.get("/", getForms)
router.post("/create", createFormBuilder);
module.exports = router;
