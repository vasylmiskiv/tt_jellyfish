import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  userId!:number;

  constructor(private todosSerivce: TodosService) { }

  // start get todos
  ngOnInit(): void {
    this.newUserId();
    this.showTodos();
  }

  // generate a new userId
  newUserId() {
    this.userId = new Date().getUTCMilliseconds();
  }

  // init getting todos
  showTodos() {
    this.todosSerivce.getTodos()
      .subscribe((data: Todo[]) => this.todos = data);
  }

  // delete by id
  deleteTodoById(id:number) {
    // delete from the array of todos
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  // add a new todo item
  addNewTask(createdTask: Todo) {
    this.todos = [createdTask, ...this.todos]
  }

  // toggle complete / uncomplete by current id
  toggleCurrentTodo(id: number) {
    const currentTodo = this.todos.find(todo => todo.id === id)
    currentTodo!.completed = currentTodo!.completed ? false : true;
  }
}
