$(document).ready(function(){
	"use strict";
    
        

	//  filterizer js

		var filterizd = $('.work-item').filterizr({   
	        //options object
	        // layout: 'sameSize', // See layouts
	    });

	    $(function() {
			$('.work-filters button').click(function() {
				$('.work-filters button').removeClass('active');
				$(this).addClass('active');
			});
		});

	    

});	
	