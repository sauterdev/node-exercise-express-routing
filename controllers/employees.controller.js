// import connection from "../db";
import query from "../db/utils.js";

//CRUD operations

//reading data
 function getAll() {
  return query("SELECT * FROM employees");
}

function getOne(id) {
  return query(`SELECT * FROM employees WHERE EmployeeID = ?`, [id]);
}

//create data
function add(data){
  return query(`INSERT INTO employees SET ?`, [data] )
}

//update data
function update(id, data) {
  return query(`UPDATE employees SET ? WHERE EmployeeID = ?`, [data, id])
}

//delete data
function remove(id) {
  return query(`DELETE FROM employees WHERE EmployeeID =?`, [id]);
}

export default {
    getAll,
    getOne,
    add,
    update,
    remove
}