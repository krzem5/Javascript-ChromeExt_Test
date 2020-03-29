function t_del(){
	var hdr=document.getElementById("hdr")
	let params={
		"active": true,
		"currentWindow": true
	}
	if (hdr.classList.contains("start")){
		chrome.tabs.query(params,s_start)
		function s_start(tabs){
			chrome.tabs.sendMessage(tabs[0].id,{"txt":"start_del"})
		}
		hdr.innerHTML="<u>Stop deleting</u>"
	}
	else{
		chrome.tabs.query(params,s_stop)
		function s_stop(tabs){
			chrome.tabs.sendMessage(tabs[0].id,{"txt":"stop_del"})
		}
		hdr.innerHTML="<u>Start deleting</u>"
	}
	hdr.classList.toggle("start")
	hdr.classList.toggle("stop")
}
document.getElementById("hdr").onclick=t_del