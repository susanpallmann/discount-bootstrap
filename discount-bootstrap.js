$(document).ready(function(){
  //Accordion functionality, listens for click on head of a given segment
  $('div.accordion-head').click(function () {
    var accordionSegment = $(this);
    var accordionLi = accordionSegment.parent();
    var accordionUl = accordionLi.parent();
    var accordionBlock = accordionUl.parent();
    var allAccordionContent = accordionBlock.children('.accordion-content');
    var allAccordionArrow = accordionBlock.children('i.accordion-arrow');
    
    console.log(accordionLi);
    console.log(accordionUl);
    console.log(accordionBlock);
    console.log(accordionBlock.children('div.accordion-content'));
    
    allAccordionContent.each(function( index ) {
      $(this).attr('aria-checked','true');
      $(this).addClass('collapsed');
    });
    allAccordionContent.each(function( index ) {
      $(this).html("expand_more");
    });
    
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
