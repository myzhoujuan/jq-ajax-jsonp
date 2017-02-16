function ajax(json) {
	json = json || {};
	if (!json.url) {
		console.error('没有URL');
		return;
	}
	var oAjax = null;
	json.data = json.data || {};
	json.type = json.type || 'GET';
	json.time = json.time || 5000;
	var timer = null;

	json.success = json.success || function() {};
	json.error = json.error || function() {};
	json.loading = json.loading || function() {};
	json.complete = json.complete || function() {};

	if (window.XMLHttpRequest) {
		oAjax = new XMLHttpRequest();
	} else {
		oAjax = new ActiveXObjext('Microsoft.XMLHTTP');
	}

	switch (json.type.toLowerCase()) {
		case 'post':
			oAjax.open('POST', json.url, true);
			oAjax.setHeader('Content-Type', 'application/x-www-form-urlencode');
			oAjax.send(json2url(json.data));
			break;
		default:
			oAjax.open('GET', json.url + '?' + json2url(json.data), true);
			oAjax.send();
			break;
	}
	json.loading();
	oAjax.onreadystatechange = callback;
	function callback() {
		if (oAjax.readyState == 4) {
			json.complete(1);
			if (oAjax.status >= 200 && oAjax.status < 300) {
				json.success(oAjax.responseText);
			} else {
				json.error(oAjax.status);
			}
			clearTimeout(timer);
		}
	}
	timer = setTimeout(function() {
		alert('网络超时');
		oAjax.onreadystatechange = null;
		json.complete(2);
	}, json.time);
}

function json2url(json) {
	json.t = Math.random();
	var arr = [];
	for (var name in json) {
		arr.push(name + '=' + json[name]);
	}
	return arr.join('&');
}
