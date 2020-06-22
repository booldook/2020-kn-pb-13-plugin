$('input.calendar').pignoseCalendar({
	format: 'YYYY-MM-DD', // date format string. (2017-02-02)
	lang: 'ko',
	week: 1,
	theme: 'blue',
	modal: true,
	select: function(date, context){
		console.log(	$('input.date1').val(), $('input.date2').val()	);
	}
});