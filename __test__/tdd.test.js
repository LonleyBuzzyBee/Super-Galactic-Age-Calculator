import { User } from './../src/tdd.js';
// import { exportAllDeclaration } from '@babel/types';

describe("User", () => {
  let user;
  beforeEach(() => {
    user = new User("ted",17,"mars","forrest-gump")
  })

test ("the user obj takes the user input", () => {
  expect(user).toEqual({"name":"ted", "age":17, "planet":"mars", "favM":"forrest-gump"});
  
  })
})