
module.exports = function (sequelize, Sequelize) {
    var post = require('../models/post');
    var Post = new post(sequelize, Sequelize);
    var Imagen = sequelize.define('imagen', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        foto: {
            type: Sequelize.STRING(100)
        },
        external_id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4
        },
    }, {freezeTableName: true,
        createdAt: 'fecha_registro',
        updatedAt: 'fecha_modificacion'
    });

    Imagen.belongsTo(Post, {
        foreignKey: 'id_imagen'
    });

    return Imagen;
};