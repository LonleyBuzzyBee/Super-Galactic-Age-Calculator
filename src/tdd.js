//business logic
export class User {
  constructor (name, age, planet, favM, ageE) {
    this.name = name;
    this.age = age;
    this.planet = planet;
    this.favM = favM;
    this.ageE = ageE;
console.log(this.user);
  }

  sortP() {
    if (this.planet === "mars" ) {
      return this.age * 1.88;
    } if (this.planet === "jupiter"){
      return this.age * 11.86;
    } if (this.planet === "venus"){
      return this.age % .62;
    } if (this.planet === "mercury"){
      return this.age % .24;
    }








    // let mars = function() {
    //   if(this.favM === "forrest-gump") {
    //     this.age * 1.88;
    //     this.ageE = "you'll live for 20 more years";
    //     this.print();
    //   }else if (this.favM === "totoro"){
    //     this.age * 1.88;
    //     this.ageE = "you'll live forever";
    //     this.print();
    //   }else if(this.favM === "paul"){
    //     this.age * 1.88;
    //     this.ageE = "make sure to go through your life insurance policy soon...";
    //     this.print();
    //   }
  


 
    }
  }

