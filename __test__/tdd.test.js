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

test ("the sortP function sees which planet the user chose then multiplies age by 1.88 if its venus,", () => {

  user.sortP();
  expect(user.planet).toContain("mars");
  expect(user.age * 1.88).toBe(31.959999999999997);
  
  })

})