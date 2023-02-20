// Requerimos el módulo serialport
var serialport = require("serialport");
var SerialPort = serialport.SerialPort;

// Instanciamos el objeto de conexión al puerto serial
var sp = new SerialPort("/dev/ttyACM0", {
  baudrate: 9600,
  parser: serialport.parsers.readline("\n")
});

// Abrimos la conexión al puerto serial
sp.open(function () {

  // Cada que llegue un dato serial lo imprimiremos en la consola
  // En este caso convertimos el dato en Entero y lo mostramos como
  // temperatura en grados celsius.
  sp.on("data", function (data) {
    var temp = parseInt(data, 10) + " ºC";
    console.log(temp);
  });

});

module.exports = sp;
