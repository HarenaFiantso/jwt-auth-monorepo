import { readTodos, writeTodos } from "../utils/file-handler.js";

const getAllTodos = (_req, res) => {
  try {
    const todos = readTodos();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: "Error reading todos" });
  }
};

const createTodo = (req, res) => {
  try {
    const todos = readTodos();
    const newTodo = {
      id: crypto.randomUUID(),
      title: req.body.title,
      completed: false,
    };
    todos.push(newTodo);
    writeTodos(todos);
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ message: "Error creating todo" });
  }
};

const updateTodo = (req, res) => {
  try {
    const { id } = req.params;
    const todos = readTodos();
    const index = todos.findIndex((t) => t.id == id);

    if (index === -1) {
      return res.status(404).json({ message: "Todo not found" });
    }

    todos[index] = { ...todos[index], ...req.body };
    writeTodos(todos);

    res.json(todos[index]);
  } catch (error) {
    res.status(500).json({ message: "Error updating todo" });
  }
};

const deleteTodo = (req, res) => {
  try {
    const { id } = req.params;
    let todos = readTodos();
    const index = todos.findIndex((t) => t.id == id);

    if (index === -1) {
      return res.status(404).json({ message: "Todo not found" });
    }

    const deleted = todos[index];
    todos = todos.filter((t) => t.id != id);
    writeTodos(todos);

    res.json(deleted);
  } catch (error) {
    res.status(500).json({ message: "Error deleting todo" });
  }
};

export { getAllTodos, createTodo, updateTodo, deleteTodo };
