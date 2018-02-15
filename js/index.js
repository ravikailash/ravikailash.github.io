var profile_shown = false;

var start_animating,
	stop_animating;

var	is_animating = false,
	animating_paused = false;

var s2_animate,
	s3_animate,
	s4_animate,
	s6_animate;

var s2_interval,
	s3_interval,
	s4_interval,
	s6_interval;

var slider6_down = false;

// function to check the window size
var check_size = function() {
	if ($(window).width() > 700 && $(window).height() > 500) {
		return true;
	} else {
		return false;
	}
}

var can_animate = check_size();

$(document).ready(function() {
	// function to display the contents
	if(! profile_shown) {
		$('.profile').on('click', function() {
			$(this).addClass('is_clicked');
		});
		profile_shown = true;
	}
	
	// Making language content to appear first
	var all_skills = document.querySelectorAll('.skills-content');
	all_skills.forEach(function(element) {
		$('#' + element.id).hide();
	});
	$('#lang-skills').show();
	
	$('.profile').on("click", function() {
		$('.contact-info').toggle();
	});
	
	// choose contents
	$('.index-box').on('click', function (e) {
		var push_back = '.index-box';
		var current = $(this).attr('id');
		var bring_front = '.' + current + '-content';
		
		if (current === 'bl') {
			$('.skills-overall').fadeIn('200');
		}
		else if (current === 'tl') {
			is_animating = true;
			$('.sliders').fadeIn('slow');
			$('.sliders .slider').hide();
			var slider_counts = document.querySelectorAll('.slider').length;

			for (var x = 1; x <= slider_counts; x++) {
				$('.slider' + x).fadeIn(x*300);
			}
			if (can_animate) {
				show_content("front");
				start_animating();
				animating_paused = false;
				$('.slider').on("mouseenter mouseleave click");
			} else {
				add_notAnimate_class(true);
				show_content("back");
				animating_paused = true;
			}
		}
		else if (current === 'tr') {
				$(".project-selector").show();
				$("#project_content").show();
		}
		else if (current === 'br') {
			$("#py_code").removeClass('is_active');
			$('#py_code').addClass("is_active");
			$("#py_code .lang-icon").children("img").attr("src", "./assets/right-icon.png");
			
			$.each(code_samples, function(i, v) {
				if (v.name === "py_code") {
					$("#codesample-content").html(v.cnt);
				}
			});
		}

		$(push_back).css({'opacity': '0', 'z-index': '0'});

		$(bring_front).css({'opacity': '1', 'z-index': '3'});
		
		$(bring_front).removeClass('is_shrunk').addClass('is_extended');
		$('.index-content').scrollTop(0);
	});

	$('.close-btn').on('click', function() {
		var current = $(this).attr('id');
		if (current === 'bl-close') {
			$('.skills-overall').hide();
		} else if (current === 'tl-close') {
			$('.sliders').fadeOut('slow');
			$('.sliders').hide();
			stop_animating();
			is_animating = false;
			animating_paused = false;
		} else if (current === 'tr-close') {
			$(".project-selector").hide();
			$("#project_content").hide();
			$(".project-domain").hide();
	   }

		current = current.substring(0, 3);
		var push_back = '.' + current + 'content';
		var bring_front = '.' + current + 'block';

		$(push_back).removeClass('is_extended').addClass('is_shrunk');

		$(bring_front).css({'opacity': '1', 
							'z-index': '2'});

		$('.index-box').css({'opacity': '1',
							 'z-index': '2'});
	});
	
	$('.skill-name').on('click', function() {
		var current_id = $(this).attr('id');
		var current = current_id + '-skills';
		var all_skills = document.querySelectorAll('.skills-content');
		for (var i=0; i< all_skills.length; i++) {
			if (all_skills[i].id !== current) {
				$('#' + all_skills[i].id).hide();
			};
		}
			
		$('#' + current).show();
		
		var all_skillnames = document.querySelectorAll('.skill-name');
		all_skillnames.forEach(function(element) {
			if (element.id != current_id) {
				element.style.borderColor = 'darkgray';
				element.nextElementSibling.style.borderTopColor = 'darkgray';
			} else {
				element.style.borderColor = 'coral';
				element.nextElementSibling.style.borderTopColor = 'coral';
			}
		});
	});
	
	$('.index-box').hover(
		function(){
		$(this).addClass('is_hovered');
		var id_span = $(this).find('span');
		$(id_span).show();
	}, 
		function(){
		$(this).removeClass('is_hovered');
		$(this).find('span').hide();
	});

	// Window resizing event for tracking sldiers animation
	$(window).resize(function() {
		if ($(window).width() > 700 && $(window).height() > 500) {
			can_animate = true;
			if (is_animating && animating_paused) {
				add_notAnimate_class(false);
				show_content("front");
				start_animating();
				animating_paused = false;
			}
		} else {
			can_animate = false;
			if (is_animating && (! animating_paused)) {
				add_notAnimate_class(true);
				stop_animating();
				show_content("back");
				animating_paused = true;
			}
		}
	});
});