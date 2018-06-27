
// start fixed menu

	// mouseenter
	$('.fixed-menu').on('mouseenter', function () {  
		// console.log($('.fixed-menu'))

		$('.fixed-menu').addClass('is-visible');    


		if($('.fixed-menu').hasClass('is-visible')){    
  
			$('.fixed-menu').animate({                
				left: 0	
				}, 500);
				$('body').animate({
				paddingLeft: '100px'   								//this push the body 
			}, 500);
		}else{
			$('.fixed-menu').animate({
				left: '-100px'	
			}, 500);

			$('body').animate({                                //this push the body
			paddingLeft: 0
			}, 500);
		}
	});
	//mouseleave
	$('.fixed-menu').on('mouseleave', function () {  
		

		$('.fixed-menu').removeClass('is-visible');   

		if($('.fixed-menu').hasClass('is-visible')){    
  
			$('.fixed-menu').animate({                 
				left: 0	
				}, 500);
			$('body').animate({
				paddingLeft: '220px'   								//this push the body 
			}, 500);

		}else{
			$('.fixed-menu').animate({
				left: '-90px'	


			}, 500);
			$('body').animate({                                //this push the body
			paddingLeft: 0
			}, 500);

	
		}
	});



	// $('.visible').on('mouseenter', function () {
	// 	console.log('kjfhgkjdfhk')
	// });



