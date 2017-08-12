var currentVidIndex = 0;
var currentVidArray = [];
function playVideo(array, index){
	blockStop = true;
	setTimeout(function(){blockStop = false}, 50);
	currentVidArray = array;
	currentVidIndex = index;
	$("#video-player")[0].src = "https://www.youtube.com/embed/" + array[index] ;//+ "?autoplay=1";
	$("#absolute-video-player-container").fadeIn();
}
var blockStop = false;
function stopVideo(){
	if(blockStop) return;
	currentVidArray = 0;
	$("#absolute-video-player-container").fadeOut(function(){
		$("#video-player")[0].src = "";
	});
}
function prevVid(){currentVidIndex = Math.max(0, currentVidIndex - 1); playVideo(currentVidArray, currentVidIndex);}
function nextVid(){currentVidIndex = Math.min(currentVidArray.length - 1, currentVidIndex + 1); playVideo(currentVidArray, currentVidIndex);}

dot.createWidget("fsvideoplayer", function(){
	return dot.div(
		//TODO: just changed width and height from dot.iframe.width(420).height(315)
		dot
		.div(dot.span("<")).id("prev-video").onclick(prevVid).style("cursor: pointer;")
		.div(dot.span(">")).id("next-video").onclick(nextVid).style("cursor: pointer;")
		.iframe().id("video-player").attr("allowfullscreen")//.width(640).height(390)
	).id("absolute-video-player-container").onclick(stopVideo).style("display: none; cursor: zoom-out;");
})