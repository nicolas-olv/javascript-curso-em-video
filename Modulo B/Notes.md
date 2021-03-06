# Curso JavaScript - Módulo B

### Comentários 
    // Comentário de uma linha

    /* 
     Comentário em bloco
    */

### Identificadores
- Começam com uma letra OU $ OU _
- Não podem começar com números
- É possivel utlizizar números e letras
- É possivel utlizizar acentos e simbolos
- Não podem conter espaços
- Não podem ser palavras reservadas
- Há diferenciação entre letras maiúsculas e minúscula

### var, let e const

- var - variáveis globais
- let - variáveis com escopo de bloco
- const - constantes

### Tipos primitivos
- number
  - Infinity
  - NaN
- string
- boolean
- null
- undefined
- object
    - array
- function

### Conversão de tipo

##### Conversão para número
- Number.parseInt(n)
- Number.parseFloat(n)
- Number(n)   

##### Conversão para string
- toString()
- String()

### Template string
- ``
- ${} - placeholder

### Formatação de strings
- s.length - Quantidade de caracteres
- s.toUpperCase() - Tudo em letra maiúscula
- s.toLowerCase() - Tudo em letra minúscula
- replace('.',',') - Substitui ponto por virgula

### Formatação de números
- toFixed(2) - Define o número de casas decimais
- toLocaleString('pt-BR', {style: 'currency, currency: 'BRL'}) - Formatação para valores monetários em reais(BRL)

### Operadores 
- aritiméticos
- atribuição
- relacionais
- lógicos
- ternário

### Operadores aritiméticos
-  "+" - Soma
-  "-" - Subtração
-  "*" - Multiplicação
-  "/" - Divisão real
-  "%" - Resto da divisão inteira
-  "**" - Potenciação

##### Precedência de operações
1. ()
2. **
3. "*", "/", "%"
4. "+", "-"

### Operadores de atribuição
##### Atribuição simples
- =
##### Auto-atribuição
- n = n + 4
- n += 3 Corresponde a n = n + 3
- n++ Corresponde a n = n + 1

### Operadores relacionais
###### O resultado de operações relacionais é sempre um valor booleano
- ">" - Maior que
- "<" - Menor que
- ">=" - Maior ou igual
- "<=" - Menor ou igual
- "==" - Igualdade sem comparação de tipo
- "===" - Igualdade restrita (com comparação de tipo)
- "!=" - Desigualdade
- "!==" - Desigualdade restrita (com comparação de tipo)

### Operadores lógicos
- ! - Negação
- && - Conjunção - E
- || - Disjunção - OU

### Precedencia de operadores 
- Aritiméticos
- Relacionais 
- Lógicos(!, &&, ||)

### Operador ternário
- teste ? true : false