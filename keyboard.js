$(document).ready(function() {
	var name = "Ravi K Rajendran";
	var target = "#namecontent";
	
	$(".profile").hide();
	$(".profile-name").hide();


	var start_typing = function (target, message, index, interval) {
	  if (index < message.length) {
		if (message[index] != " ") {
			var e = $("#"+ message[index].toLowerCase()).find('div');
			e.fadeOut('fast').delay(5).fadeIn('fast');
		}
		$(target).append(message[index++]);
		setTimeout(function () { 
			start_typing(target, message, index, interval); 
		}, interval);
	  }
	};

	var start_blinking = function () {
		$(target).addClass('blink');
		setTimeout(function() {
			$(target).removeClass('blink');
		}, 2300);
	};
	
	var moving_name = function() {
		$(".keyboard").fadeOut(1000);
		$(".aboutme").css({"border-width" : "0px"});
		$(target).removeClass('blink');
		
		setTimeout(function() {
			$(".aboutme").hide();
			$(".paper-content").css({"border-width": "0px", "border-color": "transparent"});	
		}, 1300);
		setTimeout(function() {
			$(".paper-content").addClass('move-name');
		}, 1700);
	};
	
	var show_content = function() {
		$(target).fadeOut("slow");
		$(".profile").fadeIn("slow");
		$(".profile-name").fadeIn("slow");
	};
	
	setTimeout(function() {
		start_blinking();
	}, 1000);

	setTimeout(function() {
		start_typing(target, name, 0, 350)	
	}, 3500);

	setTimeout(function() {
		$(target).addClass('blink');
	}, 5000);

	setTimeout(function() {
		moving_name();
	}, 9000);
	
	setTimeout(function() {
		show_content();
	}, 12000);

});
