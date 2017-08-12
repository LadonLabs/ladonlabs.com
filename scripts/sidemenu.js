dot.createWidget("sidemenu", function(){
	return dot.div(
		dot.div(
			dot.div("&lt;").class("sidemenubuttongraphic")
			.div("LESS").class("sidemenubuttontext")
		).id("sidemenuclosebutton").class("sidemenubutton sidemenuclosebutton").style("visibility: visible;").onclick(function(){
			$("#sidemenu").hide({ direction: 'left' });
		})
		
		.div(
			dot.div("&lt;").class("sidemenubuttongraphic")
		).id("sidemenuclosebuttonsmall").class("sidemenubutton sidemenuclosebutton").style("visibility: hidden;").onclick(function(){
			$("#sidemenu").hide({ direction: 'left' });
		})
		
		.h2(dot.a("Main").href("http://ladonlabs.com"))

		.h2("Services")
		.ul(
			dot
			.li(dot.a("Process Automation"))
			.li(dot.a("Web Apps & Design"))
			.li(dot.a("Startup Consulting"))
		)

		.h2("About Us")
		.ul(
			dot
			.li(dot.a("Products"))
			.li(dot.a("Our Work"))
			.li(dot.a("Hire Us"))
		)

		.h2("Legal")
		.ul(
			dot
			.li(dot.a("Privacy"))
			.li(dot.a("Terms of Service"))
		)

	).id("sidemenu").class("sidemenu").style("display:none")
	
	//Again, this had a different ID before for the small version.
	.div(
		dot.div("&lt;").class("sidemenubuttongraphic")
		.div("MORE").class("sidemenubuttontext")
	).id("sidemenubutton").class("sidemenubutton sidemenuopenbutton").style("visibility: hidden; display: block;").onclick(function(){
		$("#sidemenu").show({ direction: 'right' });
	})
	.div(
		dot.div("&lt;").class("sidemenubuttongraphic")
	).id("sidemenubuttonsmall").class("sidemenubutton sidemenuopenbutton").style("visibility: hidden; display: block;").onclick(function(){
		$("#sidemenu").show({ direction: 'right' });
	})
});


function EnableSmallerMainMenuButtons() {
	$("#sidemenubutton").css("visibility", "hidden");
	$("#sidemenuclosebutton").css("visibility", "hidden");
	$("#sidemenubuttonsmall").css("visibility", "visible");
	$("#sidemenuclosebuttonsmall").css("visibility", "visible");
}

function EnableLargerMainMenuButtons() {
	$("#sidemenubutton").css("visibility", "visible");
	$("#sidemenuclosebutton").css("visibility", "visible");
	$("#sidemenubuttonsmall").css("visibility", "hidden");
	$("#sidemenuclosebuttonsmall").css("visibility", "hidden");
}

function DisableMainMenuButtons() {
	$("#sidemenubutton").css("visibility", "hidden");
	$("#sidemenuclosebutton").css("visibility", "hidden");
	$("#sidemenubuttonsmall").css("visibility", "hidden");
	$("#sidemenuclosebuttonsmall").css("visibility", "hidden");
}

function AttachMenuScrollListener(item) {
	var scrollbehavior = function (item) {
		var delta = item.scrollTop();
		if (delta > 40) {
			$(".sidemenuopenbutton").hide({ direction: 'left' });
		} else {
			$(".sidemenuopenbutton").show({ direction: 'right' });
		}

		var bdelta = $(document).height() - item.height() - item.scrollTop();

		if (bdelta > 10) {
			$(".lowermenu").hide({ direction: 'down' });
		} else {
			$(".lowermenu").show({ direction: 'up' });
		}
	}


	$(item).scroll(function (event) {
		scrollbehavior($(item));
	});

	$(window).resize(function () {
		scrollbehavior($(item));
	});
	scrollbehavior($(item));
}