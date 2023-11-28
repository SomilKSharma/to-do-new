import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../todo.service';
import { Todo } from '../../todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
  
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  desc: string;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos: Todo[]) => {
      this.todos = todos;
    });
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }

  private addTodo() {
    const todo: Todo = {
      desc: this.desc,
      active: true
    };
    this.todoService.addTodo(todo);
    this.desc = '';
  }

  addTodoItem() {
    if (this.desc) {
      this.addTodo();
    }
  }

  onSubmit() {
    this.addTodoItem();
  }

  onClick(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }

  onComplete(todo: Todo) {
    todo.active = false;
  }
}
