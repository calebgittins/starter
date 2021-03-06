jQuery(document).ready(function ($) {

	/*------------------------------------*\
	    $SLICK SLIDER
	\*------------------------------------*/

	// Global settings

	var slick_previous = '<a class="slick-arrow--previous"><i class="fa fa-angle-left"></i></a>';
	var slick_next     = '<a class="slick-arrow--next"><i class="fa fa-angle-right"></i></a>';

	// Slick single

	$('.js-slick-single').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		prevArrow: slick_previous,
		nextArrow: slick_next,
		dots: false,
		speed: 600,
		cssEase: 'ease-in-out',
		lazyLoad: 'ondemand'
	});

	$('.js-slick-single img').load(function() {
		$(this).addClass('slick-loaded');
		$(this).prev('.spinner').fadeOut().remove();
	});

	/*------------------------------------*\
	    $NAVIGATION
	\*------------------------------------*/

	// Toggle offscreen menu

	$('.js-nav-toggle').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('hamburger--active');		
		$('.offscreen').toggleClass('offscreen--active');
		$('.body').toggleClass('body--offscreen-active');
	});

	// Superfish dropdown

	$('.nav--primary').superfish();

	// Close nav on anchor click

	$('.nav-mobile a[href*="#"]').click(function (event) {
		$('.js-nav-toggle').trigger( "click" );
	});

	// Smooth scroll for anchor links

	$('.js-link-anchor, .js-link-anchor a').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      	var target = $(this.hash);
	      	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      	if (target.length) {
	        	$('html, body').animate({
	          		scrollTop: target.offset().top
	        	}, 1000);
	        	return false;
	      	}
	    }
	});

	/*------------------------------------*\
	    $POPUPS
	\*------------------------------------*/

	// Magnific Popup - Standard

	$('.js-magnific-popup').magnificPopup({
		type:'inline',
		closeBtnInside: true,
		closeMarkup: '<button title="%title%" type="button" class="mfp-close"></button>',
	  	midClick: true
	});

	// Magnific Popup - Video

	$('.js-magnific-video').magnificPopup({
	    type: 'inline',
	    midClick: true,
	    callbacks: {
	        open: function() {
	            // Play video on open
	            $(this.content).find('video')[0].play();
	            var p = $(this.content).find('video')[0].player;
	            p.setPlayerSize();
	            p.setControlsSize();
	        },
	        close: function() {
	            // Reset video on close
	            $(this.content).find('video')[0].load();
	        }
	    }
	});

	/*------------------------------------*\
	    $INFINITE SCROLL
	\*------------------------------------*/

	$container = $('.js-infinite-parent');

	$container.infiniteScroll({
		path: '.nav--pagination a',
		append: '.js-infinite-item',
		history: false,
		checkLastPage: true,
		scrollThreshold: 200
	});

	// Infinite Scroll - Loaded

	$container.on( 'append.infiniteScroll', function( event, response, path, items ) {
		$('.js-match-height').matchHeight();
	});

	// Infinite Scroll - Last Page

	$container.on( 'last.infiniteScroll', function( event, response, path ) {
		$('.nav-pagination').fadeOut().remove();
	});

	/*------------------------------------*\
	    $LAYOUT
	\*------------------------------------*/

	// Equal Heights

    $('.js-match-height').matchHeight();

    $('.gfield').matchHeight({
		property: 'min-height'
    });

    /*------------------------------------*\
	    $MEDIA
	\*------------------------------------*/

	// Responsive videos

	$('.js-fitvids').fitVids();

	// Lazy Loading images

	var bLazy = new Blazy({
		selector: '.b-lazy',
		loadInvisible: true,
		offset: 200,
		success: function(element){
			$(element).prev('.spinner').fadeOut().remove();
		}
	});

});

/*------------------------------------*\
    $GRAVITY FORMS
\*------------------------------------*/

$(document).bind('gform_post_render', function() {

    // Gravity forms custom elements

    var GFSelect   = $('.ginput_container_select select');
    var GFCheckbox = $('.gfield_checkbox li label');
    var GFRadio    = $('.gfield_radio li label');
    var GFDate     = $('.ginput_container_date input');

    GFSelect.each(function(){
    	if(!$(this).parent().hasClass('custom-select')) {
    		$(this).wrap('<div class="custom-select"></div>');
    	}
    });

    GFCheckbox.each(function(){
    	if($(this).prev('.custom-checkbox').length) {
    		$(this).prepend('<span class="custom-checkbox"></span>');
    	}
    });

    GFRadio.each(function(){
    	if($(this).prev('.custom-radio').length) {
    		$(this).prepend('<span class="custom-radio"></span>');
    	}
    });

    GFDate.each(function(){
    	if(!$(this).parent().hasClass('custom-datepicker')) {
    		$(this).wrap('<div class="custom-datepicker"></div>');
    	}
    });

});
/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-adownload-appearance-audio-backdropfilter-backgroundblendmode-canvas-cookies-cssanimations-cssgradients-cssgrid_cssgridlegacy-cssvhunit-flexbox-history-ie8compat-inlinesvg-mediaqueries-objectfit-svg-svgasimg-svgclippaths-svgfilters-touchevents-video-videoautoplay-webgl-setclasses !*/
!function(A,e,t){function n(A,e){return typeof A===e}function o(){var A,e,t,o,a,r,i;for(var l in T)if(T.hasOwnProperty(l)){if(A=[],e=T[l],e.name&&(A.push(e.name.toLowerCase()),e.options&&e.options.aliases&&e.options.aliases.length))for(t=0;t<e.options.aliases.length;t++)A.push(e.options.aliases[t].toLowerCase());for(o=n(e.fn,"function")?e.fn():e.fn,a=0;a<A.length;a++)r=A[a],i=r.split("."),1===i.length?Modernizr[i[0]]=o:(!Modernizr[i[0]]||Modernizr[i[0]]instanceof Boolean||(Modernizr[i[0]]=new Boolean(Modernizr[i[0]])),Modernizr[i[0]][i[1]]=o),y.push((o?"":"no-")+i.join("-"))}}function a(A){var e=R.className,t=Modernizr._config.classPrefix||"";if(x&&(e=e.baseVal),Modernizr._config.enableJSClass){var n=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");e=e.replace(n,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(e+=" "+t+A.join(" "+t),x?R.className.baseVal=e:R.className=e)}function r(){return"function"!=typeof e.createElement?e.createElement(arguments[0]):x?e.createElementNS.call(e,"http://www.w3.org/2000/svg",arguments[0]):e.createElement.apply(e,arguments)}function i(e,t,n){var o;if("getComputedStyle"in A){o=getComputedStyle.call(A,e,t);var a=A.console;if(null!==o)n&&(o=o.getPropertyValue(n));else if(a){var r=a.error?"error":"log";a[r].call(a,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!t&&e.currentStyle&&e.currentStyle[n];return o}function l(A){return A.replace(/([a-z])-([a-z])/g,function(A,e,t){return e+t.toUpperCase()}).replace(/^-/,"")}function s(A,e){if("object"==typeof A)for(var t in A)C(A,t)&&s(t,A[t]);else{A=A.toLowerCase();var n=A.split("."),o=Modernizr[n[0]];if(2==n.length&&(o=o[n[1]]),"undefined"!=typeof o)return Modernizr;e="function"==typeof e?e():e,1==n.length?Modernizr[n[0]]=e:(!Modernizr[n[0]]||Modernizr[n[0]]instanceof Boolean||(Modernizr[n[0]]=new Boolean(Modernizr[n[0]])),Modernizr[n[0]][n[1]]=e),a([(e&&0!=e?"":"no-")+n.join("-")]),Modernizr._trigger(A,e)}return Modernizr}function c(){var A=e.body;return A||(A=r(x?"svg":"body"),A.fake=!0),A}function d(A,t,n,o){var a,i,l,s,d="modernizr",u=r("div"),p=c();if(parseInt(n,10))for(;n--;)l=r("div"),l.id=o?o[n]:d+(n+1),u.appendChild(l);return a=r("style"),a.type="text/css",a.id="s"+d,(p.fake?p:u).appendChild(a),p.appendChild(u),a.styleSheet?a.styleSheet.cssText=A:a.appendChild(e.createTextNode(A)),u.id=d,p.fake&&(p.style.background="",p.style.overflow="hidden",s=R.style.overflow,R.style.overflow="hidden",R.appendChild(p)),i=t(u,A),p.fake?(p.parentNode.removeChild(p),R.style.overflow=s,R.offsetHeight):u.parentNode.removeChild(u),!!i}function u(A,e){return!!~(""+A).indexOf(e)}function p(A,e){return function(){return A.apply(e,arguments)}}function f(A,e,t){var o;for(var a in A)if(A[a]in e)return t===!1?A[a]:(o=e[A[a]],n(o,"function")?p(o,t||e):o);return!1}function h(A){return A.replace(/([A-Z])/g,function(A,e){return"-"+e.toLowerCase()}).replace(/^ms-/,"-ms-")}function g(e,n){var o=e.length;if("CSS"in A&&"supports"in A.CSS){for(;o--;)if(A.CSS.supports(h(e[o]),n))return!0;return!1}if("CSSSupportsRule"in A){for(var a=[];o--;)a.push("("+h(e[o])+":"+n+")");return a=a.join(" or "),d("@supports ("+a+") { #modernizr { position: absolute; } }",function(A){return"absolute"==i(A,null,"position")})}return t}function m(A,e,o,a){function i(){c&&(delete V.style,delete V.modElem)}if(a=n(a,"undefined")?!1:a,!n(o,"undefined")){var s=g(A,o);if(!n(s,"undefined"))return s}for(var c,d,p,f,h,m=["modernizr","tspan","samp"];!V.style&&m.length;)c=!0,V.modElem=r(m.shift()),V.style=V.modElem.style;for(p=A.length,d=0;p>d;d++)if(f=A[d],h=V.style[f],u(f,"-")&&(f=l(f)),V.style[f]!==t){if(a||n(o,"undefined"))return i(),"pfx"==e?f:!0;try{V.style[f]=o}catch(v){}if(V.style[f]!=h)return i(),"pfx"==e?f:!0}return i(),!1}function v(A,e,t,o,a){var r=A.charAt(0).toUpperCase()+A.slice(1),i=(A+" "+P.join(r+" ")+r).split(" ");return n(e,"string")||n(e,"undefined")?m(i,e,o,a):(i=(A+" "+M.join(r+" ")+r).split(" "),f(i,e,t))}function w(A,e,n){return v(A,t,t,e,n)}var y=[],T=[],E={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(A,e){var t=this;setTimeout(function(){e(t[A])},0)},addTest:function(A,e,t){T.push({name:A,fn:e,options:t})},addAsyncTest:function(A){T.push({name:null,fn:A})}},Modernizr=function(){};Modernizr.prototype=E,Modernizr=new Modernizr,Modernizr.addTest("cookies",function(){try{e.cookie="cookietest=1";var A=-1!=e.cookie.indexOf("cookietest=");return e.cookie="cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT",A}catch(t){return!1}}),Modernizr.addTest("history",function(){var e=navigator.userAgent;return-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone")||"file:"===location.protocol?A.history&&"pushState"in A.history:!1}),Modernizr.addTest("ie8compat",!A.addEventListener&&!!e.documentMode&&7===e.documentMode),Modernizr.addTest("svg",!!e.createElementNS&&!!e.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),Modernizr.addTest("svgfilters",function(){var e=!1;try{e="SVGFEColorMatrixElement"in A&&2==SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE}catch(t){}return e});var R=e.documentElement,x="svg"===R.nodeName.toLowerCase();Modernizr.addTest("audio",function(){var A=r("audio"),e=!1;try{e=!!A.canPlayType,e&&(e=new Boolean(e),e.ogg=A.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),e.mp3=A.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),e.opus=A.canPlayType('audio/ogg; codecs="opus"')||A.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,""),e.wav=A.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),e.m4a=(A.canPlayType("audio/x-m4a;")||A.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(t){}return e}),Modernizr.addTest("canvas",function(){var A=r("canvas");return!(!A.getContext||!A.getContext("2d"))}),Modernizr.addTest("video",function(){var A=r("video"),e=!1;try{e=!!A.canPlayType,e&&(e=new Boolean(e),e.ogg=A.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),e.h264=A.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),e.webm=A.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),e.vp9=A.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),e.hls=A.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(t){}return e}),Modernizr.addTest("webgl",function(){var e=r("canvas"),t="probablySupportsContext"in e?"probablySupportsContext":"supportsContext";return t in e?e[t]("webgl")||e[t]("experimental-webgl"):"WebGLRenderingContext"in A}),Modernizr.addTest("adownload",!A.externalHost&&"download"in r("a")),Modernizr.addTest("inlinesvg",function(){var A=r("div");return A.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&A.firstChild&&A.firstChild.namespaceURI)});var G=E._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];E._prefixes=G,Modernizr.addTest("cssgradients",function(){for(var A,e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="",o=0,a=G.length-1;a>o;o++)A=0===o?"to ":"",n+=e+G[o]+"linear-gradient("+A+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(n+=e+"-webkit-"+t);var i=r("a"),l=i.style;return l.cssText=n,(""+l.backgroundImage).indexOf("gradient")>-1});var B={}.toString;Modernizr.addTest("svgclippaths",function(){return!!e.createElementNS&&/SVGClipPath/.test(B.call(e.createElementNS("http://www.w3.org/2000/svg","clipPath")))});var C;!function(){var A={}.hasOwnProperty;C=n(A,"undefined")||n(A.call,"undefined")?function(A,e){return e in A&&n(A.constructor.prototype[e],"undefined")}:function(e,t){return A.call(e,t)}}(),E._l={},E.on=function(A,e){this._l[A]||(this._l[A]=[]),this._l[A].push(e),Modernizr.hasOwnProperty(A)&&setTimeout(function(){Modernizr._trigger(A,Modernizr[A])},0)},E._trigger=function(A,e){if(this._l[A]){var t=this._l[A];setTimeout(function(){var A,n;for(A=0;A<t.length;A++)(n=t[A])(e)},0),delete this._l[A]}},Modernizr._q.push(function(){E.addTest=s}),Modernizr.addTest("svgasimg",e.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"));var F=E.testStyles=d;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in A||A.DocumentTouch&&e instanceof DocumentTouch)t=!0;else{var n=["@media (",G.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");F(n,function(A){t=9===A.offsetTop})}return t}),F("#modernizr { height: 50vh; }",function(e){var t=parseInt(A.innerHeight/2,10),n=parseInt(i(e,null,"height"),10);Modernizr.addTest("cssvhunit",n==t)});var b=function(){var e=A.matchMedia||A.msMatchMedia;return e?function(A){var t=e(A);return t&&t.matches||!1}:function(e){var t=!1;return d("@media "+e+" { #modernizr { position: absolute; } }",function(e){t="absolute"==(A.getComputedStyle?A.getComputedStyle(e,null):e.currentStyle).position}),t}}();E.mq=b,Modernizr.addTest("mediaqueries",b("only all"));var S="Moz O ms Webkit",P=E._config.usePrefixes?S.split(" "):[];E._cssomPrefixes=P;var Q=function(e){var n,o=G.length,a=A.CSSRule;if("undefined"==typeof a)return t;if(!e)return!1;if(e=e.replace(/^@/,""),n=e.replace(/-/g,"_").toUpperCase()+"_RULE",n in a)return"@"+e;for(var r=0;o>r;r++){var i=G[r],l=i.toUpperCase()+"_"+n;if(l in a)return"@-"+i.toLowerCase()+"-"+e}return!1};E.atRule=Q;var M=E._config.usePrefixes?S.toLowerCase().split(" "):[];E._domPrefixes=M;var Z={elem:r("modernizr")};Modernizr._q.push(function(){delete Z.elem});var V={style:Z.elem.style};Modernizr._q.unshift(function(){delete V.style}),E.testAllProps=v,E.testAllProps=w,Modernizr.addTest("cssanimations",w("animationName","a",!0)),Modernizr.addTest("appearance",w("appearance")),Modernizr.addTest("backdropfilter",w("backdropFilter")),Modernizr.addTest("cssgridlegacy",w("grid-columns","10px",!0)),Modernizr.addTest("cssgrid",w("grid-template-rows","none",!0)),Modernizr.addTest("flexbox",w("flexBasis","1px",!0));var Y=E.prefixed=function(A,e,t){return 0===A.indexOf("@")?Q(A):(-1!=A.indexOf("-")&&(A=l(A)),e?v(A,e,t):v(A,"pfx"))};Modernizr.addTest("backgroundblendmode",Y("backgroundBlendMode","text")),Modernizr.addTest("objectfit",!!Y("objectFit"),{aliases:["object-fit"]}),Modernizr.addAsyncTest(function(){function A(r){o++,clearTimeout(e);var i=r&&"playing"===r.type||0!==a.currentTime;return!i&&n>o?void(e=setTimeout(A,t)):(a.removeEventListener("playing",A,!1),s("videoautoplay",i),void(a.parentNode&&a.parentNode.removeChild(a)))}var e,t=200,n=5,o=0,a=r("video"),i=a.style;if(!(Modernizr.video&&"autoplay"in a))return void s("videoautoplay",!1);i.position="absolute",i.height=0,i.width=0;try{if(Modernizr.video.ogg)a.src="data:video/ogg;base64,T2dnUwACAAAAAAAAAABmnCATAAAAAHDEixYBKoB0aGVvcmEDAgEAAQABAAAQAAAQAAAAAAAFAAAAAQAAAAAAAAAAAGIAYE9nZ1MAAAAAAAAAAAAAZpwgEwEAAAACrA7TDlj///////////////+QgXRoZW9yYSsAAABYaXBoLk9yZyBsaWJ0aGVvcmEgMS4xIDIwMDkwODIyIChUaHVzbmVsZGEpAQAAABoAAABFTkNPREVSPWZmbXBlZzJ0aGVvcmEtMC4yOYJ0aGVvcmG+zSj3uc1rGLWpSUoQc5zmMYxSlKQhCDGMYhCEIQhAAAAAAAAAAAAAEW2uU2eSyPxWEvx4OVts5ir1aKtUKBMpJFoQ/nk5m41mUwl4slUpk4kkghkIfDwdjgajQYC8VioUCQRiIQh8PBwMhgLBQIg4FRba5TZ5LI/FYS/Hg5W2zmKvVoq1QoEykkWhD+eTmbjWZTCXiyVSmTiSSCGQh8PB2OBqNBgLxWKhQJBGIhCHw8HAyGAsFAiDgUCw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDAwPEhQUFQ0NDhESFRUUDg4PEhQVFRUOEBETFBUVFRARFBUVFRUVEhMUFRUVFRUUFRUVFRUVFRUVFRUVFRUVEAwLEBQZGxwNDQ4SFRwcGw4NEBQZHBwcDhATFhsdHRwRExkcHB4eHRQYGxwdHh4dGxwdHR4eHh4dHR0dHh4eHRALChAYKDM9DAwOExo6PDcODRAYKDlFOA4RFh0zV1A+EhYlOkRtZ00YIzdAUWhxXDFATldneXhlSFxfYnBkZ2MTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTEhIVGRoaGhoSFBYaGhoaGhUWGRoaGhoaGRoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhESFh8kJCQkEhQYIiQkJCQWGCEkJCQkJB8iJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQREhgvY2NjYxIVGkJjY2NjGBo4Y2NjY2MvQmNjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRISEhUXGBkbEhIVFxgZGxwSFRcYGRscHRUXGBkbHB0dFxgZGxwdHR0YGRscHR0dHhkbHB0dHR4eGxwdHR0eHh4REREUFxocIBERFBcaHCAiERQXGhwgIiUUFxocICIlJRcaHCAiJSUlGhwgIiUlJSkcICIlJSUpKiAiJSUlKSoqEBAQFBgcICgQEBQYHCAoMBAUGBwgKDBAFBgcICgwQEAYHCAoMEBAQBwgKDBAQEBgICgwQEBAYIAoMEBAQGCAgAfF5cdH1e3Ow/L66wGmYnfIUbwdUTe3LMRbqON8B+5RJEvcGxkvrVUjTMrsXYhAnIwe0dTJfOYbWrDYyqUrz7dw/JO4hpmV2LsQQvkUeGq1BsZLx+cu5iV0e0eScJ91VIQYrmqfdVSK7GgjOU0oPaPOu5IcDK1mNvnD+K8LwS87f8Jx2mHtHnUkTGAurWZlNQa74ZLSFH9oF6FPGxzLsjQO5Qe0edcpttd7BXBSqMCL4k/4tFrHIPuEQ7m1/uIWkbDMWVoDdOSuRQ9286kvVUlQjzOE6VrNguN4oRXYGkgcnih7t13/9kxvLYKQezwLTrO44sVmMPgMqORo1E0sm1/9SludkcWHwfJwTSybR4LeAz6ugWVgRaY8mV/9SluQmtHrzsBtRF/wPY+X0JuYTs+ltgrXAmlk10xQHmTu9VSIAk1+vcvU4ml2oNzrNhEtQ3CysNP8UeR35wqpKUBdGdZMSjX4WVi8nJpdpHnbhzEIdx7mwf6W1FKAiucMXrWUWVjyRf23chNtR9mIzDoT/6ZLYailAjhFlZuvPtSeZ+2oREubDoWmT3TguY+JHPdRVSLKxfKH3vgNqJ/9emeEYikGXDFNzaLjvTeGAL61mogOoeG3y6oU4rW55ydoj0lUTSR/mmRhPmF86uwIfzp3FtiufQCmppaHDlGE0r2iTzXIw3zBq5hvaTldjG4CPb9wdxAme0SyedVKczJ9AtYbgPOzYKJvZZImsN7ecrxWZg5dR6ZLj/j4qpWsIA+vYwE+Tca9ounMIsrXMB4Stiib2SPQtZv+FVIpfEbzv8ncZoLBXc3YBqTG1HsskTTotZOYTG+oVUjLk6zhP8bg4RhMUNtfZdO7FdpBuXzhJ5Fh8IKlJG7wtD9ik8rWOJxy6iQ3NwzBpQ219mlyv+FLicYs2iJGSE0u2txzed++D61ZWCiHD/cZdQVCqkO2gJpdpNaObhnDfAPrT89RxdWFZ5hO3MseBSIlANppdZNIV/Rwe5eLTDvkfWKzFnH+QJ7m9QWV1KdwnuIwTNtZdJMoXBf74OhRnh2t+OTGL+AVUnIkyYY+QG7g9itHXyF3OIygG2s2kud679ZWKqSFa9n3IHD6MeLv1lZ0XyduRhiDRtrNnKoyiFVLcBm0ba5Yy3fQkDh4XsFE34isVpOzpa9nR8iCpS4HoxG2rJpnRhf3YboVa1PcRouh5LIJv/uQcPNd095ickTaiGBnWLKVWRc0OnYTSyex/n2FofEPnDG8y3PztHrzOLK1xo6RAml2k9owKajOC0Wr4D5x+3nA0UEhK2m198wuBHF3zlWWVKWLN1CHzLClUfuoYBcx4b1llpeBKmbayaR58njtE9onD66lUcsg0Spm2snsb+8HaJRn4dYcLbCuBuYwziB8/5U1C1DOOz2gZjSZtrLJk6vrLF3hwY4Io9xuT/ruUFRSBkNtUzTOWhjh26irLEPx4jPZL3Fo3QrReoGTTM21xYTT9oFdhTUIvjqTkfkvt0bzgVUjq/hOYY8j60IaO/0AzRBtqkTS6R5ellZd5uKdzzhb8BFlDdAcrwkE0rbXTOPB+7Y0FlZO96qFL4Ykg21StJs8qIW7h16H5hGiv8V2Cflau7QVDepTAHa6Lgt6feiEvJDM21StJsmOH/hynURrKxvUpQ8BH0JF7BiyG2qZpnL/7AOU66gt+reLEXY8pVOCQvSsBtqZTNM8bk9ohRcwD18o/WVkbvrceVKRb9I59IEKysjBeTMmmbA21xu/6iHadLRxuIzkLpi8wZYmmbbWi32RVAUjruxWlJ//iFxE38FI9hNKOoCdhwf5fDe4xZ81lgREhK2m1j78vW1CqkuMu/AjBNK210kzRUX/B+69cMMUG5bYrIeZxVSEZISmkzbXOi9yxwIfPgdsov7R71xuJ7rFcACjG/9PzApqFq7wEgzNJm2suWESPuwrQvejj7cbnQxMkxpm21lUYJL0fKmogPPqywn7e3FvB/FCNxPJ85iVUkCE9/tLKx31G4CgNtWTTPFhMvlu8G4/TrgaZttTChljfNJGgOT2X6EqpETy2tYd9cCBI4lIXJ1/3uVUllZEJz4baqGF64yxaZ+zPLYwde8Uqn1oKANtUrSaTOPHkhvuQP3bBlEJ/LFe4pqQOHUI8T8q7AXx3fLVBgSCVpMba55YxN3rv8U1Dv51bAPSOLlZWebkL8vSMGI21lJmmeVxPRwFlZF1CpqCN8uLwymaZyjbXHCRytogPN3o/n74CNykfT+qqRv5AQlHcRxYrC5KvGmbbUwmZY/29BvF6C1/93x4WVglXDLFpmbapmF89HKTogRwqqSlGbu+oiAkcWFbklC6Zhf+NtTLFpn8oWz+HsNRVSgIxZWON+yVyJlE5tq/+GWLTMutYX9ekTySEQPLVNQQ3OfycwJBM0zNtZcse7CvcKI0V/zh16Dr9OSA21MpmmcrHC+6pTAPHPwoit3LHHqs7jhFNRD6W8+EBGoSEoaZttTCZljfduH/fFisn+dRBGAZYtMzbVMwvul/T/crK1NQh8gN0SRRa9cOux6clC0/mDLFpmbarmF8/e6CopeOLCNW6S/IUUg3jJIYiAcDoMcGeRbOvuTPjXR/tyo79LK3kqqkbxkkMRAOB0GODPItnX3Jnxro/25Ud+llbyVVSN4ySGIgHA6DHBnkWzr7kz410f7cqO/Syt5KqpFVJwn6gBEvBM0zNtZcpGOEPiysW8vvRd2R0f7gtjhqUvXL+gWVwHm4XJDBiMpmmZtrLfPwd/IugP5+fKVSysH1EXreFAcEhelGmbbUmZY4Xdo1vQWVnK19P4RuEnbf0gQnR+lDCZlivNM22t1ESmopPIgfT0duOfQrsjgG4tPxli0zJmF5trdL1JDUIUT1ZXSqQDeR4B8mX3TrRro/2McGeUvLtwo6jIEKMkCUXWsLyZROd9P/rFYNtXPBli0z398iVUlVKAjFlY437JXImUTm2r/4ZYtMy61hf16RPJIU9nZ1MABAwAAAAAAAAAZpwgEwIAAABhp658BScAAAAAAADnUFBQXIDGXLhwtttNHDhw5OcpQRMETBEwRPduylKVB0HRdF0A";else{if(!Modernizr.video.h264)return void s("videoautoplay",!1);a.src="data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAs1tZGF0AAACrgYF//+q3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0OCByMjYwMSBhMGNkN2QzIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNSAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTMgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MzoweDExMyBtZT1oZXggc3VibWU9NyBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0xIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MSA4eDhkY3Q9MSBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0tMiB0aHJlYWRzPTEgbG9va2FoZWFkX3RocmVhZHM9MSBzbGljZWRfdGhyZWFkcz0wIG5yPTAgZGVjaW1hdGU9MSBpbnRlcmxhY2VkPTAgYmx1cmF5X2NvbXBhdD0wIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PTI1MCBrZXlpbnRfbWluPTEwIHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAD2WIhAA3//728P4FNjuZQQAAAu5tb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAAZAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACGHRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAZAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAgAAAAIAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAGQAAAAAAAEAAAAAAZBtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAACgAAAAEAFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAE7bWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAA+3N0YmwAAACXc3RzZAAAAAAAAAABAAAAh2F2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAgACAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAxYXZjQwFkAAr/4QAYZ2QACqzZX4iIhAAAAwAEAAADAFA8SJZYAQAGaOvjyyLAAAAAGHN0dHMAAAAAAAAAAQAAAAEAAAQAAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAABRzdHN6AAAAAAAAAsUAAAABAAAAFHN0Y28AAAAAAAAAAQAAADAAAABidWR0YQAAAFptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAAC1pbHN0AAAAJal0b28AAAAdZGF0YQAAAAEAAAAATGF2ZjU2LjQwLjEwMQ=="}}catch(l){return void s("videoautoplay",!1)}a.setAttribute("autoplay",""),a.style.cssText="display:none",R.appendChild(a),setTimeout(function(){a.addEventListener("playing",A,!1),e=setTimeout(A,t)},0)}),o(),a(y),delete E.addTest,delete E.addAsyncTest;for(var k=0;k<Modernizr._q.length;k++)Modernizr._q[k]();A.Modernizr=Modernizr}(window,document);