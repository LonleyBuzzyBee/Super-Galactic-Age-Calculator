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
       this.age * 1.88;
       return this.ageExpectancy();
    } if (this.planet === "jupiter"){
       this.age * 11.86;
       return this.ageExpectancy();
    } if (this.planet === "venus"){
      this.age % .62;
      return this.ageExpectancy();
    } if (this.planet === "mercury"){
      this.age % .24;
      return this.ageExpectancy();
    }
  }
    ageExpectancy() {
      if (this.favM === "forrest-gump") {
         this.ageE = "you'll live for 20 more years";
        console.log(this.user);
      } if (this.favM === "totoro"){
         this.ageE = "you'll live forever";
        console.log(this.user);
      } if (this.favM === "paul"){
         this.ageE = "make sure to go through your life insurance policy soon...";
        console.log(this.user);
    }
  }
}
  
  


 

