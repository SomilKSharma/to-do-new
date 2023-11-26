import { Component, Input } from '@angular/core';
import { TodoService } from '../../todo.service';
import { Todo } from '../../todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'] // Fix the typo in styleUrls
})
export class TodoItemComponent {
  @Input() todo: Todo;

  constructor(private todoService: TodoService) {}

  onClick(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }

  onComplete(todo: Todo) {
    todo.active = false;
  }
}
