import { Conta } from "./Conta";
import { ContaCorrente } from "./ContaCorrente";
import { ContaPoupanca } from "./ContaPoupanca";

console.log("--- BEM-VINDO AO GEMINI BANK ---");
console.log("\n");

// Criando instâncias das contas
const contaCorrenteJoao = new ContaCorrente("João Silva");
const contaPoupancaMaria = new ContaPoupanca("Maria Souza");

console.log("\n--- OPERAÇÕES INICIAIS ---");
contaCorrenteJoao.depositar(1000);
contaPoupancaMaria.depositar(2000);
console.log("\n");

// --- Demonstração de Polimorfismo ---
// 'Polimorfismo' significa 'muitas formas'.
// Temos um array do tipo 'Conta' (a classe base abstrata),
// mas ele contém objetos de tipos diferentes (ContaCorrente, ContaPoupanca).
// Podemos chamar o mesmo método (sacar) em todos eles, e cada um se comportará
// de sua maneira específica.

console.log("--- DEMONSTRANDO POLIMORFISMO ---");
const contas: Conta[] = [contaCorrenteJoao, contaPoupancaMaria];

// Sacando R$ 800 de cada conta
contas.forEach(conta => {
    conta.sacar(800);
});

console.log("\n--- Saldos após saques ---");
console.log(`Saldo João (CC): R$${contaCorrenteJoao.getSaldo().toFixed(2)}`);
console.log(`Saldo Maria (CP): R$${contaPoupancaMaria.getSaldo().toFixed(2)}`);
console.log("\n");


console.log("--- OPERAÇÕES ESPECÍFICAS ---");
// Tentando sacar da CC usando o cheque especial
console.log("Tentando sacar R$ 300 da Conta Corrente (usando o limite)...");
contaCorrenteJoao.sacar(300); // Saldo vai para -100

// Calculando rendimento da Poupança
console.log("\nCalculando rendimento da Conta Poupança...");
contaPoupancaMaria.calcularRendimento(); // Adiciona 2% sobre o saldo restante

console.log("\n--- FIM DAS OPERAÇÕES ---");