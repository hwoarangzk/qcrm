/**
 * b staff model
 *
 *
 */
var S = require('Sequelize'),
	sequelize = require('../util/orm').sequelize;

var Staff = sequelize.define('staff', {
	id: {
		type: S.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	name: {
		type: S.STRING,
		allowNull: false
	},
	account: {
		type: S.INTEGER,
		allowNull: false,
		unique: true
	},
	pwd: {
		type: S.STRING,
		allowNull: false
	}
});

module.exports = Staff;