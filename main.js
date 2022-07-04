let school = JSON.parse(localStorage.getItem('school')) ?? {
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
    name = `${this.firstName} ${(this.middleName + ' ') || ''}${this.lastName}`
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

const table = document.querySelector('#records')

function fetchValues() {
    return new Student(new Name(firstName.value, lastName.value, middleName.value), birthDate.value, grade.value, new Address(houseNum.value, streetName.value, city.value, state.value, pincode.value));
}

function updateView() {

}

function onSubmit() {
    school.students.push(fetchValues());
    updateView();
}

form.addEventListener('submit', event => {
    event.preventDefault();
    onSubmit()
});

function createTable() {
    const tr = document.createElement('tr');
    tr.appendChild(createHeading("Name"));
    tr.appendChild(createHeading("Grade"));
    tr.appendChild(createHeading("Date of Birth"))
    tr.appendChild(createHeading("Address"));

    table.appendChild(tr);
}

function createHeading(heading) {
    const th = document.createElement('th');
    th.textContent = heading;
    return th;
}