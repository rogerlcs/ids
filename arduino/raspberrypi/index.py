#!/usr/bin/python

import cgitb cgitb.enable() # Turn on debug mode.
import RPi.GPIO as GPIO   #Importa a biblioteca das GPIO
import time     #Importa a biblioteca de tempo

GPIO.setmode(GPIO.BOARD) #Configura o modo de definição de pinos como BOARD (contagem de pinos da placa)

GPIO.setwarnings(False)  #Desativa os avisos 
GPIO.setup(18, GPIO.OUT) #Configura o pino 18 da placa (GPIO24) como saída


while(1):          #Inicia o loop infinito
GPIO.output(18, 1) #Coloca o pino 18 em nível alto (1)
time.sleep(1)      #Delay de 1 segundo

GPIO.output(18, 0) #Coloca o pino 18 em nível baixo (0)
time.sleep(1)      #Delay de 1 segundo

print("Content-Type: text/html") 
print("/r/n") 


id = self.request.GET.get('id')
if(id == 247){
	lampada1 = self.request.GET.get('lampada1')
	if(lampada1 == "0")	
		GPIO.output(18, 0) #Coloca o pino 18 em nível alto (1)	
	else	
		GPIO.output(18, 1) #Coloca o pino 18 em nível alto (1)	
	
	lampada2 = self.request.GET.get('lampada2')	
	if(lampada2 == "0")
	{
		
	}
	
	lampada3 = self.request.GET.get('lampada3')
	if(lampada3 == "0")
	{
		
	}	
	
}









