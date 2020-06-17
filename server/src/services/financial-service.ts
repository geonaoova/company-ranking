import Connection from '../config/database/connection'
import { Financial } from '../domain/financial'
import csv from 'csv-parse/lib/sync'

class FinancialService {
  async create (file: Express.Multer.File, companyId: number): Promise<void> {
    try {
      const stringCsv = file.buffer.toString('utf8')
      const parsedCsv = this.parseCsv(stringCsv, companyId)
      await Connection('financial').insert(parsedCsv)
    } catch (error) {
      throw new Error(error)
    }
  }

  parseCsv (stringCsv: string, companyId: number): Financial[] {
    const records = csv(stringCsv, {
      columns: ['financialId', 'type'],
      skip_empty_lines: true,
      from_line: 2,
      trim: true,
      on_record: record => { return { ...record, companyId } }
    })

    return records
  }
}

export default new FinancialService()
