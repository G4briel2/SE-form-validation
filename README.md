# 🔒 Sistema de Autenticação Simples

Um micro sistema com telas básicas de Cadastro, Login e um Dashboard.

## 🌟 Arquivos do Projeto

Este projeto é composto por três arquivos principais em HTML:

| Arquivo | Descrição |
| :--- | :--- |
| **`cadastro.html`** | 📝 Página para o registro de novos usuários. |
| **`login.html`** | 🔑 Página para a autenticação (login) dos usuários. |
| **`dashboard.html`** | 🏠 Tela principal que é exibida após o login bem-sucedido. |

## 🛠️ Tecnologias Utilizadas

* **HTML:** Para a estrutura das páginas.
* **CSS:** Para a estilização (`style.css` e `../global.css`).
* **JavaScript:** Para a lógica de front-end (arquivos `scriptCadastro.js` e `script.js`).

## ✨ Estrutura das Páginas

### 1. `cadastro.html`

Página de **Cadastro** que inclui:

* Um formulário (`#registerForm`).
* Campos para:
    * Usuário (`#usuario`)
    * E-mail (`#email`)
    * Senha (`#senha`)
* Um checkbox para aceitar os termos (`#terms`).
* Botão "Criar conta".

### 2. `login.html`

Página de **Login** que inclui:

* Um formulário (`#loginForm`).
* Campos para:
    * Usuário (`#usuario`)
    * Senha (`#senha`)
* Botão "Entrar".

### 3. `dashboard.html`

Página de **Dashboard** que inclui:

* Um título de boas-vindas (`#welcome`).
* Uma div com a classe `rainbow` para um efeito visual.

## 🚀 Como Rodar

Basta abrir qualquer um dos arquivos `.html` no seu navegador para visualizar as páginas. A lógica de autenticação e navegação é gerenciada pelos scripts JavaScript associados.