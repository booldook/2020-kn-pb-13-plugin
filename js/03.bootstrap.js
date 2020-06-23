$(".tel1 .dropdown-item").click(function(){
	// $(this).parent().prev()
	$(".tel1 button").html($(this).html());
});

$("#form-range").change(function(){
	$("#form-range-price").text(	$(this).val()	);
}).trigger("change");

// Example starter JavaScript for disabling form submissions if there are invalid fields
var f = $('.needs-validation');
// Loop over them and prevent submission

var arr = [1, 2, 3, 4, 5];
var newArr = arr.filter(function(v){
	return v > 3;
});
console.log(newArr);

// jQuery
$(".page").each(function(i, v){});

// Javascript
arr.forEach(function(v, i){
	console.log(v);
});

$('form.needs-validation').submit(function(e){
	$(this).find("input, select").each(function(i, v){
		if(v.checkValidity() === false) {
			e.preventDefault();
			e.stopPropagation();
			$('form.needs-validation').addClass('was-validated');
			return false;
		}
	});
	return true;
});

/*
var forms = document.getElementsByClassName('needs-validation');
var validation = Array.prototype.filter.call(forms, function(form) {
	form.addEventListener('submit', function(event) {
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}
		form.classList.add('was-validated');
	}, false);
});
*/
