class Worker {
    experience = 1.2;

    constructor(fullName, dayRate, workingDays) {
        this._fullName = fullName;
        this._dayRate = dayRate;
        this._workingDays = workingDays;
    }

    showSalary() {
        return this._dayRate * this._workingDays;
    }

    showSalaryWithExperience() {
        return this.showSalary() * this.experience;
    }

    set setExp(experience) {
        this.experience = experience;
    }

    get showExp() {
        return this.experience;
    }


}

const worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1._fullName);                 
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();

const worker2 = new Worker("Tom Tomson", 48, 22);
worker2.setExp = 3;
const worker3 = new Worker("Andy Ander", 29, 23);
worker3.setExp = 0.5;

const salaries = [worker1, worker2, worker3];

salaries.sort((a, b) => a.showSalaryWithExperience() - b.showSalaryWithExperience());

salaries.forEach(worker => console.log(`${worker._fullName}: ${worker.showSalaryWithExperience()}`));
