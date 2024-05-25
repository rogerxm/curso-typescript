export const printObject = (argument: any) => {
  console.log(argument);
};

export function genericFunction<T>(argument: T) {
  return argument;
}

export const genericFuntionArrow = <T>(argument: T) => argument;
