var map = {};

function callNative(name, successCallBack, failCallBack){
	window.location.href = 'hehe://'+name;//http  https  ws   file://
	
	map[name] = {};
	map[name].success = successCallBack;
	map[name].fail = failCallBack;
}

window.nativeCallback = function (name, data){
	var status = data.status;
	var callback = map[name][status];
	callback(data.value);
}
nativeCallback('takePicture', {status: 'success', value: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3125725719,3079595597&fm=27&gp=0.jpg'})
