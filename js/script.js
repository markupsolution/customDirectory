
$(function(){
	$('.search-keyword').focus(function(){
		$(this).closest('.keywrod-place').addClass('active');
	});
	$('.search-keyword').blur(function(){
		$(this).closest('.keywrod-place').removeClass('active');
	});
});