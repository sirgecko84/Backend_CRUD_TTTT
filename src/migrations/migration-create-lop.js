'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('lops', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            maLop: {
                type: Sequelize.INTEGER
            },
            tenLop: {
                type: Sequelize.STRING
            },
            ngayKhaiGiang: {
                type: Sequelize.DATE
            },
            ngayKetThuc: {
                type: Sequelize.DATE
            },
            siSo: {
                type: Sequelize.INTEGER
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('lops');
    }
};