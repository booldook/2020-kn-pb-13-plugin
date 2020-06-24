$(".musics > .music").click(function(){
	$(this).siblings().removeClass("active");
	$(this).addClass("active");
});
$(".musics > .music").eq(0).trigger("click");