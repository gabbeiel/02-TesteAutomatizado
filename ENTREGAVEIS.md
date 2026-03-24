# Documento de Entregáveis — Automação de Testes com Playwright

**Aluno(a):** _Gabriel Barros Silva_
**Dupla (se aplicável):** _Jade Yume Camargo Masuda_  
**Data:** ___/___/______  
**Repositório (fork):** `https://github.com/gabbeiel/02-TesteAutomatizado`  
**GitHub Pages:** `https://gabbeiel.github.io/02-TesteAutomatizado/`

---

## Entregável 1 — Fork do Repositório e GitHub Pages

| Item | Valor |
|------|-------|
| **URL do fork no GitHub** | `https://github.com/gabbeiel/02-TesteAutomatizado` |
| **URL do site no GitHub Pages** | `https://gabbeiel.github.io/02-TesteAutomatizado/` |
| **Site está acessível e funcional?** | ☐ Sim / ☐ Não |

**Evidência:** _![Imagem do site funcionando](<imagemsitefuncional.png>)_

---

## Entregável 2 — Projeto Playwright com Testes

### 2.1 Teste gerado pelo Codegen

| Item | Detalhes |
|------|----------|
| **Arquivo** | `testes-playwright/tests/qs-academico-codegen.spec.ts` |
| **Ações gravadas** | ☐ Cadastro de "Ana Silva" (8, 7, 9) |
|                     | ☐ Cadastro de "Carlos Lima" (5, 4, 6) |
|                     | ☐ Busca por "Ana" |
|                     | ☐ Exclusão do segundo aluno |
| **Teste executa com sucesso?** | ☐ Sim / ☐ Não |

**Reflexão sobre o Codegen:** _(Que tipo de seletores o Codegen utilizou? São os mais indicados? Justifique.)_

> _O Codegen selecionou pelo nome dos elementos. São códigos "maiores", mas não notamos diferença na hora da execução_

### 2.2 Testes escritos manualmente

| Item | Detalhes |
|------|----------|
| **Arquivo** | `testes-playwright/tests/qs-academico.spec.ts` |

**Checklist dos testes implementados:**

| # | Teste | Implementado | Passa? |
|---|-------|:------------:|:------:|
| 1 | Cadastrar aluno com dados válidos | ☐ | ☐ Sim / ☐ Não |
| 2 | Exibir mensagem de sucesso após cadastro | ☐ | ☐ Sim / ☐ Não |
| 3 | Rejeitar cadastro sem nome | ☐ | ☐ Sim / ☐ Não |
| 4 | Calcular a média aritmética das três notas | ☐ | ☐ Sim / ☐ Não |
| 5 | Validação de notas fora do intervalo (0–10) | ☐ | ☐ Sim / ☐ Não |
| 6 | Busca por nome (filtro) | ☐ | ☐ Sim / ☐ Não |
| 7 | Exclusão individual de aluno | ☐ | ☐ Sim / ☐ Não |
| 8 | Estatísticas (totais por situação) | ☐ | ☐ Sim / ☐ Não |
| 9 | Situação — Aprovado (média ≥ 7) | ☐ | ☐ Sim / ☐ Não |
| 10 | Situação — Reprovado (média < 5) | ☐ | ☐ Sim / ☐ Não |
| 11 | Situação — Recuperação (média ≥ 5 e < 7) | ☐ | ☐ Sim / ☐ Não |
| 12 | Múltiplos cadastros (3 alunos → 3 linhas) | ☐ | ☐ Sim / ☐ Não |

---

## Entregável 3 — Relatório HTML do Playwright

### 3.1 Relatório ANTES da correção do defeito

**Evidência:** _![Screenshot antes dos testes resolvidos](<printantesderesolver.png>)_

| Métrica | Valor |
|---------|-------|
| **Total de testes** | |
| **Testes aprovados (passed)** | |
| **Testes reprovados (failed)** | |
| **Navegadores testados** | |

### 3.2 Relatório DEPOIS da correção do defeito

**Evidência:** _![Screenshot depois dos testes resolvidos](<printdepoisderesolver.png>)_

| Métrica | Valor |
|---------|-------|
| **Total de testes** | |
| **Testes aprovados (passed)** | |
| **Testes reprovados (failed)** | |
| **Navegadores testados** | |

---

## Entregável 4 — Registro do Defeito Encontrado

| Campo | Descrição |
|-------|-----------|
| **Título do defeito** | _Cálculo da média ignora a terceira nota_ |
| **Severidade** | ☐ Alta  |
| **Componente afetado** | _Função `calcularMedia` em `docs/js/app.js`_ |
| **Passos para reproduzir** | 1. _1. Acessar o site._ |
|                            | 2. _2. Cadastrar aluno com notas diferentes._ |
|                            | 3. _3. Observar a média._|
| **Resultado esperado** | _Média aritimética correta._ |
| **Resultado obtido** | _Média aritimética incorreta._ |
| **Teste(s) que revelaram o defeito** | _deve calcular a media antes das tres notas_ |
| **Evidência visual** | _![Screenshot antes dos testes resolvidos](<print antes de resolver.png>)_ |

### Análise do Trace Viewer

| Aspecto | Observação |
|---------|------------|
| **Em qual asserção o teste falhou?** | |
| **Valor esperado** | |
| **Valor obtido** | |
| **Screenshot do momento da falha** | _(inserir)_ |

### Exemplo de cálculo demonstrando o defeito

| Notas inseridas | Média esperada (correta) | Média exibida (com defeito) | Diferença |
|:---------------:|:------------------------:|:---------------------------:|:---------:|
| N1=\_\_, N2=\_\_, N3=\_\_ | | | |
| N1=\_\_, N2=\_\_, N3=\_\_ | | | |
| N1=\_\_, N2=\_\_, N3=\_\_ | | | |

---

## Entregável 5 — Correção do Defeito

| Item | Detalhes |
|------|----------|
| **Arquivo corrigido** | `docs/js/app.js` |
| **Função corrigida** | |
| **Código original (com defeito)** | _(copiar o trecho com o bug)_ |
| **Código corrigido** | _(copiar o trecho corrigido)_ |
| **Hash do commit** | |
| **Mensagem do commit** | |

**Validação pós-correção:**

- ☐ Todos os testes passam após a correção
- ☐ O site no GitHub Pages foi atualizado (commit + push)
- ☐ O relatório HTML mostra 100% de aprovação

---

## Checklist Final de Entrega

| # | Entregável | Concluído |
|---|------------|:---------:|
| 1 | Fork do repositório + GitHub Pages funcionando | ☐ |
| 2 | Projeto Playwright com todos os testes (`qs-academico.spec.ts` e `qs-academico-codegen.spec.ts`) | ☐ |
| 3 | Screenshots/PDF do relatório HTML (antes e depois da correção) | ☐ |
| 4 | Registro do defeito encontrado (preenchido acima) | ☐ |
| 5 | Commit com a correção do defeito em `docs/js/app.js` | ☐ |
