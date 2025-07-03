import { Conta } from "./Conta";

export class ContaCorrente extends Conta {
    private _limiteChequeEspecial: number = 500;

    constructor(titular: string) {
        // 'super' chama o construtor da classe pai (Conta)
        super(titular);
        console.log(`Conta Corrente de ${titular} criada com sucesso!`);
    }

    // Implementação obrigatória do método abstrato 'sacar'
    public sacar(valor: number): void {
        const saldoDisponivel = this.getSaldo() + this._limiteChequeEspecial;

        if (valor <= 0) {
            console.log("Valor de saque inválido.");
            return;
        }

        if (valor > saldoDisponivel) {
            console.log(`Saldo insuficiente, mesmo com cheque especial. Saldo atual: R$${this.getSaldo().toFixed(2)}, Limite: R$${this._limiteChequeEspecial.toFixed(2)}`);
        } else {
            this.setSaldo(this.getSaldo() - valor);
            console.log(`Saque de R$${valor.toFixed(2)} realizado. Saldo atual: R$${this.getSaldo().toFixed(2)}`);
        }
    }
}