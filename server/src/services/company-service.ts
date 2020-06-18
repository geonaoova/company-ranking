import Connection from '../config/database/connection'
import { Company } from '../domain/company'
import { Financial } from '../domain/financial'
import { CompanyDto } from '../dto/CompanyDto'

class CompanyService {
  async create (company: Company): Promise<number[]> {
    return Connection('company').insert(company)
  }

  async fetchAllCompanies (): Promise<CompanyDto[]> {
    const companies = await Connection<Company>('company')
    const financialsData = await Connection<Financial>('financial')

    const companiesWithScore: CompanyDto[] = companies.map(company => {
      const score = this.calculateScore(company, financialsData)
      return { ...company, score }
    })

    return companiesWithScore
  }

  fetchCompanyById (id: number): Promise<Company> {
    return Connection<Company>('company').select('*').where('id', id).first()
  }

  calculateScore (company: Company, financialsData: Financial[]): number {
    let score = financialsData
      .filter(financialData => financialData.companyId === company.id)
      .sort((f1, f2) => this.sortFinancialDataByType(f1, f2))
      .reduce((acumullator, financialData) => {
        return financialData.type === 'Débito'
          ? Math.ceil(acumullator - acumullator * 0.04)
          : Math.trunc(acumullator + acumullator * 0.02)
      }, 50)

    if (score > 100) {
      score = 100
    } else if (score < 1) {
      score = 1
    }

    return score
  }

  sortFinancialDataByType (f1: Financial, f2: Financial): number {
    if (f1.type < f2.type) {
      return 1
    }
    if (f1.type > f2.type) {
      return -1
    }
    return 0
  }
}

export default new CompanyService()
