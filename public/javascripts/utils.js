/**
 * some util functions
 *
 *
 */

(function(global) {

	//控制台输出
	function log(info) {
		if (window.console && typeof console.log === 'function') {
			console.log(info);
		}
	}
	global.log = log;

	//头部轻提示
	var tipTpl = '<div class="top-tip {class}">{msg}</div>',
		tipShowTime = 1000 * 2;

	function tip(type, msg) {

		if (type !== 'fail' && type !== 'success') {
			return log('tip type error');
		}

		var tpl = tipTpl.replace('{class}', type)
				.replace('{msg}', msg);
		$('body').append(tpl);
		var left = Math.round($('.top-tip').width() / 2);
		$('.top-tip').css('margin-left', '-' + left + 'px');
		setTimeout(function() {
			$('.top-tip').remove();
		}, tipShowTime);
	}
	global.tip = tip;

})(window);



