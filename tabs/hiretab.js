dot.createWidget("hiretab", function(){
	return dot.tabcontent("hire", 
		dot.uicontent(
			dot.uicenter(
				dot.h1("Contact Us")
				.h2("Send all RFPs or inquiries to info@ladonlabs.com.")
				.br()
				//.iframe().src("./signup.html").style("width: 100%;").height(1000)
			)
		).style(dotcss.backgroundImage("./images/toronto.jpg").backgroundSize("cover").height(1000).paddingTop(200))
	);
});