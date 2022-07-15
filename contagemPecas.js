let alumns = ["Chico", "Garcia", "Helena"];

function addAl(aluno){
  try{
    
    if (alumns.length === 5){
      throw new Error("Não pode adicionar mais alunos.");
    } else{
      alumns.push(aluno);
    }
  
  } catch(e) {
    console.log(e.message);
  }
}

for(let i in alumns){
  let aluno = alumns[Number(i)];

  console.log(aluno);
}



addAl("Rafael");
addAl("Joca");
console.log(alumns);
addAl("Alice");



let alumns2 = ["Manoel", "Pedro", "Gabriel"];

function addal2(al){
 
  while(alumns2.length < 5){
    
    alumns2.push(al);
    console.log("Aluno adicionado com sucesso !!",       
    alumns2);
    return;
  
  }
  
  console.log("Quantidade excedida");
  return;
}

addal2("João");
addal2("Bianca");
addal2("Guilhermino");
addal2("tonho");

// --------------------------------------------------------------------------------

const pecas = ["Peça1", "Peça2", "Peça3", "Peça4","Peça6","Peça7", "Peça8", "Peça9", "Peça10"];

let qtdPecas = pecas.length;

if(qtdPecas > 10){
  console.log("Limite atingido.");
} else {
  
  for(let index = 0; index < qtdPecas; index++){
  
    if(pecas[index].length <= 3){    
      console.log(`A peça '${pecas[index].toUpperCase()}' está com menos de 3 caracteres.`);
    }else{
      console.log(pecas[index]);
    }
  
  }
  
}