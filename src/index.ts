const sayHi = (name: string, age: number, gender?: string): string => {
  return `${name}, hello your ${age} ? and ${gender}`;
};

console.log(sayHi("lee", 27, "male"));

export {};
