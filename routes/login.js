/**
 * login route
 * @author: vergilzhou
 * @version: 1.0.0
 * @date: 2017/03/27
 *
 */

var express = require('express');
var router = express.Router();
var orm = require('../util/orm');
var Staff = require('../models/staff');

router.get('/', function(req, res, next) {
	res.render('login');
});

/* GET users listing. */
router.post('/', function(req, res, next) {

	var account = req.body.account,
		pwd = req.body.pwd;

	Staff.find({
		where: {
			account: account,
			pwd: pwd
		},
		raw: true
	}).then(function(staff) {
		if (staff) {
			console.log(staff);
			res.json({
				r: 0
			});
		} else {
			res.json({
				r: 1,
				msg: '账号或密码错误'
			});
		}
	}).catch(function() {
		res.json({
			r: 1,
			msg: '[login.js]query staff exception happened'
		});
	});
});

module.exports = router;
