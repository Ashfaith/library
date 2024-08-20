const newBookBtn = document.querySelector(".new-book");
const closeBtn = document.querySelector("#close");
const libraryDisplay = document.querySelector(".library-display");
const form = document.querySelector("#sidebar");
const main = document.getElementById("main");
const inputTitle = document.getElementById("book-title");
const inputAuthor = document.getElementById("book-author");
const inputPages = document.getElementById("book-pages");
const inputSlider = document.getElementById("slider");
const addBookBtn = document.querySelector(".add-book");
const empty = document.querySelector("#empty");


const myLibrary = [];

function Book(title, author, read, pages) {
    this.title = title;
    this.author = author;
    this.read = read;
    this.pages = pages;
    this.displayInfo = function() {

    }
}

newBookBtn.addEventListener('click' , () => {
    form.classList.add("show");
    main.classList.add("show");
})

closeBtn.addEventListener('click', () => {
    form.classList.remove("show");
})

addBookBtn.addEventListener('click' , (event) => {
        event.preventDefault();
        libraryDisplay.removeFirstChild;
        
        // Gathers info from input form
        function addBookToLibrary() {
            const title = inputTitle.value;
            const author = inputAuthor.value;
            const pages = inputPages.value;
            const read = inputSlider.checked ? 'Yes' : 'No';
            return {
                title,
                author,
                pages,
                read,
            };
        }

        // creates and stores new books to array 
        const bookInfo = addBookToLibrary();
        const book = new Book(bookInfo.title, bookInfo.author, bookInfo.read, bookInfo.pages);
        myLibrary.push(book);
        console.log(myLibrary);


        
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
        showLibrary();

        inputTitle.value = '';
        inputAuthor.value = '';
        inputPages.value = '';
        inputSlider.checked = false;

    })

