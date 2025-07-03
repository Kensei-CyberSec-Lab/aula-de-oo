package com.geminibank;

public class ContaPoupanca extends Conta {
    private double taxaJuros;

    public ContaPoupanca(String titular) {
        super(titular);
        this.taxaJuros = 0.02;
        System.out.println("Conta Poupança de " + titular + " criada com sucesso!");
    }

    @Override
    public void sacar(double valor) {
        if (valor <= 0) {
            System.out.println("Valor de saque inválido.");
            return;
        }

        if (valor > this.getSaldo()) {
            System.out.printf("Saldo insuficiente. Saldo atual: R$%.2f\n", this.getSaldo());
        } else {
            this.saldo -= valor;
            System.out.printf("Saque de R$%.2f realizado. Saldo atual: R$%.2f\n", valor, this.getSaldo());
        }
    }

    public void calcularRendimento() {
        double rendimento = this.getSaldo() * this.taxaJuros;
        this.depositar(rendimento);
        System.out.printf("Rendimento de R$%.2f creditado.\n", rendimento);
    }
}