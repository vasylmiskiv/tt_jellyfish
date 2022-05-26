import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import {MatIconModule} from '@angular/material/icon';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todos-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  //get todo item
  @Input() todo!: Todo;
  @Output() idToDelete = new EventEmitter();

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {}

  onDelete(id:number) {
    // fake delete from the server
    this.todosService.deleteTodo(id)
      .subscribe((data) => {
        console.log(data); // servers returns empty object
        // delete 
        console.log(`fake delete from server ID: ${id}`);
        // delete from array
        this.deleteById(id);
      })
  }

  // delete current todo from array
  deleteById(id:number) {
    this.idToDelete.emit(id);
  }
}
