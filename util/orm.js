/**
 * sequelize manipulation
 *
 *
 */
var Sequelize = require('sequelize'),
	conf = require('../conf/config'),
	db = conf.db,
	sequelize = new Sequelize(db.name, db.user, db.pwd, {
		dialect: 'mysql',
		host: db.host,
		port: db.port,
		define: {
			//不要自动添加createdAt, updatedAt
			timestamps: false
		}
	});

exports.sequelize = sequelize;