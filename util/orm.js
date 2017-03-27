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
		host: 'localhost',
		port: 3306,
		define: {
			//不要自动添加createdAt, updatedAt
			timestamps: false
		}
	});

exports.sequelize = sequelize;