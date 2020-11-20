var myDiv = document.querySelector(".formlayout");

const myContainer = document.getElementById("bookEntryContainer");

myDiv.style.display = "none";

function showDiv(){
        myDiv.style.display = "block";
    }
function hideDiv(){
    myDiv.style.display = "none";
}

let myLibraray = [];
myLibraray.forEach(makeBookEntries)
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
myLibraray.push(bookInfo);
    
}

function makeBookEntries(item, index){
var newDiv;
    
newDiv = document.createElement('div');
newDiv.className = 'entries';
newDiv.textContent = `Title: ${item.title} Author: ${item.author} Pages ${item.pages} Read ${item.read} `
myContainer.appendChild(newDiv); 
}