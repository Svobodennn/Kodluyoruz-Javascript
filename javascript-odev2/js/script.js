let yazialani = document.getElementById("task")
let liste = document.querySelector(`#list`)
let arr = []



    let newElement = () => {

        if(yazialani.value===null || yazialani.value===""){
            $('.error').toast('show')
        }
        else{
            let lieleman = document.createElement("li")
            lieleman.innerHTML = (`${yazialani.value}<span onclick="closeFunc()" class="close">x</span>`)
            liste.appendChild(lieleman)
            lieleman.addEventListener("click",function(){
            lieleman.classList.toggle("checked")
            })
            let kapat = document.getElementsByClassName("close")
            for(let i =0;i<kapat.length;i++){
                kapat[i].onclick = function() 
                {
                    var div = this.parentElement;
                    div.style.display = "none";
                }
            }
            $('.success').toast('show')
            yazialani.value = "" 

            } 
        };

function getLocalStorage(){
    let todo;
    if(localStorage.getItem("todos") === null){
        todo = [];
    }else{
        todo = JSON.parse(localStorage.getItem("todos"))
    }
    return todo;
    }
        
function displayLocalStorage(){
    const todos = getLocalStorage()
    todos.forEach(todo => {
        createList(todo)
    });
    }
        
function setLocalStorage(todo){
    let todos = getLocalStorage()
    todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(todos))
    }
        
function deleteLocalStorage(text){
    let todos = getLocalStorage()
    todos.forEach((todo, index) => {
        if(todo === text){
            todos.splice(index, 1)
        }
    })
    localStorage.setItem("todos", JSON.stringify(todos))
    }
        

