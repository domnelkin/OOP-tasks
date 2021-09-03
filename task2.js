class Person {
    constructor(name, surname) {
        this._name = name;
        this._surname = surname;
    }

    showFullName() {
        return `${this._name} ${this._surname}`;
    }
}

class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this._year = year;
    }

    showFullName(midleName) {
        return `${this._name} ${this._surname} ${midleName}`;
    }

    showCourse() {
        return Number.parseInt(new Date().getFullYear()) - Number.parseInt(this._year);
    }
}

const stud1 = new Student("Petro", "Petrenko", 2017);
console.log(stud1.showFullName("Petrovych"));
console.log("Current course: " + stud1.showCourse());