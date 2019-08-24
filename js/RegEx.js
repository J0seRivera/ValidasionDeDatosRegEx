var button= document.getElementById("button");
button.addEventListener("click", validarDatos);
function validarDatos()
{
  validarNombre();
  validarEmail();
  validarDireccion();
  validarContraseña();
  validarFecha();
  validarGenero();
  validarDPI();
  validarNIT();
  validarCodPost();
  validarTelefono();
}

var textName = document.getElementById("textName");
function validarNombre()
{
  var valor = textName.value;
  var nombreRegEx = /^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])+[\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])?$/g;

  if(nombreRegEx.test(valor)){
  } else {
    alert("Nombre Incorrecto, no debe llevar espacios en blanco al inicio y debe de ingresar por lo menos un Nombre y un Apellido");
  }
}

var direccion = document.getElementById("address");
function validarDireccion()
{
  var valor = direccion.value;
  var dirRegEx = /^[a-zA-ZÁÉÍÓÚñáéíóúÑ0-9\s\,\''\-\_]*$/;
  if(dirRegEx.test(valor)){

  }else{
    alert("la dirección " + valor + " es incorrecta, verifique que no contenga puntos, punto y coma, ");
  }
}

var email = document.getElementById("email");
function validarEmail()
{
  var valor = email.value;
  var emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[[A-Z]{2,3}]*$/i;
 
  if (emailRegex.test(valor)) {
  } else {
    alert("La dirección de email * " + valor + " * es incorrecta.");
  }
}

var pass = document.getElementById("pass");
function validarContraseña()
{
  var valor = pass.value;
  var passRegEx = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;
  if(passRegEx.test(valor)){
  }else{
    alert("La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula, al menos un caracter no alfanumérico y no debe contener espacios")
  }
}

var date = document.getElementById("date");
function validarFecha()
{
  var valor = date.value;
  var dateRegEx = /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/;
  if(dateRegEx.test(valor)){

  }else{
    alert("El formato de la fecha debe ser dd/mm/yyyy o dd-mm-yyyy");
  }
}

var gender = document.getElementById("gender");
function validarGenero()
{
  var valor = gender.value;
  var generoRegEx= /^(\M|F|O)$/;
  if(generoRegEx.test(valor)){

  }else{
  alert("Ingrese el genero M: masculino, F: Femenino, O: Otro");
  }
}
 
var dpi = document.getElementById("dpi");
function validarDPI(){
var valor = dpi.value;  
var dpiRegEx= /^[0-9]{4}\s?[0-9]{5}\s?[0-9]{4}$/;
if(dpiRegEx.test(valor)){
}else{
  alert("Verifique el numero de DPI debe tener 13 digitos");
}
}

var nit = document.getElementById("nit");
function validarNIT()
{
  var valor = nit.value;
  var NITRegEx= /^[0-9]{7}\-[[1-9]{1}]*$/;
  if(NITRegEx.test(valor)){

  }else{
    alert("El Nit es incorrrecto, el formato es 1234567-8");
  }
}

var postal = document.getElementById("postalCode");
function validarCodPost()
{
  var valor = postal.value;
  var postRegEx= /^[[0-9]{4,5}]*$/;
  if(postRegEx.test(valor)){

  }else{
    alert("El codigo postal es incorrrecto, debe contener de 4 a 5 números");
  }
}

var telefono = document.getElementById("phoneNumber");
function validarTelefono()
{
var valor = telefono.value;
var telefonoRegEx= /^[[0-9]{4}\-[[0-9]{4}]*$/;
if(telefonoRegEx.test(valor)){
var a = true; return a;
}else{
  alert("Numero telefónico erroneo, debe contener 8 digitos con el siguiente formato 1234-5678");
}
}

