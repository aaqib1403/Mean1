const express = require("express");
const router = require('./Backend/app')
const app = express();
const bodyParser = require('body-parser')
const sequelize = require("./Backend/Database/database");

const product = require("./Backend/Models/product")



app.use((req, res, next) => {

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Authorization,Origin,X-Requested-With,Content-Type,Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS,PATCH");
    if (req.method === "OPTIONS")
        res.sendStatus(200);
    else
        next();
})

app.use("/", router);

app.use((req, res, next) => {

    res.send("page not found")

})
sequelize.authenticate().then((res) => {

    console.log("COnnection success")

}).catch(err => {


    console.log("Connection Failed")
})

product.sync().then(result => {

    console.log(result)
    app.listen('3000', () => {
        console.log("listenong ")
    })

})
    .catch(err => {
        console.log("vsgdsgdsgds")
        console.log(err)
    })


