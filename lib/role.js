class Role {
    constructor(title, id, salary, department_id) {
        this.title = title
        this.id = id
        this.salary = salary
        this.department_id = department_id
    } 
    
    getTitle() {
        return this.title
    }

    getId() {
        return this.id
    }

    getSalary() {
        return this.salary
    }

    getDepartmentId() {
        return this.department_id
    }
}

export default Employee
