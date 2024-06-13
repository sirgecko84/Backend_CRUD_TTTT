'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Lichhoc extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) { // định danh các mối quan hệ
            // define association here
        }
    };
    Lichhoc.init({ // tạo bảng user
        maLop: DataTypes.INTEGER,
        diaDiem: DataTypes.TEXT,
        thoiGian: DataTypes.TIME,

    }, {
        sequelize,
        modelName: 'Lichhoc',
    });
    return Lichhoc;
};