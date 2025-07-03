# Usar a imagem oficial do Node.js (versão LTS - Long Term Support)
FROM node:18-alpine

# Definir o diretório de trabalho dentro do container
WORKDIR /usr/app

# Copiar os arquivos de manifesto do projeto (package.json e package-lock.json)
# Fazer isso separadamente aproveita o cache do Docker
COPY package*.json ./

# Instalar as dependências do projeto
RUN npm install

# Copiar o resto dos arquivos do projeto para o diretório de trabalho
COPY . .

# O comando padrão que será executado quando o container iniciar.
# Usamos "npm run dev" que configuraremos para rodar nosso código em modo de desenvolvimento.
CMD ["npm", "run", "dev"]