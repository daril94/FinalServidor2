#define LED_RED 7 // Definimos el pin del LED rojo
#define LED_GREEN 8 // Definimos el pin del LED verde
#define TEMP_SENSOR 0 // Definimos el pin analogo del sensor

int maxTemp = 22; // Este sera nuestro limite de temperatura

void setup() {
  Serial.begin(9600); // Iniciamos el puerto serial
  pinMode(LED_RED, OUTPUT); // Definimos el pin del LED rojo como salida
  pinMode(LED_GREEN, OUTPUT); // Definimos el pin del LED verde como salida
}

void loop() {
  int voltage = analogRead(TEMP_SENSOR); // Leemos el valor actual del pin analogo, este valor
                                         // puede estar entre 0 y 1023 y corresponde a un nivel de voltaje
                                         // que nos entrega el sensor.

  int temp = (5 * voltage * 100) / 1024; // Realizamos la conversion a grados celsius, esta formula se puede
                                         // encontrar en la hoja de datos del componente.

  //
  // En el siguiente bloque vamos a verificar si la temperatura actual supera el maximo definido en maxTemp
  // si es superado debemos encender el LED rojo y apagar el LED verde, de lo contrario dejamos el LED verde
  // encendido.
  //
  // HIGH enciende el puerto digital, corresponde a un 1 o +5V.
  // LOW apaga el puerto digital, corresponde a un 0.
  //
  if (temp > maxTemp) {
    digitalWrite(LED_GREEN, LOW);
    digitalWrite(LED_RED, HIGH);
  } else {
    digitalWrite(LED_GREEN, HIGH);
    digitalWrite(LED_RED, LOW);
  }

  Serial.println(temp); // Imprimimos la temperatura actual en el puerto serial

  delay(500); // Esperamos 500ms antes de empezar la siguiente lectura.
}
