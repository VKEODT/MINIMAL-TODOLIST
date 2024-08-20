
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
    newnode.innerHTML = "<div class='nodes' id='" + fullid + "'> <div type='myInput' class='"+fullid+ "'>" + givenstring + "</div> <button onclick='deleteTodo(\"" + fullid + "\")' class='serch2'>-DELETE</button></div>";
    document.getElementById("addtada").appendChild(newnode);
    document.getElementById('input1').value='';
    document.getElementById('input1').focus();
  }
}
function deleteTodo(butid){
  document.getElementById(butid).remove();
}
document.getElementById('input1').addEventListener('keydown',function(event){
  if(event.key === 'Enter'){
    addTodo();
  }
});