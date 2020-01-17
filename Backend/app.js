const express = require("express");
const fs = require("fs");

const bodyParser = require('body-parser')
const router = express.Router();
const app = express();

// Controllers

const addProductController = require("./Controllers/addproduct")
//parsing the req body

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }))

router.use("/addProduct",addProductController.addProduct)


  module.exports = router








