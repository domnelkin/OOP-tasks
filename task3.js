class Worker {
    #experience = 1.2;

    constructor(fullName, dayRate, workingDays) {
        this._fullName = fullName;
        this._dayRate = dayRate;
        this._workingDays = workingDays;
    }

    showSalary() {
        return new Number(this._dayRate * this._workingDays).toFixed(1);
    }

    showSalaryWithExperience() {
        return new Number(this.showSalary() * this.#experience).toFixed(1);
    }

    set setExp(experience) {
        this.#experience = experience;
    }

    get showExp() {
        return this.#experience;
    }
}

const worker1 = new Worker("John Johnson", 20, 23);
const worker2 = new Worker("Tom Tomson", 48, 22);
const worker3 = new Worker("Andy Ander", 29, 23);

const workers = [worker1, worker2, worker3];

workers.forEach(worker => {
    console.log(worker._fullName);                 
    console.log(`${worker._fullName} salary: ${worker.showSalary()}`);
    console.log("New experience: " + worker.showExp);
    console.log(`${worker._fullName} salary: ${worker.showSalaryWithExperience()}`);
    worker.setExp = Math.random(0.5, 5).toFixed(1);
    console.log("New experience: " + worker.showExp);
    console.log(`${worker._fullName} salary: ${worker.showSalaryWithExperience()}\n`);
});

workers.sort((a, b) => a.showSalaryWithExperience() - b.showSalaryWithExperience());

console.log("Sorted salary:");
workers.forEach(worker => console.log(`${worker._fullName}: ${worker.showSalaryWithExperience()}`));
