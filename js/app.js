(function($, document, window){
	
	$(document).ready(function(){

		// Cloning main navigation for mobile menu
		$(".mobile-navigation").append($(".main-navigation .menu").clone());

		// Mobile menu toggle 
		$(".menu-toggle").click(function(){
			$(".mobile-navigation").slideToggle();
		});

		$(".hero").flexslider({
			directionNav: false,
			controlNav: true
		});

		var map = $(".map");
		var latitude = map.data("latitude");
		var longitude = map.data("longitude");
		if( map.length ){
			
			map.gmap3({
				map:{
					options:{
						center: [latitude,longitude],
						zoom: 15,
						scrollwheel: false
					}
				},
				marker:{
					latLng: [latitude,longitude],
					options:{
			          icon: "images/map-pin.png"
			        }
				}
			});
			
		}

		// var waypoint = new Waypoint({
		  var $section =  $(".fullwidth-block");
		  $section.each(function(){
		  	$(this).waypoint(function(){
		  		$("a[href=#"+this.element.id+"]" ).parent("li").toggleClass("current-menu-item").siblings().removeClass("current-menu-item");
		  	},{
		  		offset: 200
		  	});
		  });
		  

	});

	$(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            $('.site-header').addClass("sticky");
        } else {
            $('.site-header').removeClass("sticky");
        }
    }); 

	$(window).load(function(){

	});

})(jQuery, document, window);