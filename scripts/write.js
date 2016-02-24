function Note(noteName, noteContent, pile){
        this.noteName = noteName;
        this.noteContent = noteContent;
        this.pile = pile;
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
        myArray.push(new Note(description, content));
        console.log(myArray);
        //appendIt();
        myArray.forEach(function(note) {
          $('.read').append(note.toHTML());
        })
        accordionExecute();
        event.preventDefault();
      });
      console.log(myArray);
