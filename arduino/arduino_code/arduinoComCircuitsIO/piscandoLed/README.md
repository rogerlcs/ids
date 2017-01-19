
Tutorial piscando led com arduino utilizando o simulador circuits.io

Tutorial em video piscando led com arduino:
https://www.youtube.com/watch?v=WaJml0QSjio


## Criando conta no Circuitos.io


Acesse o site http://circuits.io e crie uma conta pra você.

## Criando seu projeto

1)Clique no menu create

2)Abra eletronics labs ( Electronics Lab )

3)New Electronics Lab

Se você seguiu corretamente os passo você vai visualizar a seguinte imagem:

![alt text](https://github.com/felipefo/ids/blob/master/arduino/arduino_code/arduinoComCircuitsIO/piscandoLed/curcuits_io1.jpg)


4) Adicione o arduino uno r3 ao projeto

 Para isso vá em components como na imagem abaixo:
 
            
 ![alt text](https://github.com/felipefo/ids/blob/master/arduino/arduino_code/arduinoComCircuitsIO/piscandoLed/adicionar_componentes.png)
 
 Selecionando o arduino uno r3:
 
 ![alt text](https://github.com/felipefo/ids/blob/master/arduino/arduino_code/arduinoComCircuitsIO/piscandoLed/selecionando_arduino.png)
 
 
 Selecionando o led:
 
 ![alt text](https://github.com/felipefo/ids/blob/master/arduino/arduino_code/arduinoComCircuitsIO/piscandoLed/selecionando_led.png)
 
 
 Selecionando um resistor:
 
 ![alt text](https://github.com/felipefo/ids/blob/master/arduino/arduino_code/arduinoComCircuitsIO/piscandoLed/selecionando_resistor.png)
 
 Resultado da seleção deve ser conforme na imagem abaixo:
 
 ![alt text](https://github.com/felipefo/ids/blob/master/arduino/arduino_code/arduinoComCircuitsIO/piscandoLed/resultado_selecao.png)
 
 
 
 5) Vamos ligar os componentes para iniciar a simulação
 
  Faça a ligação conforme a imagem exibida abaixo:
  
  
  ![alt text](https://github.com/felipefo/ids/blob/master/arduino/arduino_code/arduinoComCircuitsIO/piscandoLed/ligacao_piscando_led.png)
  
  O circuits.io cria um código pra você quando você fazer essas ligações que vai dizer ao arduino para piscar o led
  
```
  // Pin 13 has an LED connected on most Arduino boards.
// give it a name:
int led = 13;

// the setup routine runs once when you press reset:
void setup() {
  // initialize the digital pin as an output.
  pinMode(led, OUTPUT);
}

// the loop routine runs over and over again forever:
void loop() {
  digitalWrite(led, HIGH);   // turn the LED on (HIGH is the voltage level)
  delay(1000);               // wait for a second
  digitalWrite(led, LOW);    // turn the LED off by making the voltage LOW
  delay(1000);               // wait for a second
}
 ```





