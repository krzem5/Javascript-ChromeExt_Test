chrome.runtime.onMessage.addListener(gm)
 function gm(msg,s,r){
	console.log(msg.txt)
}