$(function() {
	console.log( "ready!" );
	$('.scroll-down-arrow').on('click.scroll-down-btn', onDownArrowClick);
	$('.scroll-up-arrow').on('click.scroll-up-btn', onUpArrowClick);
});

var currentVisiblePage;

function onDownArrowClick(event){
	console.log('clicked');
	$('.info-item.info-item-about-me').css('transform','translateY(0)');
}

function onUpArrowClick(event){
	console.log('up clicked');
}