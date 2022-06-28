// Defining classes
class Address {
    constructor(num, street, pincode) {
        this.num = num;
        this.street = street;
        this.city = "New Delhi";
        this.state = "Delhi";
        this.country = "India";
        this.pincode = pincode;
    }
    address = `${num}, ${street}, ${city}, ${state}, ${country}, ${pincode}`;
}

class Name {
    constructor(firstName, lastName, middleName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleName = middleName ?? '';
    }
}

class Student {
    constructor(name, gradYear) {
        this.name = name;
        this.gradYear = gradYear;
    }
    class;
    subjects = [];
    dateOfBirth;
    id;
}

class Subject {
    constructor(name, maxMarks) {
        this.name = name;
        this.maxMarks = maxMarks;
    }
    marks = null;
    percentage = this.marks/this.maxMarks;
}

let school = {
    name: "Sri Venkateshwar International School",
    address: new Address("Sri Venkateshwar International School", "Sector 18A, Dwarka", 110075),
    students: []
}

// Getting data from form

// Storing data in localStorage

// Showing data