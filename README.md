# backendExercico2
Pessoal, segue exercício que trabalharemos nas próximas aulas. A ideia é desenvolver o código a partir dos enunciados.

Você recebeu um array de objetos contendo informações sobre alunos de uma escola, incluindo nome, nota, idade e turma. Seu objetivo é praticar e demonstrar o uso dos principais métodos de array em JavaScript (filter, map, reduce e suas combinações) para manipular e extrair informações desses dados.

Array de dados fornecido:

const alunos = [ { nome: "Ana", nota: 8.5, idade: 16, turma: "3A" }, { nome: "João", nota: 6.0, idade: 17, turma: "3B" }, { nome: "Maria", nota: 9.0, idade: 16, turma: "3A" }, { nome: "Pedro", nota: 4.5, idade: 17, turma: "3B" }, { nome: "Julia", nota: 7.5, idade: 16, turma: "3A" }, { nome: "Carlos", nota: 5.5, idade: 17, turma: "3B" } ];

Tarefas a serem implementadas:

Filtrar alunos aprovados
Utilize o método filter() para criar um novo array contendo apenas os alunos com nota maior ou igual a 6. Exiba o resultado.

Extrair nomes dos alunos
Utilize o método map() para criar um array contendo apenas os nomes dos alunos. Exiba o resultado.

Criar boletim formatado
Utilize o método map() para criar um array de strings formatadas no formato: "Nome - Nota: X - Status: Aprovado/Reprovado". Em seguida, percorra esse array com forEach() para exibir cada item.

Calcular média da turma
Utilize o método reduce() para somar todas as notas dos alunos e calcular a média da turma. Exiba o resultado com duas casas decimais.

Agrupar alunos por turma
Utilize o método reduce() para criar um objeto que agrupe os nomes dos alunos por turma. O resultado deve ser um objeto onde as chaves são as turmas ("3A", "3B") e os valores são arrays com os nomes dos alunos correspondentes.

Combinar métodos para encontrar melhores alunos da 3A
Combine os métodos filter() e map() para criar um array com os nomes dos alunos da turma "3A" que têm nota maior ou igual a 8.

DICAS

Sugestão de nome para arquivo: 
// arquivo: array-exercicio.js

Lembrem de usar o recurso console.log() para imprimir na linha de comando os resultados.
