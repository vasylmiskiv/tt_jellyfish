import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { CreatetodoComponent } from './components/createtodo/createtodo.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoComponent } from './components/todo/todo.component';
import { MatIconModule } from '@angular/material/icon'
import { TodosinfoComponent } from './components/todosinfo/todosinfo.component';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    CreatetodoComponent,
    TodoComponent,
    TodosinfoComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
