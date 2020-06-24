$(".musics > .music").click(function(){
	$(this).siblings().removeClass("active");
	$(this).addClass("active");
});
$(".musics > .music").eq(0).trigger("click");

$(".bt-modal").click(function(){
	$("#modal1").modal('show');
});
$(".bt-close").click(function(){
	$("#modal1").modal('hide');
});

$(".tab-wrap").find(".nav-link").click(function(){
	$(this).siblings().removeClass('active');
	$(this).addClass('active');
	$(".tab-cont").addClass('d-none');
	$(".tab-cont").eq($(this).index()).removeClass('d-none');
});

$('[data-toggle="tooltip"]').tooltip();
$('.popover-bt').popover({ container: 'body', offset: 200 });

$(".bt-photoshop").click(function(){
	$(".photoshop").find(".progress-bar").css("width", "82%");
});

$('#btToast').click(function(){
	$('#alertToast').toast('show');
});