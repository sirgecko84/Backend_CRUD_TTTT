'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Nhanvien extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) { // định danh các mối quan hệ
            // define association here
        }
    };
    Nhanvien.init({ // tạo bảng user
        maNV: DataTypes.INTEGER,
        password: DataTypes.STRING,
        ten: DataTypes.STRING,
        gioiTinh: DataTypes.BOOLEAN,
        cccd: DataTypes.STRING,
        ngaySinh: DataTypes.DATE,
        email: DataTypes.STRING,
        sdt: DataTypes.STRING,
        diaChi: DataTypes.TEXT

    }, {
        sequelize,
        modelName: 'Nhanvien',
    });
    return Nhanvien;
};