window.onload=function () {
	var oYzm = document.getElementById('yzm');
	var oYzsj = document.getElementById('yzsj');
	var oUjrz = document.getElementById('ujrz');
	var oSzmm = document.getElementById('szmm');
	var oSign = document.getElementById('sign');

	oSign.onclick=function () {
		// 验证码
		var sYzm = trim(oYzm.value);
		hide(oYzm);
		if(isUN(sYzm)){
			showSuc(oYzm);
		}else{
			showError(oYzm);
		}
		// 验证手机
		var sYzsj = trim(oYzsj.value);
		hide(oYzsj);
		if(isPhone(sYzsj)){
			showSuc(oYzsj);
		}else{
			showError(oYzsj);
		}
		// 手机认证码
		var sUjrz = trim(oUjrz.value);
		hide(oUjrz);
		if(isYzm(sUjrz)){
			showSuc(oUjrz);
		}else{
			showError(oUjrz);
		}
		// 设置新密码
		var sSzmm = trim(oSzmm.value);
		hide(oSzmm);
		if(isPD(sSzmm)){
			showSuc(oSzmm);
		}else{
			showError(oSzmm);
		}

	};


	function hide(obj){
		var aChildren=obj.parentNode.parentNode.children;
		(aChildren[3]||obj.parentNode.parentNode.parentNode.children[3]).style.display='none';
		(aChildren[2]||obj.parentNode.parentNode.parentNode.children[2]).style.display='none';
	}

	function showSuc(obj) {
		(obj.parentNode.parentNode.children[3]||obj.parentNode.parentNode.parentNode.children[3]).style.display='block';
	}
	function showError(obj){
		(obj.parentNode.parentNode.children[2]||obj.parentNode.parentNode.parentNode.children[2]).style.display='block';
	}


};
