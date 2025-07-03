from conta import Conta

class ContaCorrente(Conta):
    def __init__(self, titular: str, limite_cheque_especial: float = 500.0):
        # super() chama o construtor da classe pai
        super().__init__(titular)
        self._limite_cheque_especial = limite_cheque_especial
        print(f"Conta Corrente de {titular} criada com sucesso!")

    # Implementação obrigatória do método abstrato
    def sacar(self, valor: float):
        saldo_disponivel = self.saldo + self._limite_cheque_especial
        if valor <= 0:
            print("Valor de saque inválido.")
            return
        
        if valor > saldo_disponivel:
            print(f"Saldo insuficiente, mesmo com cheque especial. Saldo: R${self.saldo:.2f}, Limite: R${self._limite_cheque_especial:.2f}")
        else:
            self._saldo -= valor
            print(f"Saque de R${valor:.2f} realizado. Saldo atual: R${self._saldo:.2f}")