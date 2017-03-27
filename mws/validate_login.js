/*
 * 验证登录态
 * @author: vergilzhou
 * @version: 1.0.0
 * @date: 2017/03/24
 *
 */

 module.exports = function(fn) {
 	
 	return function(req, res, next) {
 		// console.log('req.session.id:', req.session.id);
 		next();
 	}

 };