$(document).ready(function() {
    $("#backer").waypoint(function(event, direction) {
    	if (direction === 'down') {
      	$('.backer').removeClass('hidden');
      }
   		else {
				$('.backer').addClass('hidden');
		}
    });

});