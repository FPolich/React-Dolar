const Pool = require('pg').Pool
const pool = new Pool({
  user: 'aceleradora08',
  host: 'localhost',
  database: 'postgres',
  password: '1234',
  port: 5432,
});

const getDolar = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM tabladolar', (error, results) => {
        if (error) {
          reject(error)
        }

        resolve(results);
      })
    }) 
  }
  const createDolar = (body) => {
    return new Promise(function(resolve, reject) {
      const { tipo_de_consulta, datetime, buy, sale} = body
      pool.query('INSERT INTO tabladolar (tipo_de_consulta, datetime, compra, venta) VALUES ($1, $2, $3, $4) RETURNING *', [tipo_de_consulta, datetime, buy, sale], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`A new dolar has been added added: ${results}`)
      })
    })
  }
  const deleteDolar = () => {
    return new Promise(function(resolve, reject) {
      const tipo_de_consulta = parseInt(request.params.tipo_de_consulta)
      pool.query('DELETE FROM tabladolar WHERE tipo_de_consulta = $1', [tipo_de_consulta], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`Dolar deleted with tipo de consulta: ${tipo_de_consulta}`)
      })
    })
  }
  
  module.exports = {
    getDolar,
    createDolar,
    deleteDolar,
  }