import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
  
export class TodoService {
  private todos: Todo[] = [];
  private todosSubject: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);

  getTodos(): Observable<Todo[]> {
    return this.todosSubject.asObservable();
  }

  addTodo(todo: Todo): void {
    this.todos.push(todo);
    this.updateTodos();
  }

  deleteTodo(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
      this.updateTodos();
    }
  }

  private updateTodos(): void {
    this.todosSubject.next([...this.todos]);
  }
}
