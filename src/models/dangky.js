'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Dangky extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) { // định danh các mối quan hệ
            // define association here
        }
    };
    Dangky.init({ // tạo bảng user
        maNV: DataTypes.INTEGER,
        maHV: DataTypes.INTEGER,
        maKH: DataTypes.INTEGER,
        ketQuaKiemTra: DataTypes.TEXT,


    }, {
        sequelize,
        modelName: 'Dangky',
    });
    return Dangky;
};