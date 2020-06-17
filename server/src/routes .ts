import Router from 'express'
import CompanyControler from './controllers/company-controller'
import financial from './controllers/financial-controller'
import multer from 'multer'
import path from 'path'

const routes = Router()
const uploads = multer()

/**
 * @api {get} /companies
 * @apiVersion 1.0.0
 * @apiGroup Empresas
 *
 * @apiDescription Lista de todas as empresas e seu score
 *
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *     [
 *       {
 *         "id": 1,
 *         "name": "Empresa Exemplo",
 *         "score": 80
 *       }
 *     ]
 */
routes.get('/companies', CompanyControler.show)

/**
 * @api {get} /companies
 * @apiVersion 1.0.0
 * @apiGroup Dados financeiros
 * @apiParam {Number} companyId Id da empresa a qual pertence os dados financeiros.
 * @apiParam {File} file Arquivo no formato csv que contém os dados financeiros da empresa.
 *
 * @apiDescription Persiste os dados financeiros enviados em arquivo CSV
 *
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *
 * @apiErrorExample {json} Erro
 *    HTTP/1.1 400 BAD REQUEST
 */
routes.post('/upload', uploads.single('file'), financial.store)

routes.use('/apidoc', Router.static(path.resolve(__dirname, '..', 'apidoc')))

export default routes
