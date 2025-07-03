from abc import ABC, abstractmethod
import random

# ABC (Abstract Base Class) torna a classe abstrata
class Conta(ABC):
    def __init__(self, titular: str):
        self._titular = titular
        # Atributos "protegidos" são indicados com um underscore por convenção
        self._saldo = 0
        self._numero_da_conta = random.randint(1000, 9999)
        print(f"Conta base para {self._titular} criada.")

    @property
    def saldo(self):
        return self._saldo

    def depositar(self, valor: float):
        if valor <= 0:
            print("Valor de depósito inválido.")
            return
        self._saldo += valor
        print(f"Depósito de R${valor:.2f} realizado na conta de {self._titular}. Saldo atual: R${self._saldo:.2f}")

    # Um método abstrato que DEVE ser implementado pelas classes filhas
    @abstractmethod
    def sacar(self, valor: float):
        pass