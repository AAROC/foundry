/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( '.navbar-fixed-top' ),
		didScroll = false,
		changeHeaderOn = 300;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		header = document.querySelector( '.navbar-fixed-top' );		
		if ( sy >= changeHeaderOn ) {
			console.log('shrinking that shit');
			classie.add( header, 'navbar-shrink' );
			// document.querySelector("#bs-example-navbar-collapse-1, page-scroll").style.color = "white";			
			var links = document.querySelectorAll('navbar-right, nav, navbar-nav, navbar-right, li, a, page-scroll');
			var i;
			for (i = 0; i < links.length; i++) {
				links[i].style.color = "white";
			}
		}
		else {
			classie.remove( header, 'navbar-shrink' );
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();