dot.createWidget("tabmenubtn", function(caption, fragmentId, selected){
	return dot.div(caption).id("tab-" + fragmentId).class((selected ? "menu-button-selected ": "") + "menu-button responsive-nowrap-element")
	.onclick(function(){loadTab(fragmentId)})
});

dot.createWidget("tabcontent", function(fragmentId, selected, content){
	if(!content) {
		content = selected;
		selected = false;
	}
	return dot.div(content).id("content-" + fragmentId).class("tab" + (selected ? " tab-selected" : " tab-hidden"))
});

dot.createWidget("parallaxcontainer", function(content){
	return dot.div(content).class("parallax-container");
})

var displayBoxLeft = false;
dot.createWidget("displaybox", function(previewBuilder, descriptionBuilder, onScrollTo){
	displayBoxLeft = !displayBoxLeft;
	var box = dot.div(
		dot//.canvas().class("gearsbg " + (displayBoxLeft ? "rightgearbg": "leftgearbg"))
		.div(
			dot.if(displayBoxLeft, function(){
				return dot
				.div(descriptionBuilder).class("projectdescription")
				.div(previewBuilder).class("projectpreview")
			})
			.else(function(){
				return dot
				.div(previewBuilder).class("projectpreview")
				.div(descriptionBuilder).class("projectdescription")
			})
		).class("widgetSlider " + (displayBoxLeft ? "leftSlider": "rightSlider"))
	).class("widgetContainer");
	
	//var ce = box._ce;
	var ce = $(box.lastNode);
	//console.log(box);
	//console.log(ce);
	var triggered = false;
	
	if(onScrollTo){
		$(window).scroll(function(data){
			if(!triggered && $(window).scrollTop() + $(window).height() > ce.offset().top + ce.height() ){
				//console.log(onScrollTo);
				onScrollTo();
				triggered = true;
			}
		});
	}
	
	return box;
});

dot.createWidget("product", function(bgImg, title, content){
	return dot.div(
		dot.div(
			dot.h1(title)
			.h(content)
		).style(dotcss.position("absolute").left(0).right(0).top(0).bottom(0).backgroundColor(0,0,0,0.8).padding(20).overflowY("scroll"))
	).style(dotcss.position("relative").backgroundImage(bgImg).color("white").textAlign("left")).class("product-preview");
});


dot.createWidget("fadedimagebackground", function(imageSrc, r, g, b, a, textAlign, contentBuilder){
	return dot.div().style("background-image: url(\"" + imageSrc + "\"); background-size: cover; background-position: center; width: 100%; height: 100%;")
	.div().style("position: absolute; top: 0px; width: 100%; height: 100%; background-color: rgba(" + r + ", " + g + ", " + b + ", " + a + ");")
	.div(contentBuilder).style("position: absolute; width: 100%; top: 20px; left: 20px; vertical-align: top; text-align: " + textAlign + ";")
});

dot.createWidget("videolist", function(name, videoIds, playVideoCallback){
	var vidGrid = [];
	var vidRow = [];
	for(var i = 0; i < videoIds.length; i++){
		vidRow.push(videoIds[i]);
		if((i+1) % 3 == 0) {
			vidGrid.push(vidRow); 
			vidRow = [];
		}
	}
	//This is a buffer to add to the bottom of the grid
	//so that the page doesn't appear ugly on large screens.
	if(vidRow != []) vidGrid.push(vidRow);
	return dot.each(vidGrid, function(row){
		return dot.div(
			dot.each(row, function(element){
				return dot.div(
					dot.img().src("https://img.youtube.com/vi/" + element + "/0.jpg").style("width: 100%;cursor:pointer;")
					.onclick(function(){
						playVideoCallback(videoIds, videoIds.indexOf(element));
					})
				).class("col-md-4").style(dotcss.widthP(33));
			})
		).class("row").style(dotcss.widthP(100));
	});
});

dot.createWidget("centerpad", function(content){
	return dot.uicenter(
		dot.div(content).style(dotcss.width(1000).margin("auto"))
	)
});

dot.createWidget("myfooter", function(){
	return dot.footer(
		dot.p(dot.h("&copy; " + (new Date()).getFullYear() + " ").img().src("./images/Logo500dpi.png"))
	).class("lowermenu").style("display:none;");
});
function DisableFooter() { //Nobody ever calls this.
	$(".lowermenu").css("visibility", "hidden");
}


dot.createWidget("websitepreview", function(link, img){
	return dot.a(
		dot.img().src(img).style(dotcss.widthP(100))
	).href(link).target("_blank").class("websitepreview").style(dotcss.widthP(100).height(600));
});

dot.createWidget("logopreview", function(title, info, logoApiObj){
	var newLogo = null;
	var hasBeenClicked = false;
	var ret = dot.div("CLICK").style(dotcss.cursor("pointer").display("inline-block").widthP(50).height(400).verticalAlign("top").fontSize(48)).onclick(function(){
		if(!hasBeenClicked){
			hasBeenClicked = true;
			el.innerHTML = "";
			if (!newLogo) newLogo = logoApiObj(el);
			newLogo.redraw();
			newLogo.play();
		}
	});
	var el = ret.getLast();
	setTimeout(function(){
		
		//newLogo.play();

	}, 0);
	return ret;
});