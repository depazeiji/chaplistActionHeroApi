'use strict';
module.exports = function (sequelize, DataTypes) {
    var ProductStore = sequelize.define('ProductStore', {
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        offerId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        likes: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        normalPrice: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        offerPrice: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    }, {
        classMethods: {
            associate: function (models) {
                // associations can be defined here
            }
        }
    });
    return ProductStore;
};
