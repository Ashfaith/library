const myLibrary = [];

class Book {
    constructor(title, author, read, pages) {
        this.title = title;
        this.author = author;
        this.read = read;
        this.pages = pages;
    }
}


function addBookToLibrary(title, author, read, pages) {
    const book = new Book(title, author, read, pages);
    myLibrary.push(book);
    console.log(myLibrary);
    showLibrary();
}
        

                
function showLibrary() {
    libraryDisplay.innerText = '';

    for (let i = 0; i < myLibrary.length; i++) {
        const bookTemplate = document.createElement('div');
        libraryDisplay.appendChild(bookTemplate);
                
        const bookTitle = document.createElement('h3');
        bookTitle.innerText = `${myLibrary[i].title}`;
        bookTemplate.appendChild(bookTitle);

        const bookAuthor = document.createElement('p');
        bookAuthor.innerText = `by ${myLibrary[i].author}`;
        bookTemplate.appendChild(bookAuthor);

        const bookPages = document.createElement('p');
        bookPages.innerText = `Pages: ${myLibrary[i].pages}`;
        bookTemplate.appendChild(bookPages);

        const readCont = document.createElement('div');
        bookTemplate.appendChild(readCont);
        const bookRead = document.createElement('p');
        bookRead.innerText = `Read: ${myLibrary[i].read}`;
        readCont.appendChild(bookRead);

        // creates the slider to update read or not and adds styling
        const readUpdate = document.createElement('label');
        readUpdate.className = `switch`;
        readCont.appendChild(readUpdate);

        const readUpdateCheck = document.createElement('input');
        const readUpdateSlider = document.createElement('span');
        readUpdateCheck.id = `slider`;
        readUpdateCheck.type = `checkbox`;
        readUpdateCheck.checked = myLibrary[i].read === 'Yes';
        readUpdateSlider.className = `slider round`;
        readUpdate.appendChild(readUpdateCheck);
        readUpdate.appendChild(readUpdateSlider);
        if (inputSlider.checked === 'Yes'){
            inputSlider.checked.style = '::before';
        }
                
        //change Read status
        readUpdateCheck.addEventListener('change', function() {
                // check if the slider is active
                let readChange = readUpdateCheck.checked ? 'Yes' : 'No';
                myLibrary[i].read = readChange;
                bookRead.innerText = `Read: ${myLibrary[i].read}`;
        });

        // button to remove book
        const deleteBook = document.createElement('button');
        deleteBook.innerText = `Remove`;
        deleteBook.className = `delete-book`
        bookTemplate.appendChild(deleteBook);
                
        // event listener to remove book
        deleteBook.addEventListener('click', () => {
            console.log(myLibrary[i]);
            myLibrary.splice(i, 1);
            showLibrary();
        });
    }
}



function formControl() {
    //opens side bar form
    const form = document.querySelector("#sidebar");
    const newBookBtn = document.querySelector(".new-book");
    const main = document.getElementById("main");
    newBookBtn.addEventListener('click' , () => {
        form.classList.add("show");
        main.classList.add("show");
    })

    //closes side bar form
    const closeBtn = document.querySelector("#close");
    closeBtn.addEventListener('click', () => {
        form.classList.remove("show");
    })
}
formControl()

const addBookBtn = document.querySelector(".add-book");
const inputSlider = document.getElementById("slider");
const inputPages = document.getElementById("book-pages");
const inputAuthor = document.getElementById("book-author");
const inputTitle = document.getElementById("book-title");
const libraryDisplay = document.querySelector(".library-display");

addBookBtn.addEventListener('click' , (event) => {
    const title = inputTitle.value;
    const author = inputAuthor.value;
    const pages = inputPages.value;
    const read = inputSlider.checked ? 'Yes' : 'No';
    event.preventDefault();
    addBookToLibrary(title, author, read, pages);
    inputTitle.value = '';
    inputAuthor.value = '';
    inputPages.value = '';
    inputSlider.checked = false;
})

