import { useState } from 'react';
import { storage } from '../storage';
import { Todo } from '../types';
// Todo list app-iin gol2 logic-uudiig bagtaasan custom hook buyu function bna
export function useTodoList() {
  const [todoList, setTodoList] = useState<Todo[]>(storage.todoList);

  function addTodo(text: string) {
    setTodoList((prevList) => {
      const newTodoList = [
        ...prevList,
        {
          id: crypto.randomUUID(),
          text,
          done: false
        }
      ];
      storage.todoList = newTodoList;
      return newTodoList;
    });
  }

  function setTodoDone(oldTodo: Todo) {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === oldTodo.id) {
        // toggle uildel
        todo.done = !oldTodo.done;
      }
      return todo;
    });
    storage.todoList = newTodoList;
    setTodoList(newTodoList);
  }

  function deleteTodo(id: string) {
    const copyTodoList = [...todoList];
    const newTodoList = copyTodoList.filter((todo) => todo.id !== id);
    storage.todoList = newTodoList;
    setTodoList(newTodoList);
  }

  function saveEditedTodo(editId: string, text: string) {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === editId) {
        todo.text = text;
      }
      return todo;
    });
    storage.todoList = newTodoList;
    setTodoList(newTodoList);
  }

  function filterTodoList(filterValue: string) {
    let filteredList = [...todoList];
    if (filterValue === 'done') {
      filteredList = filteredList.filter((todo) => todo.done);
    }
    if (filterValue === 'undone') {
      filteredList = filteredList.filter((todo) => !todo.done);
    }
    return filteredList;
  }

  return { todoList, addTodo, setTodoDone, deleteTodo, saveEditedTodo, filterTodoList };
}
