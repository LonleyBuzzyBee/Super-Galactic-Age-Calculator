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
  expect(user.age).not.toEqual(27);
  expect(user.age).toBeTruthy();
  expect(user.age).not.toBeUndefined();
  })
test ("the user obj takes the user's selected planet", () => {
  expect(user.planet).toMatch("mars");
})
test ("the user obj takes the user's fav movie", () => {
  expect(user.favM).not.toMatch("totoro");
})

test ("the sortP function sees which planet the user chose then multiplies age by 1.88 if its mars,", () => {
  user.sortP();
 
  expect(user.planet).toContain("mars");
  expect(user.age).toBeGreaterThan(17);
  })
  test ("the ageExpectancy function sees which movie the user chose then makes the property ageE into a string,", () => {

    user.ageExpectancy();
    expect(user.favM).toContain("forrest-gump");
    expect(user.ageE).toBe("you'll live for 20 more years");
    
  })
  test("if they choose totoro as their fav movie then they will live forever", () => {
    user.ageExpectancy();
    
    expect(user.ageE).not.toContain("you'll live forever");
  })
  test("if they choose paul as their fav movie then they will need to check their life insurance", () => {
    user.ageExpectancy();
    
    expect(user.ageE).not.toContain("make sure to go through your life insurance policy soon...");
  })
})