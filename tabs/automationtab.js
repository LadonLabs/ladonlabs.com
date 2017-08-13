var automatedLineHeight = 68;
var automationListInit = [
	"accounting",
	"computer vision",
	"backups",
	"data entry",
	"data import",
	"data mining",
	"decision making",
	"fraud detection",
	"inventory management",
	"notifications",
	"object detection",
	"object tracking",
	"pattern recognition",
	"processing",
	"payment",
	"record keeping",
	"sales",
	"signal processing",
	"support tickets",
	"testing",
	"tools",
	"validation",
	"web crawling"
];
var automationList = [];
while(automationListInit.length > 0) automationList.push(automationListInit.splice(Math.floor(Math.random() * automationListInit.length), 1));
//Modernizr.csstransforms3d = false; //Use this to test how browsers that don't support 3d will view this page.
dot.createWidget("automationtab", function(){
	var ret = dot.tabcontent("automation", 
		dot.uicontent(
			dot.div(
				dot.div("automated").style(dotcss.position("absolute").top(476).widthP(50).textAlign("right").paddingRight(10).fontSize(automatedLineHeight * 3 / 4).height(automatedLineHeight).lineHeight(automatedLineHeight))
				.div(
					dot.iterate(automationList.length, function(i){
						var element = automationList[i];
						return dot.div(element).id("automated-" + i)
							.style(
								dotcss.position("absolute")
								.top(i === 0 || Modernizr.csstransforms3d ? automatedLineHeight : 0)
								.opacity(i === 0 || Modernizr.csstransforms3d ? 1 : 0)
								.lineHeight(automatedLineHeight)
								.transformOrigin("50% 50% -34px") //TODO: fix probelm with dotcss that was causing this to not render properly.
								.transform(Modernizr.csstransforms3d ? "rotateX(90deg)"/* translateZ(" + automatedLineHeight/2 + "px)"*/ : "none")
							);
					})
				).style(dotcss.position("absolute").top(476 - automatedLineHeight).right(0).widthP(50).overflow("hidden").textAlign("left").paddingLeft(10).fontSize(automatedLineHeight * 3 / 4).height(automatedLineHeight * 3))
			).style(dotcss.position("relative").widthP(100).heightP(100).whiteSpace("nowrap"))
		).style(dotcss.height(1000).verticalAlign("middle"))//is this a good height?
		.uicontent(
			dot.uicenter(
				dot.h1("We've saved our clients $500K in lost productivity.").style(dotcss.widthP(30).float("left"))
				.p("Let our \"robots\" do what they do best, so that your employees can focus on what they do best. "
					+ "<br /><br />All of our custom automation solutions are guaranteed to pay for themselves.").style(dotcss.widthP(70).float("right"))
			)
		).style(dotcss.height(500))
		.uicontent(
			dot.h1("How it works.")
			.p("There are two ways to use our services. Buy an automation solution, or request automation consulting.")
			.div(
				dot.div(
					dot.h2("Option 1: Buy a Solution")
					.p("You have a problem and need a solution.")
					.div(
						dot.div("Identify your inefficiency, and tell us about it.").class("how-it-works-info").div().class("how-it-works-arrow")
						.div("Our experts will provide an in-depth recommendation for the best option.").class("how-it-works-info").div().class("how-it-works-arrow")
						//.li("If our recommendation is a custom software solution, we can build it for you, or write a requirements document for you to build it in-house.")
					).class("how-it-works")
				).style(dotcss.display("inline-block").whiteSpace("normal").widthP(50).verticalAlign("top"))
				.div(
					dot.h2("Option 2: Request Consulting")
					.p("You would like to increase the efficiency of your business.")
					.div(
						dot.div("Contact us and schedule an appointment.").class("how-it-works-info").div().class("how-it-works-arrow")
						.div("We'll pay your office a visit, and give short interviews to your team.").class("how-it-works-info").div().class("how-it-works-arrow")
						.div("Our experts will identify automatable inefficiencies, and suggest the best options to resolve them.").class("how-it-works-info").div().class("how-it-works-arrow")
						//.li("If our recommendations are for custom software solutions, we can build it for you, or write requirements documents for you to build them in-house.")
					).class("how-it-works")
				).style(dotcss.display("inline-block").whiteSpace("normal").widthP(50).verticalAlign("top"))
			).style(dotcss.whiteSpace("nowrap").textAlign("left").verticalAlign("top"))
			.div(
				dot.div("If our recommendations are for custom software solutions, we can build it for you, or write requirements documents for you to build them in-house.").class("how-it-works-info")
			).class("how-it-works")
		).style("text-align: center;")
		.uicontent(
			dot.h1("We build software to make you more productive.")
			.ul(
				dot
				.li("Data collection, entry, processing, and validation.")
				.li("Sorting, searching.")
				.li("Building, testing, integration.")
				.li("Timed tasks (backups/reminders/alerts).")
				.li("Image processing.")
				.li("Reporting.")
				.li("Task management & ticketing.")
				.li("And more.")
			).style(dotcss.textAlign("left"))
		).uicontent(
			dot.br().br()
			.div("Check out some of our existing solutions.").class("next-tab-btn").onclick(function(){loadTab("products", true)})
			.br().br()
		)
		.br()
		.br()
		.br()
		.br()
		.br()
		.br()
		.br()
		.br()
	);

	setTimeout(animateNextAutomation, 0);

	return ret;
});

//Automation animation script.
var animateAutomationIndex = 1;
var lastAnimateAutomationIndex = 0;
function animateNextAutomation(){
	if(!Modernizr.csstransforms3d){
		dotcss("#automated-" + animateAutomationIndex).top(0);
		dotcss("#automated-" + animateAutomationIndex).fadeIn(500).top.animate(automatedLineHeight, 500, "exponential");
		dotcss("#automated-" + lastAnimateAutomationIndex).fadeOut(500).top.animate(automatedLineHeight*2, 500, "exponential");
	}
	else{
		dotcss("#automated-" + animateAutomationIndex).transform("rotateX(90deg)"/* translateZ(" + automatedLineHeight/2 + "px)"*/);
		dotcss("#automated-" + animateAutomationIndex)./*fadeIn(500).*/transform.animate("rotateX(0deg)"/* translateZ(" + automatedLineHeight/2 + "px)"*/, 500, "exponential");
		dotcss("#automated-" + lastAnimateAutomationIndex)./*fadeOut(500).*/transform.animate("rotateX(-90deg)"/* translateZ(" + automatedLineHeight/2 + "px)"*/, 500, "exponential");
	}
	lastAnimateAutomationIndex = animateAutomationIndex;
	animateAutomationIndex = (animateAutomationIndex + 1) % automationList.length;
	setTimeout(function(){
		animateNextAutomation();
	}, 1000);
}