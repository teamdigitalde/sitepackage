var bodywidth = document.body.clientWidth;
// Fancybox
$(document).ready(function() {
	$('.fancybox').fancybox();
//	$('.dropdown-submenu > a').submenupicker();

	    // ersetzt das (at) durch @ ohne das für crawler offen zu legen
    $('a[href*="linkTo_UnCryptMailto"]').each(function() {
		if(typeof $(this) === 'string'){
			$(this).text($(this).text().replace('(at)', '@'));
		}
    });
});

// Dropdown mit Slideout
/*
$('.navbar .dropdown, .dropdown-submenu ').hover(function() {
	if(bodywidth >= 720) {
		$(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();
		$(this).find('.dropdown-menu-arrow').first().stop(true, true).delay(250).slideDown();
	}
}, function() {
	if(bodywidth >= 720) {
		$(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp();
		$(this).find('.dropdown-menu-arrow').first().stop(true, true).delay(100).slideUp();
	}
});
*/

// Bei der 1. Ebene wird nach einem Klick der Link zur Seite aktiviert
/*
$('li.dropdown').on('click', function() {
    var $el = $(this);
    if ($el.hasClass('open')) {
        var $a = $el.children('a.dropdown-toggle');
        if ($a.length && $a.attr('href')) {
            location.href = $a.attr('href');
        }
    }
});
*/


/* Geschmeitigeres Scrollen von Anchorlinks */
/*jQuery('a[href*=#]').on('click', function(event){
	event.preventDefault();
	jQuery('html,body').animate({scrollTop:jQuery(this.hash).offset().top}, 500);
});*/

// Accordion Pfeile hoch / runter
$(".accordion-toggle").addClass("collapsed");
$('.collapse').on('shown.bs.collapse', function(){
	$(this).parent().find(".accordion-toggle").removeClass("collapsed");
}).on('hidden.bs.collapse', function(){
	$(this).parent().find(".accordion-toggle").addClass("collapsed");
});

// tel: usw. auf dem Desktop nicht verlinken
$('a[href^="tel:"], a[href^="fax:"], a[href^="sms:"]').click(function() {
    if (navigator.userAgent.search(/(Android|iPhone|Windows Phone|Blackberry)/i) == -1) {
        return false;
                }});

if (navigator.userAgent.search(/(Android|iPhone|Windows Phone|Blackberry)/i) == -1) {
    $('a[href^="tel:"]').css({
        color: 'white',  // Schriftfarbe des Links
        textDecoration: 'none' // Unterstreichung unterdrücken
    });
    $('a[href^="tel:"]').mouseenter(function() {
         $(this).css({
             cursor: 'text' // Cursor beim Hover-State auf text setzen
         });
    });
}
// tel: usw. auf dem Desktop nicht verlinken - ENDE


// Show ToTop-Icon only if scrolled a little bit down
var showed = false;
var scrollTop = 0;
function jumpToElement(elem) {
    if( elem.length ) {
        $('html, body').animate({
            scrollTop: $(elem).offset().top}, {
            duration: 1000,
            complete: function(){
                hideToTop();
            }
        });

    }
}
window.onscroll = function() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 400) {
        if(!showed) {
            showToTop();
        }
    } else {
        if(showed) {
            hideToTop();
        }
    }
};
function hideToTop() {
    $( "div.totop" ).hide( "slow");
    showed = false;
}
function showToTop() {
    $( "div.totop" ).show( "slow");
    showed = true;
}
window.onresize = function(event) {
    bodywidth = document.body.clientWidth;
};

$(document).ready(function () {
    var boxlink= 'link'; // Klasse des Links einfügen
    var boxbutton= 'btn-kaestchen-link'; // Klassen des Buttons einfügen
    var box = 'kaestchen'; // Klasse der Box
    jQuery("."+box).click(function() {
        if(jQuery(this).find("a").hasClass(boxlink)) {
            window.location = $(this).find("a").attr("href");
            return false;
        }
        if(jQuery(this).find("button").hasClass(boxbutton)) {
            var target= jQuery(this).find('.'+boxbutton).attr("data-target");
            var toggle= jQuery(this).find('.'+boxbutton).attr("data-toggle");
            jQuery(this).attr("data-target",target);
            jQuery(this).attr("data-toggle",toggle);
        }
    });
});

// Füge die Klasse "toggled" zu dem Navbar-toggler hinzu
jQuery(".navbar-header .navbar-toggler").click(function() {
    if(jQuery('.row-offcanvas').hasClass("active")) {
        jQuery(this).removeClass("toggled");
    } else {
        jQuery(this).addClass("toggled");
    }
});
jQuery(".closeToggle .navbar-toggler").click(function() {
    if(jQuery('.navbar-header .navbar-toggler').hasClass("toggled")) {
        jQuery(".navbar-header .navbar-toggler").removeClass("toggled");
    }
});

// Language Menu / Sprachmenü
jQuery(".currentLanguage").click(function() {
	if(jQuery(this).hasClass("toggled")) {
		jQuery(this).removeClass("toggled");
		jQuery(".menu--language").slideUp(500);
	} else {
		jQuery(this).addClass("toggled");
		jQuery(".menu--language").slideDown(500);
	}
});

// Automatisierte Höhenanpassung
/*
jQuery(window).load(function() {
    // Containerclass/ID angeben mit . oder #; bsp. '.gridelement'
    // Itemclass/ID angeben mit . oder #; bsp. '.column'
	jQuery(this).infoboxHoehenAnpassung('.CONTAINERCLASS/ID','.ITEMCLASS/ID');
});

jQuery.fn.infoboxHoehenAnpassung = function(container,element) {
	jQuery(container).each(function() {
		var highest_element = 0;
		jQuery(this).find(element).each(function() {
			if(jQuery(this).height() >= highest_element) {
				highest_element = jQuery(this).height();
			}
		});
		jQuery(this).find(element).height(highest_element);
	});
};
*/
