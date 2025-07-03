from conta import Conta

class ContaPoupanca(Conta):
    def __init__(self, titular: str, taxa_juros: float = 0.02):
        super().__init__(titular)
        self._taxa_juros = taxa_juros
        print(f"Conta Poupança de {titular} criada com sucesso!")

    # Implementação obrigatória do método abstrato
    def sacar(self, valor: float):
        if valor <= 0:
            print("Valor de saque inválido.")
            return
        
        if valor > self.saldo:
            print(f"Saldo insuficiente. Saldo atual: R${self.saldo:.2f}")
        else:
            self._saldo -= valor
            print(f"Saque de R${valor:.2f} realizado. Saldo atual: R${self._saldo:.2f}")

    def calcular_rendimento(self):
        rendimento = self.saldo * self._taxa_juros
        self.depositar(rendimento)
        print(f"Rendimento de R${rendimento:.2f} creditado.")