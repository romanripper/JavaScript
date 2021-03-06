class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  set fullName(name) {
    let s = name.split(" ");
    if (s.length > 0) {
      this.firstName = s[0];
      this.lastName = s[1];
    }
  }
}

class Student extends Person {
  constructor(firstName, lastName, id, grades) {
    super(firstName, lastName);
    this.id = id;
    this.grades = grades;
    this.avg = this.calcAverageGrade();
  }

  printInfo() {
    console.log(this.firstName + " " + this.lastName + " " + this.avg);
  }

  calcAverageGrade() {
    let sum = 0;
    this.grades.forEach(grade => {
      sum += grade;
    });
    return (sum /= this.grades.length);
  }

  get averageGrade() {
    return this.avg;
  }
}

let stud = new Student("Vlad", "Dracula", 666, [5, 4, 5, 3, 4.5]);
console.log(stud.averageGrade);
console.log(stud.fullName);
stud.fullName = "Vlad Alucard";
console.log(stud.fullName);