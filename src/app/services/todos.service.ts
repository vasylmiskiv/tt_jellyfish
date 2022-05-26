import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Todo } from '../models/Todo';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  // init the todos url (or use env)
  todosUrl = `https://jsonplaceholder.typicode.com/todos`;

  // handle error
  private handleError(error: HttpErrorResponse) {
    if(error.status === 0) {
      console.error('Something went wrong...', error.error)
    } else {
      console.error(`Server returned code ${error.status}: ${error.error}`)
    }
  }

  constructor(private http: HttpClient) { }

  // GET get all todos from server with http params
  getTodos() {
    // getting first 20 todos via http params
    let params = new HttpParams().set('_limit', 20);
    // url with params
    const response = `${this.todosUrl}?${params}`;
    // return response
    return this.http.get<Todo[]>(response)
  }

  // DELETE Delte todo by id
  deleteTodo(id:number) {
    // fake todo delete
    const response = `${this.todosUrl}/${id}`
    // return response
    return this.http.delete<Todo>(response)
  }

  // POST add todo 
  addTodo(todo: Todo) {
    // set http options
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.post<Todo>(this.todosUrl, todo, httpOptions)
  }
}
