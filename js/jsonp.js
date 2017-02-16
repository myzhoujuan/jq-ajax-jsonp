function jsonp(json) {
	json = json || {};
	if (!json.url) {
		return;
	}
	json.data = json.data || {};
	json.cbName = json.cbName || 'cb';
	json.success = json.success || function() {};

	var fnName = 'json_p' + Math.random();
	fnName = fnName.replace('.', '');

	window[fnName] = function(json2) {
		json.success(json2);
		oH.removeChild(oS);
	};
	json.data[json.cbName] = fnName;
	var arr = [];

	for (var name in json.data) {
		arr.push(name + '=' + json.data[name]);
	}
	var oS = document.createElement('script');
	oS.src = json.url + '?' + arr.join('&');
	var oH = document.getElementsByTagName('head')[0];
	oH.appendChild(oS);
}
