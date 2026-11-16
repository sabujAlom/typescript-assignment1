
Type Narrowing in TypeScript

Introduction

When working with TypeScript, sometimes a variable can have more than one type. For example, a variable may contain a string or a number. Type Narrowing helps us identify the actual type of a value before performing an operation. It makes our code safer and helps prevent unexpected errors.

How Type Narrowing Works

TypeScript provides different ways to narrow types. Some commonly used methods are typeof, instanceof, and the in operator.

1. Using typeof

The typeof operator checks the type of a value. It is useful when working with basic types like string, number, and boolean.

function processValue(value: string | number): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value * 2);
  }
}

Here, TypeScript understands whether the value is a string or a number.

2. Using instanceof

The instanceof operator checks whether an object belongs to a particular class.

class Student {
  study(): void {
    console.log("Student is studying");
  }
}

const person = new Student();

if (person instanceof Student) {
  person.study();
}

3. Using the in Operator

The in operator checks whether a property exists inside an object.

type Admin = { role: string };
type User = { username: string };

function checkUser(person: Admin | User): void {
  if ("role" in person) {
    console.log(person.role);
  } else {
    console.log(person.username);
  }
}

Conclusion

From my learning experience, Type Narrowing is an important feature of TypeScript. It helps me work with different types safely and write more reliable code. Understanding typeof, instanceof, and in makes handling union types much easier.