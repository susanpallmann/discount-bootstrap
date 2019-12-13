$(document).ready(function(){
  //Accordion functionality, listens for click on head of a given segment
  $('div.accordion-head').click(function () {
    var accordionSegment = $(this);
    var accordionLi = accordionSegment.parent();
    var accordionUl = accordionLi.parent();
    var accordionBlock = accordionUl.parent();

    accordionBlock.find('.accordion-content').attr('aria-checked','true');
    accordionBlock.find('.accordion-content').addClass('collapsed');
    accordionBlock.find('i.accordion-arrow').html("expand_more");
    accordionBlock.find('.accordion-content').slideToggle( "fast" );
    
    console.log(accordionBlock.find('.accordion-content[aria-checked=false]'));
    
    accordionLi.children('.accordion-content').removeClass('script-display-none');
    
    //If it's already checked
    if (accordionSegment.attr('aria-checked') === 'true') {
      //Uncheck it, update the icon
      accordionSegment.attr('aria-checked','false');
      accordionSegment.children('i.accordion-arrow').html("expand_less");
      accordionLi.children('.accordion-content').removeClass('collapsed');      
    } else {
      
      //If not, check it, update the icon
      accordionSegment.attr('aria-checked','true');
      accordionSegment.children('i.accordion-arrow').html("expand_more");
      accordionLi.children('.accordion-content').addClass('collapsed');
      
    }
    //jQuery default slideToggle effect
    accordionLi.children('.accordion-content').slideToggle( "fast" );
  });
});
