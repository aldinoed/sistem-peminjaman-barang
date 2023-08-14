const express = require('express')
const app = express();
const database = require('./connection')

function getUserData(uname, pass) {
      return new Promise((resolve, reject) => {
            database.query(`Select username, password  from pengguna where username = '${uname}' AND password = '${pass}'`, (err, results) => {
                  if (err || results.lenght > 0) {
                        reject(new Error("Data tidak ditemukan"))
                  } else {
                        resolve(results)
                  }
            })
      })
}

getUserData('admin', 'admin')
      .then(result => { return result.rows[0].username })
      .catch(err => console.log(err))

module.exports = getUserData