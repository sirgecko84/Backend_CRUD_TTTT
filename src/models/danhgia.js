'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Danhgia extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) { // định danh các mối quan hệ
            // define association here
        }
    };
    Danhgia.init({ // tạo bảng user
        maHV: DataTypes.INTEGER,
        maKH: DataTypes.INTEGER,
        danhGia: DataTypes.TEXT

    }, {
        sequelize,
        modelName: 'Danhgia',
    });
    return Danhgia;
};