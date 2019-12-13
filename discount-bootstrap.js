$(document).ready(function(){
  //Accordion functionality, listens for click on head of a given segment
  $('div.accordion-head').click(function () {
    var accordionSegment = $(this);
    var accordionLi = accordionSegment.parent();
    var accordionUl = accordionLi.parent();
    var accordionBlock = accordionUl.parent();
    
    if (accordionBlock.children('div.accordion-head[aria-checked=false]').has('.accordion-head[aria-checked=false]')) {
      console.log("this worked! One of the children of this accordion is not checked" + accordionBlock.children('div.accordion-head[aria-checked=false]').length);
    } else {
      console.log("this worked! One of the children of this accordion is checked");
    }
    
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
