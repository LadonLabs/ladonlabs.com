
function cubeGlobeEmblem(targetSelector){
	return new InteractiveEmblem(targetSelector, 2, {
		draw: function(emblem, dot, dotcss){
			if(!dot.cubeglobecubeface){
				dot.createWidget("cubeglobecubeface", function(axis, r, w, bgImg){
					return dot.div("").style(dotcss.position("absolute").backgroundImage(bgImg).backgroundSize("cover").fontSize(w).lineHeight(w).width(w).height(w).transform(" rotate" + axis + "(" + r + "deg) translate3d(0, 0, " + w / 2 + "px)"))
				});
			}
			if(!dot.cubeglobecube){
				dot.createWidget("cubeglobecube", function(width, faceUrls){
					return dot.div(
						dot.cubeglobecubeface("Z", 0, width, faceUrls[0])
						.cubeglobecubeface("Y", 90, width, faceUrls[1])
						.cubeglobecubeface("Y", -90, width, faceUrls[2])
						.cubeglobecubeface("Y", 180, width, faceUrls[3])
						.cubeglobecubeface("X", 90, width, faceUrls[4])
						.cubeglobecubeface("X", -90, width, faceUrls[5])
					).style(dotcss.transformStyle("preserve-3d").display("inline-block").width(width).height(width).transform(dotcss.perspective("15cm").rotateX(-15).rotateY(0)));
				});
			}
		},
		play: function(emblem, dot, dotcss){

		},
		skip: function(emblem, dot, dotcss){

		},
		resize: function(emblem, dot, dotcss){

		}
	});
}

dotcssLogo.animation = function(e, dot, dotcss, speed){

}