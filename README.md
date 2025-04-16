# Projeto Angular - CRUD com API e Funcionalidades Dinâmicas

Este é um projeto Angular com funcionalidades de **CRUD dinâmico**, integrado com uma API mock usando **json-server** para gerenciar a lista de pessoas.

---

## 🚀 Funcionalidades

### 🔐 Tela de Login
- **Funcionalidade**: Acesso restrito com login e senha.
- **Credenciais**:
  - Usuário: `admin`
  - Senha: `123`
- **Comportamento**: Redirecionamento automático para a página de listagem de pessoas após login bem-sucedido.

### 👥 Página de Listagem de Pessoas
- **Funcionalidade**: Exibe uma lista de pessoas com as opções de **Adicionar**, **Editar** e **Excluir**.
- **Interações**:
  - **Adicionar**: Adiciona uma nova pessoa à lista.
  - **Editar**: Atualiza os dados de uma pessoa já existente.
  - **Excluir**: Remove uma pessoa da lista.
  - As ações de **Adicionar**, **Editar** e **Excluir** são totalmente funcionais, interagindo com a API para manter a lista de pessoas atualizada.

---

## ⚙️ Como Funciona

### 🚀 API com json-server
- **Descrição**: A API é uma simulação de um servidor backend usando `json-server`, permitindo realizar operações **CRUD**.
- **Configuração da API**:
  - **URL**: `http://localhost:3000/pessoas`
  - **Métodos**:
    - `GET /pessoas`: Retorna todas as pessoas.
    - `POST /pessoas`: Adiciona uma nova pessoa.
    - `PUT /pessoas/:id`: Atualiza os dados de uma pessoa.
    - `DELETE /pessoas/:id`: Exclui uma pessoa específica.

### 🔄 Funcionalidades Implementadas
- **Adicionar** uma pessoa.
- **Editar** os dados de uma pessoa, acessando a página de alteração com a rota `/pessoa/alterar/:id`.
- **Excluir** uma pessoa da lista, removendo-a diretamente da API e atualizando a visualização.

---

## 📦 Tecnologias Utilizadas

- **Angular**: Framework para construção da interface do usuário e gerenciamento da aplicação.
- **TypeScript**: Linguagem utilizada para a escrita do código.
- **json-server**: Ferramenta que cria uma API REST mock para simulação de backend.
- **HTML5 + CSS3**: Para a estruturação e estilo das páginas.
  
---

📸 Prints
![image](https://github.com/user-attachments/assets/e6fe66ba-353a-4c39-8ec6-411e4409311d)
![image](https://github.com/user-attachments/assets/8f260ed6-eb5b-40bb-aab4-14e4e31f1a34)
![image](https://github.com/user-attachments/assets/e36febd8-7e45-449d-a0de-85ace6f52e50)




