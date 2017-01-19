
// Programa: Web Server com modulo ESP8266
// Alteracoes e adaptacoes: FILIPEFLOP
 
#include <SoftwareSerial.h>
 
//RX pino 2, TX pino 3
SoftwareSerial esp8266(2, 3);
String readString;

 
#define DEBUG true
 
void setup()
{

  //pinMode(LED, OUTPUT);
  
  Serial.begin(115200);
  esp8266.begin(115200);

  pinMode(13, OUTPUT);
  pinMode(12, OUTPUT);
 
  sendData("AT+RST\r\n", 5000, DEBUG); // rst
  // Conecta a rede wireless
  //coloque aqui os dados do seu ssid e a senha
  //sendData("AT+CWJAP=\"ssid\",\"senha\"\r\n", 2000, DEBUG);
  sendData("AT+CWJAP=\"arduinowifi\",\"arduino123\"\r\n", 2000, DEBUG);
  delay(4000);
  sendData("AT+CWMODE=1\r\n", 1000, DEBUG);
  // Mostra o endereco IP
  delay(4000);
  sendData("AT+CIFSR\r\n", 1000, DEBUG);
  delay(4000);
  // Configura para multiplas conexoes
  sendData("AT+CIPMUX=1\r\n", 1000, DEBUG);

  delay(4000);
  //115200
  sendData("AT+CIOBAUD=115200\r\n", 2000, DEBUG);
  
  delay(4000);
  // Inicia o web server na porta 80
  sendData("AT+CIPSERVER=1,80\r\n", 1000, DEBUG);
  delay(4000);

  
}
 
void loop()
{
  
  
  // Verifica se o ESP8266 esta enviando dados
  if (esp8266.available())
  {
    if (esp8266.find("+IPD,"))
    {
      delay(300);
      int connectionId = esp8266.read() - 48;
 
      String webpage = "<head>";
      //<meta http-equiv=""refresh"" content=""3"">";
      webpage += "</head><h1><u>ESP8266 - Web Server</u></h1><h2>Portas Arduino";
      webpage += "<h2>Porta Digital 13 lampada1: ";
      int b = digitalRead(13);
      delay(1000);   
      Serial.println("PORTA 13:" + b);       
      if(b==HIGH)      
          webpage += "LIGADO";
      else webpage += "DESLIGADO";
      webpage += "</h2>";

      webpage += "<h2>Porta Digital 12 ventilador: ";
      int c = digitalRead(12);
      delay(1000);
      Serial.println("PORTA 12:" + c);
      if(c==HIGH)      
      webpage += "LIGADO";
      else webpage += "DESLIGADO";
      webpage += "</h2>";
 
      String cipSend = "AT+CIPSEND=";
      cipSend += connectionId;
      cipSend += ",";
      cipSend += webpage.length();
      cipSend += "\r\n";
 
      sendData(cipSend, 1000, DEBUG);
      sendData(webpage, 1000, DEBUG);
 
      String closeCommand = "AT+CIPCLOSE=";
      closeCommand += connectionId; // append connection id
      closeCommand += "\r\n";
 
      sendData(closeCommand, 3000, DEBUG);
    }
  }
}
 
String sendData(String command, const int timeout, boolean debug)
{
  // Envio dos comandos AT para o modulo
  String response = "";
  esp8266.print(command);
  long int time = millis();
  while ( (time + timeout) > millis())
  {
    while (esp8266.available())
    {
      // The esp has data so display its output to the serial window
      char c = esp8266.read(); // read the next character.
      delay(100);
      response += c;
    }
  }
  if (debug)
  {   
    Serial.print("\nresposta:" + response + "\n");    
    Serial.print("\nsubstring:" + response.substring(10,15) + "\n");
  }
   
    if(response.substring(10,13) == "001"){
      if (digitalRead(13) == HIGH)      
        digitalWrite(13, LOW);  
      else
        digitalWrite(13, HIGH);           
            
    }else if(response.substring(10,13) == "002"){
      if (digitalRead(12) == HIGH)      
        digitalWrite(12, LOW);  
      else
        digitalWrite(12, HIGH);           
    
    delay(1000);
    }  
  return response;
}
