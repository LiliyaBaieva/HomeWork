// Реализовать возможность добавления в библиотеку книг, 
// с проверкой на уникальность (isbn должен быть уникальным);
// Реализовать поиск книги в библиотеке;
// Реализовать возможность распечатки информации о нашей библиотеке;

//EXAMPLE - 
// 1427;red;kolins;2000
// 3422;blue;george;1987
// 1427;I don`t know;mike;1991


const library = [];
let inputData = prompt('Enter book data separate by ";" ');
// do {
//     inputData = prompt('Enter book data separate by ";" ');
//     if(inputData != ''){
//         let ibsnNew = inputData.substring(0, inputData.indexOf(';'));
//         inputData = inputData.substring(ibsnNew.length + 1);
//         let titleNew = inputData.substring(0, inputData.indexOf(';'));
//         inputData = inputData.substring(titleNew.length + 1);
//         let authorNew = inputData.substring(0, inputData.indexOf(';'));
//         let yearNew = inputData.substring(authorNew.length + 1);
    
//         let notExist = true;
//         for(let i = 0; i < library.length; ++i){
//             if(ibsnNew == library[i].isbn){
//                 notExist = false;
//                 // console.log('This book already exist.')
//             }
//         }
    
//         if(notExist && ibsnNew != null && titleNew != null && authorNew != null && yearNew != null){
//             const  book = new Book(ibsnNew, titleNew, authorNew, yearNew);
//             library.push(book);
//         }    
//     }
// } while(inputData)    

while(inputData){
    const [isbn, title, author, year] = inputData.split(';');
    if(inputData.split(';').length === 4 &&
        isbn && title && author && year && 
        findBook(library, isbn) === -1){
        const book = new Book(isbn, title, author, year);
        library.push(book);
    }
    inputData = prompt('Enter book data separate by ";" ');
}

printLibrary(library);


function printLibrary(library){
    for(let i = 0; i < library.length; i++){
        console.log(library[i].toString());
    }
}

function Book(isbn, title, author, year){
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.year = +year;  //превращаем в число
    this.toString = function(){
        return `ISBN: ${this.isbn}, Title: ${this.title}, Author: ${this.author}, Year of publishing: ${this.year}`;
    }
}

function findBook(library, isbn){
    for(let i = 0; i < library.length; i++){
        if(library[i].isbn === isbn){
            return i;
        }
    }
    return -1;
}