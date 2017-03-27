/**
 * login route
 * @author: vergilzhou
 * @version: 1.0.0
 * @date: 2017/03/27
 *
 */

var express = require('express');
var router = express.Router();

router.get('/login', function(req, res, next) {
	res.render('login');
});

/* GET users listing. */
router.post('/', function(req, res, next) {
	console.log('[/login][post]');
	res.end('123');
});

module.exports = router;
