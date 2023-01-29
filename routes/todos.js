import { Router } from "express";
import * as todosCtrl from "../controllers/todos.js";
const router = Router();

/* GET localhost:3000/todos) */
router.get("/", todosCtrl.index);
//GET /todos/new
router.get("/new", todosCtrl.new);
//POST /todos
router.post("/", todosCtrl.create);
export { router };
