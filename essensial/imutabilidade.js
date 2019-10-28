


const students = [
    {
        nome: "grace",
        nota: 6
    },
    {
        nome: "Rodrigo",
        nota: 10
    },
    {
        nome: "Paulo",
        nota: 8
    }
];
function getAprovedStudentes(studentsList){
    return studentsList.filter(student => student.nota >=7);
}
console.log("alunos aprovados:");
console.log(getAprovedStudentes(students));

console.log("\nLista de alunos:");
console.log(students);