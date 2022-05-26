import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TodosService } from 'src/app/services/todos.service';
import { Todo } from '../../models/Todo';


@Component({
  selector: 'app-todos-createtodo',
  templateUrl: './createtodo.component.html',
  styleUrls: ['./createtodo.component.scss']
})
export class CreatetodoComponent implements OnInit {
  title = new FormControl('');
  createdTask!: Todo;
  @Output() newTask = new EventEmitter<Todo>();

  // default values
  isFormOpen: boolean = false;
  addButtonStatus:string = `add_circle_outline_icon`;

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {}

  // toggle form and change add task button
  toggleForm() {
    this.isFormOpen = !this.isFormOpen;
    this.addButtonStatus = this.isFormOpen ? `remove_circle_outline_icon` :
    `add_circle_outline_icon`;
  }

  // lifting new task
  addNewTask (createdTask: Todo) {
    this.newTask.emit(createdTask)
  }

  // add todo item
  addTodoItem (e:any) {
    e.preventDefault();
    const newTitle: string = this.title.value;
    // create new todo according to interface
    const newTodo = {
      userId: new Date().getUTCMilliseconds(),
      id: Date.now(), //we should use uuid
      title: newTitle,
      completed: false,
    }
    // pass to service addtodo method(fake POST request to server)
    this.todosService.addTodo(newTodo)
      // get our data from server
    .subscribe(data => {
      // server returns object as a response
      this.createdTask = data
      // start emit result
      this.addNewTask(this.createdTask)
      // clear out input
      this.title.setValue('')
    })
  }
}
