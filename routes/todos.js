import { Router } from "express";
import * as todosCtrl from "../controllers/todos.js"
const router = Router();

/* GET todos index(get localhost:3000/todos). */
router.get("/",todosCtrl.index );

export { router };
