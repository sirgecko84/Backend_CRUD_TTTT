'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Lahocsinh extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) { // định danh các mối quan hệ
            // define association here
        }
    };
    Lahocsinh.init({ // tạo bảng user
        maHV: DataTypes.INTEGER,
        maLop: DataTypes.INTEGER,

    }, {
        sequelize,
        modelName: 'Lahocsinh',
    });
    return Lahocsinh;
};