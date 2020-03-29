console.log("test ext running...(background)")
chrome.browserAction.onClicked.addListener(btn_click)
function btn_click(tab){
	chrome.tabs.sendMessage(tab.id,{"text":"hello"})
}