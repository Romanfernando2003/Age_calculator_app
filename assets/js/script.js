function calcularEdad() {
    var dia = parseInt(document.getElementById('dia').value);
    var mes = parseInt(document.getElementById('mes').value);
    var anio = parseInt(document.getElementById('anio').value);
  
    if (isNaN(dia) || isNaN(mes) || isNaN(anio)) {
      alert('Por favor, ingresa valores numéricos en los campos de fecha.');
      return;
    }
  
    if (dia < 1 || dia > 31 || mes < 1 || mes > 12 || anio < 1) {
      alert('Por favor, ingresa una fecha de nacimiento válida.');
      ocultarEdad();
      return;
    }
  
    var fechaActual = new Date();
    var diaActual = fechaActual.getDate();
    var mesActual = fechaActual.getMonth() + 1;
    var anioActual = fechaActual.getFullYear();
  
    var fechaIngresada = new Date(anio, mes - 1, dia);
  
    if (fechaIngresada > fechaActual) {
      alert('Por favor, ingresa una fecha de nacimiento válida.');
      ocultarEdad();
      return;
    }
  
    var maxDiasPorMes = obtenerMaxDiasPorMes(mes, anio);
  
    if (dia > maxDiasPorMes) {
      alert('El mes seleccionado tiene ' + maxDiasPorMes + ' días. Por favor, ingresa un día válido.');
      ocultarEdad();
      return;
    }
  
    var edad = anioActual - anio;
  
    if (mes > mesActual || (mes === mesActual && dia > diaActual)) {
      edad--;
    }
  
    var meses = mesActual - mes;
    if (diaActual < dia) {
      meses--;
    }
  
    if (meses < 0) {
      meses += 12;
    }
  
    var dias = diaActual - dia;
    if (dias < 0) {
      var diasMesAnterior = obtenerMaxDiasPorMes(mesActual - 1, anio);
      dias = diasMesAnterior + dias;
    }
  
    var resultado = 'Tu edad es: ' + edad + ' años, ' + meses + ' meses, y ' + dias + ' días.';
    mostrarEdad(resultado);
  }
  
  function obtenerMaxDiasPorMes(mes, anio) {
    var maxDias;
  
    if (mes === 2) {
      if ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0) {
        maxDias = 29; // Febrero tiene 29 días en años bisiestos
      } else {
        maxDias = 28; // Febrero tiene 28 días en años no bisiestos
      }
    } else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
      maxDias = 30; // Abril, Junio, Septiembre y Noviembre tienen 30 días
    } else {
      maxDias = 31; // Resto de los meses tienen 31 días
    }
  
    return maxDias;
  }
  
  function mostrarEdad(resultado) {
    var edadElement = document.getElementById('resultado');
    
    var edadAnios = document.createElement('div');
    edadAnios.style.fontFamily = 'Poppins, sans-serif';
    edadAnios.style.fontWeight = '800';
    edadAnios.style.fontSize = '30px';
    edadAnios.textContent = resultado.split(',')[0]; // Obtener solo la parte de años
    
    var edadMeses = document.createElement('div');
    edadMeses.style.fontFamily = 'Poppins, sans-serif';
    edadMeses.style.fontWeight = '800';
    edadMeses.style.fontSize = '30px';
    edadMeses.textContent = resultado.split(',')[1]; // Obtener solo la parte de meses
    

    var edadDias = document.createElement('div');
    edadDias.style.fontFamily = 'Poppins, sans-serif';
    edadDias.style.fontWeight = '800';
    edadDias.style.fontSize = '30px';
    edadDias.textContent = resultado.split(',')[2]; // Obtener solo la parte de días
    
    edadElement.innerHTML = ''; // Limpiar el contenido anterior
    
    edadElement.appendChild(edadAnios);
    edadElement.appendChild(edadMeses);
    edadElement.appendChild(edadDias);
    edadElement.style.display = 'block';
  }
  
 
function ocultarEdad() {
    var edadElement = document.getElementById('resultado');
    edadElement.style.display = 'none';
  }