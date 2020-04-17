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
  expect(user.planet).toContain("forrest-gump");
})

})