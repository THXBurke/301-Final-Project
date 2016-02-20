$('.accordion').on('click', '.accordion-control', function(e) {
  e.preventDefault();
  $(this)
    .next('.accordion-panel')
    .not(':animated')
    .slideToggle(200);
});
// 
// $('.accordion-panel')
//   .animate({
//     height: 'show',
//     paddingTop: 'show',
//     paddingBottom: 'show',
//     marginTop: 'show',
//     marginBottom: 'show'
//   });
