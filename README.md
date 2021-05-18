Exemplo de documentação do trabalho


## Introdução

[Coloque aqui uma explicação inicial do seu trabalho explicando quais os seus objetivos e características]

Este projeto é um exemplo de como construir uma documentação do seu trabalho.


## Descrição do mini-mundo

[Descrever o mini-mundo. Não deve ser maior do que 15 linhas]

Atualmente, com os smartphones e aplicativos, ficou muito fácil a construção e controle de equipamentos.  
O sistema a ser desenvolvido precisa simular a recepção de comandos para controlar os equipamentos de uma residência. É  necessário que no sistema seja possível o controle de ligar e desligar lâmpadas, além de outros equipamentos.  
Nele, deve-se ter uma senha de acesso para que a residência não seja controlada por pessoas sem autorização. Esse simulador deve estar disponível na plataforma web por meio de um site e ele deve ter uma interface amigável e de fácil utilização.  

## Descrição do Arduino

"Arduino[3][5][6] é uma plataforma de prototipagem eletrônica de hardware livre e de placa única,[7] projetada com um microcontrolador Atmel AVR com suporte de entrada/saída embutido, uma linguagem de programação padrão,[8] a qual tem origem em Wiring, e é essencialmente C/C++.[9] O objetivo do projeto é criar ferramentas que são acessíveis, com baixo custo, flexíveis e fáceis de se usar por principiantes e profissionais. Principalmente para aqueles que não teriam alcance aos controladores mais sofisticados e ferramentas mais complicadas.[10]" (wikipedia, 2021)


## Descrição dos Requisitos 

### Requisitos Funcionais
Exemplo:

| Identificador        | Descrição           | Prioridade  |
| ------------- |:-------------:| -----:|
| RF001     | O sistema deve permitir o usuário fazer uma busca por termos | 100 |
| RF002      | O sistema deve permitir o usuário fazer a busca e ir para o primeiro link     |   99 |


### Requisitos Não Funcionais
Exemplo:

| Identificador        | Descrição           | Prioridade  |
| ------------- |:-------------:| -----:|
| RNF001     | O sistema deve retornar a busca em menos de 1 segundo | 98 |
| RNF002      | O sistema deve ter uma tela amigável de fácil utilização     |   97 |


## Prototipação do Sistema

Faça a prototipação das telas do sistema. Você pode adicionar as imagens ou um vídeo do sistema
Exemplo:<br>

https://www.youtube.com/watch?v=vAp1qGp5KKk

<br>

## Project Model Canvas

...


## Caso de Uso

Requisitos - RF001, RNF001 e RNF002

C01 - Realizar Busca
### Fluxo normal

1. O usuário acessar a página www.google.com
2. O usuário seleciona a caixa de texto para inserir seus dados de busca.
3. O usuário informa o(s) termo(s) que deseja pesquisar.
4. O usuário clica no botão "Pesquisa Google".
5. O sistema retorna uma lista de links e uma pequena descrição do site relacionados ao termo informado pelo usuário.
6. O usuário seleciona um link de sua preferencia.

### Fluxo Alternativo

1. O usuário acessar a página www.google.com
1. O usuário clica em pesquisa avançada.
2. O usuário seleciona a caixa de texto para inserir seus dados de busca.
3. O usuário informa o(s) termo(s) que deseja pesquisar.
4. O usuário clica no botão "Pesquisa Google".
5. O sistema retorna uma lista de links e uma pequena descrição do site relacionados ao termo informado pelo usuário.
6. O usuário seleciona um link de sua preferencia.



## Telas do sistema ( Coloque aqui a versão final das telas do sistema)

Para cada tela do sistema voçê deve adicionar uma imagem e uma descrição da tela.

A figura abaixa é exibido a tela de busca do sistema. Nessa tela é possível fazer uma busca informando o termo que se deseja buscar.
Como resultado ela exibirá uma lista de links relacionados a esse termo informado. 
Caso de uso C01

![alt text](https://github.com/felipefo/ids/blob/master/imagem_tela_exemplo.png)
            

#Referências

Wikipedia, Arduino, Disponível em:<https://pt.wikipedia.org/wiki/Arduino> Acessado em 18 de maio de 2021. 




