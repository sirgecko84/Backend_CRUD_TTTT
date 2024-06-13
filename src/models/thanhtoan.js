'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Thanhtoan extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) { // định danh các mối quan hệ
            // define association here
        }
    };
    Thanhtoan.init({ // tạo bảng user
        maNV: DataTypes.INTEGER,
        maHV: DataTypes.INTEGER,
        maLop: DataTypes.INTEGER,
        soTien: DataTypes.INTEGER,
        ngayNopTien: DataTypes.DATE,
        dot: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Thanhtoan',
    });
    return Thanhtoan;
};