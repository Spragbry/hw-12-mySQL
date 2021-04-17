class Employee {
    constructor(first_name, id, last_name, role_id, manager_id) {
        this.first_name = first_name
        this.id = id
        this.last_name = last_name
        this.role_id = role_id
        this.manager_id = manager_id
    } 
    
    getFirstName() {
        return this.first_name
    }

    getId() {
        return this.id
    }

    getLastName() {
        return this.last_name
    }

    getRole() {
        return this.role_id
    }
    
    getManagerId() {
        return this.manager_id
    }
}

export default Employee