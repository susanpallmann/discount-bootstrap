$(document).ready(function(){
  $('.accordion-head').click(function () {
    var accordionSegment = $(this);
    var accordionLi = accordionSegment.parents('li');
    var accordion = accordionSegment.parents('.accordion');
    var checkedSegments = accordion.find('div[aria-checked=false]');
    var checkedLi = checkedSegments.parent();  
    accordionLi
      .children('.accordion-content')
      .removeClass('script-display-none');   
    function accordionToggleOpen(segment) {
      segment
        .attr('aria-checked','false');
      segment
        .children('i.accordion-arrow')
        .html("expand_less");
      segment
        .parent('li')
        .children('.accordion-content')
        .removeClass('collapsed')
        .slideToggle( "fast" );
    }
    function accordionToggleClose(segment) {
      segment.attr('aria-checked','true');
      segment
        .children('i.accordion-arrow')
        .html("expand_more");
      segment
        .parent('li')
        .children('.accordion-content')
        .addClass('collapsed')
        .slideToggle( "fast" );
    }
    function accordionToggle() {
      if (accordionSegment.attr('aria-checked') === 'true') {
        accordionToggleOpen(accordionSegment);
      } else {
        accordionToggleClose(accordionSegment);
      }
    }
    if (accordion.hasClass("single-select")) {
      checkedSegments
        .not(accordionSegment)
        .each(function( index ) {
          var currentSegment = $(this);
          accordionToggleClose(currentSegment);
        });
      accordionToggle();
    } else {    
      accordionToggle();
    }
  });
});
