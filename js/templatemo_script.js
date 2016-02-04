/* Credit: http://www.templatemo.com */

var menuDisabled = false;

jQuery(function($) {
    
    $(window).load(function() { // makes sure the whole site is loaded
            $('#status').fadeOut(); // will first fade out the loading animation
            $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
            $('#main-wrapper').delay(350).css({'overflow':'visible'});
    });
    
    $(document).ready( function() {

        loadGoogleMap();
        
        // backstretch for background image
        var defaultImgSrc = $('img.main-img').attr('src');
        $.backstretch(defaultImgSrc, {speed: 500});
	
	// for responsive-menu
	$("#m-btn").click(function(){
		$("#responsive").toggle();
	});
	
        // copy menu list to responsive menu
        var mainMenuList = $('#menu-list').html();
        $('#responsive').html(mainMenuList);
	
	//for image slide on menu item click(normal) and responsive
	$("#menu-list a, #responsive a").on('click',function(e){
            e.preventDefault();
            if (menuDisabled == false) // check the menu has disabled?
            {
                menuDisabled = true; // disable to menu
                
                var name = $(this).attr('href');
                $('#menu-list li').removeClass('active');
                $('#responsive li').removeClass('active');

                //  set active to both menu
                var menuClass = $(this).parent('li').attr('class');
                $('.'+menuClass).addClass('active');

                // hide responsive menu
                $("#responsive").hide();
                
                // get image url and assign to backstretch for background
                var imgSrc = $("img"+name+"-img").attr('src');
                $.backstretch(imgSrc, {speed: 500}); //backstretch for background fade in/out
                
                // content slide in/out
                $("section.active").animate({left:$("section.active").outerWidth()}, 400,function(){
                    $(this).removeClass("active");
                    $(this).hide();
                    $(name+"-text").show();
                    $(name+"-text").animate({left:'0px'},400,function(){
                        $(this).addClass("active");
                        
                        //google.maps.event.trigger(map, 'resize'); // resize map
                        $.backstretch("resize"); // resize the background image
                        
                        menuDisabled = false; // enable the menu
                    });
                });
                
            }
            return;
	});
        
    });

});

var map = '';
var currentYear = "2014";

function initialize() {
    var mapOptions = {
      zoom: 14,
      center: new google.maps.LatLng(16.8461789,96.1309764)
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),  mapOptions);
}

function loadGoogleMap(){
    // load google map
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
        'callback=initialize';
    document.body.appendChild(script);
}

function showValue(newValue)
{
	document.getElementById("range").innerHTML=newValue;
}

function diffImage() 
{
var img = document.getElementById("graph");
img.src="graphs/apr13.png";
return false;
}

function changeImage()
{
var img = document.getElementById("graph");
img.src="graphs/may13.png";
return false;
}

function updateYear(year) {
	var newYear = document.getElementById("yearAmount");
		newYear.innerHTML = year;
		currentYear = year;
	if (document.getElementById("Monthyear_1").checked == true) {	
		var img = document.getElementById("graph");
		var str1 = "graphs/";
		var str2 = year;
		var str3 = ".png";
		var string = str1.concat(str2,str3);
		img.src=string;	
	}
}

function updateSlider(slideAmount) {
        var sliderDiv = document.getElementById("sliderAmount");
        sliderDiv.innerHTML = slideAmount;
		
		if (document.getElementById("Monthyear_0").checked == true) {
			//var str1 = document.getElementById("ysearAmount").value;
			var str1 = currentYear;			
			var res = str1.split("",4); 
						
			var str0 = "graphs/";
			var str4 = ".png";
			if (sliderDiv.innerHTML == 1){
				var img = document.getElementById("graph");
				var str2 = "jan";
				var str3 = str0.concat(str2,res[2],res[3],str4);
				img.src=str3;
			} else if (sliderDiv.innerHTML == 2){
				var img = document.getElementById("graph");
				var str2 = "feb";
				var str3 = str0.concat(str2,res[2],res[3],str4);
				img.src=str3;
			} else if (sliderDiv.innerHTML == 3){
				var img = document.getElementById("graph");
				var str2 = "mar";
				var str3 = str0.concat(str2,res[2],res[3],str4);
				img.src=str3;
			} else if (sliderDiv.innerHTML == 4){
				var img = document.getElementById("graph");
				var str2 = "apr";
				var str3 = str0.concat(str2,res[2],res[3],str4);
				img.src=str3;
			} else if (sliderDiv.innerHTML == 5){
				var img = document.getElementById("graph");
				var str2 = "may";
				var str3 = str0.concat(str2,res[2],res[3],str4);
				img.src=str3;
			} else if (sliderDiv.innerHTML == 6){
				var img = document.getElementById("graph");
				var str2 = "jun";
				var str3 = str0.concat(str2,res[2],res[3],str4);
				img.src=str3;
			} else if (sliderDiv.innerHTML == 7){
				var img = document.getElementById("graph");
				var str2 = "jul";
				var str3 = str0.concat(str2,res[2],res[3],str4);
				img.src=str3;
			} else if (sliderDiv.innerHTML == 8){
				var img = document.getElementById("graph");
				var str2 = "aug";
				var str3 = str0.concat(str2,res[2],res[3],str4);
				img.src=str3;
			} else if (sliderDiv.innerHTML == 9){
				var img = document.getElementById("graph");
				var str2 = "sep";
				var str3 = str0.concat(str2,res[2],res[3],str4);
				img.src=str3;
			} else if (sliderDiv.innerHTML == 10){
				var img = document.getElementById("graph");
				var str2 = "oct";
				var str3 = str0.concat(str2,res[2],res[3],str4);
				img.src=str3;
			} else if (sliderDiv.innerHTML == 11){
				var img = document.getElementById("graph");
				var str2 = "nov";
				var str3 = str0.concat(str2,res[2],res[3],str4);
				img.src=str3;
			} else if (sliderDiv.innerHTML == 12){
				var img = document.getElementById("graph");
				var str2 = "dec";
				var str3 = str0.concat(str2,res[2],res[3],str4);
				img.src=str3;
			} else {
				var img = document.getElementById("graph");
				img.src="graphs/jun14.png";
			}
		}
		else updateYear(currentyear);
}