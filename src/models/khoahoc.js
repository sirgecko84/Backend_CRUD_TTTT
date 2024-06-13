'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Khoahoc extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) { // định danh các mối quan hệ
            // define association here
        }
    };
    Khoahoc.init({ // tạo bảng user
        maKH: DataTypes.INTEGER,
        tenKhoaHoc: DataTypes.STRING,


    }, {
        sequelize,
        modelName: 'Khoahoc',
    });
    return Khoahoc;
};