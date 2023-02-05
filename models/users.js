/* eslint-disable camelcase */
const { DataTypes } = require("sequelize");
const db = require("../db/index");

const User = db.sequelize.define(
    "users",
    {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
        },
        address_1: {
            type: DataTypes.STRING,
        },
        address_2: {
            type: DataTypes.STRING,
        },
        city: {
            type: DataTypes.STRING,
        },
        state: {
            type: DataTypes.STRING,
        },
        postal_code: {
            type: DataTypes.STRING,
        },
        primary_phone: {
            type: DataTypes.STRING,
        },
        created_at: {
            type: DataTypes.DATE,
        },
        last_modified: {
            type: DataTypes.DATE,
        },
    },
    {
        timestamps: true,
        updatedAt: "last_modified",
        createdAt: "created_at",
    }
);

module.exports = User;