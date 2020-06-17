define({ "api": [
  {
    "type": "get",
    "url": "/companies",
    "title": "",
    "version": "1.0.0",
    "group": "Dados_financeiros",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "companyId",
            "description": "<p>Id da empresa a qual pertence os dados financeiros.</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>Arquivo no formato csv que contém os dados financeiros da empresa.</p>"
          }
        ]
      }
    },
    "description": "<p>Persiste os dados financeiros enviados em arquivo CSV</p>",
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Erro",
          "content": "HTTP/1.1 400 BAD REQUEST",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes .ts",
    "groupTitle": "Dados_financeiros",
    "name": "GetCompanies"
  },
  {
    "type": "get",
    "url": "/companies",
    "title": "",
    "version": "1.0.0",
    "group": "Empresas",
    "description": "<p>Lista de todas as empresas e seu score</p>",
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n [\n   {\n     \"id\": 1,\n     \"name\": \"Empresa Exemplo\",\n     \"score\": 80\n   }\n ]",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes .ts",
    "groupTitle": "Empresas",
    "name": "GetCompanies"
  }
] });
