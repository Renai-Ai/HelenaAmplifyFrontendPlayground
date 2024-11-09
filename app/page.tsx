"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  
  function deleteTodo(id: string) {
    client.models.Todo.delete({ id })
  }

  function listTodos() {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }

  useEffect(() => {
    listTodos();
  }, []);

  function createTodo() {
    client.models.Todo.create({
      content: window.prompt("Todo content"),
    });
  }

  return (
    <main>
    <h1 className="text-xl5464 font-bold underline">
      Hello world 2!
    </h1>
      <h1>This is the development version.</h1>
      Today is October 23rd of 2024. Call the echo handler:
      <button
        onClick={async () => {
          const {data, errors} = await client.queries.echo({ content: "Hello, from the frontend!" });
          alert(data?.content || errors?.map((e) => e.message).join("\n"));
        }}> Send Hello </button>


      <button
        onClick={async () => {
          const {data, errors} = await client.queries.echoPython({ content: "Hello, Python world!" });
          alert(data?.content || errors?.map((e) => e.message).join("\n"));
        }}> Send Hello Python </button>

      <h1>My todos</h1>
      <button onClick={createTodo}>+ new</button>
      <ul>
        {todos.map((todo) => (
          <li 
            onClick={() => deleteTodo(todo.id)}
            key={todo.id}>
              {todo.content}
          </li>
        ))}
      </ul>
      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/">
          Review next steps of this tutorial.
        </a>
      </div>
    </main>
  );
}
