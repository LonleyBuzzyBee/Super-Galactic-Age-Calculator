import { User } from './../src/tdd.js';
// import { exportAllDeclaration } from '@babel/types';

describe("User", () => {
  let user;
  beforeEach(() => {
    user = new User("ted", 17, "mars", "forrest-gump", "undefined");
  })
  
  test ("the user obj takes the user input", () => {
    expect(user).toEqual({"name":"ted", "age":17, "planet":"mars", "favM":"forrest-gump", "ageE":"undefined"});
    
    expect(user).toEqual(expect.anything());
  })
  test ("the user obj takes the user input name", () => {
    expect(user.name).not.toEqual("fred");
    expect(user.name).toBeTruthy();
  })
  test ("the user obj takes the user input age", () => {
    
    expect(user.age).not.toBeUndefined();
  })
  test("the user obj takes the user's selected planet", () => {
    
    expect(user.planet).toMatch("mars");
    
  })
  test("if the user selects the planet mars then their planetary age will be their original age multiplied by 1.88 ", () => {
    user.sortP();
    user.planet = "mars";
    expect(user.age).toBe(31.959999999999997);
    
  })
})

describe("User", () => {
  let user;
  beforeEach(() => {
    user = new User("ted", 17, "jupiter", "forrest-gump", "undefined");
  })


  test("if the user selects jupiter then their planetary age will be their original age multiplied by 11.86", () => {
    user.sortP();
    user.planet = "jupiter";
  
      expect(user.age).toBe(201.62);
    
  })
})
 
describe("User", () => {
  let user;
  beforeEach(() => {
    user = new User("ted", 17, "venus", "forrest-gump", "undefined");
  })


  test("if the user selects venus then their planetary age will be their original age divided by .62", () => {
    user.sortP();
    user.planet = "venus";
  
      expect(user.age).toBe(27.419354838709676);
    
  })
})
 
describe("User", () => {
  let user;
  beforeEach(() => {
    user = new User("ted", 17, "mercury", "forrest-gump", "undefined");
  })


  test("if the user selects mercury then their planetary age will be their original age divided by .24", () => {
    user.sortP();
    user.planet = "mercury";
  
      expect(user.age).toBe(70.83333333333334);
    
  })
})
 
describe("User", () => {
  let user;
  beforeEach(() => {
    user = new User("ted", 17, "mars", "forrest-gump", "undefined");
  })


  test("if the user selects forrest gump as their favM then they will live for 20 more years", () => {

    user.ageExpectancy();
    expect(user.ageE).toBe("you'll live for 20 more years");
    
  })
})
 
describe("User", () => {
  let user;
  beforeEach(() => {
    user = new User("ted", 17, "mars", "totoro", "undefined");
  })


  test("if the user selects totoro as their favM then they will live forever", () => {
   
    user.ageExpectancy();
    expect(user.ageE).toBe("you'll live forever");
    
  })
})
 
describe("User", () => {
  let user;
  beforeEach(() => {
    user = new User("ted", 17, "mars", "paul", "undefined");
  })


  test("if the user selects paul as their favM then they will need to check their life insurance policy", () => {

    user.ageExpectancy();
    expect(user.ageE).toBe("make sure to go through your life insurance policy soon...");
    
  })
})
 