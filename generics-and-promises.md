Generics and Promises in TypeScript

Introduction

Generics are an important feature of TypeScript. They allow us to create reusable functions and work with different data types without losing type safety. I learned that generics are very useful when working with arrays, functions, and asynchronous operations.

How Generics Work

We use <T> as a placeholder for a type. TypeScript automatically understands the type from the provided value.

function getValue<T>(value: T): T {
  return value;
}

console.log(getValue<string>("Hello"));
console.log(getValue<number>(100));

The same function works with both string and number values.

Generics with Promise<T>

A Promise represents a value that may be available in the future. We can use generics with Promise to define the type of the returned value.

function getUser(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Sabuj");
    }, 1000);
  });
}

getUser().then((user) => {
  console.log(user);
});

Here, Promise<string> means the Promise will return a string when it is resolved. TypeScript also knows that user is a string.

Conclusion

Generics help me write reusable and type-safe code. They are especially useful with Promise because they make asynchronous return types clear and predictable. Understanding generics makes working with TypeScript easier.