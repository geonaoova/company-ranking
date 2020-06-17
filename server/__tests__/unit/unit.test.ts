import FinancialService from '../../src/services/financial-service'
import companyService from '../../src/services/company-service'
import { Financial } from '../../src/domain/financial'

it('A varável de ambiente NODE_ENV deve ser "test"', () => {
  expect(process.env.NODE_ENV).toBe('test')
})

it('A função parseCsv deve conseguir fazer o parse da string csv para objeto', () => {
  const stringCsv =
  `coluna1,coluna2
valor1,valor2`
  const parsedCsv = FinancialService.parseCsv(stringCsv, 1)

  expect(parsedCsv).toStrictEqual([{ financialId: 'valor1', type: 'valor2', companyId: 1 }])
})

it('Dadas 3 Notas fiscais e 1 Débito, a função calculateScore deve retornar 53', () => {
  const company = { id: 1, name: 'Empresa teste' }
  const dadosFinanceiros: Financial[] = [
    { id: 1, financialId: 1, type: 'Nota Fiscal', companyId: 1 },
    { id: 2, financialId: 2, type: 'Nota Fiscal', companyId: 1 },
    { id: 3, financialId: 3, type: 'Débito', companyId: 1 },
    { id: 4, financialId: 4, type: 'Nota Fiscal', companyId: 1 }
  ]

  const score = companyService.calculateScore(company, dadosFinanceiros)

  expect(score).toBe(51)
})
