import { Request, Response, Router } from 'express'
import financialService from '../services/financial-service'
import companyService from '../services/company-service'
import { Company } from '../domain/company'

class FinancialController {
  public Routes: Router = Router();

  store = async (req: Request, res: Response): Promise<Response> => {
    const company: Company = await companyService.fetchCompanyById(req.body.companyId)

    if (!company) {
      return res.json({ error: 'Company not Found' }).status(404)
    }

    try {
      await financialService.create(req.file, company.id)
      return res.status(200).send()
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  }
}

export default new FinancialController()
