function add_notAnimate_class(x) {
	$.each($(".sliders").children('div .slider'), function(i, v) {
		if(x === true) {
			$(v).addClass("not-animate");
		} else {
			$(v).removeClass("not-animate");
		}
	});
}

function show_content(x) {
	$.each($(".sliders .slider"), function(_, v){
		if (x === "back") {
			$(this).find("div.front").hide();
			$(this).find("div.back").show();
		} else if ( x === "front") {
			$(this).find("div.back").hide();
			$(this).find("div.front").show();
		}
	});
}

$(document).ready(function() {
	$('.slider').on("mouseenter", function() {
		if (! $(this).hasClass("not-animate")) {
			if ($(this).hasClass("slider7")) {
				$(this).addClass('hovered');
				$(this).children('div .front').hide();
				$(this).children('div .back').show();
				$.each($(this).children('div .back').find('p'), function(i, v) {
					$(this).hide();
					$(this).fadeIn(i * 400);
				});
			} else if (! $(this).hasClass("slider6")) {
				$(this).addClass('hovered');
				$(this).children('div .front').hide();
				$(this).children('div .back').show();
			}
		}
	});

	$('.slider').on("mouseleave", function() {
		if (! $(this).hasClass("not-animate")) {
			if (! $(this).hasClass("slider6")) {
				$(this).removeClass('hovered');
				$(this).children('div .front').show();
				$(this).children('div .back').hide();
			}
		}
	});

	$('.sliders .slider6').on("click", function() {
		if (! $(this).hasClass("not-animate")){
			if (! slider6_down) {
				clearInterval(s6_interval);
				$(this).children('div .front').hide();
				$(this).children('div .front1').hide();
				$(this).children('div .front2').hide();
				$('.slider9').hide();
				$('.slider10').hide();
				$(this).animate({"height": "63%"});
				$(this).children('div .back').fadeIn('slow');
				slider6_down = true;
				$(this).removeClass('hovered');
			} else {
				$(this).animate({"height": "34%"});
				$('.slider9').show();
				$('.slider10').show();
				$(this).children('div .front').show();
				$(this).children('div .back').hide();
				slider6_down = false;
				s6_animate();
			}
		}
	});

	var slider2_animating = function() {
		var f1_show = function() {
			$('.slider2 .front1').animate({"width": "100%", "opacity": "1"});
		}
		var f1_hide = function() {
			$('.slider2 .front1').animate({"width": "0%", "opacity": "0"});
		}
		
		setTimeout(f1_show, 1000);
		setTimeout(f1_hide, 2000);
	};

	var bitbucket_animating = function() {
		var bw_grow = function() {
			$('.slider4 .front').css({"background-image": "linear-gradient(to left, transparent, transparent 50%, orange 50%, orange)"})
			$('.slider4 .front').css({"background-position": "0 0"});
		};
		var bw_shrink = function() {
			$('.slider4 .front').css({"background-image": "linear-gradient(to left, transparent, transparent 50%, pink 50%, purple)"})
			$('.slider4 .front').css({"background-position": "100% 0"});
		};
		var bh_grow = function() {
			$('.slider4 .front').css({"background-image": "linear-gradient(to top, transparent, transparent 50%, coral 50%, coral)"})
			$('.slider4 .front').css({"background-position": "0 0"});
		};
		var bh_shrink = function() {
			$('.slider4 .front').css({"background-image": "linear-gradient(to top, transparent, transparent 50%, green 50%, green)"})
			$('.slider4 .front').css({"background-position": "0 100%"});
		};
		setTimeout(bw_grow, 1000);
		setTimeout(bh_shrink, 2000);
		setTimeout(bh_grow, 3000);
		setTimeout(bw_shrink, 4000);
	};

	var github_animating = function() {
		var gw_grow = function() {
			$('.slider3 .front').css({"background-image": "linear-gradient(to left, transparent, transparent 50%, red 50%, red)"})
			$('.slider3 .front').css({"background-position": "0 0"});
		};
		var gw_shrink = function() {
			$('.slider3 .front').css({"background-image": "linear-gradient(to left, transparent, transparent 50%, blue 50%, blue)"})
			$('.slider3 .front').css({"background-position": "100% 0"});
		};
		var gh_grow = function() {
			$('.slider3 .front').css({"background-image": "linear-gradient(to top, transparent, transparent 50%, green 50%, green)"})
			$('.slider3 .front').css({"background-position": "0 0"});
		};
		var gh_shrink = function() {
			$('.slider3 .front').css({"background-image": "linear-gradient(to top, transparent, transparent 50%, coral 50%, coral)"})
			$('.slider3 .front').css({"background-position": "0 100%"});
		};
		setTimeout(gw_grow, 1000);
		setTimeout(gh_shrink, 2000);
		setTimeout(gh_grow, 3000);
		setTimeout(gw_shrink, 4000);
	};

	var slider6_animating = function() {
		var front_hide = function() {
			$('.slider6 .front').removeClass('fleft-animate');
			$('.slider6 .front').addClass('fright-animate');
		};
		var front_show = function() {
			$('.slider6 .front').removeClass('fright-animate');
			$('.slider6 .front').addClass('fleft-animate');
		};		
		var back_hide = function() {
			$('.slider6 .front1').removeClass('bright-animate');
			$('.slider6 .front1').addClass('bleft-animate');
		};
		var back_show = function() {
			$('.slider6 .front1').removeClass('bleft-animate');
			$('.slider6 .front1').addClass('bright-animate');
		};
		var back1_show = function() {
			$('.slider6 .front2').removeClass('bdown-animate');
			$('.slider6 .front2').addClass('bup-animate');
		};
		var back1_hide = function() {
			$('.slider6 .front2').removeClass('bup-animate');
			$('.slider6 .front2').addClass('bdown-animate');
		};
		var back2_show = function() {
			$('.slider6 .front3').removeClass("b1right-animate");
			$('.slider6 .front3').addClass("b1left-animate");
		};
		var back2_hide = function() {
			$('.slider6 .front3').removeClass("b1left-animate");
			$('.slider6 .front3').addClass("b1right-animate");
		};
		var front_up = function() {
			$('.slider6 .front').removeClass('fdown-animate');
			$('.slider6 .front').addClass('fup-animate');
		};
		var front_down = function() {
			$('.slider6 .front').removeClass('fup-animate');
			$('.slider6 .front').addClass('fdown-animate');
		};

		$('.slider6 .front1').show();
		$('.slider6 .front2').show();
		$('.slider6 .front3').show();
		setTimeout(front_hide, 1000);
		setTimeout(back_show, 1000);
		setTimeout(back_hide, 3000);
		setTimeout(front_show, 3000);
		setTimeout(front_up, 5000);
		setTimeout(back1_show, 5000);
		setTimeout(front_down, 7000);
		setTimeout(back1_hide, 7000);
		setTimeout(back2_show, 9000);
		setTimeout(back2_hide, 11000);
		setTimeout(function() {
			$('.slider6 .front').removeClass("fleft-animate fdown-animate");
			$('.slider6 .front1').removeClass("bleft-animate");
			$('.slider6 .front2').removeClass("bdown-animate");
			$('.slider6 .front3').removeClass("b1right-animate");
			$('.slider6 .front').show();
		}, 12500);
	};

	s2_animate = function() {
		s2_interval = setInterval(function(){
			slider2_animating();
		}, 8000);
	};
	s3_animate = function() {
		s3_interval = setInterval(function(){
			github_animating();
		}, 10000);
	};
	s4_animate = function(){
		s4_interval = setInterval(function(){
			bitbucket_animating();
		}, 20000);
	};
	s6_animate = function(){
		s6_interval = setInterval(function(){
			slider6_animating();
		}, 15000);
	};
	
	start_animating = function(){
		s2_animate();
		s3_animate(); 
		s4_animate(); 
		s6_animate();
	};
	
	stop_animating = function() {
		clearInterval(s2_interval);
		clearInterval(s3_interval);
		clearInterval(s4_interval);
		clearInterval(s6_interval);
	};
});
