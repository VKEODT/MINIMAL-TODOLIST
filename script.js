var giveid =0;
function addTodo(){
  const givenstring = document.getElementById("input1").value;
  if(givenstring===""){
    alert("DONT GIVE A BLANK TODO");
  }else{
    const newnode = document.createElement("div");
    var fullid = 'id-'+giveid;
    giveid=giveid+1;
    
    console.log(fullid+fullid);
    newnode.innerHTML = "<div class='nodes' id='" + fullid + "'><div style=' height: 20px; align-items: center;justify-content: center;'><input type='checkbox' style='margin-right:2vw;'><span class='edit' onclick='editTodo(\"" + fullid + "\")' >" + givenstring + "</span></div><div style='overflow: auto;'><button onclick='editTodo(\"" + fullid + "\")' class='serch1'>-EDIT</button><button onclick='deleteTodo(\"" + fullid + "\")' class='serch1'>-DELETE</button</div></div>";
    document.getElementById("addtada").appendChild(newnode);
    document.getElementById('input1').value='';
    document.getElementById('input1').focus();
  }
}

function deleteTodo(butid){
  document.getElementById(butid).remove();
}
function editTodo(butid) {
  const element = document.getElementById(butid);
  if (element) {
      const todoTextSpan = element.querySelector('.edit');
      const newTodoText = prompt("Edit your todo:", todoTextSpan.textContent);
      
      if (newTodoText !== null && newTodoText.trim() !== "") {
          todoTextSpan.textContent = newTodoText;
      }
  }
}
document.getElementById('input1').addEventListener('keydown',function(event){
  if(event.key === 'Enter'){
    addTodo();
  }
});