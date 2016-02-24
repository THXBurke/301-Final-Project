function Note(noteName, noteContent, category){
        this.noteName = noteName;
        this.noteContent = noteContent;
        this.category = category;
      }


      Note.prototype.toHTML = function(){
        var template = Handlebars.compile($("#entry-template").text());
        return template(this);
      }

      // function appendIt(){
      //   $('.cards').remove(); //Removes any cards and appends them again. Eliminate replication.
      //   myArray.forEach(function(note){
      //     var newCard = '<div class="cards">';
      //     newCard += '<h1>'+note.description+'</h1>';
      //     newCard += '<p>'+note.content+'</p>';
      //     newCard += '</div>';
      //     $('.read').append(newCard);
      //   });
      // }

      var myArray = [];

      $("form").submit(function(event) {
        $('.accordion').remove();
        var description = $('#card-name').val();
        var content = $('#card-content').val();
        var category;
          if($('#new-category').val()){
            category = $('#new-category').val()
          }else{
            category = $('#pile-select').val()
          };
        myArray.push(new Note(description, content, category));
        console.log(myArray);
        //appendIt();
        myArray.forEach(function(note) {
          $('.read').append(note.toHTML());
        })
        accordionExecute();
        categories();
        event.preventDefault();
      });
      console.log(myArray); // Delete later

      /*** Category Dropdown ***/
      function categories(){
        var uniqueCats = myArray.map(function(note) {
          return note.category;
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
