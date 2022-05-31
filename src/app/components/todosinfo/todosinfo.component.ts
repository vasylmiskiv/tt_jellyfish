import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos-todosinfo',
  templateUrl: './todosinfo.component.html',
  styleUrls: ['./todosinfo.component.scss']
})
export class TodosinfoComponent implements OnInit {
  @Input() todos: Todo[] = [];
  constructor() { }

  ngOnInit(): void {}

  // get todos amount
  todosAmount() {
    return this.todos.length;
  }

  // tasks complete
  tasksComplete() {
    let completeAmount = 0;
    this.todos.forEach(todo => todo.completed ? completeAmount += 1 : null);
    return completeAmount;
  }

  // tasks uncomplete
  tasksUncomplete() {
    return this.todosAmount() - this.tasksComplete();
  }
}
