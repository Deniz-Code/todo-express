import { Todo } from "../models/todo.js";

function index(req, res) {
  //use the model to find all the todos
  //empty {} takes everything
  Todo.find({})
    .then((todos) => {
      //respond by rendering a view with those todos
      res.render("todos/index", {
        todos: todos,
      });
    })
    //handle errors
    .catch((error) => {
      console.log(error);
      res.redirect("/todos");
    });
}

function newTodo(req, res) {
  //render a view with a form
  res.render("todos/new");
}

function create(req, res) {
  req.body.done = false;
  Todo.create(req.body)
    .then((todo) => {
      res.redirect("/todos");
    })
    .catch((error) => {
      console.log(error);
      res.redirect("/todos");
    });
}

function show(req, res) {
  console.log(req.params);
  //.id comes from the route(we set it)
  Todo.findById(req.params.id).then((todo) => {
    res.render("todos/show", {
      todo: todo,
    });
  })
  .catch((error) => {
    console.log(error);
    res.redirect("/todos");
  });
}
export { index, newTodo as new, create, show };
