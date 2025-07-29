const random = Math.floor(Math.random() * 20) + 1;

let text = document.getElementById("text");
let valuer = [];
  
function toSend(){

  let valueRecept = document.getElementById("valueRecept").value;



if (valueRecept > 0 && valueRecept <= 20){
  
  if (valueRecept > random){
    text.innerText = 
    `${valueRecept} é maior!`;
  }
  else if (valueRecept < random){
    text.innerText = 
    `${valueRecept} é menor!`;
  }
  else{
    text.innerText = 
    `Voc acertouuuuu!`;
  }
}
else{
  text.innerText = 
    `${valueRecept} está distante de 1 a 20`;
}

if(valueRecept !== ""){
  valuer.push(text.innerText);
}
if(valuer.length > 5){
  valuer.shift();
}
document.getElementById("valueRecept").value = "";
newList();
}

function newList(){
  
 let list = document.getElementById("list");
 
 list.innerHTML = "";
  valuer.forEach(function(item){
    let newDiv = document.createElement("div")
    newDiv.className = "item";
    newDiv.textContent = item;
    list.appendChild(newDiv);
  });
}
