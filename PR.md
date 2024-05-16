## Exercicio 1.1
Em termos de analise de dataset decidi inserir um id criado por mim utilizando o programa python insereID.py
Depois reparei que havia um problema com os precoContratual em que certos campos eram string e outros numero entao decidi passar tudo para string

## Exercicio 1.2
Em termos de queries a 
. Quantos registos estão na base de dados;
Utilizei o comando countDocuments para obter esta infomração
. Quantos registos de contratos têm o tipo de procedimento com valor "Ajuste Direto Regime Geral"?
Utilizado count juntamente com o tipo que se esta a procura nesta querie.

. Qual a lista de entidades comunicantes (ordenada alfabeticamente e sem repetições)?
Utilizado aggregate para ir acumulando as varias entidades, sort para as ordenar 

. Qual a distribuição de contratos por tipo de procedimento (quantos contratos tem cada tipo de
procedimento)?
Utilizado aggregate para ir juntando os varios contratos , sum para somar a quantidade de contratos 

. Qual o montante global por entidade comunicante (somatório dos contratos associados a uma
entidade)?
Passamos a virgula para ponto, depois passamos para double o valor do montante de cada entidade, no final somamos tudo
Coloquei tudo em uma linha embora tenha desenvolvido esta querie de forma mais simples de ler com tudo espaçado pois assim a sua inserção e facil no mongo shell.

## Exercicio 1.3
Para api de dados utilizamos o docker e mongodb para a persistencia dos dados. Depois foi utilizado express para o servidor em si na porta 16000.
Para executar o servidor é so realizar ``` npm install ``` seguido de ```npm start ``` Nota: Executados na pasta express

No post eu coloquei com que fosse verificada a existencia de id, caso nao exista é criado um automaticamente.

No put nao é necessario vir um id com os dados, ele é obtido autoamticamente.