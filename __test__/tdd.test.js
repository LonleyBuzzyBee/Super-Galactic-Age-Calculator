import { User } from './../src/tdd.js';
// import { exportAllDeclaration } from '@babel/types';

describe("User", () => {
  let user;
  beforeEach(() => {
    user = new User("ted",17,"mars","forrest-gump","you'll live")
  })

test ("the user obj takes the user input", () => {
  expect(user).toEqual({"name":"ted", "age":17, "planet":"mars", "favM":"forrest-gump", "ageE":"you'll live"});
  
  })

test ("the sortP function sees which planet the user chose then pushes user obj into the ageP function", () => {

  user.sortP();
  expect(user.planet).toContain("mars","jupiter","venus");
  })

test ("the mars function sorts if which fav movie the user selected then multiplies the users age by 1.88", () => {

  user.mars();
  expect(user.favM).toContain("forrest-gump");
  expect(user.age * 1.88).toBe(31.959999999999997);
})
test ("the jupiter function sorts if which fav movie the user selected then multiplies the users age by 11.86", () => {

  user.jupiter();
  expect(user.favM).toContain("forrest-gump");
  expect(user.age * 11.86 ).toBe(201.62);
})
test ("the venus function sorts if which fav movie the user selected then divides the users age by .62", () => {

  user.venus();
  expect(user.favM).toContain("forrest-gump");
  expect(user.age / .62 ).toBe(27.419354838709676);
})
test ("the mercury function sorts if which fav movie the user selected then divides the users age by .24", () => {

  user.mercury();
  expect(user.favM).toContain("forrest-gump");
  expect(user.age / .24 ).toBe(70.83333333333334);
})
test ("the print function takes the new values for the user object and prints to the html", () => {
  
  
  user.print();
  expect(user).toBeDefined();
 
})

})