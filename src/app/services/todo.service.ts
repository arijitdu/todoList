import { TodoModel } from './../models/todo-model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  retireveTodo(): Array<TodoModel> {
    let todos = localStorage.getItem('todos');
    let todoList = JSON.parse(todos || "")
    return todoList
  }

  saveTodo(todoList: Array<TodoModel>) {
    let todos = JSON.stringify(todoList)
    localStorage.setItem('todos', todos);
  }
}
