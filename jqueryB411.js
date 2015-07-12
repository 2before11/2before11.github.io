// JavaScript Document

$(document).ready(function(){
	
		
	// main height
	
	var screenHeight =  $(window).height(); 
	$(".topDiv").css ("height",screenHeight);
	
	
	// icon in bottom right
	
	var marginRight = 12;
	var marginBottom = marginRight;
	var imageHeight = 40;
	var yPositionIconImage = screenHeight - imageHeight - marginBottom
	
	$(".rightBottomImage").css("top",yPositionIconImage);
	$(".rightBottomImage").css("right",marginRight);
	$(".rightBottomImage").css("width",imageHeight);
	$(".rightBottomImage").css("height",imageHeight);
	
	
	// menu at the same location as bottom right icon
	var menuYPosition = yPositionIconImage - $(".topTextDiv").height();
	$(".menu").css("top",menuYPosition); // same location as icon
	$(".menu").css("height",imageHeight); // same size as icon
	
	
	// screenshot image to fit exactly in phone
	
	var divScreenshots = $('.screenshots');
	var heightScreen = divScreenshots.height();
	var widthScreen = Math.round(heightScreen * 0.5625);
	divScreenshots.css('width', widthScreen);
	
	
	$("#iPhoneImage").on("load", function(){
		console.log("hello2")
		var iPhoneImage = $('.iPhone_image');
		var widthIphoneImage = iPhoneImage.width();
		var rightMargin = Math.round(widthIphoneImage * 0.08);
		$('.screenshots').css("right",rightMargin);
	});
	
	$("#readMore").click(function(){
		console.log("read more button pressed")
		$('.bottomDiv').css("display","block");
		
		$('html, body').delay(200).animate({
        	scrollTop: $(".bottomDiv").offset().top
    		}, 500);
	});
	
});


	
	
$(window).on("resize",function(){
	
	var screenHeight =  $(window).height(); 
	$(".topDiv").css ("height",screenHeight);
	
	var marginRight = 12;
	var marginBottom = marginRight;
	var imageHeight = 40;
	var yPositionIconImage = screenHeight - imageHeight - marginBottom
	
	$(".rightBottomImage").css("top",yPositionIconImage);
	$(".rightBottomImage").css("right",marginRight);
	$(".rightBottomImage").css("width",imageHeight);
	$(".rightBottomImage").css("height",imageHeight);
	
	// menu at the same location as bottom right icon
	var menuYPosition = yPositionIconImage - $(".topTextDiv").height();
	$(".menu").css("top",menuYPosition); // same location as icon
	$(".menu").css("height",imageHeight); // same size as icon
	
	
	// screenshot image to fit exactly in phone
	
	var divScreenshots = $('.screenshots');
	var heightScreen = divScreenshots.height();
	var widthScreen = Math.round(heightScreen * 0.5625);
	divScreenshots.css('width', widthScreen);
	
	var iPhoneImage = $('.iPhone_image');
	var widthIphoneImage = iPhoneImage.width();
	var leftMargin = Math.round(widthIphoneImage * 0.08);
	divScreenshots.css("right",leftMargin);
	
});


