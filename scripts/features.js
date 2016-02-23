
(function() {
  var noteContent = document.getElementById('noteContent');
  var noteContentCount = document.getElementById('noteContentCount');

  noteContent.addEventListener('focus', updateCounter);
  noteContent.addEventListener('input', updateCounter);

  noteContent.addEventListener('blur', function () {
    if (noteContent.value.length <= 150) {
      noteContentCount.className = 'hide' ;
    }
  });


function updateCounter(e) {
  var target = e.target || e.srcElement;
  var count = 150 - target.value.length;
  if(count < 0) {
    noteContentCount.className = 'error';
  } else if (count <= 15) {
    noteContentCount.className = 'warn';
  } else {
    noteContentCount.className = 'good';
  }
  var charMsg = '<b>' + count + '</b>' + ' characters';
  noteContentCount.innerHTML = charMsg;
}

}());
