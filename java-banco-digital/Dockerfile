# Etapa 1: Build - Usar uma imagem com o JDK para compilar o código
FROM openjdk:17-jdk-slim as builder

WORKDIR /app

# Copiar o código-fonte
COPY src ./src

# Compilar o código Java. O resultado vai para a pasta /app
RUN javac -d . src/com/geminibank/*.java

# Etapa 2: Run - Usar uma imagem menor, apenas com o JRE, para executar
FROM openjdk:17-slim

WORKDIR /app

# Copiar apenas os arquivos .class compilados da etapa de build
COPY --from=builder /app .

# Comando para executar a classe principal
CMD ["java", "com.geminibank.Main"]