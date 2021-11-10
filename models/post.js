module.exports = function (sequelize, Sequelize) {
    var persona = require('./persona');
    var Persona = new persona(sequelize, Sequelize);
    var Post = sequelize.define('post', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        title: {
            type: Sequelize.STRING(50)
        },
        descripcion: {
            type: Sequelize.STRING
        },
        like: {
            type: Sequelize.INTEGER
        },
        external_id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4
        }
    }, {
        freezeTableName: true,
        createdAt: 'fecha_registro',
        updatedAt: 'fecha_modificacion'
    });

    Post.belongsTo(Persona, {
        foreignKey: 'id_persona'
    });
    Post.associate = function (models) {
        models.post.hasMany(models.imagen, {
            foreignKey: 'id_imagen'
        });
    };

    return Post;
};