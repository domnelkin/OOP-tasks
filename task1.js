class Student {

    constructor(fullName, direction) {
        this._fullName = fullName;
        this._direction = direction;
    }

    showFullName() {
        return this._fullName;
    }

    nameIncludes(data) {
        return this._fullName.includes(data);
    }

    static studentBuilder() {
        return new Student('Ihor Kohut', 'qc');
    }

    set direction(direction) {
        this._direction = direction;
    }

    get direction() {
        return this._direction;
    }
}

const stud1 = new Student('Ivan Petrenko', 'web');
const stud2 = new Student('Sergiy Koxval', 'python');
const stud3 = Student.studentBuilder()

console.log(stud2.nameIncludes("Koxval"))