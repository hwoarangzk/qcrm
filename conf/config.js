/**
 * 应用的配置信息
 * @author: vergilzhou
 * @version: 1.0.0
 * @date: 2017/03/24
 *
 */
module.exports = {
	session: {
		secret: 'qcrm',
		name: 'sessionid',
		//会话保持时间
		maxAge: 1000 * 60 * 5
	},
	db: {
		name: 'qcrm',
		user: 'root',
		pwd: 'root',
		host: 'localhost',
		port: 3306
	}
};