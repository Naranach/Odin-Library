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
console.log(myLibrary)
creatediv(newBook)

// firstbk.innerHTML= newBook.title + ","+newBook.author+","+newBook.pages+newBook.read
}

function dispfunction(){
    document.getElementById("popUp").style.display="block"
};

function creatediv(newBook){
const book=document.createElement("div")
const titlediv=document.createElement("div");
const authordiv=document.createElement("div")
const pagesdiv=document.createElement("div")
const removeBtn=document.createElement('button')
const readBtn=document.createElement('button')


book.classList.add("book")
bookcontainer.appendChild(book)

titlediv.classList.add("titlediv")
book.appendChild(titlediv)
titlediv.innerHTML=newBook.title+"<br>"+"<br>"

authordiv.classList.add("authordiv")
book.appendChild(authordiv)
authordiv.innerHTML=newBook.author+"<br>"+"<br>"

pagesdiv.classList.add("pagesdiv")
book.appendChild(pagesdiv)
pagesdiv.innerHTML=newBook.pages+" "+"sayfa"+"<br>"+"<br>"
readBtn.classList.add("readBtn")
book.appendChild(readBtn)
if(newBook.read===false){
    readBtn.innerHTML='Kitabı Okumadım'
    readBtn.style.backgroundColor='#e04f63';
}else{
    readBtn.innerHTML='Kitabı Okudum'
    readBtn.style.backgroundColor = '#63da63'
}

readBtn.addEventListener('click',()=>{
    newBook.read=!newBook.read
    if(newBook.read===false){
        readBtn.innerHTML='Kitabı Okumadım'
        readBtn.style.backgroundColor='#e04f63';
    }else{
        readBtn.innerHTML='Kitabı Okudum'
        readBtn.style.backgroundColor = '#63da63'
    }
    console.log(newBook.read)
})
removeBtn.classList.add("removeBtn")
book.appendChild(removeBtn)
removeBtn.textContent='Sil'
removeBtn.addEventListener('click',function(){
    book.remove()

    
})
}


const bookcontainer=document.querySelector(".bookcontainer")
const firstbk=document.querySelector('#firstbk')
const inputs=document.querySelectorAll('#title,#author,#pages,#read')
const ClosePopUp=document.getElementById('close')
const popUpDisplay = document.getElementById('popUp')
const newbookbtn=document.getElementById('newbookbtn')
const addbutton= document.getElementById('addbtn')
addbutton.addEventListener("click",addBookToLibrary)
newbookbtn.addEventListener("click",dispfunction)
ClosePopUp.addEventListener('click',() =>popUpDisplay.style.display='none')



