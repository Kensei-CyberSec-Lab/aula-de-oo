import { Conta } from "./Conta";

export class ContaPoupanca extends Conta {
    private _taxaJuros: number = 0.02; // 2%

    constructor(titular: string) {
        super(titular);
        console.log(`Conta Poupança de ${titular} criada com sucesso!`);
    }

    // Implementação obrigatória do método abstrato 'sacar'
    public sacar(valor: number): void {
        if (valor <= 0) {
            console.log("Valor de saque inválido.");
            return;
        }
        
        if (valor > this.getSaldo()) {
            console.log(`Saldo insuficiente. Saldo atual: R$${this.getSaldo().toFixed(2)}`);
        } else {
            this.setSaldo(this.getSaldo() - valor);
            console.log(`Saque de R$${valor.toFixed(2)} realizado. Saldo atual: R$${this.getSaldo().toFixed(2)}`);
        }
    }

    public calcularRendimento(): void {
        const rendimento = this.getSaldo() * this._taxaJuros;
        this.depositar(rendimento);
        console.log(`Rendimento de R$${rendimento.toFixed(2)} creditado.`);
    }
}