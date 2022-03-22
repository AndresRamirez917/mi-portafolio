import { valida } from "./validaciones.js";

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
  let texarea = document.querySelector("textarea");
texarea.addEventListener("blur", function() {
if(texarea.value == ""){
  document.querySelector(".message-error").style.color = "#DD2C00";
  document.querySelector(".message-error").innerHTML = "El campo comentario no puede estar vacío";
  
}else{
  document.querySelector(".message-error").innerHTML = "";
 
}
})
});

