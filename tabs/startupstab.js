dot.createWidget("startupstab", function(){
	return dot.tabcontent("startups", 
		dot
		.uicontent(
			dot.h1("We're an experienced team of connected tech-entrepreneurs, and we can help you get your tech-based startup off the ground.")
			.table(dot.tr(dot.td(
				dot.img().src("./images/joshonstage.jpg")
			).td(
				dot.uicenter(
					dot.img().src("./images/entrepreneurship/next36logo.jpg").style(dotcss.height(70).padding(25))
					.img().src("./images/entrepreneurship/bestlogo.png").style(dotcss.height(70).padding(25))
					.img().src("./images/entrepreneurship/mcclogo.png").style(dotcss.height(70).padding(25))
					.img().src("./images/entrepreneurship/nicollogo.gif").style(dotcss.height(70).padding(25))
					.img().src("./images/entrepreneurship/yedilogo.png").style(dotcss.height(70).padding(25))
					.img().src("./images/entrepreneurship/launchyulogo.png").style(dotcss.height(70).padding(25))
				)
			)))
		).uicontent(
			dot.h1("Here's what we can help you with:")
			.ul(
				dot
				.li("Early-stage ideation, constructive criticism.")
				.li("Business planning & strategy.")
				.li("Slide decks & pitches.")
				.li("Landing page / MVP creation.")
				.li("Technology consulting & system design.")
			).class("startups-services-list")
		)//.style(dotcss.textAlign("left"))
		.uicontent(
			dot.br().br()
			.div("Tell us about your startup!").class("next-tab-btn").onclick(function(){loadTab("hire", true)})
			.br().br()
		)
		.br().br().br().br().br().br()
	)
});