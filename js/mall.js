window.onload = function() {
	var URL = 'http://boss.shopcmd.com/boss/website/websiteCase.do';
	var imgUrl = 'http://hycloudshop.img-cn-hangzhou.aliyuncs.com/';

	var prev = document.getElementById('prev');
	var next = document.getElementById('next');
	var oUl = document.getElementById('case-banner');
	var aLi = oUl.children;

	next.onclick = function() {
		oUl.style.left=(aLi[1].offsetLeft-aLi[1].offsetWidth)/2-aLi[1].offsetLeft+'px';
		this.className='on next';
		prev.className='on prev';
	};
	prev.onclick = function() {
		oUl.style.left=0+'px';
		this.className='prev';
		next.className='next';
	};
	jsonp({
		url: URL,
		data: {
			site: 5
		},
		cbName: 'callback',
		success: suc,
		error: err
	});

	function suc(str) {
		var arr = str.data.content;
		oUl.innerHTML = '';
		for (var i = 0; i < arr.length; i++) {
			var s = `<li>
						<div>
							<a href="${arr[i].webAddress}">
								<img src="${imgUrl}${arr[i].logo}" alt="">
							</a>
							<p>${arr[i].webName}</p>
						</div>
					</li>`;
			oUl.innerHTML += s;
		}
	}
	function err(s) {
		console.log(s);
	}
};
