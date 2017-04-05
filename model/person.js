module.exports = class Person{
    constructor (name, age, sex) {
        this.name = name
        this.age = age === undefined ? 0 : age
        this.sex = sex === undefined ? 'n' : sex
    }
}