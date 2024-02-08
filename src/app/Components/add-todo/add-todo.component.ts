import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  title: string;
  desc: string;

  constructor() {}

  ngOnInit(): void {}

  emitTodo() {
    let todo = new Todo();
    todo.name = this.title;
    todo.description = this.desc;
    todo.active = true;
    this.todoAdd.emit(todo);
  }
}
