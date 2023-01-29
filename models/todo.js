import mongoose from "mongoose";

//making it a shortcut
const Schema = mongoose.Schema;
//creating the schema
const todoSchema = new Schema({
  text: String,
  done: Boolean,
});

//compiling the schema
const Todo = mongoose.model("Todo", todoSchema);

export { Todo };
