setInterval("myClick()", "5000")
function myClick() {
	document.getElementsByClassName("next")[0].click();
	getInfo();
}
function getInfo() {
	var trArr = $("tr.list")
	for (var i = 0; i < trArr.length; i++) {
		var tr = trArr[i]
		console.log(tr.children[1].innerText+" "+tr.children[2].innerText+" "+tr.children[3].innerText
			+" "+tr.children[4].innerText+" "+tr.children[5].innerText+" "+tr.children[6].innerText
			+" "+tr.children[7].innerText+" "+tr.children[8].innerText+" "+tr.children[9].innerText
			+" "+tr.children[10].innerText+" "+tr.children[11].innerText+" "+tr.children[12].innerText
			+" "+tr.children[13].innerText+" "+tr.children[17].innerText+" "+tr.children[18].innerText
			+" "+tr.children[19].innerText+" "+tr.children[20].innerText+" "+tr.children[21].innerText)
	}	
}

//去掉“备注/:”，增加“0”