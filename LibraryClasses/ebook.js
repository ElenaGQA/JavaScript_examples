import Book from './book.js'
export {Book}

export class Ebook extends Book {
    constructor (title, author, publicationYear, price){
    super (title, author, publicationYear);
    this.price = price; 
    }
    displayDetails(){
        return super.displayDetails()+ ` and the price is $${this.price}`
    }
}
