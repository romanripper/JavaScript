let Student = {
    courses: ["TIN", "BYT", "SAD", "TPO", "GRK"]
};

function createStudent(firstName, lastName, id) {
    let stud = Object.create(Student);
    stud.firstName = firstName;
    stud.lastName = lastName;
    stud.id = id;
    return stud;
}

let s = createStudent("Vlad", "Dracula", 666);
console.log(s.firstName + " " + s.lastName + " " + s.courses);