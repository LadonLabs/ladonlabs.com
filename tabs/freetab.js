dot.createWidget("freetab", function(){
	return dot.tabcontent("free", 
		dot.centerpad(
			dot.displaybox(
				dot.div().id("dothtmllogopreview").style(dotcss.widthP(100).heightP(100)),
				
				dot.h2("HTML Page Builder")
				.p("DOThtml is Josh Sideris' answer to dynamic HTML page construction. It's more human-friendly than HTML or other page building / UI frameworks, 100% client-side with no compiler needed, and integrates with JQuery to provide tons of dynamic event listeners and display helpers. You can even use it to create widgets, like all the interactive project boxes on this page.")
				.p("DOThtml is our page-builder of choice for almost all web projects, and this allows us to deliver top-quality content while keeping costs down. Check the DOThtml home page for more information.")
				.a("Learn more.").class("learnmore").href("http://jsideris.com/DOThtml/").target("_blank"),
				function(){
					$("#dothtmllt").hide(500);
					$("#dothtmlgt").hide(500);
					setTimeout(function(){
						$("#dothtmllogodotsmall").show(300, function(){
							setTimeout(function(){
								$("#dothtmllogodotsmall").animate({width: 256, height: 256, marginTop: 0}, 500, "swing", function(){
									dot("#dothtmllogodotsmall").h("DOT");
									setTimeout(function(){
										$("#dothtmlslogan").animate({opacity: 1}, 500, "swing");
									}, 200);
								});
							}, 500);
						});
					}, 1000);
				}
			)
			.div(
				dot.videolist("DOThtml Tutorial", ["vuokupujbsE", "mmaNxsrwG8Y", "qHcAXqsbH7g"], playVideo)
			).style(dotcss.whiteSpace("no-wrap"))
			.displaybox(
				dot.div().id("dotcsslogopreview").style(dotcss.widthP(100).heightP(100)),
				
				dot.h2("HTML Page Builder")
				.p("DOTcss is a companion library to DOThtml. It provides a JavaScript-friendly way to set styles, and do animations. It is particularly useful for its compact syntax, as well as it's intuitive handling of colors and length units.")
				.p("The library was build by Joshua Sideris .")
				.a("Learn more.").class("learnmore").href("http://jsideris.com/DOTcss/").target("_blank"),
				function(){
					$("#dothtmllt").hide(500);
					$("#dothtmlgt").hide(500);
					setTimeout(function(){
						$("#dothtmllogodotsmall").show(300, function(){
							setTimeout(function(){
								$("#dothtmllogodotsmall").animate({width: 256, height: 256, marginTop: 0}, 500, "swing", function(){
									dot("#dothtmllogodotsmall").h("DOT");
									setTimeout(function(){
										$("#dothtmlslogan").animate({opacity: 1}, 500, "swing");
									}, 200);
								});
							}, 500);
						});
					}, 1000);
				}
			)
			.displaybox(
				dot.div(
					dot.img().src("images/SequencrLogo.png")
					.div("Sequencr.js").id("sequencrname")
					.br().clear("all")
					.div(
						dot.span("&nbsp;").id("sequencrheadertext")
						.span("&brvbar;").id("sequencrheadercursorchar")
					).id("sequencrtextholder")
				).id("sequencrpreview"),

				dot
				.h2("A Powerful Promise/Sleep Framework")
				.p("Sequencr.js allows you to chain functions together and allows asynchronous promise-or-timeout based looping. It doubles as a complete EcmaScript 6 promise framework and makes async programming much easier.")
				.a("Learn more.").class("learnmore").href("https://jsideris.github.io/Sequencr.js/").target("_blank")
			, function(){
				var headertext = "Chain functions together, or execute loops, punctuated by timeouts or promises.";
				setTimeout(function(){
					Sequencr.for(0, headertext.length, function(i){
						$("#sequencrheadertext").append(headertext[i]);
					}, function(){return 10 + Math.pow(Math.random(), 2) * 130}, function(){
						setTimeout(function(){
							sequencrheaderblink = false;
						}, 5000)
					});
				}, 750);
			})
		)
	);
});