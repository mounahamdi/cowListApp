const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'cowsDB'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL!')
  }
});

// Your Database Queries Here!!
const getCows = (callback)=>{
  let sqlSelect = `SELECT * FROM cows`
  connection.query(sqlSelect,function (error, results) {
    callback(error, results)
  });
}

const addCow = (id,name,description,callback)=>{
  let sqlInsert = `INSERT INTO cows (id,name,description) VALUES (?,?,?)`
  connection.query(sqlInsert, [[id],[name],[description]], function (error, results) {
    callback(error, results)
  });
}

const updateCow = (id,name,callback)=>{
  let sqlUpdate = `UPDATE cows SET name=? WHERE id=${id}`
  connection.query(sqlUpdate, [[name]], function (error, results) {
    callback(error, results)
  })
}

const deleteCow = (id,callback)=>{
  let sqlDelete = `DELETE FROM cows WHERE id=?`
  connection.query(sqlDelete, [id], function (error, results) {
    callback(error, results)
  })
}



// Don't forget to export your functions!
module.exports = {
  getCows,
  addCow,
  updateCow,
  deleteCow
};
