export default class Book {
    constructor(title, author, publicationYear) {
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
    }
    displayDetails() {
        return `The book name is ${this.title}, the author is ${this.author} and publication year is ${this.publicationYear}`
    }
}