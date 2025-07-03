package com.geminibank;

import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        System.out.println("--- BEM-VINDO AO GEMINI BANK (JAVA) ---");

        ContaCorrente ccJoao = new ContaCorrente("João Silva");
        ContaPoupanca cpMaria = new ContaPoupanca("Maria Souza");

        System.out.println("\n--- OPERAÇÕES INICIAIS ---");
        ccJoao.depositar(1000);
        cpMaria.depositar(2000);

        System.out.println("\n--- DEMONSTRANDO POLIMORFISMO ---");
        // Usando uma lista da interface/classe base
        List<Conta> contas = new ArrayList<>();
        contas.add(ccJoao);
        contas.add(cpMaria);

        for (Conta conta : contas) {
            conta.sacar(800);
        }

        System.out.printf("\nSaldo João (CC): R$%.2f\n", ccJoao.getSaldo());
        System.out.printf("Saldo Maria (CP): R$%.2f\n", cpMaria.getSaldo());

        System.out.println("\n--- OPERAÇÕES ESPECÍFICAS ---");
        System.out.println("Tentando sacar R$ 300 da Conta Corrente (usando o limite)...");
        ccJoao.sacar(300);

        System.out.println("\nCalculando rendimento da Conta Poupança...");
        cpMaria.calcularRendimento();
    }
}