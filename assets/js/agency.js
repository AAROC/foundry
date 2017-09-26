/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});

// $(function(){
//     $(".themes").typed({
//         strings: ['What infrastructure is being built?', 'What are the tools of the trade?', 'How are we using the  tools of the trade?', 'What building blocks have been produced?', 'What have we learned by building  infrastructures and building blocks?', 'How re-usable are these building blocks?', 'How can we share what we have learned and built?'],
//         typeSpeed: Math.floor(Math.random() * (50 - 35)) + 35,  // typing speed can be set as a number or in this formula to randamize 'Math.floor(Math.random() * (max - min)) + min' 
//         backDelay: 2500, // pause before backspacing
//         loop: true, // loop on or off (true or false)
//         loopCount: false, // number of loops, false = infinite
//     });
// });
// var themes = new Typed('#themes', {
//                 stringsElement: '#themes',
//                 typeSpeed: 150, 
//                 showCursor: true, 
//                 cursorChar: '|',
//                 autoInsertCss: true,
//                 strings: ['What infrastructure is being built?', 'What are the tools of the trade?', 'How are we using the  tools of the trade?', 'What building blocks have been produced?', 'What have we learned by building  infrastructures and building blocks?', 'How re-usable are these building blocks?', 'How can we share what we have learned and built?']
// });


// var things = new Typed('#things', {
//     typeSpeed: 150,
//     showCursor: true,
//     cursorChar: "_",
//     autoInsertCss: true,
//     startDelay: 1000,
//     strings: ["Building compute platforms","Building application delivery services","Building scientific applications", "Building data repositories", "Building collaboration services", "Building ", "Building etc"],
//     shuffle: true,
//     loop: true,
//     fadeOut: true
// });

// var tools = new Typed('#tools', {
//     typeSpeed: 150,
//     showCursor: true,
//     cursorChar: "_",
//     autoInsertCss: true,
//     startDelay: 1000,
//     strings: ["Ansible","Chef","Puppet","Kubernetes"],
//     shuffle: true,
//     loop: true,
//     fadeOut: true
// });