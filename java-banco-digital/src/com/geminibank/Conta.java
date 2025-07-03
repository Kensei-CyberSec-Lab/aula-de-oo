package com.geminibank;

import java.util.Random;

public abstract class Conta {
    // 'protected' permite acesso dentro do mesmo pacote e por subclasses
    protected String titular;
    protected double saldo;
    protected int numeroDaConta;

    public Conta(String titular) {
        this.titular = titular;
        this.saldo = 0;
        this.numeroDaConta = new Random().nextInt(9000) + 1000;
        System.out.println("Conta base para " + this.titular + " criada.");
    }

    public double getSaldo() {
        return this.saldo;
    }

    public void depositar(double valor) {
        if (valor <= 0) {
            System.out.println("Valor de depósito inválido.");
            return;
        }
        this.saldo += valor;
        System.out.printf("Depósito de R$%.2f realizado na conta de %s. Saldo atual: R$%.2f\n", valor, this.titular, this.saldo);
    }

    // Método abstrato que força a implementação nas subclasses
    public abstract void sacar(double valor);
}