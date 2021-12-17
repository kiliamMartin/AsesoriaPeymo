jQuery('document').ready(function($){
    

    var menuButton = $('.menu-icon'),
        dropdown= $('.children'),
        contador = 1;

     
    
    
    if($(window).width() <= 236) {
        $("#logo").attr("src", "");
        $('.nav').css("top" ,"4.2rem")
    } else {
        $('.nav').css("top" ,"5.6rem")
        if($(window).width() <= 408) {
            $("#logo").attr("src", "assets/images/logo.svg");
        } else {
            $("#logo").attr("src", "assets/images/ff.svg");
        }
        
    }
    if($(window).height() <= 634 && $(window).width()<= 1064) {
        $('nav').css("overflow-y","scroll");
    }

    

    $(window).on('resize', function(){
        if($(window).height() <= 634 && $(window).width()<= 1064) {
            $('nav').css("overflow-y","scroll");
        }else{
            $('nav').css("overflow-y","hidden");
        }
    
        if($(window).width() <= 236) {
            $("#logo").attr("src", "");
            $('.nav').css("top" ,"4.2rem")
        } else {
            $('.nav').css("top" ,"5.6rem")
            
        }
        if($(window).width() <= 408) {
            $("#logo").attr("src", "assets/images/logo.svg");
        } else {
            $("#logo").attr("src", "assets/images/ff.svg");
        }
        
       
        
    });
    
    
    menuButton.click(function(){
        if (contador == 1) {
			$('nav').animate({
				left: '0'
			});
            $('.menu').attr("src", "assets/images/x.svg")
           
            
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
            $('.menu').attr("src", "assets/images/list.svg")
            
		}
    });
    $('.submenu').click(function(){
		$(this).children('.children').slideToggle();
	});

  

     dropdown.bind({
        mouseenter: function() {
            $('#user-account ').addClass('active') ;

        }, 
        mouseleave:function(){
            $('#user-account ').removeClass('active') ;
            
        }
    });
    
   
   


});