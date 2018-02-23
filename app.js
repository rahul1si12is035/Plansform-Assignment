
var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  percentPosition: true,
  columnWidth: '.grid-sizer',
  gutter: 5
});

$grid.imagesLoaded().progress( function() {
  $grid.masonry();
});  
