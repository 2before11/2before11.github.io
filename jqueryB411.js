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
	
	var rightMargin = 0
	while (rightMargin == 0){
		var iPhoneImage = $('.iPhone_image');
		var widthIphoneImage = iPhoneImage.width();
		rightMargin = Math.round(widthIphoneImage * 0.08);
		divScreenshots.css("right",rightMargin);
	}
	
	
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
