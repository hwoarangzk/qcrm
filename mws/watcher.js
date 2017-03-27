/**
 * watch some status of the request for test purpose
 * @author: vergilzhou
 * @version: 1.0.0
 * @date: 2017/03/25
 *
 */
module.exports = function(req, res, next) {

	console.log('[mws][watcher]');

	//watch the session
	console.log(req.session);

	next();

};