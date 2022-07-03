let school = localStorage.getItem('school') ?? {
    name: null,
    students: [],
}

form = document.querySelector('#student-data')

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

function fetchValues() {
    return new Student(new Name(firstName.textContent, lastName.textContent, middleName.textContent), birthDate.value, grade.value);
}

function updateView(student) {
    for (let name in student.name) console.log(name);
    for (let key in student) {
        console.log(key);
    }
}

function onSubmit() {
    form.preventDefault;
    let student = fetchValues();
    updateView(student);
}

form.addEventListener('submit', () => {
    submit.preventDefault(); 
    onSubmit()
});