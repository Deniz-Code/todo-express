import { Router } from "express";
import * as todosCtrl from "../controllers/todos.js";
const router = Router();

/* GET localhost:3000/todos) */
router.get("/", todosCtrl.index);
//GET /todos/new
router.get("/new", todosCtrl.new);
//GET /todos/:id
//ALWAYS SHOW AFTER NEW because /:id can be anything so it turns the /new to a id
//the more /:id the more down you need to put them 
router.get("/:id",todosCtrl.show)

//GET /todos/:id/edit
router.get("/:id/edit",todosCtrl.edit)
//POST /todos
router.post("/", todosCtrl.create);

//delete/todos/:id
router.delete("/:id",todosCtrl.delete)
export { router };
