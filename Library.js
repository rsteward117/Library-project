


var myDiv = document.querySelector(".formlayout");
myDiv.style.display = "none";
function showDiv(){
    if(myDiv.style.display === "none"){
        myDiv.style.display = "block";
    }
}

let myLibraray = [];
var testBook = {title: "Star Wars",
               author:"George Lucus",
               pages: "66",
               read: "yes"};
myLibraray.push(testBook);

myLibraray.forEach(creatEntry);
console.log(myLibraray);
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
console.log(myLibraray);
}

function creatEntry(item, index, arr){    
let newdiv = document.createElement("div");
newdiv.classList.add("entries");
newdiv.textContent =  item;
document.body.appendChild(newdiv);



}





