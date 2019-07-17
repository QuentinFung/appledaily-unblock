console.log("--- SCRIPT STARTED ---");
try {
	console.log("--- overwritting blocking JS ---");

	// HK, US
	document.documentElement.outerHTML = document.documentElement.outerHTML.replace('function uReadDisplayMsgBox(showdef){', 'function uReadDisplayMsgBox(showdef){}\nfunction xxx(showdef){');
	document.documentElement.outerHTML = document.documentElement.outerHTML.replace('function uReadDisplayMsgBox(showdef, atype){', 'function uReadDisplayMsgBox(showdef, atype){}\nfunction xxx(showdef, atype){');
	// HK mobile
	document.documentElement.outerHTML = document.documentElement.outerHTML.replace('function uReadPrompt(content,msgtype,vdoimg){', 'function uReadPrompt(content,msgtype,vdoimg){}\nfunction xxx(content,msgtype,vdoimg){');
	// TW
	document.documentElement.outerHTML = document.documentElement.outerHTML.replace('var effects = function(e,val){', 'var effects = function(e,val){$(".ndAritcle_headPic,.ndArticle_margin,.mediabox,#playerVideo,.articulum").show();};\nvar effectsx = function(e,val){');
	document.documentElement.outerHTML = document.documentElement.outerHTML.replace('.parent().remove();', '.parent();');
	document.documentElement.outerHTML = document.documentElement.outerHTML.replace('class="ndArticle_margin" style="display: none;"', 'class="ndArticle_margin"');
	// 04JUL2019
	document.documentElement.outerHTML = document.documentElement.outerHTML.replace(/visibility: hidden;/g, '');
	// nextmag
	document.documentElement.outerHTML = document.documentElement.outerHTML.replace('<div class="article-content">', '<div class="article-content" style="display:block!important">');
	// 果燃台
	if (document.location.href.substr(0, 49) == 'https://hk.feature.appledaily.com/goodestchannel/' && document.location.href.substr(-2) != '.js')
		document.documentElement.innerHTML += "<script>function setBanPaidFalse(){if(document.querySelector('.videoPlayer')!=null && document.querySelector('.videoPlayer').__vue__.banPaid){document.querySelector('.videoPlayer').__vue__.banPaid = false;}} var r = setInterval(setBanPaidFalse, 1000);</script>";
	// 蘋果台
	if (document.location.href.substr(0, 43) == 'https://tw.feature.appledaily.com/applepie/' && document.location.href.substr(-2) != '.js')
		document.documentElement.innerHTML += "<script>function setBanPaidFalse(){if(document.querySelector('.videoPlayer')!=null && document.querySelector('.videoPlayer').__vue__.banPaid){document.querySelector('.videoPlayer').__vue__.banPaid = false;}} var r = setInterval(setBanPaidFalse, 1000);</script>";
	// 飲食男女
	document.documentElement.outerHTML = document.documentElement.outerHTML.replace('function blockContent() {', 'function blockContent() {}\nfunction xxx() {');
	// 台灣會員專區
	document.documentElement.outerHTML = document.documentElement.outerHTML.replace(/hideContent:'nm-main-articles',/g, "hideContent:'nm-main-articlesxxx',");
	document.documentElement.outerHTML = document.documentElement.outerHTML.replace(".nm-main-articles {display:none;}", '');
	document.documentElement.outerHTML = document.documentElement.outerHTML.replace('id="video_player"', 'id="video_playerx"');
	document.documentElement.outerHTML = document.documentElement.outerHTML.replace('anvatoPlayerID = "video_player"', 'anvatoPlayerID = "video_playerx"');
} catch (ex) {
	console.log("--- SCRIPT Error: " + ex.message + " ---");
}
console.log("--- SCRIPT ENDED ---");
completion();