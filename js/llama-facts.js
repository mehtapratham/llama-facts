$(function() {
	$('.scroll-down-arrow').on('click.scroll-down-btn', onDownArrowClick);
	$('.scroll-up-arrow').on('click.scroll-up-btn', onUpArrowClick);
	setTimeout(function(){
		updateNavigation();
	},100);
});

var currentVisiblePage=0,
arrPages=['.info-item.info-item-about-me','.info-item.info-item-about-me','.info-item.info-item-where-to-find-me'];



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
		if(currentVisiblePage >= arrPages.length-1){
			$('.scroll-down-arrow').hide();
			currentVisiblePage = arrPages.length-1;
		}
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
	if(currentVisiblePage <= 0){
		$('.scroll-up-arrow').hide();
		currentVisiblePage = 0;
	}
	updateNavigation();
}

function updateNavigation(){
	$('.nav-item-active').removeClass('nav-item-active');

	$('.nav-item:nth-child('+(currentVisiblePage+1)+')').addClass('nav-item-active');
}