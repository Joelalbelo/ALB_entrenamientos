function calcularPrecio() {
    // Obtén los valores ingresados por el usuario
    const cantidadSuplementos = parseInt(document.getElementById("cantidadSuplementos").value);
    const opcionSeleccionada = document.getElementById("opcionSeleccionada").value;
    
    // Realiza el cálculo del precio según la opción seleccionada
    let precio = 0;
    if (opcionSeleccionada === "opcion1") {
      precio = ((cantidadSuplementos*1000)*0.9); 
    } else if (opcionSeleccionada === "opcion2") {
      precio = ((cantidadSuplementos*1000)*1.2); 
    } else if (opcionSeleccionada === "opcion3") {
      precio = ((cantidadSuplementos*1000)*1.3); 
    }
    
    // Muestra el resultado en la página
    document.getElementById("resultado").textContent = "$" + precio;
  }
  
  function cartelCompra() {
    let precio = parseInt(document.getElementById("resultado").textContent);
    if (precio!= 0) {
      alert("¡MUCHAS GRACIAS! a la brevedad nos comunicaremos con vos.");
    } else {
      alert("Algo salio mal.");
    }


  }