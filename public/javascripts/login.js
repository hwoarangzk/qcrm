/**
 * login controller
 * 
 *
 */

$(document).ready(function() {

	//防止重复点击
	var isLogin = false;

	function validate(account, pwd) {

		if (account === '') {
			tip('fail', '请输入账号');
			return false;
		}

		if (pwd === '') {
			tip('fail', '请输入密码');
			return false;
		}

		return true;
	}

	$('#login').click(function() {
		
		var account = $.trim($('#account').val()),
			pwd = $.trim($('#pwd').val());

		if (!validate(account, pwd)) {
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
				account: account,
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