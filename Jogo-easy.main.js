const random = Math.floor(Math.random() * 20) + 1;

let text = document.getElementById("text");

function toSend(){
  let valueRecept = document.getElementById("valueRecept").value;
  
  if (valueRecept > random){
    text.innereText = "
    `${valueRecept} é maior!` + random
  }
}