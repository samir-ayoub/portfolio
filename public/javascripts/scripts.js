function trocaLogo(){
	var num = Math.floor((Math.random() * $("#logos ul li").size() + 1));
	$("#logos ul li.active").animate({ "opacity": "0"}, 1500).removeClass("active");
	$("#logos ul li:nth-child("+num+")").animate({ "opacity": "1"}, 1500).addClass("active");
}

$(document).ready(function(){
	trocaLogo();
	setInterval('trocaLogo()', 3000);
});