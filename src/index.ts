import { genericFunction, genericFuntionArrow } from "./generics/generics";

// printObject(123);
// printObject(new Date());
// printObject({ a: 1, b: 2, c: 3 });
// printObject(["1", "2", "3", "4"]);
// printObject("HOLAAAAA");

const name: string = "Roger";

console.log(genericFuntionArrow(123).toFixed(2));
console.log(genericFuntionArrow(name).toUpperCase());
console.log(genericFuntionArrow(new Date()).getDate());
