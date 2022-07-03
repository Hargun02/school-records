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

const firstName = form.firstName;
const lastName = form.lastName;
const middleName = form.middleName;
const birthDate = form.birthDate;

const houseNum = form.houseNum;
const streetName = form.streetName;
const city = form.city;
const state = form.state;
const pincode = form.pincode;

const grade = form.grade;