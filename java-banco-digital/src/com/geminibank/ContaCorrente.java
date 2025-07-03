package com.geminibank;

public class ContaCorrente extends Conta {
    private double limiteChequeEspecial;

    public ContaCorrente(String titular) {
        // super() chama o construtor da classe pai
        super(titular);
        this.limiteChequeEspecial = 500.0;
        System.out.println("Conta Corrente de " + titular + " criada com sucesso!");
    }

    @Override // Anotação que indica a sobrescrita de um método
    public void sacar(double valor) {
        double saldoDisponivel = this.getSaldo() + this.limiteChequeEspecial;
        if (valor <= 0) {
            System.out.println("Valor de saque inválido.");
            return;
        }

        if (valor > saldoDisponivel) {
            System.out.printf("Saldo insuficiente, mesmo com cheque especial. Saldo: R$%.2f, Limite: R$%.2f\n", this.getSaldo(), this.limiteChequeEspecial);
        } else {
            this.saldo -= valor;
            System.out.printf("Saque de R$%.2f realizado. Saldo atual: R$%.2f\n", valor, this.getSaldo());
        }
    }
}