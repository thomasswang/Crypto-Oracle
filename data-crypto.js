let SHEET_ID = "1zsDORbxe9_VAtux0xsY9bPLn5I88eMVGPmyRdGkkeAc";
let SHEET_TITLE = "Sheet1";
let SHEET_RANGE = "A2:A100000";
//link full: https://docs.google.com/spreadsheets/d/1zsDORbxe9_VAtux0xsY9bPLn5I88eMVGPmyRdGkkeAc/edit#gid=0
let FULL_URL = "https://docs.google.com/spreadsheets/d/" + SHEET_ID + "/gviz/tq?sheet=" + SHEET_TITLE + "&range=" + SHEET_RANGE;

fetch(FULL_URL)
	.then((res) => res.text())
	.then((rep) => {
		let data = JSON.parse(rep.substr(47).slice(0, -2));
		let length = data.table.rows.length;

		let listCodeCrypto = document.getElementById("listCodeCrypto");
		// console.log(data.table.rows[0].c[0].v);

		for (let i = 0; i < length; i++) {
			console.log(data.table.rows[i].c[0].v + "-USD");
		}
	});
