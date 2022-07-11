// Defining the main object
let school = JSON.parse(localStorage.getItem('school')) || {
    name: null,
    students: [],
}

const form = document.querySelector('#student-data')

// Defining classes
class Address {
    constructor(num, street, city, state, pincode) {
        this.num = num;
        this.street = street;
        this.city = city;
        this.state = state;
        this.pincode = pincode;
        this.address = `${this.num}, ${this.street}, ${this.city}, ${this.state}, ${this.pincode}`;
    }
}

class Name {
    constructor(firstName, lastName, middleName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleName = middleName;
        this.name = `${this.firstName} ${this.middleName ? this.middleName + ' ': ''}${this.lastName}`;
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

class Subject {
    constructor(name) {
        this.name = name;
    }
    max_marks = 100;
    marks;
}

juniorSubjects = {
    maths: "Mathematics",
    english: "English",
    science: "Science",
    socSci: "Social Sciece",
}

seniorSubjects = {
    maths: "Mathematics",
    english: "English",
    physics: "Physics",
    chem: "Chemistry",
}
// Adding references to form elements
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
const subjectPicker = document.querySelector('#subject-picker');

const thead = document.querySelector('#records-head');
const tbody = document.querySelector('#records-body');

// Getting values from form
function fetchValues() {
    const student = new Student(new Name(firstName.value, lastName.value, middleName.value), birthDate.value, grade.value, new Address(houseNum.value, streetName.value, city.value, state.value, pincode.value));
    return student;
}

// Updating values to add submitted data
function updateView() {
    resetTable();
    createTable();
    for(let student of school.students) {
        const tr = document.createElement('tr');
        tr.appendChild(createData(student.name.name));
        tr.appendChild(createData(student.grade));
        tr.appendChild(createData(student.birthDate));
        tr.appendChild(createData(student.address.address));
        
        tbody.appendChild(tr);
    }
}

function onSubmit() {
    school.students.push(fetchValues());
    updateView();
    saveData();
    form.reset();
    firstName.focus();
}

// Event listener on form
form.addEventListener('submit', event => {
    event.preventDefault();
    onSubmit()
});

document.addEventListener('DOMContentLoaded', () => {
    updateView();
    firstName.focus();
});

grade.addEventListener('change', () => {
    showSubjects();
})

const resetBtn = document.querySelector('#reset-data');

resetBtn.addEventListener('click', () => {
    resetData();
    updateView();
});

// updateView helper functions
function createTable() {
    const tr = document.createElement('tr');
    tr.appendChild(createHeading("Name"));
    tr.appendChild(createHeading("Grade"));
    tr.appendChild(createHeading("Date of Birth"))
    tr.appendChild(createHeading("Address"));

    thead.appendChild(tr);
}

function createHeading(heading) {
    const th = document.createElement('th');
    th.textContent = heading;
    return th;
}

function createData(data) {
    const td = document.createElement('td')
    td.textContent = data;
    return td;
}

function resetTable() {
    thead.innerHTML = '';
    tbody.innerHTML = '';
}

function saveData() {
    localStorage.setItem('school', JSON.stringify(school));
}

function resetData() {
    school = {
        name: null,
        students: [],
    }
    saveData();
}

function addCheckbox(field, value, text) {
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.id = value
    checkbox.name = field;
    checkbox.value = value;

    const label = document.createElement('label');
    label.setAttribute('for', checkbox.id);
    label.textContent = text;

    const div = document.createElement('div');
    div.appendChild(label);
    div.appendChild(checkbox);
    return(div);
}

function showSubjects() {
    resetSubjects();
    let x;
    if(grade.value == 9 || grade.value == 10) subjectArray = juniorSubjects;
    else if(grade.value == 11 || grade.value == 12) subjectArray = seniorSubjects;
    else return;

    for(let subject in subjectArray) {
        subjectPicker.appendChild(addCheckbox("subjects", subject, x[subject]));
    }
}

function resetSubjects() {
    subjectPicker.innerHTML = '';
}