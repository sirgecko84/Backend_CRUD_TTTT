const { Sequelize } = require('sequelize');



// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('trungtamthethao', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false // để không in ra executing
});

let connectDB = async () => { // in ra thông tin kết nối đến db thành công
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

}
module.exports = connectDB;
