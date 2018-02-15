var current_domain,
	current_project = "w-peercoding",
	current_content,
	current_state = "show";

var project_details = {
	"w-peercoding": `<div class="content-box">
						<div class="content-boxheader">PeerCoding</div>
						<div class="content-boxcontent">A web application for collaborative code editing and code sharing for the competitive coding environment. Features include code editing, highlights, auto-completions and multi-language support, make sessions, files sharing, real-time chatting, file-editing and invite friends</div>
						<div class="content-boxcoding">
							<div class="first"> 
								<a href="https://bitbucket.org/peercoding/peercoding" target="_child"> <img class="bitbucket-link" src="./imgs/coding-icons/bitbucket-logo.png" alt="BitBucket"> <span>BitBucket</span></a>
							</div>
						</div>
						<div class="content-boxtech">
							<p>Technologies:</p>
							<div class="content-techlist">
								<div class="tech-name">Python</div>
								<div class="tech-name">Flask</div>
								<div class="tech-name">JavaScript</div>
								<div class="tech-name">Node.js</div>
								<div class="tech-name">AngularJS 4</div>
								<div class="tech-name">Jinja2</div>
								<div class="tech-name">Redis</div>
								<div class="tech-name">MySQL</div>
								<div class="tech-name">MongoDB</div>
								<div class="tech-name">socket.io</div>
								<div class="tech-name">Realtime APIs</div>
								<div class="tech-name">jQuery</div>
							</div>
						</div>
					</div>`,
	
	"w-friendzone": `<div class="content-box">
						<div class="content-boxheader">FriendZone</div>
						<div class="content-boxcontent">A social networking site for the Boston university students. Built and implemented features like handling profile pictures, posting and responding to comments, real-time chatting. Other features like friend requests, user wall, image-sharing. Responsiblities include designing the front-end of the news feed and the database models for chats, profile-views and comments.</div>
						<div class="content-boxcoding">
							<div class="first">
								<a href="https://github.com/edorsini/social-networking-app" target="_child"> <img class="github-link" src="./imgs/coding-icons/github-logo.png" alt="Github"> <span>Github</span></a>
							</div>
						</div>
						<div class="content-boxtech">
							<p>Technologies:</p>
							<div class="content-techlist">
								<div class="tech-name">JavaScript</div>
								<div class="tech-name">Node.js</div>
								<div class="tech-name">AngularJS 1</div>
								<div class="tech-name">MEAN stack</div>
								<div class="tech-name">MongoDB</div>
								<div class="tech-name">socket.io</div>
								<div class="tech-name">Gulp</div>
								<div class="tech-name">Bower</div>
								<div class="tech-name">jQuery</div>
							</div>
						</div>
					</div>`,
	
	"d-peercoding": `<div class="content-box">
						<div class="content-boxheader">PeerCoding</div>
						<div class="content-boxcontent">A desktop application for collaborative code editing and code sharing for the competitive coding environment. Features include code editing, highlights, auto-completions and multi-language support, make sessions, files sharing, real-time chatting, file-editing and invite friends</div>
						<div class="content-boxcoding">
							<div class="first">
								<a href="https://github.com/ravikailash/peercoding" target="_child"><img class="github-link" src="./imgs/coding-icons/github-logo.png" alt="Github"> <span>Github</span> </a>
							</div>
							<div class="second">
								<a href="https://bitbucket.org/peercoding/peercoding_desktop" target="_child"> <img class="bitbucket-link" src="./imgs/coding-icons/bitbucket-logo.png" alt="BitBucket"> <span>BitBucket</span></a>
							</div>
						</div>
						<div class="content-boxtech">
							<p>Technologies:</p>
							<div class="content-techlist">
								<div class="tech-name">Electron</div>
								<div class="tech-name">AngularJS</div>
								<div class="tech-name">MongoDB</div>
								<div class="tech-name">MySQL</div>
								<div class="tech-name">Socket.io</div>
								<div class="tech-name">Node.js</div>
								<div class="tech-name">jQuery</div>
							</div>
						</div>
					</div>`,
	
	"m-handgestures": `<div class="content-box">
							<div class="content-boxheader">Understanding Hand Gestures</div>
							<div class="content-boxcontent">How can we eliminate any sensors expect for the camera sensors to be held to understand the gestures we make while delivering a lecture? As an attempt, we implemented an algorithm to detect and predict the hand gestures using the Convolutional Neural Networks and Generative Adversial Networks without losing the spatial information.</div>
							<div class="content-boxcoding">
								<div class="first">
									<a href="https://bitbucket.org/ravikailash/understanding-hand-gestures" target="_child"> <img class="bitbucket-link" src="./imgs/coding-icons/bitbucket-logo.png" alt="BitBucket"> <span>BitBucket</span> </a>
								</div>
								<div class="second">
									<a href="https://bitbucket.org/ravikailash/understanding-hand-gestures/src/a4759bee92ee3ca17ad1f734a0a1f163309e2c73/Report/Understanding%20hand%20gestures%20using%20CNNs%20and%20GANs.pdf?at=master&fileviewer=file-viewer-for-bitbucket-cloud%3Apdf-viewer" target="_child"> <img class="paper-link" src="./imgs/coding-icons/paper-logo.png" alt="Paper"> <span>Paper</span> </a>
								</div>
							</div>
							<div class="content-boxtech">
								<p>Technologies:</p>
								<div class="content-techlist">
									<div class="tech-name">Python</div>
									<div class="tech-name">OpenCV</div>
									<div class="tech-name">Convolutional Neural Nets</div>
									<div class="tech-name">Generative Adversial Nets</div>
									<div class="tech-name">Deep Learning</div>
									<div class="tech-name">Theano</div>
									<div class="tech-name">Keras</div>
									<div class="tech-name">Numpy</div>
									<div class="tech-name">Object Tracking</div>
									<div class="tech-name">Gesture and pattern detection</div>
								</div>
							</div>
						</div>`,

	"m-behaviorclassifiers": `<div class="content-box">
								<div class="content-boxheader">Topological and Statistical Behavior Classifiers for Tracking Applications</div>
								<div class="content-boxcontent">Implemented the target behaviors into the multiple hypothesis tracker. Designed an RNN model to determine the kinematic prediction matrix with the data generated by Simulated Urban Mobility(SUMO). Also, implemented both the feed-forward and recurrent neural networks implementation of kalman filters for the prediction of the position at time instant T.</div>
								<div class="content-boxtech">
									<p>Technologies:</p>
									<div class="content-techlist">
										<div class="tech-name">Python</div>
										<div class="tech-name">MATLAB</div>
										<div class="tech-name">Lua</div>
										<div class="tech-name">Cython</div>
										<div class="tech-name">Theano</div>
										<div class="tech-name">Tensorflow</div>
										<div class="tech-name">Torch</div>
										<div class="tech-name">Recurrent Neural Networks(RNNs)</div>
										<div class="tech-name">Kalman Fiters</div>
										<div class="tech-name">Behavior classifiers</div>
										<div class="tech-name">Multiple Hypothesis Tracking</div>
									</div>
								</div>
							</div>`,
	
	"m-chainreaction": `<div class="content-box">
							<div class="content-boxheader">Reinforcement Learning on Chain Reaction</div>
							<div class="content-boxcontent">Created an adaptive reinforcement learning techniques on the chain reaction game and analyze the importance of the parameters involved in creating the game. An agent is created which acts as an autonomous player which plays against the player in a small environment and it is used to study the learning factors of the algorithm. The states of the environment are described using the Markov Decision Process(MDP). Created an action values for each cell in the structure throughout the game. The action values are created by using the multilayer perceptron which decides the value for each direction by taking the whole structure as an input.</div>
							<div class="content-boxtech">
								<p>Technologies:</p>
								<div class="content-techlist">
									<div class="tech-name">Python</div>
									<div class="tech-name">PyGame</div>
									<div class="tech-name">Reinforcement Learning</div>
									<div class="tech-name">Temporal Difference learning</div>
									<div class="tech-name">Q-learning</div>
									<div class="tech-name">Sarsa Learning</div>
									<div class="tech-name">On and Off policies</div>
									<div class="tech-name">Markov Decision Process(MDP)</div>
									<div class="tech-name">Partially Observable MDP(POMDP)</div>
									<div class="tech-name">Monte Carlo</div>
									<div class="tech-name">Decision Trees</div>
									<div class="tech-name">MiniMax</div>
									<div class="tech-name">Deterministic vs Stochastic Approach</div>
									<div class="tech-name">MiniMax</div>
									<div class="tech-name">State value functions</div>
									<div class="tech-name">State-Action value functions</div>
								</div>
							</div>
						</div>`,
	
	"m-trafficrules": `<div class="content-box">
							<div class="content-boxheader">Traffic Rules Violation Control-Vehicle Identification</div>
							<div class="content-boxcontent">Created a standalone prototype which could detect license plate of any size, texture, and color with 96.7% accuracy. Implemented using the Support Vector Machines for classifier and Optical Character Recognition for detection of license number which is done by a simple feed-forward artificial neural network.</div>
							<div class="content-boxtech">
								<p>Technologies:</p>
								<div class="content-techlist">
									<div class="tech-name">C++</div>
									<div class="tech-name">MATLAB</div>
									<div class="tech-name">Java</div>
									<div class="tech-name">OpenCV</div>
									<div class="tech-name">Support Vector Machines(SVM)</div>
									<div class="tech-name">Optical Character Recognition(OCR)</div>
									<div class="tech-name">Neural Networks(ANN)</div>
									<div class="tech-name">Visual Studio</div>
								</div>
							</div>
						</div>`,
	
	"c-salientobject": `<div class="content-box">
							<div class="content-boxheader">Salient Object Detection</div>
							<div class="content-boxcontent">Explored the functionality and effectiveness of two different salient object detection models when tested on videos in order to demonstrate how well these models - influenced by different compressive sensing methods - perform. It is accomplished by applying each model to every individual frame of a video, then merging the resulting saliency maps back into two videos to see how well the models detect and maintain the salient object(s). Studied both the spectral residual approach to generate a saliency map from RGB images and the Low-rank and Structured sparse Matrix Decomposition (SMD) model which uses low-rank and structured-sparsity regularization for image backgrounds and salient objects, respectively. The problem revolves around solving <br> <i>min</i><sub>L,S</sub> &Psi;(L) + &alpha;&omega;(S) + &beta;&theta;(L,S) <sub>s.t.</sub> <b>F=L+S</b>, where L is low-rank background and S is sparse-matrix foreground.</div>
							<div class="content-boxcoding">
								<div class="first">
									<a href="https://github.com/ravikailash/salient-object-detection" target="_child"> <img class="github-link" src="./imgs/coding-icons/github-logo.png" alt="Github"> <span>Github</span></a>
								</div>
								<div class="second"> 
									<a href="https://github.com/ravikailash/salient-object-detection/blob/master/Report/Paper/cs591C2_project.pdf" target="_child"> <img class="paper-link" src="./imgs/coding-icons/paper-logo.png" alt="Paper"> <span>Paper</span> </a>
								</div>
							</div>
							<div class="content-boxtech">
								<p>Technologies:</p>
								<div class="content-techlist">
									<div class="tech-name">Python</div>
									<div class="tech-name">MATLAB</div>
									<div class="tech-name">Compressive Sensing</div>
									<div class="tech-name">Structured Matrix Decomposition(SMD)</div>
									<div class="tech-name">Attention Models</div>
									<div class="tech-name">Superpixels</div>
									<div class="tech-name">Simple Linear Iterative Clustering</div>
									<div class="tech-name">Hou's Saliency</div>
								</div>
							</div>
						</div>`,
	
	"c-neuralvision": `<div class="content-box">
							<div class="content-boxheader">NeuralVision</div>
							<div class="content-boxcontent">How can we make a visual story from a block of text? An opposite to the NeuralTalk(Neural Machine Translation), this reverse way is implemented with NLTK to create a story from blocks of texts. Tasks include but not limited to finding the correlation between each vectors, sequence-to-sequence modeling and creating a control flow to present visually</div>
							<div class="content-boxtech">
								<p>Technologies:</p>
								<div class="content-techlist">
									<div class="tech-name">Python</div>
									<div class="tech-name">R</div>
									<div class="tech-name">Encoder-decoder Seq2Seq Model</div>
									<div class="tech-name">Natural Language Processing</div>
									<div class="tech-name">Web scraping</div>
									<div class="tech-name">Gensim</div>
									<div class="tech-name">Python-nltk</div>
									<div class="tech-name">Theano</div>
									<div class="tech-name">Keras</div>
									<div class="tech-name">OpenCV</div>
									<div class="tech-name">PyGame</div>
									<div class="tech-name">Tkinter GUI</div>
									<div class="tech-name">Requests</div>
								</div>
							</div>
						</div>`,
	
	"n-pagerank": `<div class="content-box">
						<div class="content-boxheader">Page Rank and Content Analysis</div>
						<div class="content-boxcontent">Implemented a web scraper and ran a simple page rank analysis over the inter-connected links. Analyzed and generated the Wordcloud for the queried terms. Vector Corpus is used to generate the document term matrix(DTM).</div>
						<div class="content-boxcoding">
							<div class="first">
								<a href="https://github.com/ravikailash/page_rank_and_content_analysis" target="_child"> <img class="github-link" src="./imgs/coding-icons/github-logo.png" alt="Github"> <span>Github</span> </a>
							</div>
						</div>
						<div class="content-boxtech">
							<p>Technologies:</p>
							<div class="content-techlist">
								<div class="tech-name">R</div>
								<div class="tech-name">ShinyApp</div>
								<div class="tech-name">Page Rank</div>
								<div class="tech-name">Web Scraping</div>
								<div class="tech-name">Text Mining(tm_map)</div>
								<div class="tech-name">Wordcloud</div>
								<div class="tech-name">Content Analysis</div>
								<div class="tech-name">Network graph</div>
								<div class="tech-name">ggPlot</div>
								<div class="tech-name">Data Frames</div>
								<div class="tech-name">Vector Corpus</div>
								<div class="tech-name">Document Term Matrix</div>
								<div class="tech-name">Tree Parsing</div>
							</div>
						</div>
					</div>`,
	
	"n-adult": `<div class="content-box">
						<div class="content-boxheader">Categorical and Aumerical analysis</div>
						<div class="content-boxcontent">Perfomed categorical and numerical analysis on "Adult" dataset. This dataset is used again to study the performance of the various sampling techniques including STRATA analyzed over one particular attribute in the dataset. Along with this, the different confidence intervals are also calculated and analyzed with the population mean of the dataset.</div>
						<div class="content-boxcoding">
							<div class="first">
								<a href="https://github.com/ravikailash/cs544_coursework/blob/master/cs544_coursework/Project/CS544_K_Rajendran_project_code.R" target="_child"> <img class="github-link" src="./imgs/coding-icons/github-logo.png" alt="Github"> <span>Github</span> </a>
							</div>
							<div class="second"> 
								<a href="https://github.com/ravikailash/cs544_coursework/blob/master/cs544_coursework/Project/CS544_K_Rajendran_project_report.pdf" target="_child"> <img class="paper-link" src="./imgs/coding-icons/paper-logo.png" alt="Report"> <span>Report</span> </a>
							</div>
						</div>
						<div class="content-boxtech">
							<p>Technologies:</p>
							<div class="content-techlist">
								<div class="tech-name">R</div>
								<div class="tech-name">ShinyApp</div>
								<div class="tech-name">Web Scraping</div>
								<div class="tech-name">Categorical Analysis</div>
								<div class="tech-name">Linear classification</div>
								<div class="tech-name">Text Mining(tm_map)</div>
								<div class="tech-name">Wordcloud</div>
								<div class="tech-name">Content Analysis</div>
								<div class="tech-name">ggPlot</div>
								<div class="tech-name">Data Frames</div>
								<div class="tech-name">Vector Corpus</div>
								<div class="tech-name">Document Term Matrix</div>
							</div>
						</div>
					</div>`,
	
	"a-pa": `<div class="content-box">
						<div class="content-boxheader">Personal Assistant</div>
						<div class="content-boxcontent">An speech enabled assistant for voice interaction, playing music, google search, youtube search, tasks scheduling, taking notes, real-time weather reports and time queries. The software is built in python with google Speech recognizer and TextToSpeech </div>
						<div class="content-boxcoding">
							<div class="first"> 
								<a href="https://bitbucket.org/ravikailash/personal_assistant" target="_child"> <img class="bitbucket-link" src="./imgs/coding-icons/bitbucket-logo.png" alt="BitBucket"> <span>BitBucket</span></a>
							</div>
						</div>
						<div class="content-boxtech">
							<p>Technologies:</p>
							<div class="content-techlist">
								<div class="tech-name">Python</div>
								<div class="tech-name">Google SpeechRecognizer</div>
								<div class="tech-name">Google TTS</div>
								<div class="tech-name">Flask</div>
								<div class="tech-name">TKinter GUI</div>
								<div class="tech-name">CMU Sphinx</div>
								<div class="tech-name">Python NLTK</div>
								<div class="tech-name">Gensim</div>
								<div class="tech-name">Opencv</div>
								<div class="tech-name">BeautifulSoup</div>
								<div class="tech-name">Shell</div>
								<div class="tech-name">Theano</div>
								<div class="tech-name">Keras</div>
								<div class="tech-name">Neural Nets</div>
							</div>
						</div>
					</div>`,
	
	"a-alexa": `<div class="content-box">
						<div class="content-boxheader">Alexa &gt; Email User Information</div>
						<div class="content-boxcontent">Built a skill set on Alexa to email remainder, notes, invitations(from user-defined templates)etc. to a registered email address. The email addresses are checked and verified realtime using the AWS-SES(Simple Email Services).</div>
						<div class="content-boxcoding">
							<div class="first"> 
								<a href="https://bitbucket.org/ravikailash/alexa-skillsets" target="_child"> <img class="bitbucket-link" src="./imgs/coding-icons/bitbucket-logo.png" alt="BitBuckets"> <span>BitBucket</span></a>
							</div>
						</div>
						<div class="content-boxtech">
							<p>Technologies:</p>
							<div class="content-techlist">
								<div class="tech-name">Alexa</div>
								<div class="tech-name">Node.js</div>
								<div class="tech-name">Amazon EC2</div>
								<div class="tech-name">AWS SimpleEmailService</div>
								<div class="tech-name">JSON</div>
								<div class="tech-name">DynamoDB</div>
							</div>
						</div>
					</div>`,
	
	"s-filterbank": `<div class="content-box">
						<div class="content-boxheader">Area Efficient Multi-rate Filter Bank</div>
						<div class="content-boxcontent">Designed an area efficient filter bank for the multi-channel systems by implementing the Common Subexpression Elimination technique and Canonical Signed Digit for the multipliers path for the Multi-standard Wireless Communication Receivers.</div>
						<div class="content-boxtech">
							<p>Technologies:</p>
							<div class="content-techlist">
								<div class="tech-name">Altera Quartus Verilog</div>
								<div class="tech-name">MATLAB</div>
								<div class="tech-name">Simulink</div>
							</div>
						</div>
					</div>`,
	
	"s-voicerecognizer": `<div class="content-box">
						<div class="content-boxheader">Voice recognizer and Pattern Analyzer</div>
						<div class="content-boxcontent">Developed a voice recognition and identification system for a pattern analyzer in an closed domain natural language QA-system.</div>
						<div class="content-boxtech">
							<p>Technologies:</p>
							<div class="content-techlist">
								<div class="tech-name">Python</div>
								<div class="tech-name">Natural Language Processing</div>
								<div class="tech-name">MATLAB</div>
								<div class="tech-name">Octave</div>
								<div class="tech-name">Simulink</div>
								<div class="tech-name">Verilog</div>
								<div class="tech-name">Speech Recognizer</div>
								<div class="tech-name">Arduino UNO</div>
								<div class="tech-name">Induino</div>
								<div class="tech-name">TI MSP430</div>
							</div>
						</div>
					</div>`
};

function show_project_domain(x=true){
	if (x === true) {
		$.each($('.domain-box'), function(i, v) {
			$(v).fadeIn();
		});
	} else {
		$.each($('.domain-box'), function(i, v) {
			$(v).fadeOut();
		});
	}
}

function choose_projects() {
	var bg_color;
	var stack = [];
	if (current_domain === 'all') {
		$.each($('.project-box'), function(i, v) {
			$(v).fadeIn(100);
			if (i == 0) {
				bg_color = $(v).css("background-color");
				current_project = $(v).attr("id");
			}
		});
	}
	else {
		$.each($('.project-box'), function(i, v) {
			if ($(v).hasClass(current_domain)) {
				stack.push(v);
			}
			$(v).hide();
		});
		for(var i=0; i<stack.length; i++) {
			if(i == 0) {
				current_project = $(stack[i]).attr("id");
			}
			$(stack[i]).fadeIn(100).delay(100);
		}
		bg_color = $(stack[0]).css("background-color");
	}
	$(".projectcontent").css({"background-color" : bg_color});
}

function make_active(x) {
	$.each($(".project-box"), function(_, v) {
		if($(v).attr("id") === x) {
			$(v).addClass("active-project");
		} else {
			$(v).removeClass("active-project");
		}
	});
}

$(document).ready(function() {
	$(".project-domain").hide();
	$(".project-selector").hide();
	$("#project_content").hide();
	
	$("#project_content").html(current_content);
	
	$(".domain-selector").on("click", function() {
		if (current_state === 'show') {
			$(".project-selector").hide();
			$(".project-domain").fadeIn();
			show_project_domain(true);
			current_state = "hide";
		} else {
			show_project_domain(false);
			$(".project-domain").fadeOut();
			$(".project-selector").fadeIn();
			current_state = "show";
		}
	});
	
	$(".domain-box").on("click", function() {
		$(".domain-selector").find('span').text($(this).text());
		show_project_domain(false);
		$(".project-domain").fadeOut();
		$(".project-selector").show();
		current_domain = $(this).attr("id");
		current_state = "show";
		choose_projects();
		fill_content();
		make_active(current_project);
	});
	
	var fill_content = function() {
		var cur = document.getElementById('project_content');
		current_content = project_details[current_project];
		cur.innerHTML = current_content;
		addImgEvents();
	};

	var addImgEvents = function() {
		var codingimgs = document.querySelectorAll('.content-boxcoding img');
		codingimgs.forEach(function(element, index) {
			$('.' + element.className).bind({
				mouseenter: function() {
					$(this).addClass('is_hovered');
					$(this).siblings('span').addClass('is_hovered');
				}, 
				mouseleave: function() {
					$(this).removeClass('is_hovered');
					$(this).siblings('span').removeClass('is_hovered');
				}
			});
		});
	};
	
	$(".project-box").on("click", function() {
		if (project_details[$(this).attr("id")] != null) {
			current_project = $(this).attr("id");
			fill_content();
			make_active(current_project);
			$(".projectcontent").css({"background-color" : $(this).css("background-color")});
		} else {
			$("#project_content").html($(this).find("div.p-title").text() + " > " + $(this).attr("id"));
		}
	});
	
	show_project_domain(false);
	fill_content();
	make_active(current_project);
});