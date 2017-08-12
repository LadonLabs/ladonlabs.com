dot.createWidget("smalltile", function(linkText, footerContent, imgsrc){
	return dot.div(
		dot.uimiddle(
			dot.a(linkText)
		).class("tileheading")
		/*.div(footerContent).class("tilefooter")*/
	).class("smalltile").style(dotcss.backgroundImage(imgsrc))
});

dot.createWidget("maintab", function(){
	return dot.tabcontent("main", 
		dot.div(
			dot.div(
				dot.uimiddle(
					dot.img().src("./images/Logo500dpi.png").style(dotcss.height(240))
				).class("tileheading")
			).id("st0").class("bigtile")
			.div("Solutions for Advanced Productivity.").class("tilefooter")
			.smalltile("Process Automation", "Business Solutions", "./images/products/scanner.jpg")
			.smalltile("Web App Development", "Web Solutions", "./images/code.jpg")
			.smalltile("Startup Consulting", "Startup Solutions", "./images/aboutus.jpg")
			.div().class("staticoverlay")
		).class("outertiles")
	).style(dotcss.backgroundColor("black"));
});