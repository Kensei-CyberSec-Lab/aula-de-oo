// A palavra 'abstract' impede que esta classe seja instanciada diretamente.
// Ela serve como um modelo para outras classes.
export abstract class Conta {
    // 'protected' permite que o atributo seja acessado pela própria classe e por classes filhas.
    // '_' é uma convenção para indicar que o atributo é privado/protegido.
    protected _numeroDaConta: number;
    protected _saldo: number = 0;
    protected _titular: string;

    constructor(titular: string) {
        this._titular = titular;
        // Gera um número de conta aleatório simples
        this._numeroDaConta = Math.floor(Math.random() * 1000) + 1;
    }

    // Um método 'getter' para expor o saldo de forma segura (somente leitura).
    public getSaldo(): number {
        return this._saldo;
    }

    // Um método 'setter' protegido para manipulação interna do saldo.
    protected setSaldo(valor: number): void {
        this._saldo = valor;
    }

    public depositar(valor: number): void {
        if (valor <= 0) {
            console.log("Valor de depósito inválido.");
            return;
        }
        this._saldo += valor;
        console.log(`Depósito de R$${valor.toFixed(2)} realizado na conta de ${this._titular}. Saldo atual: R$${this._saldo.toFixed(2)}`);
    }

    // Este é um método abstrato. As classes filhas SERÃO OBRIGADAS a implementá-lo.
    public abstract sacar(valor: number): void;
}