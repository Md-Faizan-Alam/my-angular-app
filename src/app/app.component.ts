import { Component, Input } from '@angular/core';
import { Todo } from './Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todos: Todo[] = [];
  serial: number = 0;
  constructor() {
    const body = document.getElementsByTagName('body')[0];
    body.style.backgroundColor = 'var(--bs-warning)';
    this.todos = [];
  }
  deleteTodo = (todo: Todo) => {
    let index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    this.serial--;
  };
  addTodo(todo: Todo) {
    this.serial++;
    todo.id = this.serial;
    this.todos.push(todo);
  }
}
