import $ from 'jquery';
import { user } from './main.js';
//business logic
export class User {
  constructor (name, age, planet, favM, ageE) {
    this.name = name;
    this.age = age;
    this.planet = planet;
    this.favM = favM;
    this.ageE = ageE;

  }
  sortP() {
    switch(this.planet){
  case "mars":
    this.mars();
    break;
  case "jupiter":
    this.jupiter();
    break;
  case "venus":
    this.venus();
    break;
  case "mercury":
    this.mercury();
    break;
  default:
    console.log("error choose a planet");
    }
  }
  mars() {
    if(this.favM === "forrest-gump") {
      this.age * 1.88;
      this.ageE = "you'll live for 20 more years";
      this.print();
    }else if (this.favM === "totoro"){
      this.age * 1.88;
      this.ageE = "you'll live forever";
      this.print();
    }else if(this.favM === "paul"){
      this.age * 1.88;
      this.ageE = "make sure to go through your life insurance policy soon...";
      this.print();
    }

  }
  jupiter() {
    if(this.favM === "forrest-gump") {
      this.age * 11.86;
      this.ageE = "you'll live for 20 more years";
      this.print();
    }else if (this.favM === "totoro"){
      this.age * 11.86;
      this.ageE = "you'll live forever";
      this.print();
    }else if(this.favM === "paul"){
      this.age * 11.86;
      this.ageE = "make sure to go through your life insurance policy soon...";
      this.print();
    }


  }
  venus() {
    if(this.favM === "forrest-gump") {
      this.age % .62;
      this.ageE = "you'll live for 20 more years";
      this.print();
    }else if (this.favM === "totoro"){
      this.age % .62;
      this.ageE = "you'll live forever";
      this.print();
    }else if(this.favM === "paul"){
      this.age % .62;
      this.ageE = "make sure to go through your life insurance policy soon...";
      this.print();
    }


  }
  mercury() {
    if(this.favM === "forrest-gump") {
      this.age % .24;
      this.ageE = "you'll live for 20 more years";
      this.print();
    }else if (this.favM === "totoro"){
      this.age % .24;
      this.ageE = "you'll live forever";
      this.print();
    }else if(this.favM === "paul"){
      this.age % .24;
      this.ageE = "make sure to go through your life insurance policy soon...";
      this.print();
    }
  }
  
  print() {
    user.sortP();
    user.mars();
    user.jupiter();
    user.venus();
    user.mercury();
   return $("#output").text(this.user);


  }

}

