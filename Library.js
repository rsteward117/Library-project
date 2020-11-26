var myDiv = document.querySelector(".formlayout");

const myContainer = document.getElementById("bookEntryContainer");

myDiv.style.display = "none";

function showDiv(){
        myDiv.style.display = "block";
    }
function hideDiv(){
    myDiv.style.display = "none";
}

//let myLibraray = [];
//myLibraray.forEach(makeBookEntries)

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
//myLibraray.push(bookInfo);
makeBookEntries(bookInfo);
}

function makeBookEntries(item){
    var newDiv;
    
    newDiv = document.createElement('div');
    newDiv.className = 'entries';
    newDiv.textContent = `Title: ${item.title}  Author: ${item.author} Pages ${item.pages} Read Status: ${item.read}`;
    var deleteDiv = document.createElement("BUTTON");
    deleteDiv.className = 'delClass';
    var ChangeRead = document.createElement("BUTTON");
    ChangeRead.className = 'IHaveRead';
    ChangeRead.textContent = "Have you read this book?";
    deleteDiv.textContent = "Delete Entry";
    deleteDiv.addEventListener("click", () => {
       newDiv.remove();
                               });
    ChangeRead.addEventListener("click", () => {
item.read = 'Yes';
newDiv.textContent = `Title: ${item.title}  Author: ${item.author} Pages ${item.pages} Read Status: ${item.read}`;
newDiv.appendChild(deleteDiv);
    });
    newDiv.appendChild(deleteDiv);
    newDiv.appendChild(ChangeRead);
myContainer.appendChild(newDiv); 
}