
var list= document.getElementById("list");
function add(){
var add1=document.getElementById("input");
var li= document.createElement('li');
li.setAttribute("class","lis");
var liTex= document.createTextNode(add1.value);

li.appendChild(liTex)

var delbtn=document.createElement("button")
var delText=document.createTextNode("Delete")
delbtn.setAttribute("class","btn btn-d")
delbtn.setAttribute("onclick","deleteItem(this)")
delbtn.appendChild(delText);

li.appendChild(delbtn)
list.appendChild(li)
add1.value=" "
console.log(li);
}

function deleteItem(m){
	
	m.parentNode.remove(m);
}
function deleteall(){
	list.innerHTML="";
}