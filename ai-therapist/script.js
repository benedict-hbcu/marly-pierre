var random_margin = ["-5px", "1px", "5px", "10px", "7px"];
var random_colors = ["#c2ff3d","#ff3de8","#3dc2ff","#04e022","#bc83e6","#ebb328", "ff4d94", "#33ff33", "#ff471a", "#4d4dff"];
var random_degree = ["rotate(3deg)", "rotate(1deg)", "rotate(-1deg)", "rotate(-3deg)", "rotate(-5deg)", "rotate(-3deg)", "rotate(1deg)", "rotate(5deg)"];
var index = 0;
const addBtn = document.getElementById('add')  
 const notes = JSON.parse(localStorage.getItem('notes'))  
 if(notes) {  
   notes.forEach(note => addNewNote(note))  
 }  
 addBtn.addEventListener('click', () => addNewNote())  
 function addNewNote(text = '') {  
   const note = document.createElement('div')  
   note.classList.add('note')  
   note.innerHTML = `  
   <div class="tools">  
     <button class="edit"><i class="fas fa-edit"></i></button>  
     <button class="delete"><i class="fas fa-trash-alt"></i></button>  
   </div>  
   <div class="main ${text ? "" : "hidden"}"></div>  
   <textarea class="${text ? "hidden" : ""}"></textarea>  
   `  
   if(index > random_colors.length - 1)
   index = 0;
   note.setAttribute("style", `margin:${random_margin[Math.floor(Math.random() * random_margin.length)]}; background-color:${random_colors[index++]}; transform:${random_degree[Math.floor(Math.random() * random_degree.length)]}`);

 
   const editBtn = note.querySelector('.edit')  
   const deleteBtn = note.querySelector('.delete')  
   const main = note.querySelector('.main')  
   const textArea = note.querySelector('textarea')  
   textArea.value = text  
   main.innerHTML = marked(text)  
   deleteBtn.addEventListener('click', () => {  
     note.remove()  
     updateLS()  
   })  
   editBtn.addEventListener('click', () => {  
     main.classList.toggle('hidden')  
     textArea.classList.toggle('hidden')  
   })  
   textArea.addEventListener('input', (e) => {  
     const { value } = e.target  
     main.innerHTML = marked(value)  
     updateLS()  
   })  
   document.body.appendChild(note)  
 }  
 function updateLS() {  
   const notesText = document.querySelectorAll('textarea')  
   const notes = []  
   notesText.forEach(note => notes.push(note.value))  
   localStorage.setItem('notes', JSON.stringify(notes))  
 }  