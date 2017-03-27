/**
 * login controller
 * 
 *
 */

$(document).ready(function() {

	//防止重复点击
	var isLogin = false;

	function validate(name, pwd) {

		if (name === '') {
			tip('fail', '请输入账户名');
			return false;
		}

		if (pwd === '') {
			tip('fail', '请输入密码');
			return false;
		}

		return true;
	}

	$('#login').click(function() {
		
		var name = $.trim($('#username').val()),
			pwd = $.trim($('#pwd').val());

		if (!validate(name, pwd)) {
			return;
		}

		//验证通过，发起请求
		if (isLogin) {
			return;
		}
		isLogin = true;

		$.ajax({
			url: '/login',
			type: 'post',
			data: {
				name: name,
				pwd: pwd
			},
			success: function(r) {
				if (!r || r.r !== 0) {
					return tip('fail', r.msg);
				}
				location.href = '/';
			},
			fail: function(err) {
				log(err);
			},
			complete: function() {
				isLogin = false;
			}
		});
	});

});