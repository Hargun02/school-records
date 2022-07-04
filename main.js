let school = localStorage.getItem('school') ?? {
    name: null,
    students: [],
}

form = document.querySelector('#student-data')

class Address {
    constructor(num, street, pincode) {
        this.num = num;
        this.street = street;
        this.city = "New Delhi";
        this.state = "Delhi";
        this.country = "India";
        this.pincode = pincode;
    }
    address = `${this.num}, ${this.street}, ${this.city}, ${this.state}, ${this.pincode}`;
}

class Name {
    constructor(firstName, lastName, middleName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleName = middleName ?? '';
    }
}

class Student {
    constructor(name, birthDate, grade, address) {
        this.name = name;
        this.birthDate = birthDate;
        this.grade = grade;
        this.address = address;
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
    return new Student(new Name(firstName.value, lastName.value, middleName.value), birthDate.value, grade.value);
}

function updateView(student) {
    for (let name in student.name) console.log(name);
    for (let key in student) {
        console.log(key);
    }
}

function onSubmit() {
    let student = fetchValues();
    updateView(student);
}

form.addEventListener('submit', event => {
    event.preventDefault();
    onSubmit()
});