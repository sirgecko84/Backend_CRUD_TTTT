'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Huydangky extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) { // định danh các mối quan hệ
            // define association here
        }
    };
    Huydangky.init({ // tạo bảng user
        maNV: DataTypes.INTEGER,
        maHV: DataTypes.INTEGER,
        lyDo: DataTypes.TEXT,
        trangThaiHoanTien: DataTypes.BOOLEAN,
    }, {
        sequelize,
        modelName: 'Huydangky',
    });
    return Huydangky;
};