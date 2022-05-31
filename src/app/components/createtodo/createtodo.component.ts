import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TodosService } from 'src/app/services/todos.service';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos-createtodo',
  templateUrl: './createtodo.component.html',
  styleUrls: ['./createtodo.component.scss']
})
export class CreatetodoComponent implements OnInit {
  // form binding
  title = new FormControl('');
  createdTask!: Todo;
  currentlyAddedTodoId!: number;

  @Input() userId!: number;
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
  addTodo (createdTask: Todo) {
    this.newTask.emit(createdTask)
  }

  // add todo item
  onAddTodoItem (e:any) {
    e.preventDefault();
    // create id to our new task
    this.currentlyAddedTodoId = Date.now();
    const newTitle: string = this.title.value;
    // create new todo according to interface
    const newTodo = {
      userId: this.userId,
      id: Date.now(), // server will response 201 if its ok so id changes to 201
      title: newTitle,
      completed: false,
    }
    // pass to service addtodo method(fake POST request to server)
    this.todosService.addTodo(newTodo)
      // get our data from server
    .subscribe((data: Todo) => {
      // server returns object as a response
      // server returns 201 and changes our id to 201
      this.createdTask = data
      // and change valid id to a new task 
      this.createdTask.id = this.currentlyAddedTodoId;
      // start emit result
      this.addTodo(this.createdTask)
      // clear input
      this.title.setValue('')
    })
  }
}
