$(document).ready(function(){

	$("#showMessageExample").fadeOut(0);

	$("#showMessageExample").showMessage({
		message : "Hello & Welcome to my awesome plugin",
		backgroundColor: "#2ecc71",
		color: "#fff",
		speed: 2500
	});

	$("p.anim-action").click(function(){
		//console.log("vous avez tenté de lancer l'animation de la balle");
		$(".balle").balleAnimation({
			amplitudeX: 25,
			amplitudeY: 425,
		});
	});
    
    $(".tweet").tweetParser();
});