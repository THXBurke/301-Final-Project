var accordionExecute = function() {
$('.accordion').on('click', '.accordion-control', function(e) {
  e.preventDefault();
  $(this)
    .nextAll('.accordion-item')
    .not(':animated')
    .slideToggle(200);
});
};
