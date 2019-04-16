// let casa = {
//     quarto: [2, "Cama", "Espelho", "Computador"],
//     sala: [1, "Sofá", "Televisão", "Prateleira"],
//     cozinha: [1, "Geladeira", "Fogão", "Microondas"]
// }



// let rua = {
//     casa1: {quarto: [2, "Cama", "Espelho", "Computador"], sala: [1, "Sofá", "Televisão", "Prateleira"], cozinha: [1, "Geladeira", "Fogão", "Microondas"]},
//     casa2: {quarto: [1, "Cama", "Guarda Roupas", "Computador"], sala: [1, "Sofá", "Televisão", "Bluray"], cozinha: [1, "Geladeira", "Fogão", "Microondas"]}
// }

let tentativas = 3;
let senhaCadastrada = "aviao123";
let senhaEntrada;
let nome = prompt("Digite seu nome");
let saldo = 300;
let vlrSaque;
let novoSaldo = saldo - vlrSaque;
let limiteDiario = 150; 

while(tentativas > 0){
    senhaEntrada = prompt("Qual a sua senha?");

    if(senhaEntrada == senhaCadastrada){
        alert("Senha correta.");
        vlrSaque = prompt("Qual o valor do saque?");

if(vlrSaque <= saldo){
        if(vlrSaque <= limiteDiario){
        alert("Saque aprovado. Seu novo saldo é: " +novoSaldo);
        }
        else{
            alert("Saque recusado pois ultrapassou o limite diário de saque, seu saldo é: " + saldo)
            break
        }
    }
 else{
     alert("Saque recusado pois o valor ultrapassa o saldo disponível, seu saldo é: " +saldo);
     break
 }
    }
    else{
        tentativas--;
        alert("Senha incorreta, você tem: " + tentativas + " tentativas restantes");
    }
}

if(tentativas == 0){
    alert("Conta bloqueada pois você excedeu o limite de tentativas de senha.");
    alert("Por favor, dirija-se à sua agência para desbloquear a conta.");
}
    else{
        alert("Sistema finalizado.");
    }