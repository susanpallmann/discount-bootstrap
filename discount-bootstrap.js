$(document).ready(function(){
  $('.accordion-head').click(function () {
    var accordionSegment = $(this);
    var accordionLi = accordionSegment.parents('li');
    var accordion = accordionSegment.parents('.accordion');
    var checkedSegments = accordion.find('div[aria-checked=false]');
    var checkedLi = checkedSegments.parent();
    
    accordionLi.children('.accordion-content').removeClass('script-display-none');   
    
    function accordionToggleOpen(segment) {
      var currentSegment = segment;
      var currentLi = currentSegment.parent();
      currentSegment.attr('aria-checked','false');
      currentSegment.children('i.accordion-arrow').html("expand_less");
      currentLi.children('.accordion-content').removeClass('collapsed').slideToggle( "fast" );
    }
    function accordionToggleClose(segment) {
      var currentSegment = segment;
      var currentLi = currentSegment.parent();
      currentSegment.attr('aria-checked','true');
      currentSegment.children('i.accordion-arrow').html("expand_more");
      currentLi.children('.accordion-content').addClass('collapsed').slideToggle( "fast" );
    }
    function accordionToggle() {
      if (accordionSegment.attr('aria-checked') === 'true') {
        accordionToggleOpen(accordionSegment);
      } else {
        accordionToggleClose(accordionSegment);
      }
    }
    
    if (accordion.hasClass("single-select")) {
      //accordion.find('.accordion-head').not(accordionLi.children('.accordion-head')).attr('aria-checked','true');
      //accordion.find('.accordion-content').addClass('collapsed');
      //accordion.find('i.accordion-arrow').html("expand_more");
      //checkedLi.children('.accordion-content').not(accordionLi.children('.accordion-content')).slideToggle( "fast" );
      $(accordion.find('.accordion-head').not(accordionLi.children('.accordion-head')).attr('aria-checked','true')).each(function( index ) {
        var currentSegment = $(this);
        accordionToggleClose(currentSegment);
      });
      accordionToggle();
    } else {    
      accordionToggle();
    }
  });
});

/* $(document).ready(function(){
  //Accordion functionality, listens for click on head of a given segment
  $('.accordion-head').click(function () {
    var accordionSegment = $(this);
    var accordionLi = accordionSegment.parents('li');
    var accordionBlock = accordionSegment.parents('.accordion');
    var checkedSegments = accordionBlock.find('div[aria-checked=false]');
    var checkedLi = checkedSegments.parent();
    accordionLi.children('.accordion-content').removeClass('script-display-none');   
    if (accordionBlock.hasClass("multi-select")) {
      accordionBlock.find('.accordion-head').not(accordionLi.children('.accordion-head')).attr('aria-checked','true');
      accordionBlock.find('.accordion-content').addClass('collapsed');
      accordionBlock.find('i.accordion-arrow').html("expand_more");
      checkedLi.children('.accordion-content').not(accordionLi.children('.accordion-content')).slideToggle( "fast" );
      if (accordionSegment.attr('aria-checked') === 'true') {
        accordionSegment.attr('aria-checked','false');
        accordionSegment.children('i.accordion-arrow').html("expand_less");
        accordionLi.children('.accordion-content').removeClass('collapsed'); 
        accordionLi.children('.accordion-content').slideToggle( "fast" );
      } else {
        accordionSegment.attr('aria-checked','true');
        accordionSegment.children('i.accordion-arrow').html("expand_more");
        accordionLi.children('.accordion-content').addClass('collapsed');
        accordionLi.children('.accordion-content').slideToggle( "fast" );
      }
    } else {    
      //If it's already checked
      if (accordionSegment.attr('aria-checked') === 'true') {
        //Uncheck it, update the icon
        accordionSegment.attr('aria-checked','false');
        accordionSegment.children('i.accordion-arrow').html("expand_less");
        accordionLi.children('.accordion-content').removeClass('collapsed'); 
        accordionLi.children('.accordion-content').slideToggle( "fast" );
      } else {
        //If not, check it, update the icon
        accordionSegment.attr('aria-checked','true');
        accordionSegment.children('i.accordion-arrow').html("expand_more");
        accordionLi.children('.accordion-content').addClass('collapsed');
        accordionLi.children('.accordion-content').slideToggle( "fast" );
      }
    }
  });
});
*/
