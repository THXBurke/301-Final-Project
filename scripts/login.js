(function() {
  var form = document.getElementById('login');

  addEventListener(form, 'submit', function(e) {
    e.preventDefault();
    var elements = this.elements;
    var username = elements.username.value;
    var msg = 'Welcome ' + username;
    document.getElementById('main').textContent = msg;
  });
}());
