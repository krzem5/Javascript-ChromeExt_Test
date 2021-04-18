chrome.runtime.onMessage.addListener((msg,s,r)=>{
	console.log(msg.txt)
});
