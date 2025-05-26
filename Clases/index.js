class Person {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    getAge() {
        return this.age;
    }
    displayInfo() {
        return `This person name is: ${this.name}, the age is: ${this.age} and country is: ${this.country}`
    }
}

let person1 = new Person("John", 35, "USA")
let person2 = new Person("Mary", 23, "Italy")
let person3 = new Person("Ana", 48, "Gremany")
let person4 = new Person("Nick", 34, "Canada")
let person5 = new Person("Ted", 56, "UK")

let peopleArray = [person1, person2, person3, person4, person5];
function sortByAge() {
    peopleArray.sort((a, b) => a.getAge() - b.getAge());
}
sortByAge()

for (let person of peopleArray) {
    console.log(person.displayInfo())
}

