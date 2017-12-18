  jQuery('.article-link').click(function(){
    var projectUrl = jQuery(this).attr("href");      
    
    jQuery('#section-2').animate({opacity:1}, 400,function(){
      jQuery("#section-2").load(projectUrl);
      jQuery('#section-2').delay(400).animate({opacity:1}, 400);
    });  

    
    //Project Page Open
    jQuery('#section-2').slideUp(600, function(){
      jQuery('#section-2').addClass('open');
      jQuery('html, body').animate({ scrollTop: jQuery("#bottom").offset().top -86}, 900);
    }).delay(900).slideDown(600,function(){          
        jQuery('#section-2').fadeIn('slow',function(){

          if (jQuery('.project-slider').length > 0) {            
            // initProjectSlider();
            $('.carousel').carousel({
              interval: 2000
            })

          }
        });
    });

    return false;       
  
  });


  //Project Page Close
  jQuery('.close-project223852832').click(function(event) {
    jQuery('#section-2').animate({opacity:0}, 400,function(){
      jQuery('#project-extended223852832').slideUp(400).removeClass('open');
      jQuery('html, body').animate({ scrollTop: jQuery("#islerimiz").offset().top -86}, 900);
    });
    return false;
  });

$(window).scroll(function() {
  if($(this).scrollTop() > 0){
  jQuery('#bgndVideo').YTPSetVolume(0);
	$("header").addClass("blackbg");
  $('#videoframe').attr('src','https://player.vimeo.com/video/149873059');
	} else {
	$("header").removeClass("blackbg");
  jQuery('#bgndVideo').YTPSetVolume(100);
  $('#videoframe').attr('src','');
	}
});


