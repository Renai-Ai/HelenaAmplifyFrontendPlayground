"use client";

import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";
import outputs from "@/amplify_outputs.json";
import type { Schema } from "@/amplify/data/resource";
Amplify.configure(outputs);
import Button from "./Button";
import { useState, useEffect } from "react";

const client = generateClient<Schema>();
import React from 'react';

const TodoDemo = () => {

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
        <div>
        <Button label="+ new" onClick={createTodo} />
        <br />
        <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                <thead>
                    <tr>
                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Item</th>
                        <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Action</th>
                    </tr>
                </thead>
                <tbody>
                {todos.map((todo) => (
                    
                    <tr className="odd:bg-white even:bg-gray-100 dark:odd:bg-neutral-900 dark:even:bg-neutral-800">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800
                         dark:text-neutral-200">{todo.content}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                        <button type="button" className="inline-flex items-center gap-x-2 text-sm 
                        font-semibold rounded-lg border border-transparent text-blue-600
                         hover:text-blue-800 focus:outline-none focus:text-blue-800 
                         disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500
                          dark:hover:text-blue-400 dark:focus:text-blue-400"
                          onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
            </div>
        </div>
        </div>
        </div>
    );
  };

export default TodoDemo;