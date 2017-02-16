function isUN(s){
	return /^[a-zA-z0-9]{4,8}$/.test(s);
};
function isPD(s){
	return /^[a-zA-z0-9]{6,16}$/.test(s);
};
function isPN(s){
	return /^[\u4e00-\u9fa5]{2,5}|[a-zA-Z]{2,16}$/.test(s);
};

function isArea(s){
	return s.replace(/^\s+|\s+$/g,'').length>0;
}
function isPhone(s){
	return /^\d{11}$/.test(s);
}
function isYzm(s){
	return /^\d{4}$/.test(s);
}
function trim(s){
	return s.replace(/(^\s+)|(\s+$)/g,'');
}
function isEq(s1,s2){
	return s1==s2;
}
function isMsg (s) {
	return /^\d{4}$/.test(s);
}
