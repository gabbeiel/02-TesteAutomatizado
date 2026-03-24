import { test, expect } from '@playwright/test';

/*
test('test', async ({ page }) => {
  await page.goto('https://gabbeiel.github.io/02-TesteAutomatizado/');
  await page.getByRole('textbox', { name: 'Nome do Aluno' }).click();
  await page.getByRole('textbox', { name: 'Nome do Aluno' }).fill('Ana Silva');
  await page.getByRole('spinbutton', { name: 'Nota 1' }).click();
  await page.getByRole('spinbutton', { name: 'Nota 1' }).fill('8');
  await page.getByRole('spinbutton', { name: 'Nota 2' }).click();
  await page.getByRole('spinbutton', { name: 'Nota 2' }).fill('7');
  await page.getByRole('spinbutton', { name: 'Nota 3' }).click();
  await page.getByRole('spinbutton', { name: 'Nota 3' }).fill('9');
  await page.getByRole('button', { name: 'Cadastrar' }).click();
  await page.getByRole('textbox', { name: 'Nome do Aluno' }).fill('Carlos Lima');
  await page.getByRole('spinbutton', { name: 'Nota 1' }).click();
  await page.getByRole('spinbutton', { name: 'Nota 1' }).fill('5');
  await page.getByRole('spinbutton', { name: 'Nota 2' }).click();
  await page.getByRole('spinbutton', { name: 'Nota 2' }).fill('4');
  await page.getByRole('spinbutton', { name: 'Nota 3' }).click();
  await page.getByRole('spinbutton', { name: 'Nota 3' }).fill('6');
  await page.getByRole('button', { name: 'Cadastrar' }).click();
  await page.getByRole('textbox', { name: 'Buscar por nome' }).click();
  await page.getByRole('textbox', { name: 'Buscar por nome' }).fill('Ana');
  await page.getByRole('textbox', { name: 'Buscar por nome' }).press('ControlOrMeta+a');
  await page.getByRole('textbox', { name: 'Buscar por nome' }).fill('');
  await page.getByRole('button', { name: 'Excluir Carlos Lima' }).click();
});*/

test.describe('QS Acadêmico — Testes do Sistema de Notas', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://gabbeiel.github.io/02-TesteAutomatizado/');
  });

  // ========== GRUPO 1: Cadastro de Alunos ==========

  test.describe('Testes manuais', () => {
    

  });

  test.describe('Cadastro de Alunos', () => {

    test('Teste 1 validacao de notas: ', async ({ page }) => {
      await page.getByLabel('Nome do Aluno').fill('Alex Ferreira');
      await page.getByLabel('Nota 1').fill('11');
      await page.getByLabel('Nota 2').fill('-1');
      await page.getByLabel('Nota 3').fill('20');

      await page.getByRole('button', { name: 'Cadastrar' }).click();

      // Verificar que o aluno aparece na tabela
      await expect(page.locator('#tabela-alunos tbody tr')).toHaveCount(1);
      await expect(page.getByText('Alex Ferreira')).toBeHidden();
    });

    test('Teste 2 busca: ', async ({ page }) => {
      await page.getByLabel('Nome do Aluno').fill('Angale Ayin');
      await page.getByLabel('Nota 1').fill('6');
      await page.getByLabel('Nota 2').fill('5');
      await page.getByLabel('Nota 3').fill('10');

      await page.getByRole('button', { name: 'Cadastrar' }).click();

      await page.getByLabel('Nome do Aluno').fill('Roland Orlando');
      await page.getByLabel('Nota 1').fill('7');
      await page.getByLabel('Nota 2').fill('6');
      await page.getByLabel('Nota 3').fill('6');

      await page.getByRole('button', { name: 'Cadastrar' }).click();

      // Verificar que o aluno aparece na tabela
      await expect(page.locator('#tabela-alunos tbody tr')).toHaveCount(2);
      await page.getByRole('textbox', { name: 'Buscar por nome' }).fill('Roland Orlando');
      await expect(page.locator('#tabela-alunos tbody tr')).toHaveCount(1);
    });

    test('Teste 3 exclusao: ', async ({ page }) => {
      await page.getByLabel('Nome do Aluno').fill('Catherine Earnshaw');
      await page.getByLabel('Nota 1').fill('10');
      await page.getByLabel('Nota 2').fill('8');
      await page.getByLabel('Nota 3').fill('9');

      await page.getByRole('button', { name: 'Cadastrar' }).click();

      

      await page.getByRole('textbox', { name: 'Buscar por nome' }).fill('');
      await page.getByRole('button', { name: 'Excluir Catherine Earnshaw' }).click();
      await expect(page.getByText('Catherine Earnshaw')).toBeHidden();
      await expect(page.getByText('Nenhum aluno cadastrado.')).toBeVisible();
    });

    test('Teste 4 estatiscas: ', async ({ page }) => {
      await page.getByRole('textbox', { name: 'Nome do Aluno' }).click();
      await page.getByRole('textbox', { name: 'Nome do Aluno' }).fill('Heatcliff');
      await page.getByRole('spinbutton', { name: 'Nota 1' }).click();
      await page.getByRole('spinbutton', { name: 'Nota 1' }).fill('1');
      await page.getByRole('spinbutton', { name: 'Nota 2' }).click();
      await page.getByRole('spinbutton', { name: 'Nota 2' }).fill('1');
      await page.getByRole('spinbutton', { name: 'Nota 3' }).click();
      await page.getByRole('spinbutton', { name: 'Nota 3' }).fill('1');
      await page.getByRole('button', { name: 'Cadastrar' }).click();
      await page.getByRole('textbox', { name: 'Nome do Aluno' }).click();
      await page.getByRole('textbox', { name: 'Nome do Aluno' }).fill('Benjamin ');
      await page.getByRole('spinbutton', { name: 'Nota 1' }).click();
      await page.getByRole('spinbutton', { name: 'Nota 1' }).fill('5');
      await page.getByRole('spinbutton', { name: 'Nota 2' }).click();
      await page.getByRole('spinbutton', { name: 'Nota 2' }).fill('5');
      await page.getByRole('spinbutton', { name: 'Nota 3' }).click();
      await page.getByRole('spinbutton', { name: 'Nota 3' }).fill('5');
      await page.getByRole('button', { name: 'Cadastrar' }).click();
      await page.getByRole('button', { name: 'Cadastrar' }).click();
      await page.getByRole('textbox', { name: 'Nome do Aluno' }).fill('Faust');
      await page.getByRole('spinbutton', { name: 'Nota 1' }).click();
      await page.getByRole('spinbutton', { name: 'Nota 1' }).fill('10');
      await page.getByRole('spinbutton', { name: 'Nota 2' }).click();
      await page.getByRole('spinbutton', { name: 'Nota 2' }).fill('10');
      await page.getByRole('spinbutton', { name: 'Nota 3' }).click();
      await page.getByRole('spinbutton', { name: 'Nota 3' }).fill('10');
      await page.getByRole('button', { name: 'Cadastrar' }).click();
      await page.getByTestId('total-aprovados').getByText('1', { exact: true }).click();
      await page.getByTestId('total-recuperacao').getByText('1', { exact: true }).click();
      await page.getByTestId('total-reprovados').getByText('1', { exact: true }).click();
    });

    test('Teste 5 Situacao aprovado: ', async ({ page }) => {
      await page.getByRole('textbox', { name: 'Nome do Aluno' }).click();
      await page.getByRole('textbox', { name: 'Nome do Aluno' }).fill('Faust');
      await page.getByRole('spinbutton', { name: 'Nota 1' }).click();
      await page.getByRole('spinbutton', { name: 'Nota 1' }).fill('10');
      await page.getByRole('spinbutton', { name: 'Nota 2' }).click();
      await page.getByRole('spinbutton', { name: 'Nota 2' }).fill('10');
      await page.getByRole('spinbutton', { name: 'Nota 3' }).click();
      await page.getByRole('spinbutton', { name: 'Nota 3' }).fill('10');
      await page.getByRole('button', { name: 'Cadastrar' }).click();
      await page.getByTestId('total-aprovados').getByText('1', { exact: true }).click();
    });

    test('Teste 6 Situacao reprovado: ', async ({ page }) => {
      await page.getByRole('textbox', { name: 'Nome do Aluno' }).click();
      await page.getByRole('textbox', { name: 'Nome do Aluno' }).fill('Heatcliff');
      await page.getByRole('spinbutton', { name: 'Nota 1' }).click();
      await page.getByRole('spinbutton', { name: 'Nota 1' }).fill('1');
      await page.getByRole('spinbutton', { name: 'Nota 2' }).click();
      await page.getByRole('spinbutton', { name: 'Nota 2' }).fill('1');
      await page.getByRole('spinbutton', { name: 'Nota 3' }).click();
      await page.getByRole('spinbutton', { name: 'Nota 3' }).fill('1');
      await page.getByRole('button', { name: 'Cadastrar' }).click();
      await page.getByTestId('total-reprovados').getByText('1', { exact: true }).click();
    });

    test('Teste 7 multiplos cadastros: ', async ({ page }) => {
      await page.getByRole('textbox', { name: 'Nome do Aluno' }).click();
      await page.getByRole('textbox', { name: 'Nome do Aluno' }).fill('Heatcliff');
      await page.getByRole('spinbutton', { name: 'Nota 1' }).click();
      await page.getByRole('spinbutton', { name: 'Nota 1' }).fill('1');
      await page.getByRole('spinbutton', { name: 'Nota 2' }).click();
      await page.getByRole('spinbutton', { name: 'Nota 2' }).fill('1');
      await page.getByRole('spinbutton', { name: 'Nota 3' }).click();
      await page.getByRole('spinbutton', { name: 'Nota 3' }).fill('1');
      await page.getByRole('button', { name: 'Cadastrar' }).click();
      await page.getByRole('textbox', { name: 'Nome do Aluno' }).click();
      await page.getByRole('textbox', { name: 'Nome do Aluno' }).fill('Benjamin ');
      await page.getByRole('spinbutton', { name: 'Nota 1' }).click();
      await page.getByRole('spinbutton', { name: 'Nota 1' }).fill('5');
      await page.getByRole('spinbutton', { name: 'Nota 2' }).click();
      await page.getByRole('spinbutton', { name: 'Nota 2' }).fill('5');
      await page.getByRole('spinbutton', { name: 'Nota 3' }).click();
      await page.getByRole('spinbutton', { name: 'Nota 3' }).fill('5');
      await page.getByRole('button', { name: 'Cadastrar' }).click();
      await page.getByRole('button', { name: 'Cadastrar' }).click();
      await page.getByRole('textbox', { name: 'Nome do Aluno' }).fill('Faust');
      await page.getByRole('spinbutton', { name: 'Nota 1' }).click();
      await page.getByRole('spinbutton', { name: 'Nota 1' }).fill('10');
      await page.getByRole('spinbutton', { name: 'Nota 2' }).click();
      await page.getByRole('spinbutton', { name: 'Nota 2' }).fill('10');
      await page.getByRole('spinbutton', { name: 'Nota 3' }).click();
      await page.getByRole('spinbutton', { name: 'Nota 3' }).fill('10');
      await page.getByRole('button', { name: 'Cadastrar' }).click();
      await expect(page.locator('#tabela-alunos tbody tr')).toHaveCount(3);
    });

    test('Teste 8 situacao recuperacao: ', async ({ page }) => {

      await page.getByRole('textbox', { name: 'Nome do Aluno' }).click();
      await page.getByRole('textbox', { name: 'Nome do Aluno' }).fill('Benjamin ');
      await page.getByRole('spinbutton', { name: 'Nota 1' }).click();
      await page.getByRole('spinbutton', { name: 'Nota 1' }).fill('5');
      await page.getByRole('spinbutton', { name: 'Nota 2' }).click();
      await page.getByRole('spinbutton', { name: 'Nota 2' }).fill('5');
      await page.getByRole('spinbutton', { name: 'Nota 3' }).click();
      await page.getByRole('spinbutton', { name: 'Nota 3' }).fill('5');
      await page.getByRole('button', { name: 'Cadastrar' }).click();
      await page.getByRole('button', { name: 'Cadastrar' }).click();
      
      await page.getByTestId('total-recuperacao').getByText('1', { exact: true }).click();
    });


    test('deve cadastrar um aluno com dados válidos', async ({ page }) => {
      await page.getByLabel('Nome do Aluno').fill('João Silva');
      await page.getByLabel('Nota 1').fill('7');
      await page.getByLabel('Nota 2').fill('8');
      await page.getByLabel('Nota 3').fill('6');

      await page.getByRole('button', { name: 'Cadastrar' }).click();

      // Verificar que o aluno aparece na tabela
      await expect(page.locator('#tabela-alunos tbody tr')).toHaveCount(1);
      await page.getByRole('cell', { name: 'João Silva', exact: true }).click();
    });

    test('deve exibir mensagem de sucesso após cadastro', async ({ page }) => {
      await page.getByLabel('Nome do Aluno').fill('Ana Costa');
      await page.getByLabel('Nota 1').fill('9');
      await page.getByLabel('Nota 2').fill('8');
      await page.getByLabel('Nota 3').fill('10');

      await page.getByRole('button', { name: 'Cadastrar' }).click();

      await expect(page.locator('#mensagem')).toContainText('cadastrado com sucesso');
    });

    test('não deve cadastrar aluno sem nome', async ({ page }) => {
      await page.getByLabel('Nota 1').fill('7');
      await page.getByLabel('Nota 2').fill('8');
      await page.getByLabel('Nota 3').fill('6');

      await page.getByRole('button', { name: 'Cadastrar' }).click();

      // A tabela deve continuar sem dados reais
      await expect(page.locator('#tabela-alunos tbody td.texto-central')).toBeVisible();
    });
    
  });

  // ========== GRUPO 2: Cálculo de Média ==========

  test.describe('Cálculo de Média', () => {

    test('deve calcular a média aritmética das três notas', async ({ page }) => {
      await page.getByLabel('Nome do Aluno').fill('Pedro Santos');
      await page.getByLabel('Nota 1').fill('8');
      await page.getByLabel('Nota 2').fill('6');
      await page.getByLabel('Nota 3').fill('10');

      await page.getByRole('button', { name: 'Cadastrar' }).click();

      // Média esperada: (8 + 6 + 10) / 3 = 8.00
      const celulaMedia = page.locator('#tabela-alunos tbody tr').first().locator('td').nth(4);
      await expect(celulaMedia).toHaveText('8.00');
    });

  });
});