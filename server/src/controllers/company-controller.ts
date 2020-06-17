import { Request, Response, Router } from 'express'
import CompanyService from '../services/company-service'
import { Company } from '../domain/company'

class CompanyController {
    public Routes: Router = Router();

    show = async (req: Request, res: Response): Promise<Response<Company[]>> => {
      const companies: Company[] = await CompanyService.fetchAllCompanies()
      return res.json(companies)
    }

    store = async (req: Request, res: Response): Promise<Response<Company>> => {
      const companyId: number[] = await CompanyService.create(req.body)
      const company = { id: companyId[0], ...req.body }
      return res.json(company)
    }
}

export default new CompanyController()
