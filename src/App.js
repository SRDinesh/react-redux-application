import React from 'react';
import './style.css';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormTodo from './components/addtodo/AddTodo';
import Todo from './components/todo/Todo';
import { useSelector } from 'react-redux';

export default function App() {
  const { todos } = useSelector((state) => state);

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        <FormTodo />
        <div>
          {todos.map((todo, index) => (
            <Card key={index}>
              <Card.Body>
                <Todo key={index} index={index} todo={todo} />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
