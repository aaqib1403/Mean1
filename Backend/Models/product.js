const Sequelize = require("sequelize");

const sequelize  = require("../Database/database");

const product = sequelize.define('product',{

id:{

    type : Sequelize.INTEGER,
    autoIncrement :true,
    allowNull : false,
    primaryKey :true
    
},

title:{

    type : Sequelize.STRING,
   
    allowNull : false
},

description:{

    type : Sequelize.STRING,
   
    allowNull : false
}

})

module.exports = product