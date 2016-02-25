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
        //$('.accordion').remove();
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
        $('div'+'[value='+categoryAdd+']').append(cards[lastCard].toHTML());
        //TODO: Problem - we remove everything at the beginning, which means we are appending everything to whatever the latest 'categoryAdd' is. We no longer want to remove everything, we only want to append whatever is the last card in the 'cards' array.
        // cards.forEach(function(note) {
        //   $('div'+'[value='+categoryAdd+']').append(note.toHTML());
        // })
        accordionExecute();
        categories();
        event.preventDefault();
      });
      console.log(cards); // Delete later

      /*** New Category Container ***/
      function catContain(cat) {
        $('.read').append('<div class="read-category" value="'+cat+'"><h1>'+cat+'</h1></div>')
      };

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
        console.log(uniqueCats); // Delete later
        $('select option:first-child').nextAll().remove();
        uniqueCats.forEach(function(category) {
          $('#pile-select').append('<option>'+category+'</option>');
        });
      };
