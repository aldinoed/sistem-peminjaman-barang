const Pool = require('pg').Pool

const connectToDb = () => {
      const pool = new Pool({
            user: 'postgres',
            host: 'localhost',
            database: 'sistem_peminjaman_barang',
            password: 'aldinoed225',
            port: '5432'
      })

      try {
            pool.connect(err => {
                  if (err) {
                        throw new Error("Can't connect to database server.")
                  }
                  console.log("Database connected!")
            })
      } catch (err) {
            console.log(err.message)
      }
}

module.exports = connectToDb();
