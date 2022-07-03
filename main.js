let school = localStorage.getItem('school') ?? {
    name: null,
    students: [],
}

form = document.forms["studentData"]

class Name {
    constructor(firstName, lastName, middleName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleName = middleName ?? '';
    }
}

class Student {
    constructor(name, birthDate, grade) {
        this.name = name;
        this.birthDate = birthDate;
        this.grade = grade;
    }
    subjects = [];
}