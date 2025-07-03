from conta_corrente import ContaCorrente
from conta_poupanca import ContaPoupanca

def main():
    print("--- BEM-VINDO AO GEMINI BANK (PYTHON) ---")
    
    cc_joao = ContaCorrente("João Silva")
    cp_maria = ContaPoupanca("Maria Souza")

    print("\n--- OPERAÇÕES INICIAIS ---")
    cc_joao.depositar(1000)
    cp_maria.depositar(2000)

    print("\n--- DEMONSTRANDO POLIMORFISMO ---")
    contas = [cc_joao, cp_maria]
    for conta in contas:
        conta.sacar(800)

    print(f"\nSaldo João (CC): R${cc_joao.saldo:.2f}")
    print(f"Saldo Maria (CP): R${cp_maria.saldo:.2f}")

    print("\n--- OPERAÇÕES ESPECÍFICAS ---")
    print("Tentando sacar R$ 300 da Conta Corrente (usando o limite)...")
    cc_joao.sacar(300)

    print("\nCalculando rendimento da Conta Poupança...")
    cp_maria.calcular_rendimento()

if __name__ == "__main__":
    main()