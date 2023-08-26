import React, { useState } from 'react';
import './TodoApp.css';
import { Color, Download, Filter, Form, Header, List, Settings, Theme } from './components';
import { useSettings, useTodoList } from './hooks';
import { EditState, Todo } from './types';

function TodoApp() {
  const { todoList, addTodo, setTodoDone, deleteTodo, saveEditedTodo, filterTodoList } = useTodoList();
  const { settings, onThemeChange, onColorChange, onMultiColorChange, onDownloadChange } = useSettings(todoList);
  const [filterValue, setFilterValue] = useState<string>('all');
  const [editState, setEditState] = useState<EditState>({
    editing: false,
    editId: undefined
  });
  const [text, setText] = useState('');

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editState.editing && editState.editId !== undefined) {
      saveEditedTodo(editState.editId, text);
      setEditState({ editing: false, editId: undefined });
    } else {
      addTodo(text);
    }
    setText('');
  };

  // arrow function
  const onTodoDone = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, todo: Todo) => {
    e.stopPropagation();
    if (isTodoEditing(todo)) {
      alert('Засах горим идэвхжсэн байна!');
      return;
    }
    setTodoDone(todo);
  };

  const onDeleteTodo = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, todo: Todo) => {
    e.stopPropagation();
    deleteTodo(todo.id);
  };

  const onEditTodo = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, todo: Todo) => {
    e.stopPropagation();
    if (todo.done) {
      alert('Хийсэн зүйлийг засаж болохгүй!!');
      return;
    }
    setText(todo.text);
    setEditState({ editing: true, editId: todo.id });
  };

  const isTodoEditing = (todo: Todo) => editState.editId === todo.id && editState.editing;

  const filteredTodoList = filterTodoList(filterValue);

  return (
    <>
      <main className="app">
        <Header />
        <Form text={text} setText={setText} onFormSubmit={onFormSubmit} />
        <Filter filterValue={filterValue} setFilterValue={setFilterValue} />
        <List
          todoList={todoList}
          filteredTodoList={filteredTodoList}
          filterValue={filterValue}
          isTodoEditing={isTodoEditing}
          onTodoDone={onTodoDone}
          onEditTodo={onEditTodo}
          onDeleteTodo={onDeleteTodo}
        />
        <Settings>
          <Download downloadType={settings.downloadType} onDownloadChange={onDownloadChange} />
          <Theme theme={settings.theme} onThemeChange={onThemeChange} />
          <Color color={settings.color} multiColor={settings.multiColor} onColorChange={onColorChange} onMultiColorChange={onMultiColorChange} />
        </Settings>
      </main>
    </>
  );
}

export default TodoApp;
