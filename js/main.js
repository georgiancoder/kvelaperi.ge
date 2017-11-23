$(document).ready(function() {
 
 //main slider
  $("#mainslider").owlCarousel({
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true, 
  });


 //inner slider
  $("#innerslider").owlCarousel({
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true, 
  });

//category carousels
$(".homecarousel").owlCarousel({
     
      slideSpeed : 300,
      navigation : true,
      nav: false,
      dots: false,
      navText: ["dsds"],
 
  });


// inner page gallery
$("div.gallery div.g img").click(function(){
  var src = $(this).attr('src');
  $("div.gallery div.main img").hide();
  $("div.gallery div.main img").attr('src',src);
  $("div.gallery div.main img").fadeIn();
});


//search tabs
$("section.search div.h button").click(function(){
  var index = $(this).index();
  $("section.search div.h button").removeClass('active');
  $(this).addClass('active');
  $("section.search div.tabs div.t").removeClass('active');
  $($("section.search div.tabs div.t")[index]).addClass('active');
});

});