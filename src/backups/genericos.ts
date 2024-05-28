import { genericFunction, genericFuntionArrow } from "../generics/generics";
import { Villain, Hero } from "../interfaces";

// printObject(123);
// printObject(new Date());
// printObject({ a: 1, b: 2, c: 3 });
// printObject(["1", "2", "3", "4"]);
// printObject("HOLAAAAA");
// const name: string = "Roger";

// console.log(genericFuntionArrow(123).toFixed(2));
// console.log(genericFuntionArrow(name).toUpperCase());
// console.log(genericFuntionArrow(new Date()).getDate());

const deadpool = {
  name: "Deadpool",
  realName: "Wade Winston Wilson",
  dangerLevel: 130,
};

console.log(genericFuntionArrow<Villain>(deadpool).dangerLevel);
console.log(genericFuntionArrow<Hero>(deadpool).realName);
