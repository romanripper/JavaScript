let Student = function(firstName, lastName, id, grades) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.id = id;
  this.grades = grades;

  this.printInfo = function() {
    let avg = 0;
    grades.forEach(grade => {
      avg += grade;
    });
    avg /= grades.length;
    console.log(firstName + " " + lastName + " " + avg);
  };
};

let stud = new Student("Vlad", "Dracula", 666, [5, 4, 5, 3, 4.5]);
stud.printInfo();
