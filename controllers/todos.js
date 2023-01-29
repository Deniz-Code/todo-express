import { Todo } from "../models/todo.js";

function index(req, res) {
  //use the model to find all the todos
  //empty {} takes everything
  Todo.find({})
    .then(todos => {
      //respond by rendering a view with those todos
      res.render("todos/index", {
        todos: todos
      })
    })
    //handle errors
    .catch(error => {
      console.log(error);
      res.redirect("/");
    })
  
}

export { index};
