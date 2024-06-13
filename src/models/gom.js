'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Gom extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) { // định danh các mối quan hệ
            // define association here
        }
    };
    Gom.init({ // tạo bảng user
        maKH: DataTypes.INTEGER,
        maLop: DataTypes.INTEGER,


    }, {
        sequelize,
        modelName: 'Gom',
    });
    return Gom;
};