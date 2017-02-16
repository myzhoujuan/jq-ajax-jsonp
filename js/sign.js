window.onload=function () {
	var oZhm =document.getElementById('zhm');
	var oSzmm =document.getElementById('szmm');
	var oQrmm =document.getElementById('qrmm');
	var oGsmc =document.getElementById('gsmc');
	var oLxr =document.getElementById('lxr');
	var oSzqy =document.getElementById('szqy');
	var oYzsj =document.getElementById('yzsj');
	var oDxyz =document.getElementById('dxyz');
	var oYzm =document.getElementById('yzm');

	var oSign = document.getElementById('sign');
	var bOk = true;
	var URL = '../js/user.php';
	oSign.onclick=function(){
		// 账号名
		var sZhm =oZhm.value.trim();
		hide(oZhm);
		if(isUN(sZhm)){
			showSuc(oZhm);
		}else{
			bOk=false;
			showError(oZhm);
		}
		// 设置密码
		var sSzmm =oSzmm.value.trim();
		hide(oSzmm);
		if(isPD(sSzmm)){
			showSuc(oSzmm);
		}else{
			bOk=false;
			showError(oSzmm);
		}
		// 确认密码
		var sQrmm =oQrmm.value.trim();
		hide(oQrmm);
		if(isEq(sQrmm,sSzmm)){
			showSuc(oQrmm);
		}else{
			bOk=false;
			showError(oQrmm);
		}
		// 公司名称
		// 联系人
		var sLxr =oLxr.value.trim();
		hide(oLxr);
		if(isPN(sLxr)){
			showSuc(oLxr);
		}else{
			bOk=false;
			showError(oLxr);
		}
		// 所在区域
		var  sSzqy=oSzqy.value.trim();
		hide(oSzqy);
		if(isArea(sSzqy)){
			showSuc(oSzqy);
		}else{
			bOk=false;
			showError(oSzqy);
		}
		// 验证手机
		var  sYzsj=oYzsj.value.trim();
		hide(oYzsj);
		if(isPhone(sYzsj)){
			showSuc(oYzsj);
		}else{
			bOk=false;
			showError(oYzsj);
		}
		// 短信验证
		var  sDxyz=oDxyz.value.trim();
		hide(oDxyz);
		if(isMsg(sDxyz)){
			showSuc(oDxyz);
		}else{
			bOk=false;
			showError(oDxyz);
		}
		// 验证码
		var sYzm=oYzm.value.trim();
		hide(oYzm);
		if(isUN(sYzm)){
			showSuc(oYzm);
		}else{
			bOk=false;
			showError(oYzm);
		}
		bOk=true;
		if(bOk){ // 可以注册
			ajax({
				url:URL,
				data:{

					act:'add',
					user:sZhm,
					pass:sSzmm
				},
				success:function(str){
					console.log(str);
				},
				error:function(s){
					console.log(s);
				},
				complete:function(s){
					console.log(s);
				}
			});

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
