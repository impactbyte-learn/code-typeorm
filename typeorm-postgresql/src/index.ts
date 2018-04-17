import "reflect-metadata";
import { createConnection } from "typeorm";
import { Todo } from "./entity/Todo";

createConnection()
  .then(async connection => {
    console.log("Inserting a new todo into the database...");

    const todo = new Todo();

    todo.text = "Learn TypeScript";
    todo.point = 30;

    await connection.manager.save(todo);

    console.log("Saved a new todo with id: " + todo.id);

    console.log("Loading todos from the database...");

    const todos = await connection.manager.find(Todo);

    console.log("Loaded todos: ", todos);

    console.log("Here you can setup and run express/koa/any other framework.");
  })
  .catch(error => console.log(error));
