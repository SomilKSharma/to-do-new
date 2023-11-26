import { Component } from '@angular/core';
import { TodoService } from '../../todo.service';
import { Todo } from '../../todo.model';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'] // Fix the typo in styleUrls
})
export class AddTodoComponent {
  desc: string;

  constructor(private todoService: TodoService) {}

  onSubmit() {
    if (this.desc) {
      const todo: Todo = {
        desc: this.desc,
        active: true
      };
      this.todoService.addTodo(todo);
      this.desc = '';
    }
  }
}
