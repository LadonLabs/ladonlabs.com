dot.createWidget("sitetype", function(name, description){
	return dot.div(
		dot.div(
			dot.h1(name)
			.div(description).style(dotcss.whiteSpace("normal"))
		).class("shadow sitetypecontent").style(dotcss.padding(10))
	).style(dotcss.widthP(33.33).display("inline-block").textAlign("left").verticalAlign("top").padding(10))
});
dot.createWidget("sitetypewide", function(name, description){
	return dot.div(
		dot.div(
			dot.h1(name)
			.div(description).style(dotcss.whiteSpace("normal"))
		).class("shadow sitetypecontent").style(dotcss.padding(10))
	).style(dotcss.widthP(33.33).display("inline-block").textAlign("left").verticalAlign("top").padding(10))
});

dot.createWidget("webtab", function(){
	return dot.tabcontent("web", 
		dot.uicontent(
			dot.h1("Custom, responsive full-stack web applications.")
		)
		.uicontent(
			dot
			.div(
				dot
				.sitetype("Custom HTML5",
					dot.p("<code>HTML5</code>, <code>JavaScript</code>, and <code>CSS</code> web applications. No web building frameworks, no templates, <b>custom everything</b>.")
					.p("All of our web apps are <b>dynamic</b>, <b>responsive</b>, and <b>mobile-friendly</b>.")
					.p("We offer specialty services in <b>single page web applications</b> and focus on delivering exceptional <b>UX</b>.")
				)
				.sitetype("Full Stack",
					dot.p("Custom back-ends for each application using <code>ASP.NET</code>, <code>Node.js</code>, <code>Rudy on Rails</code>, or <code>PHP</code>.")
					.p("We can help you implement a <b>database solution</b> that's right for you.")
					.p("We are also experienced at building <b>RESTful APIs</b>.")
				)
				.sitetype("Mobile Apps", 
					dot.p("Make your web-based service even more accessible by turning it into an app.")
					.p("We build <b>internet-based apps</b> for <code>Android</code>.")
				)
			).style(dotcss.whiteSpace("nowrap"))
		).uicontent(
			dot.br().br()
			.div("Check out our work.").class("next-tab-btn").onclick(function(){loadTab("work", true)})
			.br().br()
		)
	)
});