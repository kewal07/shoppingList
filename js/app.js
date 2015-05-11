$(document).ready(function(){
	$('#enterItem').keydown(function(e) {
    	if (e.keyCode == 13) {
        	e.preventDefault();
        	var item = $('#enterItem').val();
       		if(item.length > 0){
       			$('#items ul').append('<li class="liItem"><i class="fa fa-check"></i><span class="spanItem"></span><i class="fa fa-times"></i></li>');
       			$('.spanItem').last().text(item);
       			$('#enterItem').val('');
       		}
    	}
	});
  $(document).on('click', '.fa-check', function() {
    var item = $(this).children();
    $(this).next().css('text-decoration','overline underline line-through');
  });
	$(document).on('click', '.fa-times', function() {
    $(this).parent().remove();
  });
  $('.reset').click(function(){
    $('#items ul').children().remove();
  });
});