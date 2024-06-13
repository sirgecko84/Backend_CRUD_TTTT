'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('nhanviens', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            maNV: {
                type: Sequelize.INTEGER
            },
            password: {
                type: Sequelize.STRING
            },
            ten: {
                type: Sequelize.STRING
            },
            gioiTinh: {
                type: Sequelize.BOOLEAN
            },
            cccd: {
                type: Sequelize.STRING
            },
            ngaySinh: {
                type: Sequelize.DATE
            },
            email: {
                type: Sequelize.STRING
            },
            email: {
                type: Sequelize.STRING
            },
            sdt: {
                type: Sequelize.STRING
            },
            diachi: {
                type: Sequelize.TEXT
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
        await queryInterface.dropTable('nhanviens');
    }
};