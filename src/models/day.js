'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Day extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) { // định danh các mối quan hệ
            // define association here
        }
    };
    Day.init({ // tạo bảng user
        maGV: DataTypes.INTEGER,
        maLop: DataTypes.INTEGER,

    }, {
        sequelize,
        modelName: 'Day',
    });
    return Day;
};