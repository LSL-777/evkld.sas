function hide(button, element) {
	document.querySelector(button).addEventListener('click', function () {
		document.querySelector(element).classList.toggle('hidden')
	})
}

window.addEventListener('DOMContentLoaded', function () {
	hide('.head__menu-icon', '.head_menu')
	hide('.head_menu__close', '.head_menu')
	hide('.head__search-icon', '.head_search')
	hide('.head_search__close', '.head_search')

	const swiper = new Swiper('.swiper', {
		// Optional parameters
		loop: true,

		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
		},
	});

	$( function () {
		$( "#tabs" ).tabs();
	} );

	$( function() {
		$( "#accordion" ).accordion();
	} );
})
