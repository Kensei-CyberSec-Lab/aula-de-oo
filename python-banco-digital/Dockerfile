# Usar a imagem oficial do Python
FROM python:3.10-slim

# Definir o diretório de trabalho
WORKDIR /usr/app

# Copiar o arquivo de dependências
COPY requirements.txt ./

# Instalar dependências (mesmo que vazio, é uma boa prática)
RUN pip install --no-cache-dir -r requirements.txt

# Copiar o código-fonte
COPY . .

# Comando para executar a aplicação
CMD ["python", "-u", "src/main.py"]