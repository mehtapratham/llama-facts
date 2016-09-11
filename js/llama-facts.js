$(function() {
	$('.scroll-down-arrow').on('click.scroll-down-btn', onDownArrowClick);
	$('.scroll-up-arrow').on('click.scroll-up-btn', onUpArrowClick);
	setTimeout(function(){
		updateNavigation();
		updateFirstPageContent();
	},100);
	$('.nav-item').on('click.nav-item-click', updateNavigationOnNavItemClick);
});

var currentVisiblePage=0,
arrPages=['.info-item.info-item-about-me','.info-item.info-item-about-me','.info-item.info-item-where-to-find-me'],
firstPageCurrentContent = 0,
isSocialAnimated = false;

function updateNavigationOnNavItemClick(event){
	var indexNavItem = $('.nav-item').index(event.target);
	
	if(indexNavItem > currentVisiblePage){
		while(currentVisiblePage!=indexNavItem){
			onDownArrowClick(event);
		}
	} else if(indexNavItem < currentVisiblePage){
		while(currentVisiblePage != indexNavItem){
			onUpArrowClick(event);
		}
	}
}


function onDownArrowClick(event){
	currentVisiblePage++;
	if(currentVisiblePage >= arrPages.length){
		$('.scroll-down-arrow').hide();
		currentVisiblePage = arrPages.length-1;
	} else {
		if(currentVisiblePage > 0){
			$('.scroll-up-arrow').show();
		}
		$(arrPages[currentVisiblePage]).addClass('translate-item');
		
	}
	updateNavigation();
}

function onUpArrowClick(event){
	if(currentVisiblePage <= 0){
		$('.scroll-up-arrow').hide();
		currentVisiblePage = 0;
	} else {
		if(currentVisiblePage < arrPages.length){
			$('.scroll-down-arrow').show();
		}
		$(arrPages[currentVisiblePage]).removeClass('translate-item');
		
	}
	currentVisiblePage--;
	updateNavigation();
}

function updateNavigation(){
	$('.nav-item-active').removeClass('nav-item-active');

	$('.nav-item:nth-child('+(currentVisiblePage+1)+')').addClass('nav-item-active');

	if(currentVisiblePage <= 0){
		$('.scroll-up-arrow').hide();
		currentVisiblePage = 0;
	}
	if(currentVisiblePage >= arrPages.length-1){
		$('.scroll-down-arrow').hide();
		currentVisiblePage = arrPages.length-1;
		if(!isSocialAnimated){
			isSocialAnimated = true;
			var socials = $('.social-item'), i=0;

			setInterval(function(){
				$('.social-item:nth-child(' +(i+1)+')' ).addClass(' bounce animated');
				i++;
				if(i>=$('.social-item').length){
					clearInterval();
				}
			},150);
			
		}
	}
}


function updateFirstPageContent(){

	$('.info-item-content').hide();
	$('.info-item-content-' + firstPageCurrentContent).show();
	$('.dot-active').removeClass('dot-active');
	$('.dot-' + firstPageCurrentContent).addClass('dot-active');
	firstPageCurrentContent++;

	setInterval(function(){
		$('.info-item-content').hide();
		$('.info-item-content-' + firstPageCurrentContent).show();
		$('.dot-active').removeClass('dot-active');
		$('.dot-' + firstPageCurrentContent).addClass('dot-active');
		firstPageCurrentContent++;
		if(firstPageCurrentContent >= 3){
			firstPageCurrentContent=0;
		}
	},4000);

}