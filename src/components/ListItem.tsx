/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import clsx from 'clsx';
import React from 'react';
import { Todo } from '../types';

type ListItemProps = {
  todo: Todo;
  isTodoEditing: (_todo: Todo) => boolean;
  onTodoDone: (_e: React.MouseEvent<HTMLLIElement, MouseEvent>, _todo: Todo) => void;
  onEditTodo: (_e: React.MouseEvent<HTMLSpanElement, MouseEvent>, _todo: Todo) => void;
  onDeleteTodo: (_e: React.MouseEvent<HTMLSpanElement, MouseEvent>, _todo: Todo) => void;
};

export function ListItem({ todo, isTodoEditing, onTodoDone, onEditTodo, onDeleteTodo }: ListItemProps) {
  return (
    <li
      data-done={todo.done}
      onClick={(e) => onTodoDone(e, todo)}
      style={{
        color: isTodoEditing(todo) ? 'var(--white)' : 'var(--base-color)',
        backgroundColor: isTodoEditing(todo) ? 'var(--app-color)' : 'var(--base-background-color)'
      }}
    >
      <i
        style={{
          color: isTodoEditing(todo) ? 'var(--white)' : 'var(--app-color)'
        }}
        className={clsx('done_icon bi', todo.done && 'bi-check-circle-fill', !todo.done && 'bi-check-circle')}
      ></i>
      {todo.text}
      {!isTodoEditing(todo) ? (
        <>
          <span className="edit_span" role="button" tabIndex={0} aria-label="Edit todo item" onClick={(e) => onEditTodo(e, todo)}>
            <i className="bi bi-pencil-square"></i>
          </span>
          <span className="delete_span" role="button" tabIndex={0} onClick={(e) => onDeleteTodo(e, todo)}>
            <i className="bi bi-x"></i>
          </span>
        </>
      ) : null}
    </li>
  );
}
