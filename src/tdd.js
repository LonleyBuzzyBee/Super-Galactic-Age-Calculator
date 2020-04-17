import { userInfo } from "os";

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

  }
  venus() {

  }
  mercury() {

  }
}

