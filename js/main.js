import $ from "jquery";

(function($) {
    skel.breakpoints({
        xlarge: '(max-width: 1680px)',
        large: '(max-width: 1280px)',
        medium: '(max-width: 980px)',
        small: '(max-width: 736px)',
        xsmall: '(max-width: 480px)'
    });
    $(function() {
        var $window = $(window),
            $body = $('body'),
            $wrapper = $('#page-wrapper'),
            $banner = $('#banner'),
            $header = $('#header');
        // Disable animations/transitions until the page has loaded.
        $body.addClass('is-loading');
        $window.on('load', function() {
            window.setTimeout(function() {
                $body.removeClass('is-loading');
            }, 100);
        });
        // Mobile?
        if (skel.vars.mobile) $body.addClass('is-mobile');
        else
            skel.on('-medium !medium', function() {
                $body.removeClass('is-mobile');
            }).on('+medium', function() {
                $body.addClass('is-mobile');
            });
        // Fix: Placeholder polyfill.
        $('form').placeholder();
        // Prioritize "important" elements on medium.
        skel.on('+medium -medium', function() {
            $.prioritize('.important\\28 medium\\29', skel.breakpoint('medium').active);
        });
        // Scrolly.
        $('.scrolly').scrolly({
            speed: 1500,
            offset: $header.outerHeight()
        });
        // Menu.
        $('#menu').append('<a href="#menu" class="close"></a>').appendTo($body).panel({
            delay: 500,
            hideOnClick: true,
            hideOnSwipe: true,
            resetScroll: true,
            resetForms: true,
            side: 'right',
            target: $body,
            visibleClass: 'is-menu-visible'
        });
        // Header.
        if (skel.vars.IEVersion < 9) $header.removeClass('alt');
        if ($banner.length > 0 && $header.hasClass('alt')) {
            $window.on('resize', function() {
                $window.trigger('scroll');
            });
            $banner.scrollex({
                bottom: $header.outerHeight() + 1,
                terminate: function() {
                    $header.removeClass('alt');
                },
                enter: function() {
                    $header.addClass('alt');
                },
                leave: function() {
                    $header.removeClass('alt');
                }
            });
        }
    });
    $(function() {
    var fonts = 'https://fonts.googleapis.com/css?family=Open+Sans:300,300italic,400,400italic,600,600italic,700,700italic,800,800italic|Lobster|Volkhov:400,400italic,700,700italic|Source+Code+Pro:200,300,400,500,600,700,900';
    if (document.createStyleSheet) document.createStyleSheet(fonts);
    else $("head").append($("<link rel='stylesheet' href='"+ fonts +"' type='text/css' media='screen' />"));
    });
})(jQuery);
