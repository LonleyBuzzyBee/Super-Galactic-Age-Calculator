import { User } from './../src/tdd.js';
// import { exportAllDeclaration } from '@babel/types';

describe("User", () => {
  let user;
  beforeEach(() => {
    user = new User("ted", 17, "mars", "forrest-gump", "undefined");
  })

test ("the user obj takes the user input", () => {
  expect(user).toEqual({"name":"ted", "age":17, "planet":"mars", "favM":"forrest-gump", "ageE":"undefined"});
  
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
  test("the travelPack function determines which planet they choose and then gives them travel packages for that planet", () => {
    user.travelPack();

    expect(user.planet).toContain("mars");
    expect(arr).toContain("Traveling with UMarZ: cost $375.98");
  })
})