# 🏦 Projeto Banco Digital Multi-Linguagem

Este repositório é um projeto educacional criado para demonstrar e comparar a implementação dos conceitos fundamentais de **Orientação a Objetos (OO)**. O mesmo cenário de negócio — um banco digital simples — é construído em três linguagens de programação populares, cada uma em seu próprio ambiente isolado com Docker.

O objetivo principal é permitir que estudantes e desenvolvedores observem as semelhanças e diferenças na sintaxe e na estrutura ao aplicar os mesmos padrões de OO em diferentes ecossistemas.

 [Apresentação PDF](https://github.com/Kensei-CyberSec-Lab/aula-de-oo/blob/main/Aula-Pratica-Orientacao-a-Objetos-com-Java-Python-e-TypeScript-Construindo-um-Banco-Digital-com-Dock.pdf)

---

## Pilares da Orientação a Objetos Abordados

Em cada implementação (Java, Python e TypeScript), os seguintes pilares da OO são explorados:

- **Encapsulamento:** Proteção dos dados internos dos objetos (como o saldo), expondo apenas operações seguras.
- **Abstração:** Criação de uma classe `Conta` abstrata que serve como um contrato, não podendo ser instanciada diretamente.
- **Herança:** Especialização da classe `Conta` em tipos mais específicos como `ContaCorrente` e `ContaPoupanca`.
- **Polimorfismo:** Capacidade de tratar objetos de diferentes tipos de maneira uniforme, por exemplo, em uma lista de `Conta` chamando o mesmo método `sacar()`.

---

## Tecnologias Utilizadas

| Tecnologia    | Propósito                                                                 |
|---------------|---------------------------------------------------------------------------|
| 🐘 **Java**    | Implementação com uma linguagem fortemente tipada e consolidada no mercado |
| 🐍 **Python**  | Implementação com uma linguagem de script dinâmica e de sintaxe limpa     |
| 🔷 **TypeScript** | Implementação com uma linguagem que adiciona tipagem estática ao JavaScript |
| 🐳 **Docker**  | Containerização das aplicações para execução isolada e consistente        |
| ⚙️ **Docker Compose** | Orquestração dos containers para facilitar a execução dos projetos     |

---

## Como Executar o Projeto

Graças ao Docker, você não precisa instalar Java, Python ou Node.js/TypeScript na sua máquina. Apenas o **Git** e o **Docker** são necessários.

### Pré-requisitos

- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/)
- Docker Compose (já incluso no Docker Desktop)


### Instruções de Execução
Opção 1: Executar TODOS os projetos simultaneamente (Recomendado)
```
docker-compose up --build
```
Você verá os logs dos três projetos intercalados no seu terminal:

Java e Python: executam e finalizam.

TypeScript: permanece ativo (com nodemon). Use Ctrl + C para parar.

Opção 2: Executar projetos individualmente
```
# Java
docker-compose up --build java

# Python
docker-compose up --build python

# TypeScript
docker-compose up --build typescript
```

## Estrutura do Repositório
```
banco-digital-multi-linguagem/
├── java-banco-digital/         # Projeto Java
│   ├── src/
│   └── Dockerfile
│
├── python-banco-digital/       # Projeto Python
│   ├── src/
│   └── Dockerfile
│
├── typescript-banco-digital/   # Projeto TypeScript
│   ├── src/
│   └── Dockerfile
│
├── .gitignore
├── docker-compose.yml          # ⬅ Orquestrador dos serviços
└── README.md                   # ⬅ Este arquivo!
```
* Dockerfile: Cada pasta possui seu Dockerfile com instruções específicas da linguagem.

* docker-compose.yml: Arquivo central que orquestra os três projetos.

Divirta-se aprendendo Orientação a Objetos na prática com múltiplas linguagens!
