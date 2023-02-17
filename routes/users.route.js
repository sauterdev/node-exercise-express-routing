import express from "express";
import db from "../mockdb/index"
import employees from "../controllers/employees.controller"
const router = express.Router();

router.get("/:id?", async(req, res, next) => {
    try {
      const { id } = req.params;
      let data;
      //if we were given an id to work with
      if(id){
            data = await employees.getOne(id)
            //we dont ant to have to write sql commands here
      } else {
            data = await employees.getAll()
      }
      res.json(data);
    } catch(err) {
      next(err);
    }
  })
  
  router.post("/", async(req, res, next) => {
    try {
      const newEmployee = req.body;
      const data = await employees.add(newEmployee);
      res.json(data)
    } catch(err) {
      next(err);
    }
  })
  
  router.put("/:id", async(req, res, next) => {
    try {
      const { id } = req.params;
      const updatedEmployee = req.body;
      const data = await employees.update(id, updatedEmployee);
      res.json(data);
    } catch(err) {
      next(err);
    }
  })
  
  router.delete("/:id", async(req, res, next) => {
    console.log(`trying the delete request`)
    try {
      const { id } = req.params;
      const data = await employees.remove(id);
      res.json(data);
    } catch(err) {
      next(err);
    }
  })

  export default router