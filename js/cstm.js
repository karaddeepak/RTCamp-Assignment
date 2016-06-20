    $(document).ready(function(){
  $('.bxsliderimg').bxSlider(
  {
   minSlides: 2,
  maxSlides: 5,
  slideWidth: 270,
 
  
  slideMargin: 10
  });
  
   $('.bxslidervid').bxSlider(
  {
   minSlides: 2,
  maxSlides: 5,
    slideWidth: 250,
 
 
  
  slideMargin: 0
  });
  
   $('[data-toggle="tooltip"]').tooltip(); 
  
});
