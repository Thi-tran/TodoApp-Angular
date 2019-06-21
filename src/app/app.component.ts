import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  todoArray: object[];
  todoTitle: string;

  constructor() {

  }

  ngOnInit(){
    this.todoTitle = '';
    this.todoArray = [
    ]
  }

  addTodo(value) {
    this.todoArray.push(value);
  }

  deleteItem(todo){
    console.log("Delete item");
    this.todoArray = this.todoArray.filter(item => item!== todo);
  }

  todoSubmit(value:any){ 
    console.log(value)  
    if (value !=="") {
      this.todoArray.push(value.todo)
    }
  }

}
