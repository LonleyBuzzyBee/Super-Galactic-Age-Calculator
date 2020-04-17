// user interface 
import $ from 'jquery';
import './../src/style.css';
import { User } from './tdd.js';


// --------------------------------------------

$(document).ready(function(){
  $("#calc").submit(function(event) {
    event.preventDefault();
    let name  = $("#name").val();
    let age = parseInt($("#age").val());
    let planet = $("#planet").val();
    let favM = $("#favM").val();
    let user = new User(name,age,planet,favM);
    user.sortP();
    user.print();
    console.log(user.print());
    console.log(user);

  });
});


