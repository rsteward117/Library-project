var myDiv = document.querySelector(".formlayout");

const myContainer = document.getElementById("bookEntryContainer");

myDiv.style.display = "none";

function showDiv(){
        myDiv.style.display = "block";
    }
function hideDiv(){
    myDiv.style.display = "none";
}

// Not used anymore
// let myLibraray = [];

/* This line only runs once at the start when this script is read, but doesn't re-run when new items are added
/* This is why new items aren't showing on screen */
// myLibraray.forEach(makeBookEntries)

/*
var testBook = {title: "Star Wars",
               author:"George Lucus",
               pages: "66",
               read: "yes"};

myLibraray.push(testBook);
*/


function Book(title, author, pages, read){
    this.title = title,
    this.author = author,
    this.pages = pages;
    this.read = read;
}


let form = document.getElementById("theform")
form.addEventListener("submit",addBooktoLibrary);

function addBooktoLibrary(event){
    event.preventDefault();
    const theTitle = document.getElementById("title").value;
    const theauthor = document.getElementById("author").value;
    const thepages = document.getElementById("pages").value;
    const radio = document.getElementsByName("read");

    for(let i = 0; i < radio.length; i++){
        if(radio[i].checked){
            radioValue = radio[i].value;
        }
    }
    const bookInfo = new Book(theTitle, theauthor, thepages, radioValue)

    // this line is no longer necessary, we don't need to store the items in an array since we don't loop through them anymore
    // myLibraray.push(bookInfo);

    // rather than passing this to a forEach loop, we can just call it each time submit is clicked
    // this will add 1 book at a time and you will see the updated result
    makeBookEntries(bookInfo);        
}

function makeBookEntries(item){
    var newDiv;
        
    newDiv = document.createElement('div');
    newDiv.className = 'entries';
    newDiv.textContent = `Title: ${item.title}\n Author: ${item.author}\n Pages: ${item.pages}\n Read: ${item.read} `
    myContainer.appendChild(newDiv); 
}