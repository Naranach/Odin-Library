let myLibrary = [];
let newBook;

function Book(title,author,pages,read) {
    this.title= title.value,
    this.author = author.value,
    this.pages = pages.value,
    this.read= read.checked
}


function addBookToLibrary(){
popUpDisplay.style.display='none'
newBook= new Book (title,author,pages,read);
myLibrary.push(newBook)
inputs.forEach(input=>{
    input.value='';
});
console.log(newBook)
}

function dispfunction(){
    document.getElementById("popUp").style.display="block"
};

const inputs=document.querySelectorAll('#title,#author,#pages,#read')
const ClosePopUp=document.getElementById('close')
const popUpDisplay = document.getElementById('popUp')
const newbookbtn=document.getElementById('newbookbtn')
const addbutton= document.getElementById('addbtn')
addbutton.addEventListener("click",addBookToLibrary)
newbookbtn.addEventListener("click",dispfunction)
ClosePopUp.addEventListener('click',() =>popUpDisplay.style.display='none')