'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Lop extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) { // định danh các mối quan hệ
            // define association here
        }
    };
    Lop.init({ // tạo bảng user
        maLop: DataTypes.INTEGER,
        tenLop: DataTypes.STRING,
        ngayKhaiGiang: DataTypes.DATE,
        ngayKetThuc: DataTypes.DATE,
        siSo: DataTypes.INTEGER,

    }, {
        sequelize,
        modelName: 'Lop',
    });
    return Lop;
};