(function( $ ) {
	"use strict";

	$( document ).ready(function() {
		$("[id^='bselect-']").bselect();

		// Clean up the mess with imported files
		if ( window.localStorage !== undefined ) {
			for (var k in localStorage) {
				if ( localStorage.hasOwnProperty( k ) && k.indexOf(".less") > -1 ) {
					delete localStorage[ k ];
				}
			}
		}

		window.prettyPrint && prettyPrint();
	});

})( jQuery );