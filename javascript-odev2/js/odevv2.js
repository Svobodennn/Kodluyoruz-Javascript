var yazi = document.getElementById("task")
var liste = document.querySelector("ul#list")

let veriler = []
if(localStorage.getItem("todolist")==null){
    localStorage.setItem("todolist",JSON.stringify(veriler))
}
else{
    veriler = JSON.parse(localStorage.getItem("todolist"))
    showList()
}

var ekle = () => {
    if(yazi.value)
    {
      addToList(yazi.value);
    }
    else
    {
      $(document).ready(function(){
        $('#attentionToast').toast('show')
      });
      yazi.value="";
    }
  }

function addToList(taskName) {

    veriler.push(String(taskName))
    localStorage.setItem('todolist',JSON.stringify(veriler));
    showList()
    $(document).ready(function(){
        $('#successToast').toast('show')
      });
      
      yazi.value="";
 }

 function showList() {
     liste.innerHTML = ""
     veriler.forEach((task, key) => {
        let lis = document.createElement("li")
        lis.addEventListener("click", checked)
        lis.innerHTML = `${task} <span id="closeButton" class="deleteButton close" onclick=close(${key})>x</span>`
        liste.append(lis)
     })
 }

 function checked(){
    //Change with boostrap succes style
    this.classList.toggle("checked");
  }

  function close(index){
    veriler.splice(index,1);
    localStorage.setItem('todolist',JSON.stringify(veriler));
    this.parentElement.remove()
    showList();
     //Push toast 
     $(document).ready(function(){
      $('#deleteItemToast').toast('show')
    });
  }