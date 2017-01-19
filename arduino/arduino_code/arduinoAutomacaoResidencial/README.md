
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

Abaixo o código para ligar e desligar um led em resposta a uma requisição web 

https://github.com/felipefo/ids/blob/master/arduino/arduino_code/arduinoAutomacaoResidencial/arduinoAutomacaoResidencial.ino

A requisção deve seguir o seguinte formato para ligar/desligar o led 13. Você deve substituir <ip> pelo ip do arduino.
http://<ip>/001

A requisção deve seguir o seguinte formato para ligar/desligar o led 12
http://<ip>/002




## Simulador 

Para facilitar o desenvolvido do trabalho foi desenvolvido um site para simular o controle dos equipamentos. 
Esse site pode ser acesso em: http://arduinofacil.hol.es/arduino










