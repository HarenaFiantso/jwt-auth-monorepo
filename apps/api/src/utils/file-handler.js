import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "src", "data", "todos.json");

const readTodos = () => {
  if (!fs.existsSync(filePath)) return [];
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data || "[]");
};

const writeTodos = (todos) => {
  fs.writeFileSync(filePath, JSON.stringify(todos, null, 2));
};

export { readTodos, writeTodos }
