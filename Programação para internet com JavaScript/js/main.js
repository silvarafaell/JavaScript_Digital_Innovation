
function soma(n1, n2) {
    return n1 + n2;
}

function validaIdade(idade) {
    var validar;
    if (idade >= 18) {
        validar = true
    } else {
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));

//alert(soma(5, 10));



// function setReplace(frase, nome, novo_nome) {
//     return frase.replace(nome, novo_nome)
// }

// alert(setReplace("Vai Japão", "Japão", "Brasil"));

// var d = new Date();
// alert(d.getDate());


// var count;
// for (count 0; count <= 5; count++) {
//     alert(count);
// };



// var count = 0;
// while (count <= 5) {
//     console.log(count);
//     alert(count);
//     count++;
//     //count = count + 1;
// }


// var idade = prompt("Qual sua idade"); //uma pergunta, o que responder vai ser gravado em idade

//var idade = 18;

// if (idade >= 18) {
//     alert("maior que idade");
// } else {
//     alert("menor de idade");
// }




//Dicionario
// var frutas = [{ nome: "maça", cor: "vermelha" }, { nome: "uva", cor: "roxa" }]
// console.log(frutas);
// alert(frutas[1].nome);

// var fruta = { nome: "maça", cor: "vermelha" } //parecido com o json
// console.log(fruta);



//var lista = ["maça", "pera", "laranja"];
//lista.push("uva"); //adiciona um item a lista
//lista.pop(); //pop tira o ultimo item da lista
//console.log(lista);
//alert(lista[1]);
//console.log(lista.join(" - "));






// var nome = "Rafael";
// var idade = 25;
// var idade2 = 10;
// var frase = "Japão é o melhor time do mundo";
// //alert(nome + "tem" + idade + "anos"); //gera um popup
// //alert(idade + idade2);
// console.log(nome); //aparece a informação no Console do Navegador
// console.log(idade + idade2);
// console.log(frase.replace("Japão", "Brasil"));