$(document).ready(function() {
    /* Usuario */
    const usuario = $("#txtUsuario");
    const salida_Usuario = $("#salida_Usuario");
    /* Nombre */
    const nombre = $("#txtNombre");
    const salida_Nombre = $("#salida_Nombre");

    /* Correo */
    const correo = $("#txtCorreo");
    const salida_Correo = $("#salida_Correo");

    /* Celular */
    const celular = $("#txtCelular");
    const salida_celular = $("#salida_Celular");

    /* contraseña */
    const Contrasena = $("#txtContrasena");
    const salida_Contrasena = $("#salida_Contrasena");

    /* Repetir contraseña */
    const RepContrasena = $("#txtRepContrasena");
    const salida_ReContrasena = $("#salida_ContraRep");


    const btnEnviar = $("#btnEnviar");
  
    btnEnviar.click(function(){
      /* usuario */
      let Value_Usuario = usuario.val();
      salida_Usuario.text("");
      let RegExp_Usuario = /^[A-Za-z]*[0-9]*_$/

      /* Nombre */
      let Value_Nombre = nombre.val();
      salida_Nombre.text("");
      let RegExp_Nombre = /^[A-ZÑ]{1}[a-zñ]*([\s]?[A-ZÑ]{1}[a-zñ]*)*$/;

      /* Correo */
      let ValueCorreo = correo.val();
      salida_Correo.text("");
      let RegExp_Correo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      
      /* Celular */
      let ValueCelular = celular.val();
      salida_celular.text("");
      let RegExp_Celular = /^\+?[1-9]\d{1,14}$/;

      /* Contraseña */
      let Value_Contrasena = Contrasena.val();
      salida_Contrasena.text("");
      let RegExp_Contrasena = /\w/;

      /* ReContraseña */
      let ValueRecontrasena = RepContrasena.val();
      salida_ReContrasena.text("");
  
      /* operación */
      if(!RegExp_Usuario.test(Value_Usuario)){
        salida_Usuario.text("No es válido");
        return false;
      } else if (!RegExp_Nombre.test(Value_Nombre)){
        salida_Nombre.text("No es válido");
        return false;
      } else if(!RegExp_Correo.test(ValueCorreo)){
        salida_Correo.text("No es válido");
        return false;
      } else if(!RegExp_Celular.test(ValueCelular)){
        salida_celular.text("No es válido");
        return false;
      }else if(!RegExp_Contrasena.test(Value_Contrasena)){
        salida_Contrasena.text("No es válido"); 
        return false;
      }else if(ValueRecontrasena != Value_Contrasena){
        salida_ReContrasena.text("Las contraseñas no son iguales");
        return false;
      }else{
        return true;
      }
    });
  });
