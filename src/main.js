// user interface 
import $ from 'jquery';
import './../src/style.css';

$(document).ready(function(){
  $("#calc").submit(function(event) {
    event.preventDefault();
    let name  = $("#name").val();
    let age = parseInt($("#age").val());
    let planet = $("#planet").val();
    let favM = $("#favM").val();
    let user = new User(name,age,planet,favM);
    user.sortP();
    console.log(user);

  });
});


