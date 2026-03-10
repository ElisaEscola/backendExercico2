// arquivo: array-exercicio.js

const alunos = [
  { nome: "Ana", nota: 8.5, idade: 16, turma: "3A" },
  { nome: "João", nota: 6.0, idade: 17, turma: "3B" },
  { nome: "Maria", nota: 9.0, idade: 16, turma: "3A" },
  { nome: "Pedro", nota: 4.5, idade: 17, turma: "3B" },
  { nome: "Julia", nota: 7.5, idade: 16, turma: "3A" },
  { nome: "Carlos", nota: 5.5, idade: 17, turma: "3B" }
];

// 1. Filtrar alunos aprovados (nota >= 6)
const aprovados = alunos.filter(aluno => aluno.nota >= 6);
console.log("Alunos Aprovados:", aprovados);

// 2. Extrair nomes dos alunos
const nomes = alunos.map(aluno => aluno.nome);
console.log("Nomes dos Alunos:", nomes);

// 3. Criar boletim formatado
const boletins = alunos.map(aluno => {
  const status = aluno.nota >= 6 ? "Aprovado" : "Reprovado";
  return `${aluno.nome} - Nota: ${aluno.nota} - Status: ${status}`;
});
boletins.forEach(boletim => console.log(boletim));

// 4. Calcular média da turma
const somaNotas = alunos.reduce((acc, aluno) => acc + aluno.nota, 0);
const mediaTurma = (somaNotas / alunos.length).toFixed(2);
console.log(`Média da Turma: ${mediaTurma}`);

// 5. Agrupar alunos por turma
const alunosPorTurma = alunos.reduce((acc, aluno) => {
  if (!acc[aluno.turma]) {
    acc[aluno.turma] = [];
  }
  acc[aluno.turma].push(aluno.nome);
  return acc;
}, {});
console.log("Alunos Agrupados por Turma:", alunosPorTurma);

// 6. Melhores alunos da 3A (nota >= 8)
const melhores3A = alunos
  .filter(aluno => aluno.turma === "3A" && aluno.nota >= 8)
  .map(aluno => aluno.nome);
console.log("Melhores alunos da 3A:", melhores3A);
