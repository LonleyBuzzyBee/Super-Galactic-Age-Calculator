import { userInfo } from "os";

//business logic
export class User {
  constructor (name, age, planet, favM) {
    this.name = name;
    this.age = age;
    this.planet = planet;
    this.favM = favM;
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

  }
  jupiter() {

  }
  venus() {

  }
  mercury() {
    
  }
}

