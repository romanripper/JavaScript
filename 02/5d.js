let Student = function(firstName, lastName, id, grades) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.id = id;
  this.grades = grades;
  this.avg = calcAverageGrade();

  this.printInfo = function() {
    console.log(this.firstName + " " + this.lastName + " " + this.avg);
  };

  function calcAverageGrade() {
    let avg = 0;
    grades.forEach(grade => {
      avg += grade;
    });
    return (avg /= grades.length);
  }

  Object.defineProperties(this, {
    averageGrade: {
      get: function() {
        return this.avg;
      }
    },
    fullName: {
      get: function() {
        return this.firstName + " " + this.lastName;
      },
      set: function(name) {
        let s = name.split(" ");
        if (s.length > 0) {
          this.firstName = s[0];
          this.lastName = s[1];
        }
      }
    }
  });
};

let stud = new Student("Vlad", "Dracula", 666, [5, 4, 5, 3, 4.5]);
console.log(stud.averageGrade);
console.log(stud.fullName);
stud.fullName = "Vlad Alucard";
console.log(stud.fullName);
