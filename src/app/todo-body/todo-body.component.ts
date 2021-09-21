import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateComponent } from '../create/create.component';
import { TodoModel } from '../models/todo-model';
import { TodoService } from '../services/todo.service';


@Component({
  selector: 'todo-body',
  templateUrl: './todo-body.component.html',
  styleUrls: ['./todo-body.component.scss']
})
export class TodoBodyComponent implements OnInit {
  todoList = new Array<TodoModel>();
  constructor(public dialog: MatDialog,
    private todoService: TodoService) {

   }

  ngOnInit(): void {
    this.todoList = this.todoService.retireveTodo()
  }

  createTodo() {
    const dialogRef = this.dialog.open(CreateComponent, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     if (result) {
      this.todoList.push(new TodoModel(result, false))
      this.todoService.saveTodo(this.todoList)
     }
    });
  }

  updateTodo(todo: TodoModel) {
    let index = this.todoList.indexOf(todo)
    todo.isChecked = !todo.isChecked;
    this.todoList[index] = todo
    this.todoService.saveTodo(this.todoList)
  }

  deleteTodo(todo: TodoModel) {
      this.todoList.splice(this.todoList.indexOf(todo), 1);
      this.todoService.saveTodo(this.todoList)
  }

  checkAllOrNone(value: boolean) {
    this.todoList.forEach(val => val.isChecked = value)
    this.todoService.saveTodo(this.todoList)
  }

  someComplete() {
      return this.todoList.every(t => t.isChecked)
  }
}
