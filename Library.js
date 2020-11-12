


var myDiv = document.querySelector(".formlayout");
myDiv.style.display = "none";

function showDiv(){
    if(myDiv.style.display === "none"){
        myDiv.style.display = "block";
    }
}

let myLibraray = [];


function Book(author, title, pages, read){
    this.title = title,
    this.author = author,
    this.pages = pages;
    //this.read = read;
}


let form = document.getElementById("theform")

form.addEventListener("submit",addBooktoLibrary);
function addBooktoLibrary(event){
event.preventDefault();
const theTitle = document.getElementById("title").value;
const theauthor = document.getElementById("author").value;
const thepages = document.getElementById("pages").value;

const bookInfo = new Book(theTitle, theauthor, thepages)
myLibraray.push(bookInfo)
console.log(myLibraray);
}
console.log(myLibraray);