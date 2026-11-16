
// problem 1
function multiplyValue(value: number, multiplier?: number): number {
  return value * (multiplier ?? 2);
}

// console.log(multiplyValue(5, 3));
// console.log(multiplyValue(5));
// console.log(multiplyValue(5, 0));

//problem: 02
function processInput(value: string | number | boolean): string | number {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  }

  if (typeof value === "number") {
    return value * 10;
  }

  return value ? "Active" : "Inactive";
}
// console.log(processInput("  HELLO WORLD  "));
// console.log(processInput(5));
// console.log(processInput(true));
// console.log(processInput(false));

// problem: 03
function formatCoordinate(
  coordinate: readonly [number, number, string]
): string {
  const [latitude, longitude, locationName] = coordinate;

  return `Location: ${locationName} (${latitude}, ${longitude})`;
}
// console.log(formatCoordinate([23.8103, 90.4125, "Dhaka"]));


// problem : 04
function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.flat();
}
// console.log(concatenateArrays([1, 2], [3, 4]));
// console.log(concatenateArrays(["Hello"], ["World", "TypeScript"]));

// problem: 05
interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(
  courses: Course[],
  minStudents: number
): Course[] {
  return courses.filter(
    (course) =>
      course.isPublished && course.students >= minStudents
  );
}

// problem: 06
function pluckValues<T, K extends keyof T>(
  items: T[],
  key: K
): T[K][] {
  return items.map((item) => item[key]);
}

// problem : 07
class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}



// problem: 08
function validateAgeAsync(age: number): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    if (age < 18) {
      reject(new Error("Access Denied: Must be 18 or older"));
      return;
    }

    setTimeout(() => {
      resolve("Access Granted");
    }, 1000);
  });
}