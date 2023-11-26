import { Component, Input } from '@angular/core';
import { TodoService } from '../../todo.service';
import { Todo } from '../../todo.model';

@Component({
  selector: 'app-complete-todo',
  templateUrl: './complete-todo.component.html',
  styleUrls: ['./complete-todo.component.css']
})
export class CompleteTodoComponent {
  @Input() todo: Todo;

  constructor(private todoService: TodoService) {}

  onClick(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}
