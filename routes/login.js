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

	var name = req.body.name,
		pwd = req.body.pwd;

	Staff.find({
		where: {
			name: name,
			pwd: pwd
		}
	}).then(function(staff) {
		if (staff) {
			res.redirect('/users');
		} else {
			res.json({
				r: 1,
				msg: '用户不存在'
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
