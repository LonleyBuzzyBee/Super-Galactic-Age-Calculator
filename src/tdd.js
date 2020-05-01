//business logic
export class User {
  constructor(name, age, planet, favM, ageE) {
    this.name = name;
    this.age = age,
    this.planet = planet;
    this.favM = favM;
    this.ageE = ageE;
    console.log(this.user);
  }

  sortP() {
    let i = this.age;
    if (this.planet === "mars") {
      this.age = i * 1.88;
      
    } else if (this.planet === "jupiter") {
      this.age = i * 11.86;
       
    } else if (this.planet === "venus") {
      this.age = i / .62;
      
    } else if (this.planet === "mercury") {
      this.age = i / .24;
     
    }
  }
  ageExpectancy() {
    if (this.favM === "forrest-gump") {
      this.ageE = "you'll live for 20 more years";
         
       
    } else if (this.favM === "totoro") {
      this.ageE = "you'll live forever";
        

    } else if (this.favM === "paul") {
      this.ageE = "make sure to go through your life insurance policy soon...";
        
    }
  }

}
