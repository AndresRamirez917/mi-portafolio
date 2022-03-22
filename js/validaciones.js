export function valida(input) {         //la funcion se exporta para usarla desde otros archivos
    const tipoDeInput = input.dataset.form;     //form es como esta llamado el input en el html
    if (validadores[tipoDeInput]) {
      validadores[tipoDeInput](input);
    }
    //console.log(input.parentElement);
    if(input.validity.valid){
      input.parentElement.classList.remove("input-container--invalid");
      input.parentElement.querySelector(".input-message-error").innerHTML = "";    //quito el mensaje de error
    }else{
      input.parentElement.classList.add("input-container--invalid");
      input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input)
     
    }
  }



  const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
  ];

  const mensajesDeError = {
    nombre : {
      valueMissing: "El campo nombre no puede estar vacío"
    },
    correo : {
      valueMissing: "El campo email no puede estar vacío",
      typeMismatch: "El correo no es válido" 
    },
    asunto : {
      valueMissing: "El campo asunto no puede estar vacío",
      patternMismatch: "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales."
    },
    comentario : {
        valueMissing: "El campo comentario no puede estar vacío"
    }, 
  };

const validadores = {
    nacimiento: (input) => validarNacimiento(input),
 };

  function mostrarMensajeDeError(tipoDeInput, input){
    let mensaje = "";
    tipoDeErrores.forEach((error) =>{
      if(input.validity[error]){
        console.log(error);
        console.log(input.validity[error]);
        console.log(mensajesDeError[tipoDeInput][error]);
        mensaje = mensajesDeError[tipoDeInput][error];
        
      }
    });
    return mensaje;
  }


  
  
 /* 
  function validarNacimiento(input) {
    const fechaCliente = new Date(input.value);
    let mensaje = "";
    if (!mayorDeEdad(fechaCliente)) {       //entro negando la variable para activar el mansaje
      mensaje = "Debes tener al menos 18 años de edad";
    }
  
    input.setCustomValidity(mensaje);        //personalizo los mensajes
  }
  
  function mayorDeEdad(fecha) {
    const fechaActual = new Date();
    const diferenciaFechas = new Date(
      fecha.getUTCFullYear() + 18,          //esto ni idea que se hacia así
      fecha.getUTCMonth(),
      fecha.getUTCDate()
    );
    return diferenciaFechas <= fechaActual;
 
}
*/