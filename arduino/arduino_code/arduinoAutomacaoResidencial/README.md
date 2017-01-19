
Controlando leds com o arduino através da internet utilizando o módulo ESP8266 e arduino uno r3

## Notas - O modulo esp8266 tem diversos bugs e não funciona perfeitamente.

Para rodar você vai precisar da IDE do arduino. 

## Hardware utilizado

Visão geral da ligação do arduino uno r3 com o módulo  esp8266 com seu adaptador esp01:

![alt text](https://github.com/felipefo/ids/blob/master/arduino/arduino_code/arduinoAutomacaoResidencial/images/visao_geral.jpg)

Ligação no arduino:

![alt text](https://github.com/felipefo/ids/blob/master/arduino/arduino_code/arduinoAutomacaoResidencial/images/ligacao_arduino.jpg)

Ligação do módulo esp8266: 

![alt text](https://github.com/felipefo/ids/blob/master/arduino/arduino_code/arduinoAutomacaoResidencial/images/modulo_esp8266.jpg)

Ligação do led 

![alt text](https://github.com/felipefo/ids/blob/master/arduino/arduino_code/arduinoAutomacaoResidencial/images/ligacao_led.jpg)



## Código do webserver

Abaixo é disponibilizado o código do arquivo para ligar e desligar um led. 

![alt text](https://github.com/felipefo/ids/blob/master/arduino/arduino_code/arduinoAutomacaoResidencial/arduinoAutomacaoResidencial.ino)




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
  
  O circuits.io cria um código pra você quando você faz essas ligações. Essa liagções dizem ao arduino para piscar o led. 
  O código criado é destacado abaixo.
  
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

6) Para executar clique em Start simulation
7) Para para a execução clique em Stop simulation



