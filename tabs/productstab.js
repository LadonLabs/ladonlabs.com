dot.createWidget("productstab", function(){
	return dot.tabcontent("products", 
		dot.uicontent(
			dot.product("./images/products/spanel.png", "S-Panel",
				dot.p("S-Panel is our robust, lightweight CMS solution for managing complex data structures in web applications.")
				.p("It allows customers to update custom data on their website with ease, wihtout pushing code changes. It also greatly decreases the development time required to build complex data updaters.")
				.p("S-Panel is currently available to our web app customers with hosts supporting node or php. We're working to expand this app so that it can be used for web projects by other developers. Contact us sign up for early access!")
			)
			.product("./images/products/steganodata.png", "Steganographic Video Tagger",
				dot.p("Our steganographic video tagging solution tags high-value video and audio assets with a unique cryptographic key that is completely invisible to the naked eye (or ear), "
					+ "but which can easily be decoded.")
				.p("This can be used to trace breaches in the chain of trust when distributing content to individuals outside the company, "
					+ "such as post production vendors, television networks, movie theatres, journalists, etc.")
				.p("Our steganographic tool is packed full of useful features.")
				.ul(
					dot.li("Key cannot be removed, or corrupted.")
					.li("Key is retrievable even for scaled, noisy, or distorted video.")
					.li("Built-in redundancy.")
					.li("Supports tagging audio and video.")
					.li("Completely impossible to detect with the human senses.")
					.li("Does not produce detectable \"dead pixels\".")
					.li("Supports multiple encodings. Videos can be encoded each time they move along the chain of trust.")
					//.li("")
				)
				.p("The existing solution of tagging each copy of a video with a numeric tag is ineffective, because the tag can simply be cropped out or distorted, "
					+ "is distracting, and cannot be applied multiple times (such as at each link in the chain of trust).")
				.p("Contact us to learn more.")
			)
			.product("./images/products/cybercrime.jpg", "Anti-Phone Scam",
				dot.h2("An active defence against confidence scammers.")
				.p("A cost-effective system designed to protect vulnerable individuals from scammers. Once a phone number has been added to our system, "
					+ "our servers will bombard the scammer's phone lines with calls, wasting their time, and putting the burden on them to cancel the line. ")
				.p("80% of scams come from 20% of scammers. By crippling the most active scammers, we expect to see a significant drop in the number of scammed individuals.")
				.p("We are seeking a partnership with a police agency to implement this technology. To view our proposal, contact us with an RFP including your name, position, phone number, and agency.")
			)
			.product("./images/products/scanner.jpg", "Point of sale Electronic Produce Identification",
				dot.p("Ladon Labs offers a complete automation and loss management solution for grocery store POS systems. Using state of the art electronic produce identification techniques, "
					+ "our solution is able to instantaneously identify any type of produce at the checkout without the use barcodes.")
				.p("Our solution eliminates theft at self-service checkouts, reduces lineups, and reduces the training time (and cost) of cashiers.")
				.p("Contact us to learn more.")
			)
			.product("./images/products/phashtag.png", "Phashtag: Social Media Analytics for the Digital Web",
				dot.p("Our proprietary logo recognition technology - developed at the Lassonde School of Engineering and the University of Toronto entrepreneurship program The Next 36 - unlocked a new dimension of social media analytics by being able to identify how consumers were interacting with brands and products.")
				.p("This project has reached the end of its life cycle, and we will no longer be offering analytics services. "
					+ "However, if you are interested in picking up where we left off, feel free to contact us for consulting or to hear about licensing options for our IP.")
			)
		).uicontent(
			dot.br().br()
			.div("Contact us today!").class("next-tab-btn").onclick(function(){loadTab("hire", true)})
			.br().br()
		)
		.br()
		.br()
		.br()
		.br()
	);
});