dot.createWidget("worktab", function(){
	return dot.tabcontent("work", 
		dot.centerpad(
			dot.h1("A few of our custom websites & web apps.")
			.websitepreview("http://minima.ca", "./images/websites/minima.png")
			.websitepreview("http://jsideris.com/AdvancedKspMissionCalculator/", "./images/websites/kspstill.png")
			.websitepreview("http://jsideris.com", "./images/websites/jsideris.png")

			.h1("Dynamic Logos")
			.p("We make head-turning dynamic logos. The logos are built using classic JavaScript (not canvas/svg/videos). This makes them light-weight, and gives them a very high level of browser compatibility.")
			.p("These powerful logo-rendering scripts are able to scale your animated logo to any size, making it ideal for a consistent cross-platform experience. You can even allow users to interact with your logo, adding a new dimension of depth to your brand.")
			.p("We can design your logo from scratch, or work with what you already have. We are also able to export these logos to video, svg, png, or other formats, so that you can can use your JavaScript logo everywhere.")
			.p("The best part is that these logos are priced comparable to static logos!")
			.logopreview("DOThtml", dot.p("One of our first dynamic logos created for the open source web builder, DOThtml."), dothtmlLogo)
			.logopreview("DOTcss", dot.p("HTML5 provides the ability to do 3D transformations."), dotcssLogo)
			.logopreview("", dot.p(""), cityguardLogo)
			.logopreview("", dot.p(""), jsiderisLogo)
			.logopreview("", dot.p(""), MinimaLogo)
		)
		.br().br().br().br().br()
	);
});