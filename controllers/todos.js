import { todos } from "../data/todo-data.js";

function index(req, res) {
  res.render("todos/index", {
    todos: todos,
  });
}

function newTodo(req,res){
//render a view with a form
res.render("todos/new")
}

export { index,
newTodo as new };
