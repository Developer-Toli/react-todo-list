import { Todo } from '../types';

// LocalStorage-tai ajilna
export const storage = {
  set theme(theme: string | null) {
    this.set('theme', theme ?? '');
  },
  get theme() {
    return this.get('theme');
  },
  set color(color: string | null) {
    this.set('color', color ?? '');
  },
  get color() {
    return this.get('color');
  },
  set multiColor(color: string | null) {
    this.set('multiColor', color ?? '');
  },
  get multiColor() {
    return this.get('multiColor');
  },
  set todoList(todos: Todo[]) {
    this.set('todoList', JSON.stringify(todos));
  },
  get todoList() {
    return JSON.parse(this.get('todoList') ?? '[]') as Todo[];
  },
  set(key: string, value: string) {
    localStorage.setItem(key, value);
  },
  get(key: string) {
    return localStorage.getItem(key);
  },
  remove(key: string) {
    localStorage.removeItem(key);
  }
};
