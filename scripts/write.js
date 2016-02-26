function Card(noteName, noteContent, categoryAdd){
        this.noteName = noteName;
        this.noteContent = noteContent;
        this.categoryAdd = categoryAdd;
      }

Card.prototype.toHTML = function(){
  var template = Handlebars.compile($("#entry-template").text());
  return template(this);
}

var cards = [];

/*** Submit New Card Handling ***/
$("form").submit(function(event) {
  event.preventDefault();
  var description = $('#card-name').val();
  var content = $('#card-content').val();
  var categoryAdd;
    if($('#new-category').val()){
      categoryAdd = $('#new-category').val();
      catContain(categoryAdd);
    }else{
      categoryAdd = $('#pile-select').val();
    };
  cards.push(new Card(description, content, categoryAdd));
  console.log(cards);

  var lastCard = cards.length - 1;
  $('div'+'[data-category='+'"'+categoryAdd+'"'+']').append(cards[lastCard].toHTML());

  accordionExecute();
  categories();
  addEraseHandler();
});

/*** New Category Container ***/
function catContain(cat) {
  $('.read').append('<div class="read-category" data-category="'+cat+'"><h1>'+cat+'</h1></div>')
};

/* Adds Event Handler to 'Erase' buttons */
function addEraseHandler() {
  $('.erase-img').on('click', function(event) {
    event.preventDefault();
    console.log($(this).siblings('button').text());
    $(this).parent('li').parent('ul').remove();
    // Start real function below
    $('.accordion-button') // gets an array of all accordion-button elements
    // Array index of names/buttons match order in which card object was made
    var thisName = $(this).siblings('button').text();
    var indexOfName = cards.map(function(card) {
      return card.noteName
    }).indexOf(thisName);
    cards.splice(indexOfName, 1);
    console.log(cards);
  })
}

/*** Category Dropdown ***/
function categories(){
  var uniqueCats = cards.map(function(note) {
      return note.categoryAdd;
    }).reduce(function(arr, category){
      if(arr.indexOf(category) === -1){
        arr.push(category);
      };
      return arr;
    }, []);

  $('select option:first-child').nextAll().remove();
  uniqueCats.forEach(function(category) {
    $('#pile-select').append('<option>'+category+'</option>');
  });
};

$('.erase-button').on('click', function() {

  console.log('hello world');
})
