class Employee {
    constructor(firstName, lastName, baseSalary, experience) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.baseSalary = baseSalary;
        this.experience = experience;
    }

    get countedSalary() {
        let salary = this.baseSalary;
        if (this.experience > 5) {
            salary = this.baseSalary * 1.2 + 500;
        } else if (this.experience > 2) {
            salary += 200;
        }
        return salary;
    }
}

class Developer extends Employee {
    constructor(firstName, lastName, baseSalary, experience) {
        super(firstName, lastName, baseSalary, experience);
    }
}

class Designer extends Employee {
    constructor(firstName, lastName, baseSalary, experience, effCoeff) {
        super(firstName, lastName, baseSalary, experience);
        this.effCoeff = effCoeff;
    }

    get countedSalary() {
        return super.countedSalary * this.effCoeff;
    }
}

class Manager extends Employee {
    constructor(firstName, lastName, baseSalary, experience, team = []) {
        super(firstName, lastName, baseSalary, experience);
        this.team = team;
    }

    get countedSalary() {
        let salary = super.countedSalary;
        if (this.team.length > 10) {
            salary += 300;
        } else if (this.team.length > 5) {
            salary += 200;
        }
        const developersCount = this.team.filter(member => member instanceof Developer).length;
        if (developersCount > this.team.length / 2) {
            salary *= 1.1;
        }
        return salary;
    }
}

class Department {
    constructor(managers = []) {
        this.managers = managers;
    }

    giveSalary() {
        const allEmployees = [];
        this.managers.forEach(manager => {
            allEmployees.push(manager);
            allEmployees.push(...manager.team);
        });

        allEmployees.forEach(employee => {
            console.log(`${employee.firstName} ${employee.lastName} отримав ${employee.countedSalary} шекєлей`);
        });
    }
}

// Приклад використання

const dev1 = new Developer('Іван', 'Іванов', 1000, 3);
const dev2 = new Developer('Петро', 'Петров', 1500, 6);
const des1 = new Designer('Марія', 'Марієнко', 1200, 4, 0.9);
const des2 = new Designer('Анна', 'Анненко', 1400, 7, 0.95);

const manager1 = new Manager('Сергій', 'Сергієнко', 2000, 10, [dev1, dev2, des1]);
const manager2 = new Manager('Ольга', 'Ольженко', 1800, 5, [des2]);

const department = new Department([manager1, manager2]);

department.giveSalary();