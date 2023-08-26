import React from 'react';
import { Todo } from '../types';
import { ListItem } from './ListItem';

type ListProps = {
  todoList: Todo[];
  filteredTodoList: Todo[];
  filterValue: string;
  isTodoEditing: (_todo: Todo) => boolean;
  onTodoDone: (_e: React.MouseEvent<HTMLLIElement, MouseEvent>, _todo: Todo) => void;
  onEditTodo: (_e: React.MouseEvent<HTMLSpanElement, MouseEvent>, _todo: Todo) => void;
  onDeleteTodo: (_e: React.MouseEvent<HTMLSpanElement, MouseEvent>, _todo: Todo) => void;
};

type ListEmptyProps = {
  todoList: Todo[];
  filterValue: string;
};

function ListEmpty({ todoList, filterValue }: ListEmptyProps) {
  return (
    <p className="app_list_empty">
      {todoList.length > 0 && filterValue === 'done'
        ? 'Хийсэн зүйл алга байна.'
        : todoList.length > 0 && filterValue === 'undone'
        ? 'Хийгээгүй зүйл алга байна.'
        : 'Хийх зүйлс алга байна.'}
    </p>
  );
}

export function List({ todoList, filteredTodoList, filterValue, isTodoEditing, onTodoDone, onEditTodo, onDeleteTodo }: ListProps) {
  return (
    <div className="app_list">
      {filteredTodoList?.length > 0 ? (
        <ul>
          {filteredTodoList?.map((todo) => (
            <ListItem
              key={todo.id}
              todo={todo}
              isTodoEditing={isTodoEditing}
              onTodoDone={onTodoDone}
              onEditTodo={onEditTodo}
              onDeleteTodo={onDeleteTodo}
            />
          ))}
        </ul>
      ) : (
        <ListEmpty todoList={todoList} filterValue={filterValue} />
      )}
    </div>
  );
}
